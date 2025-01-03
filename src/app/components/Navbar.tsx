"use client"
import React, { useState } from "react"


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

export default function Navbar(){

    const [isClick,setisClick] = useState(false);
    const [, setCartCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [] = useState('');

    
    const handleLikeToggle = () => {
        setIsLiked(!isLiked);
      };
      
      const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1);  // Using setCartCount to update the state
      };
    
   const toggleNavbar =():void =>{
    setisClick(!isClick);
   }




    return(
        <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-black"><b>EXCLUSIVE</b></a>
              </div>
            </div>
      
            {/* Center - Navigation Links */}
            <div className="hidden md:flex ml-4 space-x-4">
              <a href="/" className="text-black hover:bg-white hover:text-black rounded-lg p-2">Home</a>
              <a href="/" className="text-black hover:bg-white hover:text-black rounded-lg p-2">Contact</a>
              <a href="/" className="text-black hover:bg-white hover:text-black rounded-lg p-2">About</a>
              <a href="/" className="text-black hover:bg-white hover:text-black rounded-lg p-2">Page</a>
              <a href="/" className="text-black hover:bg-white hover:text-black rounded-lg p-2">My Work</a>
              <a href="/" className="text-black hover:bg-white hover:text-black rounded-lg p-2">Certificate</a>
              <a href="/" className="text-black hover:bg-white hover:text-black rounded-lg p-2">Services</a>
            </div>
      
            {/* Right side - Actions (like, cart, search) */}
            <div className="flex items-center space-x-4 ml-auto">
              {/* Like Button with Heart Icon */}
              <button className={`like-btn ${isLiked ? 'liked' : ''}`} onClick={handleLikeToggle}>
                <i className={`fas fa-heart ${isLiked ? 'filled' : 'empty'}`}></i>
                <span>{isLiked ? 'Liked' : 'Like'}</span>
              </button>
      
              {/* Shopping Cart */}
              <div className="cart">
                <button onClick={handleAddToCart}>🛒 Cart (0)</button>
              </div>
      
              {/* Search Bar */}
              <input type="text" placeholder="Search products..." className="border rounded p-2 w-48" />
            </div>
      
            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button className="p-2 rounded-md text-black" onClick={toggleNavbar}>
                {isClick ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
      
          {/* Mobile Menu Dropdown */}
          {isClick && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="text-black block hover:bg-black hover:text-black rounded-lg p-2">Home</a>
                <a href="/" className="text-black block hover:bg-black hover:text-black rounded-lg p-2">Contact</a>
                <a href="/" className="text-black block hover:bg-black hover:text-black rounded-lg p-2">About</a>
                <a href="/" className="text-black block hover:bg-black hover:text-black rounded-lg p-2">Page</a>
                <a href="/" className="text-black block hover:bg-black hover:text-black rounded-lg p-2">My Work</a>
                <a href="/" className="text-black block hover:bg-black hover:text-black rounded-lg p-2">Certificate</a>
                <a href="/" className="text-black block hover:bg-black hover:text-black rounded-lg p-2">Services</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
    )
}