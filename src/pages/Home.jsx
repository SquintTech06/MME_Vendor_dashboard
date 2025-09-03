import React, { useState, useEffect } from "react";
import {
  Star,
  MapPin,
  Users,
  Calendar,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  Menu,
  X,
  Camera,
  Music,
  Utensils,
  Home,
  Award,
  PlayCircle,
  ChevronRight,
  Eye,
  Heart,
  Download,
  Globe,
  Smartphone,
  DollarSign,
  BarChart3,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import Header from "../components/Layout/Header";
import { useNavigate } from "react-router-dom";

const MakeMyEventVendor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const navigate = useNavigate();
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Revenue Optimization",
      description:
        "AI-powered pricing suggestions and demand forecasting to maximize your earnings",
      highlight: "+300% Revenue Boost",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Customer Acquisition",
      description:
        "Access to 100,000+ active customers and automated marketing campaigns",
      highlight: "50K+ Monthly Leads",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Smart Management",
      description:
        "Automated scheduling, inventory management, and real-time availability updates",
      highlight: "Zero Double Bookings",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Secure Transactions",
      description:
        "Bank-grade security with instant payouts and fraud protection",
      highlight: "100% Payment Security",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics Dashboard",
      description:
        "Real-time insights, performance metrics, and business intelligence tools",
      highlight: "Advanced Analytics",
      color: "from-teal-400 to-green-500",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Instant Notifications",
      description:
        "Real-time booking alerts, customer messages, and payment confirmations",
      highlight: "Lightning Fast Updates",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const vendorTypes = [
    {
      title: "Venue Owners",
      icon: <Home className="w-8 h-8 sm:w-12 sm:h-12" />,
      items: [
        "Convention Halls",
        "Banquet Halls",
        "Lawns & Gardens",
        "Hotel Venues",
        "Farmhouses",
        "Beach Resorts",
      ],
      earning: "₹50,000 - ₹2,00,000",
      color: "from-purple-500 via-pink-500 to-rose-500",
      growth: "+250%",
    },
    {
      title: "Catering Services",
      icon: <Utensils className="w-8 h-8 sm:w-12 sm:h-12" />,
      items: [
        "Wedding Catering",
        "Corporate Events",
        "Veg/Non-Veg Packages",
        "Custom Menus",
        "Live Counters",
        "Dessert Bars",
      ],
      earning: "₹30,000 - ₹1,50,000",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      growth: "+320%",
    },
    {
      title: "Photography Services",
      icon: <Camera className="w-8 h-8 sm:w-12 sm:h-12" />,
      items: [
        "Wedding Photography",
        "Event Coverage",
        "Drone Services",
        "Live Streaming",
        "Photo Booths",
        "Cinematic Videos",
      ],
      earning: "₹25,000 - ₹1,00,000",
      color: "from-green-500 via-emerald-500 to-cyan-500",
      growth: "+280%",
    },
    {
      title: "Event Services",
      icon: <Music className="w-8 h-8 sm:w-12 sm:h-12" />,
      items: [
        "Decoration",
        "Music & DJ",
        "Lighting",
        "Entertainment",
        "Security",
        "Transportation",
      ],
      earning: "₹15,000 - ₹75,000",
      color: "from-orange-500 via-red-500 to-pink-500",
      growth: "+200%",
    },
  ];

  const stats = [
    {
      number: "25,000+",
      label: "Active Vendors",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "1,50,000+",
      label: "Events Completed",
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "₹1,200Cr+",
      label: "Revenue Generated",
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "4.9★",
      label: "Average Rating",
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "500+",
      label: "Cities Covered",
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Royal Banquet Hall, Mumbai",
      image: "👨‍💼",
      rating: 5,
      text: "Make My Event transformed my business completely! From 2-3 bookings per month to 15-20 bookings. The platform's reach is incredible and the support team is always there to help.",
      revenue: "₹8L/month",
      growth: "+400%",
    },
    {
      name: "Priya Sharma",
      business: "Delicious Catering Services, Delhi",
      image: "👩‍🍳",
      rating: 5,
      text: "The automated booking system and customer management tools have saved me hours of work every day. Plus, the commission structure is very fair and transparent.",
      revenue: "₹5L/month",
      growth: "+350%",
    },
    {
      name: "Amit Patel",
      business: "Capture Moments Photography, Bangalore",
      image: "📸",
      rating: 5,
      text: "I've been able to showcase my portfolio to thousands of potential customers. The quality of leads is excellent and the payment system is super reliable.",
      revenue: "₹3L/month",
      growth: "+280%",
    },
    {
      name: "Neha Gupta",
      business: "Dream Decorators, Pune",
      image: "🎨",
      rating: 5,
      text: "The analytics dashboard helps me understand market trends and optimize my pricing. I've increased my revenue by 300% in just 6 months!",
      revenue: "₹4L/month",
      growth: "+300%",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Quick Registration",
      description:
        "Sign up in under 5 minutes with our streamlined onboarding process. Upload your documents and business details.",
      icon: <Download className="w-6 h-6 sm:w-8 sm:h-8" />,
      time: "5 minutes",
    },
    {
      step: "02",
      title: "Create Stunning Listings",
      description:
        "Use our professional listing builder with photo editing tools, package customization, and pricing optimization.",
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
      time: "30 minutes",
    },
    {
      step: "03",
      title: "Get Verified",
      description:
        "Our quality assurance team reviews your profile within 24 hours to ensure the highest standards.",
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      time: "24 hours",
    },
    {
      step: "04",
      title: "Start Earning",
      description:
        "Go live and start receiving bookings immediately. Track earnings, manage customers, and grow your business.",
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      time: "Instant",
    },
  ];

  const benefits = [
    {
      title: "Zero Marketing Costs",
      description: "We handle all marketing and customer acquisition for you",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Instant Credibility",
      description: "Verified badge and customer reviews build trust instantly",
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Mobile-First Design",
      description: "Manage your business on-the-go with our mobile app",
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      title: "Analytics Dashboard",
      description: "Unlock growth with powerful insights and customizable performance dashboards",
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      commission: "12%",
      features: [
        "Basic listing",
        "Standard support",
        "Mobile app access",
        "Basic analytics",
      ],
      popular: false,
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Professional",
      commission: "10%",
      features: [
        "Premium listing with badges",
        "Priority support",
        "Advanced analytics",
        "Marketing promotions",
        "Custom branding",
        "Bulk upload tools",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      commission: "8%",
      features: [
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced API access",
        "Priority placement",
        "Custom reporting",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <>
      <div className="min-h-screen  relative overflow-x-hidden">
        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          @keyframes pulse-glow {
            0%,
            100% {
              box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(168, 85, 247, 0.6);
            }
          }
          @keyframes gradient-shift {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
          .animate-pulse-glow {
            animation: pulse-glow 3s ease-in-out infinite;
          }
          .animate-gradient {
            animation: gradient-shift 8s ease infinite;
            background-size: 400% 400%;
          }
          .glass-effect {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        `}</style>
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 via-blue-50 to-cyan-50 overflow-hidden">
          {/* Floating background elements */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2" />
                  <span className="text-purple-800 font-semibold text-sm sm:text-base">
                    India's #1 Event Marketplace
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                  Transform Your
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                    {" "}
                    Event Business
                  </span>
                  <br />
                  Into a
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    {" "}
                    Revenue Machine
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                  Join 25,000+ successful vendors who've boosted their revenue
                  by <span className="text-green-600 font-bold">300%+</span>{" "}
                  with our AI-powered marketplace platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <button
                    className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                    onClick={() => navigate("/vendor-registration")}
                  >
                    <PlayCircle className="mr-2 w-4 h-4 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                    Start Earning Today
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button className="group border-2 border-purple-600 text-purple-600 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center">
                    <Eye className="mr-2 w-4 h-4 sm:w-4 sm:h-4" />
                    Watch Success Stories
                  </button>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-purple-600 leading-none">
                      25K+
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 mt-1">
                      Active Vendors
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-pink-600 leading-none">
                      ₹1200Cr+
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 mt-1">
                      Revenue Generated
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-cyan-600 leading-none">
                      4.9★
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 mt-1">
                      Average Rating
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-12 lg:mt-0">
                {/* Floating revenue card */}
                <div className="relative max-w-sm mx-auto lg:max-w-none">
                  <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 animate-float">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                        ₹
                        {stats[currentStat]?.number?.replace("₹", "") ||
                          "2,50,000"}
                      </div>
                      <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">
                        Monthly earnings increase
                      </p>
                      <div className="flex justify-center items-center text-green-500 text-lg sm:text-xl">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                        +400% growth
                      </div>
                    </div>
                  </div>

                  {/* Floating notification cards */}
                  <div className="absolute -top-4 sm:-top-10 -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float-delayed text-xs sm:text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">New booking received!</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-white rounded-2xl shadow-xl p-3 sm:p-4 animate-float text-xs sm:text-sm">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                      <span className="font-medium">
                        Customer loved your service!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 mr-2" />
                <span className="text-purple-800 font-semibold text-xs sm:text-sm">
                  Revolutionary Features
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why 25,000+ Vendors Choose
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  Us
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Experience next-generation tools and features designed to
                maximize your business potential
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                >
                  <div
                    className={`bg-gradient-to-r ${feature.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  <div className="mb-3">
                    <span
                      className={`inline-block bg-gradient-to-r ${feature.color} bg-clip-text text-transparent text-xs font-bold mb-2`}
                    >
                      {feature.highlight}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-purple-600 font-semibold hover:text-purple-800 flex items-center text-xs sm:text-sm">
                      Learn More{" "}
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="mt-8 sm:mt-10 lg:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white backdrop-blur-sm rounded-xl p-5 sm:p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105"

                >
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 text-purple-600">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1.5 text-xs sm:text-sm">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-xs">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vendor Types Showcase */}
        <section id="vendors" className="py-16 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-semibold text-sm sm:text-base">
                  Perfect For Every Business
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Designed For
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  Your Success
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Whatever your event business, we have the tools and audience to
                help you grow exponentially
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {vendorTypes.map((vendor, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${vendor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-5">
                      <div
                        className={`bg-gradient-to-r ${vendor.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {vendor.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">
                          Monthly Earnings
                        </div>
                        <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                          {vendor.earning}
                        </div>
                        <div
                          className={`text-xs font-semibold bg-gradient-to-r ${vendor.color} bg-clip-text text-transparent`}
                        >
                          {vendor.growth} avg growth
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors">
                      {vendor.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                      {vendor.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-gray-50 rounded-lg px-2 py-1.5 sm:px-2.5 sm:py-2 text-xs text-gray-700 text-center hover:bg-purple-50 hover:text-purple-700 transition-colors"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <button
                      className={`w-full bg-gradient-to-r ${vendor.color} text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 text-xs sm:text-sm`}
                      onClick={() => navigate("/vendor-registration")}
                    >
                      Start Your Journey →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8">
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 mr-2" />
                <span className="text-orange-800 font-semibold text-sm sm:text-base">
                  Simple & Fast
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get Started In
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {" "}
                  4 Easy Steps
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From registration to your first booking in less than 24 hours
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
              {howItWorks.map((step, index) => (
               <>
               <div key={index} className="group relative text-center">
  {/* Animated connecting line */}
  {index < howItWorks.length - 1 && (
    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 transform translate-x-4">
      <div className="absolute -right-2 -top-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
    </div>
  )}

  <div className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full flex flex-col overflow-hidden">
    {/* Animated background overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Floating particles effect */}
    <div className="absolute top-4 right-4 w-2 h-2 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-500"></div>
    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 animate-float-delayed transition-opacity duration-500"></div>

    {/* Main icon with enhanced styling */}
    <div className="relative">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
        {step.icon}
      </div>
      {/* Glowing ring effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 mx-auto"></div>
    </div>

    {/* Step number with enhanced styling */}
    <div className="relative">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg sm:text-xl font-bold rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
        {step.step}
      </div>
      {/* Pulsing ring */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-8 h-8 sm:w-10 sm:h-10 mx-auto opacity-0 group-hover:opacity-30 scale-150 animate-ping"></div>
    </div>

    {/* Enhanced title with gradient hover */}
    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
      {step.title}
    </h3>

    {/* Description with better spacing */}
    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-grow">
      {step.description}
    </p>

    {/* Enhanced time badge with progress indicator */}
    <div className="relative">
      <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 mt-auto border border-green-200 group-hover:border-green-300 transition-colors duration-300">
        <div className="relative">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 sm:mr-2" />
          {/* Rotating accent */}
          <div className="absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 border border-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300"></div>
        </div>
        <span className="text-green-800 font-semibold text-xs sm:text-sm">
          {step.time}
        </span>
      </div>
      
      {/* Success checkmark that appears on hover */}
      <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
        </svg>
      </div>
    </div>

    {/* Progress bar at bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
    </div>
  </div>
</div>

<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes float-delayed {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 3s ease-in-out infinite 1.5s;
  }
`}</style>
               </>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 lg:px-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-7 opacity-90 leading-relaxed">
              Join 25,000+ successful vendors and start your journey to 300%+
              revenue growth today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-7">
              <button
                className="group bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                onClick={() => navigate("/vendor-registration")}
              >
                <PlayCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Start Your Free Trial
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Call: 1800-123-4567
              </button> */}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm opacity-80">
              <div className="flex items-center">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span>Instant Setup</span>
              </div>
              <div className="flex items-center">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span>Success Guaranteed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  ✨ Make My Event
                </div>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  India's leading event marketplace connecting vendors with
                  customers nationwide.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">
                  For Vendors
                </h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>
                    <a
                      href="/vendor-registration"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Join as Vendor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Vendor Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">
                  Support
                </h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      24/7 Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Training
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">
                  Company
                </h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
              <p className="text-gray-400 text-sm sm:text-base">
                © 2025 Make My Event. All rights reserved. Transforming events,
                one vendor at a time.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MakeMyEventVendor;
