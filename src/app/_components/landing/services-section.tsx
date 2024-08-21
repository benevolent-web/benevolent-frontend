"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Code, Server, Smartphone, Database, ArrowRight } from 'lucide-react';
import AnimatedCard from '~/components/features/cards/animated-card';

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

  // TODO: add parralax scrolling
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((cardProps, index) => (
            <AnimatedCard key={`service-${index}`} cardProps={cardProps} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;