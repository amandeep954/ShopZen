// src/pages/Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ShieldAlert } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // SMART LOGIN LOGIC (Backend banne ke baad ye API se aayega)
    if (email === 'admin@shopzen.com' && password === 'admin123') {
      alert('Welcome back, Admin!');
      navigate('/admin-dashboard'); // Admin ko uske dashboard par bhejo
    } else {
      alert('Login Successful!');
      navigate('/profile'); // Normal user ko uske profile par bhejo
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[75vh]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-100 relative overflow-hidden">
        
        {/* Top Decorative Line */}
        <div className={`absolute top-0 left-0 w-full h-1.5 ${email === 'admin@shopzen.com' ? 'bg-red-500' : 'bg-blue-600'} transition-colors duration-300`}></div>

        <div className="text-center mb-8 mt-2">
          {/* Email type karte hi icon aur text change hoga taaki Admin ko feel aaye */}
          {email === 'admin@shopzen.com' ? (
            <div className="flex flex-col items-center">
              <ShieldAlert className="w-10 h-10 text-red-500 mb-2" />
              <h2 className="text-3xl font-bold text-gray-800">Admin Portal</h2>
              <p className="text-red-500 mt-1 text-sm font-medium">Secured Access</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <ShoppingCart className="w-10 h-10 text-blue-600 mb-2" />
              <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
              <p className="text-gray-500 mt-1">Sign in to your ShopZen account</p>
            </div>
          )}
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
              placeholder="you@example.com" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
              placeholder="••••••••" 
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline font-medium">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className={`w-full text-white font-semibold py-3 rounded-lg transition ${email === 'admin@shopzen.com' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            Sign In
          </button>
        </form>
        
        <p className="text-center mt-6 text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-600 font-medium hover:underline">Sign up</Link>
        </p>

        {/* Developer Hint - Baad mein isko hata dena */}
        <div className="mt-8 p-3 bg-gray-50 border border-gray-200 rounded text-xs text-gray-500 text-center">
          <strong>Testing Hint:</strong> <br/>
          Use <code>admin@shopzen.com</code> & <code>admin123</code> for Admin Dashboard. <br/>
          Use any other email for User Dashboard.
        </div>

      </div>
    </div>
  );
}