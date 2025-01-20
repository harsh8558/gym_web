import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

// Lazy load icons
const Icons = lazy(() => import('react-icons/fa').then(module => ({
  default: {
    FaFacebook: module.FaFacebook,
    FaTwitter: module.FaTwitter,
    FaInstagram: module.FaInstagram,
    FaLinkedin: module.FaLinkedin,
    FaMapMarkerAlt: module.FaMapMarkerAlt,
    FaPhone: module.FaPhone,
    FaEnvelope: module.FaEnvelope
  }
})));

// Separate components for better code splitting
const SocialIcon = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
    <Icon className="text-2xl" />
  </a>
);

const MapEmbed = () => (
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
);

const Footer = () => {
  return (
    <footer className="relative z-50 bg-zinc-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="https://res.cloudinary.com/dxmu1ohyk/image/upload/f_auto,q_auto/v1/gym_web/e89ubjwy0toalapezfmi" 
              alt="Gym Logo" 
              className="h-12"
              loading="lazy"
            />
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
            <Suspense fallback={<div>Loading...</div>}>
              <Icons>
                {icons => (
                  <div className="space-y-3">
                    <p className="flex items-center gap-2">
                      <icons.FaMapMarkerAlt className="text-red-500 text-3xl" />
                      <span>S.B, Plaza, Jalnigam Road, near City Convent Inter College, Balaganj, Lucknow,226003</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <icons.FaPhone className="text-red-500" />
                      <span>+91 9219353574</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <icons.FaEnvelope className="text-red-500" />
                      <span>info@EFgym.com</span>
                    </p>
                  </div>
                )}
              </Icons>
            </Suspense>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Find Us</h3>
            <Suspense fallback={<div className="w-full h-48 bg-gray-800 animate-pulse rounded-lg" />}>
              <MapEmbed />
            </Suspense>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Suspense fallback={<div>Loading...</div>}>
              <Icons>
                {icons => (
                  <div className="flex space-x-6">
                    <SocialIcon Icon={icons.FaFacebook} href="https://facebook.com" />
                    <SocialIcon Icon={icons.FaTwitter} href="https://twitter.com" />
                    <SocialIcon Icon={icons.FaInstagram} href="https://instagram.com" />
                    <SocialIcon Icon={icons.FaLinkedin} href="https://linkedin.com" />
                  </div>
                )}
              </Icons>
            </Suspense>
            <p className="text-sm text-gray-400">
              {new Date().getFullYear()} Energy Fitness Gym. All rights reserved.
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