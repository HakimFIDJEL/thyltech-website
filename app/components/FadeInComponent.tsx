"use client";
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

interface FadeInComponentProps {
  children: React.ReactNode;
  delay?: number;  // Le délai est maintenant facultatif
className?: string;
}

export const FadeInComponent = ({ children, delay = 0, className }: FadeInComponentProps) => {
  const [inView, setInView] = useState(false);

  return (
    <div
      className={`transition-all duration-1000 transform ${className} ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Waypoint
        onEnter={() => setTimeout(() => setInView(true), delay)} // Si délai est fourni, utilise-le
        // onLeave={() => setInView(false)} // Lorsque l'élément quitte le viewport
      />
      {children}
    </div>
  );
};

