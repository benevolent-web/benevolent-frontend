"use client";
import React, { useRef, useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Layers, Code, Server, Smartphone, Database, ArrowRight } from 'lucide-react';

type TService = {
  title: string;
  description: string;
  icon: React.JSX.Element;
}

const services: TService[] = [
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

const ServiceCard = ({ key, service }: { key: string, service: TService }) => {
  const [animationParent] = useAutoAnimate();

  return (
    <div
      ref={animationParent}
      key={key}
      className="bg-card p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center mb-4">
        {service.icon}
        <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
      </div>
      <p>{service.description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const [animationParent] = useAutoAnimate();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div ref={animationParent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={`service-${index}`} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;