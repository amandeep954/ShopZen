// src/pages/ProductDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetail() {
  // URL se product ki ID nikalne ke liye
  const { id } = useParams();

  // Abhi ke liye hum dummy data use kar rahe hain. 
  // Asli app mein aap yahan axios.get(`/api/products/${id}`) karke data fetch karenge.
  const product = {
    id: id,
    name: "Premium Wireless Headphones",
    price: 2999,
    description: "Experience high-quality sound with these premium wireless headphones. Features active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions perfect for long listening sessions.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics"
  };

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-6 font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2 p-8 bg-gray-50 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="max-w-full h-auto rounded-xl shadow-md mix-blend-multiply" />
        </div>

        {/* Product Info & Buy Options */}
        <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">{product.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-3xl font-extrabold text-gray-900 mb-6">₹{product.price}</p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Truck className="w-5 h-5 text-green-500"/> Free Delivery</div>
            <div className="flex items-center gap-2"><RotateCcw className="w-5 h-5 text-blue-500"/> 7 Days Return</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-purple-500"/> 1 Year Warranty</div>
          </div>

          <button className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
}