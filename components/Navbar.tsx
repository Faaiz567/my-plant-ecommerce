'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to toggle mobile menu

  return (
    <nav className=" text-white p-4 w-full bg-gradient-to-tl from-green-800 via-zinc-700 to-neutral-400">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Green E-Shop</h1>

        {/* Hamburger Icon for small screens */}
        <div
          className="block md:hidden cursor-pointer mr-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>

        {/* Navbar links */}
        <div
          id="Nav"
          className={`flex items-center space-x-4 md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}
        >
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
