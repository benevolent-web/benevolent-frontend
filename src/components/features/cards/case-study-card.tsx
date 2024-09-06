import Link from 'next/link';
import React from 'react';

const CaseStudyCard: React.FC<{ cardProps: TCaseStudyCardProps }> = ({ cardProps }) => {
  const { imageUrl, title, description, link } = cardProps;

  return (
    <Link href={link}>
      <div className="relative group overflow-hidden rounded-lg h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black/70 to-transparent backdrop-blur-[2px] group-hover:backdrop-blur-0 duration-200"></div>
        <div className="absolute z-10 bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50 opacity-100 transition-opacity duration-300 group-hover:opacity-0"></div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;