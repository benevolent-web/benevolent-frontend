"use client"
import React from 'react';

const GradientSphereBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 dark:bg-gradient-radial-dark dark:to-benevolent-navy dark:from-benevolent-navy-light bg-gradient-radial-light from-white to-blue-100" />
      {/* <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] rounded-full 
          dark:bg-gradient-radial-dark dark:from-slate-700/50 dark:to-transparent
          bg-gradient-radial-light from-white/50 to-transparent"
      /> */}
    </div>
  );
};

export default GradientSphereBackground;