import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from './NavItems';
import { scrollToSection } from '@/utils/smoothScroll';
import Logo from './Logo';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    scrollToSection(sectionId.toLowerCase());
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-6 py-20">
          {/* Logo at top */}
          <div className="mb-12">
            <Logo />
          </div>

          {/* Navigation items */}
          <nav className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-2xl text-white/70 hover:text-white text-left transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact button at bottom */}
          <button
            onClick={() => handleNavClick('contact')}
            className="mt-auto px-6 py-3 bg-[#1DD3B0]/10 rounded-xl border border-[#1DD3B0]/20 text-[#1DD3B0]"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;