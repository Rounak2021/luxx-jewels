import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, MapPin, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Navbar = ({ cartCount, wishlistCount }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white text-center py-2 text-sm">
        Flat 20% on Silver Jewellery. Use: SILVER20
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-tight">LuxeJewels</h1>
            </Link>

            {/* Delivery Location */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Where to Deliver?</p>
                <p className="text-xs font-medium">Update Delivery Pincode</p>
              </div>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder='Search "Pure Gold Jewellery"'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </form>

            {/* Right Icons */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/stores" className="flex flex-col items-center text-xs hover:text-primary transition-colors">
                <User className="w-5 h-5 mb-1" />
                <span>STORES</span>
              </Link>
              <Link to="/account" className="flex flex-col items-center text-xs hover:text-primary transition-colors">
                <User className="w-5 h-5 mb-1" />
                <span>ACCOUNT</span>
              </Link>
              <Link to="/wishlist" className="flex flex-col items-center text-xs hover:text-primary transition-colors relative">
                <Heart className="w-5 h-5 mb-1" />
                <span>WISHLIST</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="flex flex-col items-center text-xs hover:text-primary transition-colors relative">
                <ShoppingCart className="w-5 h-5 mb-1" />
                <span>CART</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center justify-center space-x-8 py-3 text-sm">
            <Link to="/products?category=all" className="hover:text-primary transition-colors">Shop by Category</Link>
            <Link to="/products?type=lab-diamonds" className="hover:text-primary transition-colors">Gold with Lab Diamonds</Link>
            <Link to="/gift-card" className="hover:text-primary transition-colors">Gift Card</Link>
            <Link to="/gift-store" className="hover:text-primary transition-colors">Gift Store</Link>
            <Link to="/products?category=mens" className="hover:text-primary transition-colors">Men's Jewellery</Link>
            <Link to="/collections" className="hover:text-primary transition-colors">Latest Collections</Link>
            <Link to="/about" className="hover:text-primary transition-colors">More at LuxeJewels</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-4 py-4 space-y-4">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    variant="ghost"
                    className="absolute right-0 top-0"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </form>
              <Link to="/products" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Shop by Category</Link>
              <Link to="/products?type=lab-diamonds" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Gold with Lab Diamonds</Link>
              <Link to="/gift-card" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Gift Card</Link>
              <Link to="/products?category=mens" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Men's Jewellery</Link>
              <Link to="/collections" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Latest Collections</Link>
              <div className="flex gap-4 pt-4 border-t">
                <Link to="/wishlist" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Heart className="w-5 h-5" />
                  <span>Wishlist ({wishlistCount})</span>
                </Link>
                <Link to="/cart" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart ({cartCount})</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
