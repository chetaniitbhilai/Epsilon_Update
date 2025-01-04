import { ReactNode } from 'react';

interface GlowTextProps {
  children: ReactNode;
  className?: string;
}

export default function GlowText({ children, className = '' }: GlowTextProps) {
  return (
    <span className={`relative inline-block
      after:absolute after:inset-0 after:bg-blue-400/20 after:blur-xl after:scale-150
      ${className}`}>
      {children}
    </span>
  );
}