'use client';

interface GradientTextProps {
  text: string;
  gradient?: string;
  className?: string;
}

export default function GradientText({ 
  text, 
  gradient = 'from-blue-400 to-purple-400',
  className = ''
}: GradientTextProps) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient} ${className}`}>
      {text}
    </span>
  );
}
