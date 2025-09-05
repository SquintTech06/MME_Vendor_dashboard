import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // Only persist auth data
}

const rootReducer = combineReducers({
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Custom middleware for API error handling
const errorHandlingMiddleware = (store) => (next) => (action) => {
  // Handle rejected async actions globally
  if (action.type?.endsWith('/rejected')) {
    console.error('API Error:', action.payload)
    // You can dispatch notification actions here
  }
  
  return next(action)
}

// Custom middleware for authentication
const authMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  
  // Automatically logout on 401 errors
  if (action.payload?.status === 401) {
    store.dispatch({ type: 'auth/logout' })
  }
  
  return result
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
    .concat(errorHandlingMiddleware)
    .concat(authMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)