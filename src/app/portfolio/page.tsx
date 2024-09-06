"use client";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Code, Server, Smartphone, Database, ArrowRight } from 'lucide-react';
import AnimatedCard from '~/components/features/cards/animated-card';
import { getTailwindBreakpoints } from '~/lib/utilities/tailwindBreakpoints'
import { Title } from "~/components/ui/title";
import { Subtitle } from "~/components/ui/subtitle";
import CaseStudyCard from '~/components/features/cards/case-study-card';

gsap.registerPlugin(ScrollTrigger);

const caseStudies: TCaseStudyCardProps[] = [
  {
    title: 'Paideia: DAO Management Software',
    description: 'From UX/UI prototypes to full app development with extensive web3 infrastructure',
    link: '/portfolio/paideia',
    imageUrl: '/images/case-studies/paideia.png'
  },
  {
    title: 'DeFi Platform Development',
    description: 'Built a decentralized finance platform, enabling users to lend, borrow, and trade cryptocurrencies.',
    link: '/portfolio/',
    imageUrl: '/images/case-studies/abc.png'
  },
  {
    title: 'NFT Marketplace',
    description: 'Designed and developed a user-friendly NFT marketplace for digital artists and collectors.',
    link: '/portfolio/',
    imageUrl: '/images/case-studies/abc.png'
  },
  {
    title: 'Supply Chain Tracking dApp',
    description: 'Created a decentralized application for real-time tracking and verification of supply chain data.',
    link: '/portfolio/',
    imageUrl: '/images/case-studies/abc.png'
  },
  {
    title: 'Smart Contract Audit',
    description: 'Conducted comprehensive audits of smart contracts for various DeFi and NFT projects.',
    link: '/portfolio/',
    imageUrl: '/images/case-studies/abc.png'
  },
  {
    title: 'Legacy System Web3 Integration',
    description: 'Modernized a traditional banking system by integrating blockchain-based identity verification.',
    link: '/portfolio/',
    imageUrl: '/images/case-studies/abc.png'
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".case-study-card");

        const parallaxIntensity = 50;

        cards.forEach((card, index) => {
          const direction = index % 2 === 0 ? 1 : -1;

          gsap.fromTo(card,
            {
              yPercent: direction * -parallaxIntensity
            },
            {
              yPercent: direction * parallaxIntensity,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            });
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [isMobile]);

  return (
    <div className="container px-4 py-16" ref={sectionRef}>
      <div className="mb-24">
        <Title>Porfolio</Title>
        <Subtitle>A retrospective of our most impactful collaborations</Subtitle>
      </div>

      <div className="container mx-auto px-4 lg:max-w-[60vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {caseStudies.map((cardProps, index) => (
            <div key={`case-study-${index}`} className="case-study-card">
              <CaseStudyCard cardProps={cardProps} />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}