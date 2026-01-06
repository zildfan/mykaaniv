import { motion } from 'motion/react';

interface BlueFlowersProps {
  variant?: 'light' | 'dark' | 'vintage';
  positions?: Array<{ top?: string; left?: string; right?: string; bottom?: string; rotation?: number; scale?: number }>;
}

export function BlueFlowers({ variant = 'dark', positions }: BlueFlowersProps) {
  const defaultPositions = [
    { top: '10%', left: '5%', rotation: 15, scale: 0.8 },
    { top: '20%', right: '8%', rotation: -20, scale: 1 },
    { bottom: '15%', left: '10%', rotation: 45, scale: 0.9 },
    { bottom: '25%', right: '5%', rotation: -30, scale: 0.7 },
  ];

  const flowerPositions = positions || defaultPositions;

  const colors = {
    light: {
      primary: '#6b9fd4',
      secondary: '#4a7ba7',
      accent: '#8badd6',
      center: '#fef3c7',
    },
    dark: {
      primary: '#4a6fa5',
      secondary: '#2d4a6f',
      accent: '#6b8caf',
      center: '#fef9e7',
    },
    vintage: {
      primary: '#5a8fc4',
      secondary: '#3d6fa1',
      accent: '#7ea8cf',
      center: '#fff9db',
    },
  };

  const colorScheme = colors[variant];

  const Flower = ({ size = 60, rotation = 0, delay = 0 }: { size?: number; rotation?: number; delay?: number }) => (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ transform: `rotate(${rotation}deg)` }}
      initial={{ opacity: 0, scale: 0, rotate: rotation - 90 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 1.5, delay, ease: 'easeOut' }}
    >
      {/* Petals */}
      <g opacity="0.9">
        {/* Top petal */}
        <ellipse cx="50" cy="25" rx="12" ry="20" fill={colorScheme.primary} />
        {/* Right petal */}
        <ellipse cx="75" cy="50" rx="20" ry="12" fill={colorScheme.secondary} />
        {/* Bottom petal */}
        <ellipse cx="50" cy="75" rx="12" ry="20" fill={colorScheme.accent} />
        {/* Left petal */}
        <ellipse cx="25" cy="50" rx="20" ry="12" fill={colorScheme.primary} />
        {/* Top-right petal */}
        <ellipse cx="68" cy="32" rx="14" ry="18" fill={colorScheme.secondary} transform="rotate(45 68 32)" />
        {/* Bottom-right petal */}
        <ellipse cx="68" cy="68" rx="14" ry="18" fill={colorScheme.accent} transform="rotate(-45 68 68)" />
        {/* Bottom-left petal */}
        <ellipse cx="32" cy="68" rx="14" ry="18" fill={colorScheme.primary} transform="rotate(45 32 68)" />
        {/* Top-left petal */}
        <ellipse cx="32" cy="32" rx="14" ry="18" fill={colorScheme.secondary} transform="rotate(-45 32 32)" />
      </g>
      
      {/* Center */}
      <circle cx="50" cy="50" r="10" fill={colorScheme.center} opacity="0.95" />
      <circle cx="50" cy="50" r="6" fill={colorScheme.secondary} opacity="0.3" />
      
      {/* Inner details */}
      <circle cx="48" cy="48" r="2" fill={colorScheme.center} opacity="0.6" />
      <circle cx="52" cy="48" r="1.5" fill={colorScheme.center} opacity="0.6" />
      <circle cx="50" cy="52" r="1.5" fill={colorScheme.center} opacity="0.6" />
    </motion.svg>
  );

  const SmallFlower = ({ size = 30, rotation = 0, delay = 0 }: { size?: number; rotation?: number; delay?: number }) => (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ transform: `rotate(${rotation}deg)` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.8, scale: 1 }}
      transition={{ duration: 1, delay, ease: 'easeOut' }}
    >
      {/* Simple 5-petal flower */}
      <g opacity="0.85">
        <circle cx="50" cy="30" r="12" fill={colorScheme.primary} />
        <circle cx="73" cy="50" r="12" fill={colorScheme.secondary} />
        <circle cx="59" cy="75" r="12" fill={colorScheme.accent} />
        <circle cx="27" cy="50" r="12" fill={colorScheme.primary} />
        <circle cx="41" cy="75" r="12" fill={colorScheme.secondary} />
      </g>
      <circle cx="50" cy="50" r="8" fill={colorScheme.center} opacity="0.9" />
      <circle cx="50" cy="50" r="4" fill={colorScheme.secondary} opacity="0.4" />
    </motion.svg>
  );

  return (
    <>
      {flowerPositions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom,
          }}
          animate={{
            rotate: [0, 5, -5, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        >
          {index % 2 === 0 ? (
            <Flower size={(pos.scale || 1) * 60} rotation={pos.rotation || 0} delay={index * 0.2} />
          ) : (
            <SmallFlower size={(pos.scale || 1) * 40} rotation={pos.rotation || 0} delay={index * 0.2} />
          )}
        </motion.div>
      ))}
    </>
  );
}
