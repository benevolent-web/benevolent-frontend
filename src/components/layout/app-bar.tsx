import React from 'react';
import { DarkModeToggle } from '../ui/dark-mode-toggle';
import DrawerNavigation from './drawer-navigation';
import { Logos } from '~/components/logo';

const AppBar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex items-center">
        <Logos.logomark className="h-[3rem] w-[3rem]" />
        {/* <img src="/api/placeholder/32/32" alt="Logo" className="h-8 w-8 mr-2" /> */}
        <span className="font-pt-serif text-3xl pl-2 hidden md:block ">Benevolent</span>
      </div>

      {/* Right side: Menu and Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <DrawerNavigation />
      </div>
    </div>
  );
};

export default AppBar;