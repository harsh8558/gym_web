import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-50 bg-zinc-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src="https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/e89ubjwy0toalapezfmi" alt="Gym Logo" className="h-12" />
            <p className="text-sm text-gray-400">
              Your ultimate fitness destination. Transform your life with our state-of-the-art facilities and expert trainers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/classes" className="hover:text-white transition-colors">Classes</Link></li>
              <li><Link to="/trainers" className="hover:text-white transition-colors">Trainers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500 text-3xl" />
                <span>S.B, plaza Bala ganj, Jal Nigam Rd, near city convent inter College, Thakurganj, Balaganj, Lucknow, Uttar Pradesh 226003y</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-red-500 " />
                <span>+91 9219353574</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                <span>info@EFgym.com</span>
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Find Us</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8821634973524!2d80.88118047522302!3d26.875484676669377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe672b6d0747%3A0xca3c0711c7d29526!2sENERGY%20FITNESS%20GYM!5e0!3m2!1sen!2sin!4v1735659544369!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Energy Fitness Gym. All rights reserved.
            </p>
            <p className="text-sm font-thin text-gray-500">
              Designed & Developed by{' @harsh'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;