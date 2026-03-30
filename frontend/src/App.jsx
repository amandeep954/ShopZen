// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import UserHome from './pages/UserHome';
import Login from './pages/Login'; // Smart Login (Handles both Admin & User)
import Signup from './pages/Signup';
import Wishlist from './pages/Wishlist';
import ProductDetail from './pages/ProductDetail';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        
        {/* Navbar Top Par */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-20 px-4 md:px-8 max-w-7xl mx-auto w-full mb-10">
          <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>

        {/* Footer Bottom Par */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;