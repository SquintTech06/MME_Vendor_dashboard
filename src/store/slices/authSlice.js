import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";

// API Service functions
const authAPI = {
  login: async (credentials) => {
    try {
      const { data } = await api.post('/vendors/login', credentials);
      return data;
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      throw new Error(message);
    }
  },

  profile: async () => {
    try {
      const { data } = await api.get('/vendors/profile');
      return data;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to fetch profile';
      throw new Error(message);
    }
  },
};

// Async thunks
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(credentials);

      // Store tokens
      if (response.data.token) {
        localStorage.setItem("accessToken", response.data.token);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.status || 400,
      });
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { accessToken } = getState().auth;
      if (!accessToken) throw new Error("No access token available");

      const profile = await authAPI.profile();
      return profile.data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.status || 400,
      });
    }
  }
);

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  lastLoginTime: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      localStorage.removeItem("accessToken");
      return initialState;
    },
    updateTokens: (state, action) => {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      if (refreshToken) {
        state.refreshToken = refreshToken;
      }
      localStorage.setItem("accessToken", accessToken);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.vendor;
        state.accessToken = action.payload.token;
        state.isAuthenticated = true;
        state.lastLoginTime = new Date().toISOString();
        state.error = null;
        if (action.payload.accessToken) localStorage.setItem('accessToken', action.payload.token);
       
      })
      
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // Get Profile cases
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { clearError, logout, updateTokens, setLoading } =
  authSlice.actions;

// Selectors
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectAccessToken = (state) => state.auth.accessToken;

export default authSlice.reducer;
