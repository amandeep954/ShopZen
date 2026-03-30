// src/pages/AdminDashboard.jsx
import { useState } from 'react';
// Yahan maine ShieldAlert add kar diya hai 👇
import { LayoutDashboard, PackagePlus, Users, ShoppingCart, LogOut, UploadCloud, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Jab API connect karenge tab use hoga

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out securely.");
    navigate('/admin-login');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Yahan Axios ki POST request aayegi jo humne backend part mein discuss ki thi
    alert("Product processing... (Connect backend to save)");
    e.target.reset();
    setImagePreview(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden my-6">
      
      {/* Sidebar */}
      <div className="md:w-64 bg-gray-900 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-2">
          <ShieldAlert className="w-6 h-6" /> Admin Panel
        </h2>
        
        <nav className="flex-1 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
            <LayoutDashboard className="w-5 h-5" /> Overview
          </button>
          <button onClick={() => setActiveTab('add-product')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'add-product' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
            <PackagePlus className="w-5 h-5" /> Add Product
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition text-gray-400 cursor-not-allowed">
            <ShoppingCart className="w-5 h-5" /> Orders (Soon)
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition text-gray-400 cursor-not-allowed">
            <Users className="w-5 h-5" /> Customers (Soon)
          </button>
        </nav>

        <button onClick={handleLogout} className="mt-auto flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition text-red-400 hover:text-white">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-50">
        
        {/* TAB 1: Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Store Overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-gray-500 text-sm font-semibold uppercase mb-2">Total Sales</div>
                <div className="text-3xl font-bold text-gray-800">₹1,24,500</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-gray-500 text-sm font-semibold uppercase mb-2">Active Products</div>
                <div className="text-3xl font-bold text-blue-600">45</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-gray-500 text-sm font-semibold uppercase mb-2">Total Users</div>
                <div className="text-3xl font-bold text-green-600">128</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Add Product Form */}
        {activeTab === 'add-product' && (
          <div className="max-w-2xl bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">List a New Product</h3>
            <form onSubmit={handleAddProduct} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input name="productName" type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Smart Watch" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                  <input name="price" type="number" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="1999" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select name="category" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>Electronics</option>
                  <option>Wearables</option>
                  <option>Gaming</option>
                  <option>Accessories</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition bg-gray-50">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="mx-auto h-32 object-cover rounded-md shadow-sm" />
                    ) : (
                      <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                    )}
                    <div className="flex text-sm text-gray-600 justify-center mt-4">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="productImage" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" required />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                Publish Product
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}