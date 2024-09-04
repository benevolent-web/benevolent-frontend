import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface MousePosition {
  x: number;
  y: number;
}

gsap.registerPlugin(ScrollTrigger);

// TODO: Improve mouseover effects, add drop shadow, etc. 

const AnimatedCard: React.FC<{ cardProps: TCardProps }> = ({ cardProps }) => {
  const { icon, description, title } = cardProps;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="flex group bg-none h-full">
      <div className="absolute left-[calc(50%-45px)] z-[1] h-[7px] w-[90px] rounded-[2px] top-[-3px] bg-primary"></div>
      {/* Blur circle */}
      <div className="absolute top-0 left-0 z-[2] rounded-lg overflow-hidden h-full w-full">
        <div
          className="absolute z-[1] rounded-full bg-primary/30 blur-xl"
          style={{
            width: isHovering ? '150px' : '0px',
            height: isHovering ? '150px' : '0px',
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </div>
      <div className="flex flex-col bg-background/80 backdrop-blur-lg z-[3] rounded-lg overflow-hidden border dark:border-slate-700 border-slate-200">
        <div className="h-full min-h-16"></div>
        <div className="p-6 pt-2 h-full">
          <span className="inline-block p-3 mb-4 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-secondary dark:group-hover:bg-secondary transition-colors border dark:border-slate-700 border-slate-200">
            {icon}
          </span>
          <div className="p-0 mb-2">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className="">
            <p className="text-gray-600 dark:text-gray-400 ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;