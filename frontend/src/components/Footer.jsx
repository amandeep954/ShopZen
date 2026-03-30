// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <ShoppingCart className="w-7 h-7 text-blue-500" />
              ShopZen
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Aapki pasand ka sabse behtarin shopping destination. Premium products, fast delivery, aur secure payments ka wada.
            </p>
            <div className="flex gap-4">
              {/* Brand icons hata kar general icons laga diye hain error fix karne ke liye */}
              <a href="#" className="text-gray-400 hover:text-blue-500 transition"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/wishlist" className="hover:text-blue-400 transition">My Wishlist</Link></li>
              <li><Link to="/admin" className="hover:text-blue-400 transition">Admin Panel</Link></li>
              <li><Link to="/login" className="hover:text-blue-400 transition">Login / Register</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Track Order</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Shipping Information</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Sector 62, Noida, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>support@shopzen.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ShopZen. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <span className="cursor-pointer hover:text-white transition">Terms</span>
            <span className="cursor-pointer hover:text-white transition">Privacy</span>
            <span className="cursor-pointer hover:text-white transition">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}