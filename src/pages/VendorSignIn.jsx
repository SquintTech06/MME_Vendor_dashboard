import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Building2,
  CheckCircle,
} from "lucide-react";
import Header from "../components/Layout/Header";
import { API_BASE_URL } from "../utils/urls";

const VendorSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch(`${API_BASE_URL}/vendors/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Handle successful login
        console.log("Login successful:", data);
        alert("Login successful!");
        
        // Store authentication data (in a real app, use proper state management)
        // Note: Not using localStorage as per artifact restrictions
        
        // You can implement navigation logic here
        console.log("Redirecting to dashboard...");
        // Example: navigate('/vendor/dashboard');
      } else {
        // Handle login failure
        const errorMessage = data.message || "Invalid credentials. Please try again.";
        setErrors({ submit: errorMessage });
      }
    } catch (error) {
      console.error("Sign in error:", error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setErrors({ submit: "Network error. Please check your connection and ensure the server is running." });
      } else {
        setErrors({ submit: "Sign in failed. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSignIn();
    }
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic
    console.log("Forgot password clicked");
    // Example: navigate('/vendor/forgot-password');
  };

  const handleRegisterNavigation = () => {
    // Implement navigation to registration
    console.log("Navigate to registration");
    // Example: navigate('/vendor/register');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-['Inter']">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center mb-8">
              
                <h1 className="font-['Manrope'] text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Welcome Back
                </h1>
                <p className="font-['Inter'] text-lg text-gray-600 max-w-sm mx-auto">
                  Sign in to your vendor account and manage your business
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="block font-['Inter'] text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg font-['Inter'] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                      errors.email ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Enter your email address"
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 font-['Inter']">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block font-['Inter'] text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`w-full pl-10 pr-12 py-3 border rounded-lg font-['Inter'] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                      errors.password ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1 font-['Inter']">
                    {errors.password}
                  </p>
                )}
              </div>

             

              {/* Error Message */}
              {errors.submit && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm font-['Inter'] flex items-start">
                    <svg className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {errors.submit}
                  </p>
                </div>
              )}

              {/* Sign In Button */}
              <button
                onClick={handleSignIn}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-400 disabled:to-pink-400 disabled:cursor-not-allowed text-white font-['Manrope'] font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

               {/* Remember Me & Forgot Password */}
               <div className="flex items-center justify-center space-x-4">
             
             <button 
               type="button"
               onClick={handleForgotPassword}
               className="font-['Inter'] text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
             >
               Forgot Password?
             </button>
           </div>

              {/* Sign Up Link */}
              <p className="text-center font-['Inter'] text-sm text-gray-600">
                Don't have an account?{" "}
                <button 
                  type="button"
                  onClick={handleRegisterNavigation}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 underline-offset-2 hover:underline"
                >
                  Register Now
                </button>
              </p>

              {/* Trust Indicators */}
              <div className="bg-gray-50 rounded-lg p-4 mt-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-['Inter'] text-xs text-gray-600">
                      Secure Login
                    </span>
                  </div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-['Inter'] text-xs text-gray-600">
                      Trusted Platform
                    </span>
                  </div>
                
                </div>
              </div>

              {/* Additional Help */}
              {/* <div className="text-center">
                <p className="font-['Inter'] text-xs text-gray-500 mb-2">
                  Need help with your account?
                </p>
                <div className="flex items-center justify-center space-x-4 text-xs">
                  <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    Contact Support
                  </button>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    FAQ
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignIn;