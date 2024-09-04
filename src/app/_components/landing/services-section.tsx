"use client";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Code, Server, Smartphone, Database, ArrowRight } from 'lucide-react';
import AnimatedCard from '~/components/features/cards/animated-card';
// import { getTailwindBreakpoints } from '~/lib/utilities/tailwindBreakpoints'

gsap.registerPlugin(ScrollTrigger);

// TODO: Update these sections
const services: TCardProps[] = [
  {
    title: 'Web3 Integrations',
    description: 'Seamlessly incorporate blockchain technology into your existing digital infrastructure.',
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: 'Decentralized Applications',
    description: 'Create powerful, user-friendly applications that run on blockchain networks.',
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: 'Server Architecture',
    description: 'Design and implement robust server architectures that ensure scalability and performance.',
    icon: <Server className="w-8 h-8" />,
  },
  {
    title: 'Web & Mobile Apps',
    description: 'Craft beautiful, intuitive applications for both web and mobile platforms.',
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: 'Backend Systems',
    description: 'Build reliable and efficient backend systems that power your applications.',
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: 'Legacy System Integration',
    description: 'Modernize your existing infrastructure by integrating Web3 capabilities.',
    icon: <ArrowRight className="w-8 h-8" />,
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  /* 
   * Parallax effect
   */

  // const breakpoints = getTailwindBreakpoints()

  // const getColumns = () => {
  //   if (typeof window !== 'undefined') {
  //     if (window.innerWidth >= breakpoints['lg']) return 3
  //     if (window.innerWidth >= breakpoints['md']) return 2
  //     return 1
  //   }
  //   return 3 // Default to 3 columns for SSR
  // }

  // const [columns, setColumns] = useState(getColumns())

  // useEffect(() => {
  //   const handleResize = () => {
  //     const newColumns = getColumns()
  //     if (newColumns !== columns) {
  //       setColumns(newColumns)
  //     }
  //   }

  //   window.addEventListener('resize', handleResize)
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [columns])

  /* 
   * End parallax effect
   */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");

      const parallaxIntensity = 20


      cards.forEach((card, index) => {

        /* 
        * Parallax effect
        */

        // let direction;
        // if (columns === 1) {
        //   direction = 0; // No parallax for single column
        // } else if (columns === 2) {
        //   direction = index % 2 === 0 ? 1 : -1; // Alternate for 2 columns
        // } else {
        //   direction = index % 3 === 0 ? 1 : (index % 3 === 2 ? -1 : 0); // 3 columns
        // }

        // gsap.fromTo(card,
        //   {
        //     yPercent: direction * -parallaxIntensity
        //   },
        //   {
        //     yPercent: direction * parallaxIntensity,
        //     ease: "none",
        //     scrollTrigger: {
        //       trigger: sectionRef.current,
        //       start: "top bottom",
        //       end: "bottom top",
        //       scrub: true
        //     }
        //   });

        /* 
        * End parallax effect
        */

        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [
    // columns
  ]);

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((cardProps, index) => (
            <div key={`service-${index}`} className="service-card">
              <AnimatedCard cardProps={cardProps} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;