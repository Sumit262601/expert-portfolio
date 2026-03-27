"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [animate, isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  repeat = false,
  repeatDelay = 1,
  duration = 2,
  delay = 1,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  repeat?: boolean | number;
  repeatDelay?: number;
  duration?: number;
  delay?: number;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: !repeat });

  useEffect(() => {
    if (!isInView) return;

    const el = scope.current as HTMLElement | null;
    const contentWidth = contentRef.current?.scrollWidth ?? 0;
    if (!el || contentWidth <= 0) return;

    const shouldRepeat = Boolean(repeat);
    const repeatCount =
      typeof repeat === "number" ? Math.max(0, Math.floor(repeat) - 1) : Infinity;

    if (!shouldRepeat) {
      animate(
        el,
        { width: [`0px`, `${contentWidth}px`] },
        { duration, ease: "linear", delay }
      );
      return;
    }

    // Typing: 0 -> full, hold for repeatDelay, then reset to 0 and repeat.
    // We use keyframe "times" to keep the text fully visible during the hold.
    const hold = Math.max(0, repeatDelay);
    const resetDuration = 0.01; // near-instant reset; avoids some browsers skipping the last keyframe
    const total = duration + hold + resetDuration;
    const typingEnd = duration / total;
    const holdEnd = (duration + hold) / total;

    animate(
      el,
      { width: [`0px`, `${contentWidth}px`, `${contentWidth}px`, `0px`] },
      {
        duration: total,
        ease: "linear",
        delay,
        times: [0, typingEnd, holdEnd, 1],
        repeat: repeatCount,
      }
    );
  }, [animate, delay, duration, isInView, repeat, repeatDelay, scope]);

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        ref={scope}
        style={{ width: 0 }}
      >
        <div
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold"
          ref={contentRef}
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-5 sm:h-6 xl:h-8 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
