"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  loopDelay?: number;
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  loopDelay = 1500,
  as: Component = "div",
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started || !children) return;

    let i = 1; // Start from second character
    setDisplayedText(children[0] || ""); // Show first character immediately

    let typingEffect: NodeJS.Timeout;

    const typeText = () => {
      typingEffect = setInterval(() => {
        if (i < children.length) {
          setDisplayedText(children[0] + children.substring(1, i + 1));
          i++;
        } else {
          clearInterval(typingEffect);
          setTimeout(() => {
            i = 1;
            setDisplayedText(children[0] || ""); // Reset to first character
            typeText();
          }, loopDelay);
        }
      }, duration);
    };

    typeText();

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, loopDelay, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}
