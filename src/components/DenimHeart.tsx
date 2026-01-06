import { motion } from 'motion/react';

interface DenimHeartProps {
  size?: number;
  className?: string;
  delay?: number;
}

export function DenimHeart({ size = 40, className = '', delay = 0 }: DenimHeartProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{ 
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 0.8, delay }
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        {/* Main heart shape with denim texture */}
        <defs>
          <pattern id={`denim-texture-${delay}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="#2563eb" />
            <path d="M0 0L20 20M20 0L0 20" stroke="#1e40af" strokeWidth="0.5" opacity="0.3" />
            <circle cx="5" cy="5" r="1" fill="#3b82f6" opacity="0.4" />
            <circle cx="15" cy="15" r="1" fill="#1e3a8a" opacity="0.3" />
          </pattern>
          
          <filter id={`shadow-${delay}`}>
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.4" />
          </filter>

          <linearGradient id={`gradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
        
        {/* Outer stitched border */}
        <path 
          d="M50 85 C20 60, 10 40, 20 25 C25 15, 35 10, 45 15 C47 16, 49 18, 50 20 C51 18, 53 16, 55 15 C65 10, 75 15, 80 25 C90 40, 80 60, 50 85Z"
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="2"
          strokeDasharray="4 3"
        />
        
        {/* Main heart with denim pattern */}
        <path 
          d="M50 82 C22 58, 12 40, 22 27 C26 18, 36 14, 45 18 C47 19, 49 20, 50 22 C51 20, 53 19, 55 18 C64 14, 74 18, 78 27 C88 40, 78 58, 50 82Z"
          fill={`url(#gradient-${delay})`}
          filter={`url(#shadow-${delay})`}
        />
        
        {/* Denim weave texture overlay */}
        <path 
          d="M50 82 C22 58, 12 40, 22 27 C26 18, 36 14, 45 18 C47 19, 49 20, 50 22 C51 20, 53 19, 55 18 C64 14, 74 18, 78 27 C88 40, 78 58, 50 82Z"
          fill={`url(#denim-texture-${delay})`}
          opacity="0.6"
        />
        
        {/* Highlight for 3D effect */}
        <ellipse 
          cx="35" 
          cy="30" 
          rx="12" 
          ry="8" 
          fill="white" 
          opacity="0.25"
        />
        
        {/* Inner stitching details */}
        <path 
          d="M30 28 Q35 22, 40 28"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.4"
          fill="none"
        />
        
        <path 
          d="M60 28 Q65 22, 70 28"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.4"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}
