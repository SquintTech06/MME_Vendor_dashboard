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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Mock user state - replace with your auth logic
  const [user, setUser] = useState(null); // null = not logged in
  // const [user, setUser] = useState({ name: 'John Doe', type: 'customer' }); // logged in customer
  // const [user, setUser] = useState({ name: 'Royal Banquet', type: 'vendor' }); // logged in vendor

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
    { label: "Sign In", href: "/vendor-signin" },

    // { label: 'Success Stories', href: '#testimonials' },
    // { label: 'Pricing', href: '#pricing' }
  ];

  const handleLogin = () => {
    // Navigate to login page
    console.log("Navigate to login");
  };

  const handleVendorSignup = () => {
    navigate("/vendor-registration");
  };

  const handleLogout = () => {
    setUser(null);
    setIsUserMenuOpen(false);
    // Clear auth token and redirect
    console.log("Logout user");
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
        className={`mx-auto max-w-[1100px] px-3 sm:px-4 bg-white/95 backdrop-blur-md shadow-lg sticky top-3 z-50 border border-purple-100 
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
            <div className="flex items-center" onClick={() => navigate("/")}>
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
            
              {!user ? (
                <button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold text-sm lg:text-base font-['Manrope']"
                  onClick={handleVendorSignup}
                >
                  Join Now
                </button>
              ) : (
                <div className="relative user-menu">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-['Manrope'] font-medium text-gray-900 text-sm">
                        {user.name}
                      </p>
                      <p className="font-['Inter'] text-xs text-purple-600 capitalize">
                        {user.type}
                      </p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>

                  {/* User Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-purple-100">
                      <div className="py-2">
                        <a
                          href="/dashboard"
                          className="flex items-center space-x-3 px-4 py-3 font-['Inter'] text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        >
                          <Settings className="w-4 h-4" />
                          <span>Dashboard</span>
                        </a>
                        <a
                          href="/profile"
                          className="flex items-center space-x-3 px-4 py-3 font-['Inter'] text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        >
                          <User className="w-4 h-4" />
                          <span>My Profile</span>
                        </a>
                        {user.type === "customer" && (
                          <a
                            href="/bookings"
                            className="flex items-center space-x-3 px-4 py-3 font-['Inter'] text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                          >
                            <Calendar className="w-4 h-4" />
                            <span>My Bookings</span>
                          </a>
                        )}
                        {user.type === "vendor" && (
                          <a
                            href="/vendor/orders"
                            className="flex items-center space-x-3 px-4 py-3 font-['Inter'] text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                          >
                            <Star className="w-4 h-4" />
                            <span>My Orders</span>
                          </a>
                        )}
                        <hr className="my-2 border-gray-100" />
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-4 py-3 font-['Inter'] text-sm text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  console.log("Menu toggled");
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

                {!user ? (
                  <>
               
                    <button
                      onClick={() => {
                        handleVendorSignup();
                        setIsMenuOpen(false);
                      }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full mx-4 mt-2 font-semibold font-['Manrope']"
                    >
                      Join Now
                    </button>
                  </>
                ) : (
                  <div className="px-4 space-y-3 border-t border-gray-100 pt-4">
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-['Manrope'] font-medium text-gray-900">
                          {user.name}
                        </p>
                        <p className="font-['Inter'] text-sm text-purple-600 capitalize">
                          {user.type}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <a
                        href="/dashboard"
                        className="flex items-center space-x-3 px-3 py-2 font-['Inter'] text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200"
                      >
                        <Settings className="w-4 h-4" />
                        <span>Dashboard</span>
                      </a>
                      <a
                        href="/profile"
                        className="flex items-center space-x-3 px-3 py-2 font-['Inter'] text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200"
                      >
                        <User className="w-4 h-4" />
                        <span>My Profile</span>
                      </a>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 px-3 py-2 font-['Inter'] text-sm text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
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
