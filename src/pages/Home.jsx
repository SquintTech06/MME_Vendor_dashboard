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

const MakeMyEventVendor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);

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
      title: "Multi-Language Support",
      description: "Reach customers in their preferred language",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
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
    <div className="min-h-screen bg-white relative overflow-x-hidden">
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

      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            <div className="flex items-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Make My Event
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                Features
              </a>
              <a
                href="#vendors"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                For Vendors
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                Success Stories
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-105 font-medium"
              >
                Pricing
              </a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow font-semibold text-sm lg:text-base">
                Join Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            <div className="md:hidden pb-6 pt-2">
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all"
                >
                  Features
                </a>
                <a
                  href="#vendors"
                  className="text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all"
                >
                  For Vendors
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all"
                >
                  Success Stories
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all"
                >
                  Pricing
                </a>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full mx-4 mt-2 font-semibold animate-pulse-glow">
                  Join Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

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
                Join 25,000+ successful vendors who've boosted their revenue by{" "}
                <span className="text-green-600 font-bold">300%+</span> with our
                AI-powered marketplace platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl text-sm sm:text-base font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow flex items-center justify-center">
                  <PlayCircle className="mr-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  Start Earning Today
                  <ArrowRight className="ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group border-2 border-purple-600 text-purple-600 px-6 sm:px-10 py-3 sm:py-5 rounded-2xl text-sm sm:text-base font-bold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Eye className="mr-3 w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Success Stories
                </button>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                    25K+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Active Vendors
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-600">
                    ₹1200Cr+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Revenue Generated
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-600">
                    4.9★
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
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
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2" />
              <span className="text-purple-800 font-semibold text-sm sm:text-base">
                Revolutionary Features
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why 25,000+ Vendors Choose
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience next-generation tools and features designed to maximize
              your business potential
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${feature.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <div className="mb-4">
                  <span
                    className={`inline-block bg-gradient-to-r ${feature.color} bg-clip-text text-transparent text-xs sm:text-sm font-bold mb-2`}
                  >
                    {feature.highlight}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-purple-600 font-semibold hover:text-purple-800 flex items-center text-sm sm:text-base">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-purple-600">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {benefit.description}
                </p>
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
                className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${vendor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`bg-gradient-to-r ${vendor.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {vendor.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">
                        Monthly Earnings
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-gray-900">
                        {vendor.earning}
                      </div>
                      <div
                        className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${vendor.color} bg-clip-text text-transparent`}
                      >
                        {vendor.growth} avg growth
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {vendor.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
                    {vendor.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-gray-50 rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-700 text-center hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${vendor.color} text-white py-3 sm:py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 text-sm sm:text-base`}
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
              <div key={index} className="group relative text-center">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform translate-x-4"></div>
                )}

                <div className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg sm:text-xl font-bold rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {step.step}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-3 sm:px-4 py-1 sm:py-2 mt-auto">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1 sm:mr-2" />
                    <span className="text-green-800 font-semibold text-xs sm:text-sm">
                      {step.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-semibold text-sm sm:text-base">
                Real Success Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Transforming
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                Lives & Businesses
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear from our successful vendors who've achieved extraordinary
              growth
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="text-4xl sm:text-6xl lg:text-8xl mb-4 sm:mb-6">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-600 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
                    {testimonials[currentTestimonial].business}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-green-600">
                        {testimonials[currentTestimonial].revenue}
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm">
                        Monthly Revenue
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                        {testimonials[currentTestimonial].growth}
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm">
                        Growth Rate
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed italic mb-6 sm:mb-8">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  <div className="flex justify-center lg:justify-start space-x-2 sm:space-x-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? "bg-purple-600 scale-125"
                            : "bg-gray-300 hover:bg-purple-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing Plans */}
      {/* <section
        id="pricing"
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold text-sm sm:text-base">
                Transparent Pricing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Growth Plan
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Simple commission-based pricing. You succeed, we succeed. No
              hidden fees, ever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 ${
                  plan.popular
                    ? "border-purple-500 scale-105"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                      {plan.commission}
                    </span>
                    <span className="text-gray-600 ml-2">commission</span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Per successful booking
                  </p>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm sm:text-base"
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-3 flex-shrink-0`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                      : "border-2 border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16 animate-float-delayed"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-90 leading-relaxed">
            Join 25,000+ successful vendors and start your journey to 300%+
            revenue growth today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10">
            <button className="group bg-white text-purple-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <PlayCircle className="mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              Start Your Free Trial
              <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Phone className="mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Call: 1800-123-4567
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm sm:text-base opacity-80">
            <div className="flex items-center">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
                    href="#"
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
  );
};

export default MakeMyEventVendor;
