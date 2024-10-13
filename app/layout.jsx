'use client';
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import './globals.css';



const metadata = {
  title: "Robohawk",
  description: "Robohawk",
  icons: {icon: "/favicon.ico"},
};

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical', // or 'horizontal'
      gestureDirection: 'vertical', // or 'horizontal'
      smoothTouch: false, // Enable/disable smooth on touch devices
      touchMultiplier: 2, // Speed for touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up the instance on unmount
    };
  }, []);

  return (
    <html>
      <body className='main'>
     
        {/* This div will be scrollable with Lenis smooth scroll */}
      {children}
    </body>
    </html>
  );
};

export default Layout;
