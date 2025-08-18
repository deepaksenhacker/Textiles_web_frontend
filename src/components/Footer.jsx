import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">🧵 TextileCo</h2>
          <p className="text-sm">
            Crafting premium textiles with tradition and innovation. 
            Quality fabrics for fashion & lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Pages</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="/company-profile" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="/products" className="hover:text-pink-500 transition">Products</a></li>
            <li><a href="/contact" className="hover:text-pink-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500 transition text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition text-xl"><FaInstagram /></a>
            <a href="#" className="hover:text-pink-500 transition text-xl"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-pink-500 transition text-xl"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Pali Textile PVT Company LTD. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
