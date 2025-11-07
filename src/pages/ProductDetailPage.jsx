import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Truck, RotateCcw, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { products } from '../mockData';
import { useToast } from '../hooks/use-toast';

const ProductDetailPage = ({ onAddToCart, onAddToWishlist, wishlist }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const isInWishlist = wishlist.some(item => item.id === product.id);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    onAddToWishlist(product);
    toast({
      title: isInWishlist ? "Removed from wishlist" : "Added to wishlist!",
      description: isInWishlist 
        ? `${product.name} has been removed from your wishlist.`
        : `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8">
          <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/products')} className="hover:text-primary">Products</button>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-50 mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === idx ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-gray-400">({product.reviews} reviews)</span>
                </div>
              </div>
              <Button variant="outline" size="icon" onClick={handleWishlist}>
                <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-2xl text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <Badge className="bg-green-500">{product.discount}% OFF</Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Product Details */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-4">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Material:</span>
                  <span className="ml-2 font-medium">{product.material}</span>
                </div>
                <div>
                  <span className="text-gray-600">Purity:</span>
                  <span className="ml-2 font-medium">{product.purity}</span>
                </div>
                <div>
                  <span className="text-gray-600">Weight:</span>
                  <span className="ml-2 font-medium">{product.weight}</span>
                </div>
                <div>
                  <span className="text-gray-600">Stock:</span>
                  <Badge variant={product.inStock ? 'default' : 'destructive'}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-xl font-medium w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button 
              size="lg" 
              className="w-full mb-4"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-gray-600">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-gray-600">Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((relatedProduct) => (
              <div key={relatedProduct.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/product/${relatedProduct.id}`)}>
                <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full aspect-square object-cover rounded-lg mb-4" />
                <h3 className="font-medium mb-2 line-clamp-2">{relatedProduct.name}</h3>
                <p className="text-lg font-bold">₹{relatedProduct.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailPage;
