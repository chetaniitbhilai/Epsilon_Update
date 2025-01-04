import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

export function GlowText({ children, className = '' }: TextProps) {
  return (
    <span className={`relative inline-block
      after:absolute after:inset-0 after:bg-blue-400/20 after:blur-xl after:scale-150
      ${className}`}>
      {children}
    </span>
  );
}

export function GradientText({ children, className = '' }: TextProps) {
  return (
    <span className={`bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}