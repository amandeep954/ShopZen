// src/pages/UserDashboard.jsx
import { useState } from 'react';
import { User, Package, MapPin, Settings, LogOut, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();

  // Dummy Orders Data
  const orders = [
    { id: "ORD-9876", date: "28 Mar 2026", total: 2999, status: "Delivered", items: 1 },
    { id: "ORD-9877", date: "15 Mar 2026", total: 4500, status: "Processing", items: 2 },
  ];

  const handleLogout = () => {
    alert("Logged out successfully.");
    navigate('/login');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[75vh] bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden my-6">
      
      {/* Sidebar Navigation */}
      <div className="md:w-64 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md">
            AD
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Aman Deep</h2>
            <p className="text-sm text-gray-500">Premium Member</p>
          </div>
        </div>
        
        <nav className="flex-1 space-y-2">
          <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition font-medium ${activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
            <div className="flex items-center gap-3"><User className="w-5 h-5" /> My Profile</div>
            {activeTab === 'profile' && <ChevronRight className="w-4 h-4" />}
          </button>
          
          <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition font-medium ${activeTab === 'orders' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
            <div className="flex items-center gap-3"><Package className="w-5 h-5" /> My Orders</div>
            {activeTab === 'orders' && <ChevronRight className="w-4 h-4" />}
          </button>
          
          <button onClick={() => setActiveTab('addresses')} className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition font-medium ${activeTab === 'addresses' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /> Saved Addresses</div>
            {activeTab === 'addresses' && <ChevronRight className="w-4 h-4" />}
          </button>
        </nav>

        <button onClick={handleLogout} className="mt-auto w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition text-gray-600 hover:text-red-600 font-medium">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 md:p-10">
        
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h3>
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                  <p className="text-gray-800 font-medium border-b border-gray-100 pb-2">Aman Deep</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                  <p className="text-gray-800 font-medium border-b border-gray-100 pb-2">amandeep***@gmail.com</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                  <p className="text-gray-800 font-medium border-b border-gray-100 pb-2">+91 98765 43210</p>
                </div>
              </div>
              <button className="bg-blue-50 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
                Edit Profile
              </button>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Order History</h3>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold text-gray-800">{order.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                        {order.status === 'Delivered' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">Ordered on {order.date} • {order.items} Items</p>
                  </div>
                  <div className="text-right flex flex-col sm:items-end">
                    <p className="text-lg font-bold text-gray-900 mb-2">₹{order.total}</p>
                    <button className="text-sm text-blue-600 font-medium hover:underline">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === 'addresses' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Saved Addresses</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                + Add New
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 relative">
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Default</span>
                <h4 className="font-bold text-gray-800 mb-1">Home</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Sector 62, Near IT Park<br/>
                  Noida, Uttar Pradesh 201309<br/>
                  India
                </p>
                <div className="flex gap-3 text-sm font-medium">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}