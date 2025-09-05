import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  User,
  LogOut,
  Settings,
  Calendar,
  MapPin,
  Phone,
  Star,
  LayoutDashboard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/hooks/useRedux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Get auth state from Redux
  const { isAuthenticated, user, logout } = useAuth();

  // Handle scroll effect with hide/show functionality
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 20);

      // Header hide/show logic
      if (currentScrollY < 100) {
        // Always show header at top of page
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigationItems = [
    { label: "Features", href: "/#features" },
    { label: "For Vendors", href: "/#vendors" },
    { label: "How It Works", href: "/#how-it-works" },
    ...(isAuthenticated ? [] : [{ label: "Sign In", href: "/vendor-signin" }]),
  ];

  const handleLogin = () => {
    navigate("/vendor-signin");
  };

  const handleVendorSignup = () => {
    navigate("/vendor-registration");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsUserMenuOpen(false);
      navigate("/");
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {/* Contact Info Bar */}
      {/* <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 text-center font-['Inter'] text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Visakhapatnam, Andhra Pradesh</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4" />
            <span>1000+ Happy Customers</span>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <nav
        className={`mx-auto max-w-[1100px] px-3 sm:px-4 bg-white/95 backdrop-blur-md shadow-lg sticky top-3 z-50 border border-purple-100 transition-all duration-300
    ${isScrolled ? "shadow-xl" : ""} 
    ${
      isHeaderVisible
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0"
    } 
    ${isMenuOpen ? "rounded-2xl" : "rounded-full"}
  `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-['Manrope']">
                Make My Event
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-105 font-medium font-['Inter']"
                >
                  {item.label}
                </a>
              ))}

              {!isAuthenticated ? (
                <button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-sm lg:text-base font-['Manrope']"
                  onClick={handleVendorSignup}
                >
                  Join Now
                </button>
              ) : (
                <div className="flex items-center space-x-4">
                  {/* Dashboard Button */}
                  <button
                    onClick={handleDashboard}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm lg:text-base font-['Manrope'] flex items-center space-x-2"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Dashboard</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="text-gray-700 hover:text-purple-600 transition-colors p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 pt-2 mobile-menu">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all font-['Inter']"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                {!isAuthenticated ? (
                  <button
                    onClick={() => {
                      handleVendorSignup();
                      setIsMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full mx-4 mt-2 font-semibold font-['Manrope']"
                  >
                    Join Now
                  </button>
                ) : (
                  <div className="space-y-3 border-t border-gray-100 pt-4">
                         <button
                        onClick={() => {
                          handleDashboard();
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-3 py-4 font-['Inter'] text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200"
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        <span className="font-['Manrope'] font-semibold">Dashboard</span>
                      </button>

                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
