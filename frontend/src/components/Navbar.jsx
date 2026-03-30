// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for products...");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <ShoppingCart className="w-8 h-8" />
            ShopZen
          </Link>
          
          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <form onSubmit={handleSearch} className="w-full relative">
              <input 
                type="text" 
                placeholder="Search products, brands..." 
                className="w-full bg-gray-100 text-gray-800 rounded-full py-2.5 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all border border-transparent focus:border-blue-200"
              />
              <button type="submit" className="absolute right-4 top-2.5 text-gray-500 hover:text-blue-600">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex space-x-6 items-center">
            
            <Link to="/wishlist" className="text-gray-600 hover:text-red-500 transition relative flex items-center">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
                2
              </span>
            </Link>

            <Link to="/cart" className="text-gray-600 hover:text-blue-600 transition relative flex items-center">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
                0
              </span>
            </Link>

            <Link to="/profile" className="text-gray-600 hover:text-blue-600 flex items-center gap-1 font-medium transition">
              <User className="w-5 h-5" /> Profile
            </Link>

            <Link to="/login" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-medium shadow-sm hover:shadow-md">
              Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="text-gray-600 relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Link>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 transition-all duration-300 ease-in-out">
          <div className="px-4 pt-4 pb-6 space-y-5">
            
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-gray-100 rounded-lg py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
                <Search className="w-5 h-5" />
              </button>
            </form>

            <div className="flex flex-col space-y-4">
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-gray-700 font-medium hover:text-blue-600 px-2">
                Home
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/wishlist" className="flex items-center gap-3 text-gray-700 font-medium hover:text-red-500 px-2">
                <Heart className="w-5 h-5" /> My Wishlist (2)
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/profile" className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600 px-2">
                <User className="w-5 h-5" /> My Profile
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/login" className="bg-blue-600 text-white text-center py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
                Login / Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}