// import React, { useEffect } from "react";
// import { useAppSelector, useAuth } from "../../store/hooks/useRedux";

// const Dashboard = () => {
//   const { logout } = useAuth();

//   const { user:profile,lastLoginTime } = useAppSelector((state) => state.auth);

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-600">
//                 Welcome, {profile?.contactDetails?.name ? profile.contactDetails.name : "User"}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//         <div className="bg-white overflow-hidden shadow rounded-lg">
//           <div className="px-4 py-5 sm:p-6">
//             <h3 className="text-lg leading-6 font-medium text-gray-900">
//               User Information
//             </h3>
//             <div className="mt-5">
//               <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
//                 <div>
//                   <dt className="text-sm font-medium text-gray-500">Name</dt>
//                   <dd className="mt-1 text-sm text-gray-900">
//                     {profile?.contactDetails?.name|| "N/A"}
//                   </dd>
//                 </div>
//                 <div>
//                   <dt className="text-sm font-medium text-gray-500">Email</dt>
//                   <dd className="mt-1 text-sm text-gray-900">
//                     {profile?.contactDetails?.email || "N/A"}
//                   </dd>
//                 </div>
//                 <div>
//                   <dt className="text-sm font-medium text-gray-500">Role</dt>
//                   <dd className="mt-1 text-sm text-gray-900">
//                     {profile?.role  || "User"}
//                   </dd>
//                 </div>
//                 <div>
//                   <dt className="text-sm font-medium text-gray-500">
//                     Last Login
//                   </dt>
//                   <dd className="mt-1 text-sm text-gray-900">
//                     {lastLoginTime
//                       ? new Date(lastLoginTime).toLocaleString()
//                       : "N/A"}
//                   </dd>
//                 </div>
//               </dl>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { useAppSelector, useAuth } from "../../store/hooks/useRedux";

import {
  BarChart3,
  Calendar,
  Users,
  DollarSign,
  Star,
  TrendingUp,
  Bell,
  Settings,
  Menu,
  X,
  Home,
  Camera,
  Utensils,
  Music,
  Package,
  MessageSquare,
  FileText,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  Eye,
  Edit,
  Plus,
  ArrowUp,
  ArrowDown,
  Filter,
  Search,
  Download,
  Upload,
  CheckCircle,
  AlertCircle,
  XCircle,
  CreditCard,
  Zap,
  Target,
  Award,
  Globe,
  Smartphone,
  Heart,
  Share2,
  ExternalLink
} from "lucide-react";

const VendorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");
  const { logout } = useAuth();

  const { user,lastLoginTime } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    logout();
  };


  // Mock dashboard data
  const dashboardStats = [
    {
      title: "Monthly Revenue",
      value: "₹8,50,000",
      change: "+32%",
      positive: true,
      icon: <DollarSign className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Total Bookings",
      value: "145",
      change: "+18%",
      positive: true,
      icon: <Calendar className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "New Customers",
      value: "28",
      change: "+25%",
      positive: true,
      icon: <Users className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      positive: true,
      icon: <Star className="w-5 h-5" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const recentBookings = [
    {
      id: "BK001",
      customer: "Amit & Priya Wedding",
      date: "2025-01-15",
      amount: 150000,
      status: "confirmed",
      type: "Wedding"
    },
    {
      id: "BK002",
      customer: "Corporate Annual Meet",
      date: "2025-01-20",
      amount: 85000,
      status: "pending",
      type: "Corporate"
    },
    {
      id: "BK003",
      customer: "Birthday Celebration",
      date: "2025-01-18",
      amount: 35000,
      status: "completed",
      type: "Birthday"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "booking",
      message: "New booking request from Sharma Family",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      type: "payment",
      message: "Payment of ₹1,50,000 received",
      time: "5 hours ago",
      unread: true
    },
    {
      id: 3,
      type: "review",
      message: "New 5-star review received",
      time: "1 day ago",
      unread: false
    }
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart3 className="w-5 h-5" /> },
    { id: "bookings", label: "Bookings", icon: <Calendar className="w-5 h-5" /> },
    { id: "listings", label: "My Listings", icon: <Package className="w-5 h-5" /> },
    { id: "customers", label: "Customers", icon: <Users className="w-5 h-5" /> },
    { id: "revenue", label: "Revenue", icon: <DollarSign className="w-5 h-5" /> },
    { id: "reviews", label: "Reviews", icon: <Star className="w-5 h-5" /> },
    { id: "messages", label: "Messages", icon: <MessageSquare className="w-5 h-5" /> },
    { id: "analytics", label: "Analytics", icon: <TrendingUp className="w-5 h-5" /> },
    { id: "profile", label: "Profile", icon: <Settings className="w-5 h-5" /> }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderDashboardView = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      {/* <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white rounded-2xl p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, {user.contactDetails.name}! 👋</h1>
            <p className="text-purple-100 mb-4">Your business is growing! Here's your performance summary.</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {user.location}
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                {user.businessType}
              </div>
              {user.isVerified && (
                <div className="flex items-center bg-green-500 px-2 py-1 rounded-full">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </div>
              )}
            </div>
          </div>
       
        </div>
      </div> */}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className={`bg-gradient-to-r ${stat.color} text-white p-3 rounded-xl`}>
                {stat.icon}
              </div>
              <div className={`flex items-center text-sm font-semibold ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.positive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
            <button 
              onClick={() => setCurrentView('bookings')}
              className="text-purple-600 hover:text-purple-800 font-semibold text-sm"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{booking.customer}</div>
                  <div className="text-sm text-gray-600">{booking.date} • {booking.type}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">₹{booking.amount.toLocaleString()}</div>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
            <div className="flex items-center space-x-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {notifications.filter(n => n.unread).length}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className={`flex items-start space-x-3 p-3 rounded-xl transition-colors ${notification.unread ? 'bg-blue-50' : 'bg-gray-50'}`}>
                <div className={`p-2 rounded-full ${notification.unread ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                  {notification.type === 'booking' && <Calendar className="w-4 h-4" />}
                  {notification.type === 'payment' && <DollarSign className="w-4 h-4" />}
                  {notification.type === 'review' && <Star className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-600">{notification.time}</p>
                </div>
                {notification.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => setCurrentView('listings')}
            className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group"
          >
            <Plus className="w-8 h-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-purple-600">Add Listing</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group">
            <Upload className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-green-600">Upload Photos</span>
          </button>
          <button 
            onClick={() => setCurrentView('messages')}
            className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
          >
            <MessageSquare className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-blue-600">Messages</span>
          </button>
          <button 
            onClick={() => setCurrentView('analytics')}
            className="flex flex-col items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors group"
          >
            <BarChart3 className="w-8 h-8 text-orange-600 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-orange-600">View Reports</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderBookingsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Bookings Management</h1>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{booking.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-purple-600 hover:text-purple-800">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return renderDashboardView();
      case "bookings":
        return renderBookingsView();
      case "listings":
        return (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">My Listings</h2>
            <p className="text-gray-600">Manage your venue and service listings here.</p>
          </div>
        );
      case "customers":
        return (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Management</h2>
            <p className="text-gray-600">View and manage your customer relationships.</p>
          </div>
        );
      case "revenue":
        return (
          <div className="text-center py-12">
            <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Revenue Analytics</h2>
            <p className="text-gray-600">Track your earnings and financial performance.</p>
          </div>
        );
      case "reviews":
        return (
          <div className="text-center py-12">
            <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
            <p className="text-gray-600">Manage and respond to customer feedback.</p>
          </div>
        );
      case "messages":
        return (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Messages</h2>
            <p className="text-gray-600">Communicate with your customers.</p>
          </div>
        );
      case "analytics":
        return (
          <div className="text-center py-12">
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Analytics</h2>
            <p className="text-gray-600">Detailed insights about your business performance.</p>
          </div>
        );
      case "profile":
        return (
          <div className="text-center py-12">
            <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Settings</h2>
            <p className="text-gray-600">Manage your account and business settings.</p>
          </div>
        );
      default:
        return renderDashboardView();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 ">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-['Manrope']">
                Make My Event
              </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {user.contactDetails.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.business_name}</p>
              <p className="text-xs text-gray-500 truncate">{user.contactDetails.name}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setCurrentView(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    currentView === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors" onClick={handleLogout}>
            <ExternalLink className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 mr-4"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900 capitalize">
                {currentView === "dashboard" ? "Dashboard" : currentView}
              </h1>
            </div>

          
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
};

export default VendorDashboard;