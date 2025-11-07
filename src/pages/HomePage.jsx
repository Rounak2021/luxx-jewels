import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Truck, RotateCcw, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/button';
import ProductCard from '../components/ProductCard';
import { categories, products, collections, features } from '../mockData';

const HomePage = ({ onAddToWishlist, wishlist }) => {
  const featuredProducts = products.slice(0, 8);

  const getIcon = (iconName) => {
    const icons = {
      Shield: Shield,
      Truck: Truck,
      RotateCcw: RotateCcw,
      CreditCard: CreditCard,
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(245, 230, 211, 0.9), rgba(245, 230, 211, 0.9)), url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&h=600&fit=crop)',
          backgroundColor: '#F5E6D3'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800" style={{fontFamily: 'serif'}}>
            Shakti Collection
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Bright & yellow like the fire within
          </p>
          <Link to="/collections">
            <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6 text-lg">
              SHOP NOW
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <Button variant="ghost" className="rounded-full px-8 bg-white shadow-sm">
              ✨ Gold Jewellery
            </Button>
            <Button variant="ghost" className="rounded-full px-8">
              💎 Silver Jewellery
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className="flex flex-col items-center group"
            >
              <div className="w-full aspect-square rounded-full overflow-hidden mb-3 bg-gradient-to-br from-pink-100 to-purple-100 hover:shadow-lg transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Collection Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Bhai Dooj Edit */}
          <Link to="/collections/bhai-dooj" className="group relative overflow-hidden rounded-2xl h-80">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop"
              alt="The Bhai Dooj Edit"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-white text-3xl font-bold mb-2">The Bhai Dooj Edit</h3>
                <p className="text-white/90">Celebrate the bond of love</p>
              </div>
            </div>
          </Link>

          {/* Two smaller banners */}
          <div className="grid grid-rows-2 gap-6">
            <Link to="/collections/fresh-drop" className="group relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=300&fit=crop"
                alt="Fresh Drop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-transparent flex items-center p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">FRESH DROP!</h3>
                  <p className="text-sm">Shiny & New Arrivals</p>
                </div>
              </div>
            </Link>

            <Link to="/collections/piercing" className="group relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=300&fit=crop"
                alt="Piercing Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50/90 to-transparent flex items-center p-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Piercing Collection</h3>
                  <p className="text-sm">Mix, match, and style</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Best Sellers</h2>
          <Link to="/products" className="flex items-center text-primary hover:underline">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToWishlist={onAddToWishlist}
              isInWishlist={wishlist.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </section>

      {/* Shop by Recipient */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Recipient</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products?for=her" className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop"
                  alt="For Her"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8">
                  <h3 className="text-white text-2xl font-bold">For Her</h3>
                </div>
              </div>
            </Link>
            <Link to="/products?for=him" className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop"
                  alt="For Him"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8">
                  <h3 className="text-white text-2xl font-bold">For Him</h3>
                </div>
              </div>
            </Link>
            <Link to="/products?for=kids" className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop"
                  alt="For Kids"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-8">
                  <h3 className="text-white text-2xl font-bold">For Kids</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center p-6">
              <div className="mb-4 text-primary">
                {getIcon(feature.icon)}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
