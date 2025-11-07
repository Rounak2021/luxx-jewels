import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/button';

const WishlistPage = ({ wishlist, onRemoveFromWishlist, onAddToCart }) => {
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Heart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Save your favorite items here!</p>
          <Button onClick={() => navigate('/products')}>Start Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">My Wishlist ({wishlist.length})</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                </Link>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={() => onRemoveFromWishlist(product.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>

              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium mb-2 line-clamp-2 hover:text-primary">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => {
                    onAddToCart({ ...product, quantity: 1 });
                    onRemoveFromWishlist(product.id);
                  }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Move to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
