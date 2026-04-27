import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-8 mt-10">

      {/* TOP SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-orange-400 mb-3">🍽️ Foodie</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Fresh food from the best local restaurants, delivered to your door in minutes.
          </p>
          <div className="flex gap-3 mt-4">
            <FaInstagram className="text-gray-400 hover:text-orange-400 cursor-pointer text-lg transition-colors" />
            <FaFacebookF className="text-gray-400 hover:text-orange-400 cursor-pointer text-lg transition-colors" />
            <FaTwitter className="text-gray-400 hover:text-orange-400 cursor-pointer text-lg transition-colors" />
            <FaLinkedinIn className="text-gray-400 hover:text-orange-400 cursor-pointer text-lg transition-colors" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-3 text-sm">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-white cursor-pointer transition-colors">Press</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold text-white mb-3 text-sm">Help</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer transition-colors">Track Order</li>
            <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-white cursor-pointer transition-colors">Refund Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3 text-sm">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📧 support@foodie.in</li>
            <li>📞 +91 7909322992</li>
            <li>📍 Bhopal, India</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <p>© 2026 Foodie, Inc. All Rights Reserved.</p>
        <div className="flex gap-5">
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
