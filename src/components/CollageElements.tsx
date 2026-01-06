import { motion } from 'motion/react';

interface CollageElementsProps {
  theme: string;
  index: number;
}

export function CollageElements({ theme, index }: CollageElementsProps) {
  return (
    <>
      {/* Torn Denim Patches */}
      <motion.div
        initial={{ opacity: 0, rotate: 45, scale: 0 }}
        whileInView={{ opacity: 1, rotate: 12, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute -top-16 -left-12 w-32 h-32 pointer-events-none"
        style={{ zIndex: 5 }}
      >
        <svg viewBox="0 0 150 150" fill="none">
          {/* Torn denim patch with rough edges */}
          <defs>
            <pattern id={`denim-${index}-1`} x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill="#1e40af" />
              <path d="M0 0L8 8M8 0L0 8" stroke="#172554" strokeWidth="0.5" opacity="0.5" />
              <circle cx="2" cy="2" r="0.5" fill="#3b82f6" opacity="0.6" />
              <circle cx="6" cy="6" r="0.5" fill="#0c1844" opacity="0.4" />
            </pattern>
          </defs>
          <path
            d="M20 10 C25 8, 35 5, 45 8 C55 11, 65 15, 75 12 C85 9, 95 10, 105 15 C110 17, 115 25, 118 35 C120 45, 118 55, 115 65 C112 75, 105 85, 95 90 C85 95, 75 98, 65 95 C55 92, 45 88, 35 92 C25 96, 18 90, 12 80 C8 70, 8 60, 10 50 C12 40, 15 30, 18 20 Z"
            fill={`url(#denim-${index}-1)`}
            opacity="0.8"
          />
          {/* Frayed edges */}
          <path
            d="M20 10 C25 8, 35 5, 45 8 M75 12 C85 9, 95 10, 105 15 M115 65 C112 75, 105 85, 95 90 M35 92 C25 96, 18 90, 12 80"
            stroke="#0f172a"
            strokeWidth="1.5"
            strokeDasharray="2 3"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Ripped Paper Corner */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute -top-8 right-4 w-24 h-24 pointer-events-none"
        style={{ zIndex: 3 }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M5 5 L95 5 L95 85 C90 87, 85 85, 80 88 C75 90, 70 87, 65 90 C60 92, 55 90, 50 92 C45 94, 40 92, 35 94 C30 95, 25 93, 20 95 C15 97, 10 95, 5 95 Z"
            fill="#e8f1fc"
            opacity="0.7"
          />
          <path
            d="M5 5 L95 5 L95 85 C90 87, 85 85, 80 88 C75 90, 70 87, 65 90"
            stroke="#cbd5e1"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      {/* Hand-drawn circle doodles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-12 pointer-events-none"
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="2" opacity="0.3" strokeDasharray="5 3" />
          <circle cx="50" cy="50" r="28" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <path d="M30 50 L70 50 M50 30 L50 70" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Fabric scrap with irregular shape */}
      <motion.div
        initial={{ opacity: 0, rotate: -30, y: -20 }}
        whileInView={{ opacity: 1, rotate: -18, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="absolute bottom-4 -left-8 w-28 h-20 pointer-events-none"
        style={{ zIndex: 4 }}
      >
        <svg viewBox="0 0 120 80" fill="none">
          <defs>
            <pattern id={`fabric-${index}`} x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#60a5fa" />
              <path d="M0 2L4 2M2 0L2 4" stroke="#3b82f6" strokeWidth="0.3" opacity="0.5" />
            </pattern>
          </defs>
          <path
            d="M10 15 C20 8, 35 5, 50 10 C65 15, 80 12, 95 18 C105 22, 115 30, 110 45 C108 55, 100 65, 85 68 C70 70, 55 68, 40 65 C25 62, 12 58, 8 45 C5 35, 5 25, 10 15 Z"
            fill={`url(#fabric-${index})`}
            opacity="0.6"
          />
          <path
            d="M10 15 C20 8, 35 5, 50 10 C65 15, 80 12, 95 18"
            stroke="#1e40af"
            strokeWidth="1"
            opacity="0.4"
            strokeDasharray="3 2"
          />
        </svg>
      </motion.div>

      {/* Cutout heart shape from denim */}
      <motion.div
        initial={{ opacity: 0, rotate: 180 }}
        whileInView={{ opacity: 1, rotate: 25 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        viewport={{ once: true }}
        className="absolute top-1/3 -left-10 pointer-events-none"
        style={{ zIndex: 6 }}
      >
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id={`heart-denim-${index}`} x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <rect width="6" height="6" fill="#2563eb" />
              <path d="M0 0L6 6M6 0L0 6" stroke="#1e3a8a" strokeWidth="0.4" opacity="0.6" />
            </pattern>
          </defs>
          <path
            d="M50 85 C20 60, 10 40, 20 25 C25 15, 35 10, 45 15 C47 16, 49 18, 50 20 C51 18, 53 16, 55 15 C65 10, 75 15, 80 25 C90 40, 80 60, 50 85Z"
            fill={`url(#heart-denim-${index})`}
            opacity="0.75"
          />
          {/* Rough cut edges */}
          <path
            d="M50 85 C20 60, 10 40, 20 25 C25 15, 35 10, 45 15"
            stroke="#0f172a"
            strokeWidth="1.5"
            strokeDasharray="3 2"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Crumpled paper texture in corner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute top-12 right-8 w-16 h-16 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>

      {/* Scribbled star */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-16 right-16 pointer-events-none"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 10 L61 40 L92 40 L67 60 L78 90 L50 70 L22 90 L33 60 L8 40 L39 40 Z"
            stroke="#fbbf24"
            strokeWidth="2.5"
            fill="none"
            opacity="0.6"
            strokeLinejoin="round"
          />
          <path
            d="M50 15 L59 38 L83 38 L64 53 L72 76 L50 61 L28 76 L36 53 L17 38 L41 38 Z"
            fill="#fef08a"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Button decoration */}
      {index % 2 === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          className="absolute top-8 left-12 pointer-events-none"
          style={{ zIndex: 7 }}
        >
          <svg width="25" height="25" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
            <circle cx="25" cy="25" r="15" fill="none" stroke="#60a5fa" strokeWidth="1" />
            <circle cx="18" cy="18" r="2" fill="#1e40af" />
            <circle cx="32" cy="18" r="2" fill="#1e40af" />
            <circle cx="18" cy="32" r="2" fill="#1e40af" />
            <circle cx="32" cy="32" r="2" fill="#1e40af" />
          </svg>
        </motion.div>
      )}
    </>
  );
}
