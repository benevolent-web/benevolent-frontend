"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const DrawerNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="p-0">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-full sm:w-72">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-semibold">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "block py-2 px-4 text-lg hover:bg-gray-100 rounded-md transition-colors",
                      item.label === 'Portfolio' && "text-gray-500"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4 border-t">
            <Button className="w-full" variant="outline">Start a Project</Button>
          </div>
          <div className="p-4 text-sm text-gray-500">
            <div>Benevolent Apps</div>
            <div>admin@benevolentapps.com</div>
            <div>(555) 123-1234</div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DrawerNavigation;