import React from 'react';
import { Logos } from '~/components/logo';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 pt-12 pb-4 text-sm min-h-[360px] flex bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="mx-auto px-4 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 flex-grow">
          <div className="flex flex-col justify-between h-full pr-12 md:border-r border-b-secondary">
            <div>
              <Logos.logomark className="h-[6rem] w-[6rem]" />
            </div>
            <div>
              <h1 className="font-pt-serif text-3xl mb-6">Benevolent</h1>
            </div>
            <div>
              <p className="text-secondary">
                Crafting resilient web software that scales from MVP to enterprise, with expertise spanning traditional and Web3 technologies.
              </p>
            </div>
            {/* <div className="hidden md:block w-px bg-gray-600 dark:bg-gray-300 self-stretch"></div> */}
          </div>
          <div className="flex flex-col flex-grow justify-between col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 flex-grow justify-between">
              <div className="flex flex-col md:gap-12 justify-between">
                <h3 className="font-semibold mb-2">PRODUCT</h3>
                <ul className="space-y-2 flex-grow mb-12">
                  <li><a href="#" className="hover:underline">Request a Quote</a></li>
                  <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
                  <li><a href="#" className="hover:underline">Careers</a></li>
                </ul>
              </div>
              <div className="flex flex-col md:gap-12 justify-between">
                <h3 className="font-semibold mb-2">COMPANY</h3>
                <ul className="space-y-2 flex-grow mb-12">
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Case Studies</a></li>
                  <li><a href="#" className="hover:underline">Support</a></li>
                  <li><a href="#" className="hover:underline">Careers</a></li>
                </ul>
              </div>
              <div className="flex flex-col md:gap-12 justify-between">
                <h3 className="font-semibold mb-2">SOCIAL</h3>
                <ul className="space-y-2 flex-grow mb-12">
                  <li><a href="#" className="hover:underline">LinkedIn</a></li>
                  <li><a href="#" className="hover:underline">X</a></li>
                  <li><a href="#" className="hover:underline">Instagram</a></li>
                  <li><a href="#" className="hover:underline">Facebook</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full gap-6">
              <p className="text-secondary">&copy; {new Date().getFullYear()} Benevolent SA de CV. All Rights Reserved.</p>
              <div>
                <a href="#" className="text-secondary hover:underline">Privacy &amp; Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;