
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    'fade-in' | 
    'fade-in-up' | 
    'slide-in-right' | 
    'slide-in-left' | 
    'float';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function Motion({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
}: MotionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once && hasAnimated) return;
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, hasAnimated]);
  
  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? `animate-${animation}` : 'opacity-0',
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
