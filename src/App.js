import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./hooks/use-toast";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const { toast } = useToast();

  // Load cart and wishlist from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + (product.quantity || 1) }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  const handleAddToWishlist = (product) => {
    const existingItem = wishlist.find(item => item.id === product.id);
    if (existingItem) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      toast({
        title: "Removed from wishlist",
        description: "Item has been removed from your wishlist.",
      });
    } else {
      setWishlist([...wishlist, product]);
      toast({
        title: "Added to wishlist!",
        description: "Item has been added to your wishlist.",
      });
    }
  };

  const handleRemoveFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
        <Routes>
          <Route
            path="/"
            element={<HomePage onAddToWishlist={handleAddToWishlist} wishlist={wishlist} />}
          />
          <Route
            path="/products"
            element={<ProductsPage onAddToWishlist={handleAddToWishlist} wishlist={wishlist} />}
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetailPage
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                wishlist={wishlist}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <WishlistPage
                wishlist={wishlist}
                onRemoveFromWishlist={handleRemoveFromWishlist}
                onAddToCart={handleAddToCart}
              />
            }
          />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
