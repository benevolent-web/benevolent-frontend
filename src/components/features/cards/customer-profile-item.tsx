"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface CustomerProfileItemProps {
  userProfile: string;
  title: string;
  subtitle: string;
  listItems: string[];
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  reversed?: boolean;
}

const CustomerProfileItem: React.FC<CustomerProfileItemProps> = ({
  userProfile,
  title,
  subtitle,
  listItems,
  ctaText,
  ctaLink,
  imageSrc,
  reversed = false
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const oppositeParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxItem = parallaxRef.current;
    const oppositeParallaxItem = oppositeParallaxRef.current;
    const parallaxIntensity = reversed ? -10 : 10;

    if (!parallaxItem || !oppositeParallaxItem) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(parallaxItem,
        {
          xPercent: parallaxIntensity,
          opacity: 0.5
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: parallaxItem,
            start: "top bottom-=100",
            toggleActions: "play none none reset"
          }
        });

      gsap.fromTo(oppositeParallaxItem,
        {
          xPercent: -parallaxIntensity,
          opacity: 0.5
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: oppositeParallaxItem,
            start: "top bottom-=100",
            toggleActions: "play none none reset"
          }
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={cn(
      "flex flex-col items-center justify-between p-8 md:p-16 overflow-hidden",
      reversed ? "md:flex-row-reverse" : "md:flex-row"
    )}>
      <div className={cn("w-full md:w-1/2 space-y-6",
        reversed && "md:pl-16"
      )} ref={oppositeParallaxRef}>
        <p className="text-sm uppercase tracking-wider">{userProfile}</p>
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-xl">{subtitle}</p>
        <ul className="space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button className="mt-4" asChild><Link href={ctaLink}>{ctaText}</Link></Button>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <div ref={parallaxRef} className="relative h-96 overflow-hidden">
          <img
            src={imageSrc}
            alt="Parallax Image"
            className="absolute top-0 left-0 w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerProfileItem;