import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VendorRegistration from "./pages/VendorRegistration";
import VendorSignIn from "./pages/VendorSignIn";

import { persistor, store } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import AuthWrapper from "./components/AuthWrapper";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useAuth } from "./store/hooks/useRedux";
import { selectAuth } from "./store/slices/authSlice";

function App() {
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
    </div>
  );

  const AppInitializer = ({ children }) => {
    const dispatch = useDispatch();
    const { accessToken, isAuthenticated } = useSelector(selectAuth);

    useEffect(() => {
      if (accessToken && !isAuthenticated) {
        dispatch(getProfile());
      }
    }, [accessToken, isAuthenticated, dispatch]);

    return <>{children}</>;
  };
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
        <AppInitializer>
          <Router>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <main className="flex-grow container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/vendor-registration"
                    element={<VendorRegistration />}
                  />
                  <Route path="/vendor-signin" element={<VendorSignIn />} />
                  VendorSignIn
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/dashboard"
                    element={
                      <AuthWrapper>
                        <Dashboard />
                      </AuthWrapper>
                    }
                  />
                </Routes>
              </main>
            </div>
          </Router>
        </AppInitializer>
      </PersistGate>
    </Provider>
  );
}

export default App;
