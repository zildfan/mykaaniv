import { motion } from 'motion/react';

interface DenimDecorationsProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  theme: string;
}

export function DenimDecorations({ position, theme }: DenimDecorationsProps) {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0';
      case 'bottom-left':
        return 'bottom-0 left-0';
      case 'bottom-right':
        return 'bottom-0 right-0';
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} pointer-events-none z-10`}>
      {/* Denim Stars */}
      {(position === 'top-left' || position === 'top-right') && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className={position === 'top-left' ? 'absolute top-4 left-4' : 'absolute top-4 right-4'}
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            {/* Outer denim star */}
            <path
              d="M50 10 L61 40 L92 40 L67 60 L78 90 L50 70 L22 90 L33 60 L8 40 L39 40 Z"
              fill="#1e40af"
              stroke="#0f172a"
              strokeWidth="2"
            />
            {/* Inner lighter star for depth */}
            <path
              d="M50 15 L59 38 L83 38 L64 53 L72 76 L50 61 L28 76 L36 53 L17 38 L41 38 Z"
              fill="#3b82f6"
              opacity="0.8"
            />
            {/* Stitching */}
            <path
              d="M50 10 L61 40 L92 40 L67 60 L78 90 L50 70 L22 90 L33 60 L8 40 L39 40 Z"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="3 2"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      )}

      {/* Denim Clouds with swirls */}
      {(position === 'bottom-left' || position === 'bottom-right') && (
        <motion.div
          initial={{ scale: 0, x: position === 'bottom-left' ? -50 : 50 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className={position === 'bottom-left' ? 'absolute bottom-4 left-4' : 'absolute bottom-4 right-4'}
        >
          <svg width="80" height="60" viewBox="0 0 120 80">
            {/* Cloud base */}
            <path
              d="M30 50 Q20 50, 20 40 Q20 30, 30 30 Q30 20, 45 20 Q55 20, 60 25 Q70 20, 80 25 Q90 30, 90 40 Q100 40, 100 50 Q100 60, 85 60 L30 60 Q20 60, 20 50"
              fill="#2563eb"
              stroke="#0f172a"
              strokeWidth="2"
            />
            {/* Lighter overlay */}
            <path
              d="M35 48 Q28 48, 28 42 Q28 35, 35 35 Q35 28, 47 28 Q55 28, 58 32 Q65 28, 72 32 Q80 35, 80 42 Q88 42, 88 48 Q88 54, 78 54 L35 54 Q28 54, 28 48"
              fill="#60a5fa"
              opacity="0.7"
            />
            {/* Swirl decorations */}
            <path
              d="M40 45 Q42 40, 45 42 Q43 47, 40 45"
              fill="#dbeafe"
              opacity="0.6"
            />
            <path
              d="M60 40 Q63 35, 66 37 Q64 43, 60 40"
              fill="#dbeafe"
              opacity="0.6"
            />
            {/* Stitching */}
            <path
              d="M30 50 Q20 50, 20 40 Q20 30, 30 30"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      )}

      {/* Denim Flowers */}
      {(theme === 'soft-romance' || theme === 'light-denim') && position === 'top-right' && (
        <motion.div
          initial={{ scale: 0, rotate: 45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-16 right-16"
        >
          <svg width="45" height="45" viewBox="0 0 100 100">
            {/* Flower petals */}
            <circle cx="50" cy="20" r="15" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
            <circle cx="80" cy="50" r="15" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
            <circle cx="50" cy="80" r="15" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
            <circle cx="20" cy="50" r="15" fill="#60a5fa" stroke="#1e40af" strokeWidth="2" />
            <circle cx="65" cy="35" r="15" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
            <circle cx="35" cy="35" r="15" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
            <circle cx="65" cy="65" r="15" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
            <circle cx="35" cy="65" r="15" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
            {/* Center */}
            <circle cx="50" cy="50" r="12" fill="#0f172a" stroke="#1e40af" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" fill="#1e293b" />
            {/* Highlights */}
            {[20, 35, 50, 65, 80].map((angle, i) => (
              <circle
                key={i}
                cx={50 + 4 * Math.cos((angle * Math.PI) / 180)}
                cy={50 + 4 * Math.sin((angle * Math.PI) / 180)}
                r="1.5"
                fill="white"
                opacity="0.6"
              />
            ))}
          </svg>
        </motion.div>
      )}
    </div>
  );
}
