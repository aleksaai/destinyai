import React from 'react';
import Logo from '../../layout/Logo';

const FooterBottom = () => {
  return (
    <div className="pt-8 border-t border-zinc-800">
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
        {/* Copyright text */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} DestinyMedia GmbH. All rights reserved.
        </p>

        {/* Mobile: Logo */}
        <div className="md:hidden">
          <Logo />
        </div>

        {/* Desktop: Legal links */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="/privacy" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a 
            href="/impressum" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Impressum
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;