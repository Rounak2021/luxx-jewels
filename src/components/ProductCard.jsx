import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProductCard = ({ product, onAddToWishlist, isInWishlist }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <Badge className="absolute top-2 left-2 z-10 bg-red-500 hover:bg-red-600">
          {product.discount}% OFF
        </Badge>
      )}

      {/* Wishlist Button */}
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
        onClick={(e) => {
          e.preventDefault();
          onAddToWishlist(product);
        }}
      >
        <Heart
          className={`w-4 h-4 ${isInWishlist ? 'fill-red-500 text-red-500' : ''}`}
        />
      </Button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Link to={`/product/${product.id}`}>
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
