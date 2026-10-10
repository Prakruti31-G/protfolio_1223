import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  const words = text.split(' ');

  let globalCharIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] ${className}`}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
      }}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const renderedWord = (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const start = globalCharIndex / totalChars;
              const end = Math.min(1, (globalCharIndex + 1) / totalChars);
              const charKey = `char-${globalCharIndex}`;
              globalCharIndex += 1;

              return (
                <AnimatedChar
                  key={charKey}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        const isLastWord = wordIndex === words.length - 1;
        if (!isLastWord) {
          const spaceStart = globalCharIndex / totalChars;
          const spaceEnd = Math.min(1, (globalCharIndex + 1) / totalChars);
          const spaceKey = `space-${globalCharIndex}`;
          globalCharIndex += 1;

          return (
            <React.Fragment key={`frag-${wordIndex}`}>
              {renderedWord}
              <AnimatedChar
                key={spaceKey}
                char=" "
                progress={scrollYProgress}
                range={[spaceStart, spaceEnd]}
              />
            </React.Fragment>
          );
        }

        return renderedWord;
      })}
    </p>
  );
};
