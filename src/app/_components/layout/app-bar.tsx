"use client";
import React, { useState, useEffect } from 'react';
import { DarkModeToggle } from '~/components/ui/dark-mode-toggle';
import DrawerNavigation from '~/app/_components/layout/drawer-navigation';
import { Logos } from '~/components/logo';

const AppBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Logos.logomark className="h-[3rem] w-[3rem]" />
          <span className="font-pt-serif text-3xl pl-2 hidden md:block">Benevolent</span>
        </div>
        {/* Right side: Menu and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <DrawerNavigation />
        </div>
      </div>
    </div>
  );
};

export default AppBar;