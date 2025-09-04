import React, { useState } from "react";
import axios from "axios";
import {
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  User,
  Building2,
} from "lucide-react";
import Header from "../components/Layout/Header";
import { API_BASE_URL } from "../utils/urls";

const VendorRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    business_name: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    vendorType: "venue",
  });
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [vendorData, setVendorData] = useState(null);

 
  const vendorTypes = [
    {
      value: "venue",
      label: "Venue",
      icon: Building2,
      desc: "Wedding halls, banquet halls, outdoor venues",
    },
    {
      value: "caterer",
      label: "Caterer",
      icon: User,
      desc: "Food and catering services",
    },
    {
      value: "decorator",
      label: "Decorator",
      icon: User,
      desc: "Event decoration and styling",
    },
    {
      value: "photographer",
      label: "Photographer",
      icon: User,
      desc: "Photography and videography",
    },
  ];

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.business_name.trim())
      newErrors.business_name = "Business name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (!formData.vendorType)
      newErrors.vendorType = "Please select vendor type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateStep1()) return;

    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post(`${API_BASE_URL}/vendors/register`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        vendorType: formData.vendorType,
        business_name: formData.business_name,
      });

      if (response.data.success) {
        // Store vendor ID for later use
        setVendorData({ vendorId: response.data.data.vendorId });
        setStep(2);
      }
    } catch (error) {
      console.error("Registration error:", error);

      if (error.response) {
        // Server responded with error status
        const errorMessage =
          error.response.data.message ||
          "Registration failed. Please try again.";
        setErrors({ submit: errorMessage });
      } else if (error.request) {
        // Network error
        setErrors({ submit: "Network error. Please check your connection." });
      } else {
        // Other error
        setErrors({ submit: "Registration failed. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!formData.phone) {
      setErrors({
        otp: "Phone number not found. Please restart registration.",
      });
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post(`${API_BASE_URL}/vendors/resend-otp`, {
        phone: formData.phone,
      });

      if (response.data.success) {
        // Show success message without alert for better UX
        setErrors({ otp: "" }); // Clear any existing errors
        // You could show a toast notification here instead
        console.log("OTP resent successfully");
      }
    } catch (error) {
      console.error("Resend OTP error:", error);

      if (error.response) {
        const errorMessage =
          error.response.data.message ||
          "Failed to resend OTP. Please try again.";
        setErrors({ otp: errorMessage });
      } else {
        setErrors({ otp: "Network error. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      setErrors({ otp: "Please enter OTP" });
      return;
    }

    if (otp.length !== 6) {
      setErrors({ otp: "OTP must be 6 digits" });
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post(`${API_BASE_URL}/vendors/verify-otp`, {
        phone: formData.phone,
        otp: otp,
      });

      if (response.data.success) {
        // Store vendor data and token
        setVendorData(response.data.data);

        // Store token in memory (you might want to use a more sophisticated state management)
        // Note: Not using localStorage as per artifact restrictions
        console.log("Vendor verified:", response.data.data);

        setStep(3);
      }
    } catch (error) {
      console.error("OTP verification error:", error);

      if (error.response) {
        const errorMessage =
          error.response.data.message || "Invalid OTP. Please try again.";
        setErrors({ otp: errorMessage });
      } else if (error.request) {
        setErrors({ otp: "Network error. Please try again." });
      } else {
        setErrors({ otp: "Verification failed. Please try again." });
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

  const renderStep1 = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-['Manrope'] text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Join Our Vendor Network
        </h1>
        <p className="font-['Inter'] text-lg text-gray-600 max-w-md mx-auto">
          Create your account to start partnering with us and grow your business
        </p>
      </div>

      {/* Vendor Type Selection */}
      <div className="mb-6">
        <label className="block font-['Inter'] text-sm font-medium text-gray-700 mb-4">
          What type of vendor are you? *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {vendorTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.value}
                onClick={() => handleInputChange("vendorType", type.value)}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-blue-300 ${
                  formData.vendorType === type.value
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <Icon
                    className={`w-6 h-6 mt-0.5 ${
                      formData.vendorType === type.value
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  />
                  <div className="flex-1">
                    <h3
                      className={`font-['Manrope'] font-semibold ${
                        formData.vendorType === type.value
                          ? "text-blue-900"
                          : "text-gray-900"
                      }`}
                    >
                      {type.label}
                    </h3>
                    <p
                      className={`font-['Inter'] text-sm mt-1 ${
                        formData.vendorType === type.value
                          ? "text-blue-700"
                          : "text-gray-600"
                      }`}
                    >
                      {type.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {errors.vendorType && (
          <p className="text-red-500 text-sm mt-1 font-['Inter']">
            {errors.vendorType}
          </p>
        )}
      </div>

      {/* Business Name */}
      <div>
        <label className="block font-['Inter'] text-sm font-medium text-gray-700 mb-2">
          Business Name *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={formData.business_name}
            onChange={(e) => handleInputChange("business_name", e.target.value)}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg font-['Inter'] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
              errors.name ? "border-red-300" : "border-gray-300"
            }`}
            placeholder="Enter your business name"
          />
        </div>
        {errors.business_name && (
          <p className="text-red-500 text-sm mt-1 font-['Inter']">
            {errors.business_name}
          </p>
        )}
      </div>
      <div>
        <label className="block font-['Inter'] text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg font-['Inter'] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
              errors.name ? "border-red-300" : "border-gray-300"
            }`}
            placeholder="Enter your full name"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 font-['Inter']">
            {errors.name}
          </p>
        )}
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
            className={`w-full pl-10 pr-4 py-3 border rounded-lg font-['Inter'] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
              errors.email ? "border-red-300" : "border-gray-300"
            }`}
            placeholder="Enter your email address"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 font-['Inter']">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block font-['Inter'] text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              handleInputChange(
                "phone",
                e.target.value.replace(/\D/g, "").slice(0, 10)
              )
            }
            className={`w-full pl-10 pr-4 py-3 border rounded-lg font-['Inter'] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
              errors.phone ? "border-red-300" : "border-gray-300"
            }`}
            placeholder="Enter 10-digit phone number"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1 font-['Inter']">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block font-['Inter'] text-sm font-medium text-gray-700 mb-2">
          Password *
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className={`w-full pr-12 pl-4 py-3 border rounded-lg font-['Inter'] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
              errors.password ? "border-red-300" : "border-gray-300"
            }`}
            placeholder="Create a strong password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
        <p className="text-xs text-gray-500 mt-1 font-['Inter']">
          Must be at least 8 characters long
        </p>
      </div>

      {errors.submit && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm font-['Inter']">{errors.submit}</p>
        </div>
      )}

      {/* Register Button */}
      <button
        onClick={handleRegister}
        disabled={loading}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-400 disabled:to-pink-400 text-white font-['Manrope'] font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Creating Account...</span>
          </>
        ) : (
          <>
            <span>Create Account</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center font-['Inter'] text-sm text-gray-600">
        Already have an account?{" "}
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          Sign In
        </button>
      </p>
    </div>
  );

  const renderStep2 = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
        <Phone className="w-10 h-10 text-blue-600" />
      </div>

      <div>
        <h2 className="font-['Manrope'] text-2xl font-bold text-gray-900 mb-3">
          Verify Your Phone Number
        </h2>
        <p className="font-['Inter'] text-gray-600">
          We've sent a 6-digit OTP to <strong>{formData.phone}</strong>
        </p>
      </div>

      <div className="max-w-sm mx-auto">
        <input
          type="text"
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
            if (errors.otp) setErrors((prev) => ({ ...prev, otp: "" }));
          }}
          className={`w-full px-4 py-3 text-center text-xl font-mono border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 tracking-widest ${
            errors.otp ? "border-red-300" : "border-gray-300"
          }`}
          placeholder="000000"
          maxLength="6"
        />
        {errors.otp && (
          <p className="text-red-500 text-sm mt-2 font-['Inter']">
            {errors.otp}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <button
          onClick={handleVerifyOtp}
          disabled={loading || otp.length !== 6}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-400 disabled:to-pink-400 text-white font-['Manrope'] font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Verifying...</span>
            </div>
          ) : (
            "Verify OTP"
          )}
        </button>

        <button
          onClick={handleResendOtp}
          disabled={loading}
          className="w-full text-blue-600 hover:text-blue-700 font-['Inter'] font-medium py-2 disabled:text-blue-400"
        >
          {loading ? "Sending..." : "Resend OTP"}
        </button>
      </div>

      <button
        onClick={() => setStep(1)}
        className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-700 font-['Inter'] mx-auto"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Registration</span>
      </button>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>

      <div>
        <h2 className="font-['Manrope'] text-2xl font-bold text-gray-900 mb-3">
          Registration Successful!
        </h2>
        <p className="font-['Inter'] text-gray-600 max-w-md mx-auto">
          Your account has been created and verified successfully. You can now
          complete your profile and start receiving bookings.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div className="text-left">
            <h4 className="font-['Manrope'] font-semibold text-yellow-800 mb-1">
              Account Under Review
            </h4>
            <p className="font-['Inter'] text-sm text-yellow-700">
              Your account is currently pending approval. Our team will review
              your information and activate your account within 24-48 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => {
            // Navigate to dashboard/profile completion
            // You can implement navigation logic here
            console.log("Navigating to profile completion...");
            console.log("Vendor data:", vendorData);
          }}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-['Manrope'] font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
        >
          Complete Your Profile
        </button>

        <button
          onClick={() => {
            // Navigate to login
            console.log("Navigating to login...");
          }}
          className="w-full text-blue-600 hover:text-blue-700 font-['Inter'] font-medium py-2"
        >
          Go to Login
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-['Inter']">
      <Header />
      <div className="container mx-auto mt-10">
        <div className="max-w-md mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="font-['Inter'] text-sm text-gray-600">
                Step {step} of 3
              </span>
              <span className="font-['Inter'] text-sm text-gray-600">
                {Math.round((step / 3) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegistration;
