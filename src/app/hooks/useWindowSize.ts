'use client'
import { useState, useEffect } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        wInnerWidth: window.innerWidth,
        wInnerHeight: window.innerWidth,
      });

      const handleResize = () => {
        // console.log(window.innerWidth)
        if (typeof window !== 'undefined') {
            setWindowSize({
                wInnerWidth: window.innerWidth,
                wInnerHeight: window.innerHeight,
              });
        }
    };
    
      useEffect(() => {
        // Handler to call when window size changes

    
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Call handler right away so state gets updated with initial window size
        handleResize();
    
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      return windowSize;
}