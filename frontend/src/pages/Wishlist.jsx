import { Trash2, ShoppingBag } from 'lucide-react';

export default function Wishlist() {
  // Dummy wishlist data
  const wishlistItems = [
    { id: 1, name: "Premium Wireless Headphones", price: 2999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 2, name: "Smart Fitness Watch", price: 1999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
  ];

  return (
    <div className="pb-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Wishlist ❤️</h1>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              <p className="text-xl font-bold text-blue-600 mt-1 mb-4">₹{item.price}</p>
              
              <div className="mt-auto flex gap-2">
                <button className="flex-1 bg-gray-900 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition text-sm">
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
                <button className="px-3 py-2 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}