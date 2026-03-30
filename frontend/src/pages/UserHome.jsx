// src/pages/UserHome.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
// import axios from 'axios'; // Backend connect hone ke baad ise use karenge

export default function UserHome() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories list
  const categories = ['All', 'Electronics', 'Wearables', 'Gaming', 'Accessories'];

  // Dummy data (Baad mein isko useEffect aur axios se replace karenge)
  const dummyProducts = [
    { id: 1, name: "Premium Wireless Headphones", price: 2999, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, name: "Smart Fitness Watch", price: 1999, category: "Wearables", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 3, name: "Mechanical Keyboard", price: 4500, category: "Gaming", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" },
    { id: 4, name: "Gaming Mouse", price: 1200, category: "Gaming", image: "https://images.unsplash.com/photo-1527814050087-379381547969?w=500&q=80" },
    { id: 5, name: "Laptop Sleeve", price: 899, category: "Accessories", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80" },
  ];

  useEffect(() => {
    // Abhi ke liye dummy data set kar rahe hain
    setProducts(dummyProducts);
  }, []);

  // Category ke hisaab se products filter karna
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pb-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Explore Products</h1>
      
      {/* Categories Section */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedCategory === category 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col">
            
            {/* Image par click karne se Product page par jayega */}
            <Link to={`/product/${product.id}`} className="relative h-56 overflow-hidden block">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </Link>
            
            <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-red-50 hover:text-red-500 transition shadow-sm z-10">
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
            </button>
            
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-xs font-semibold text-blue-500 uppercase mb-1">{product.category}</span>
              <Link to={`/product/${product.id}`}>
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1 hover:text-blue-600 transition">{product.name}</h3>
              </Link>
              <p className="text-xl font-bold text-gray-900 mt-2 mb-4">₹{product.price}</p>
              
              {/* Buy Now Button bhi Product page par le jayega */}
              <Link to={`/product/${product.id}`} className="mt-auto w-full bg-gray-900 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <ShoppingBag className="w-4 h-4" /> Buy Now
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* Agar category mein koi product nahi hai */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">Oops! No products found in {selectedCategory} category.</p>
        </div>
      )}
    </div>
  );
}