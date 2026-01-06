import { motion } from 'motion/react';
import { Heart, Mail, Send, Coffee, Cake, Flower, Gift, Sparkles } from 'lucide-react';

interface MonthDecorationsProps {
  month: string;
  theme: string;
}

export function MonthDecorations({ month, theme }: MonthDecorationsProps) {
  // January - heart shape
  if (month === 'January') {
    return (
      <>
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute -top-16 left-1/4 text-pink-300/60"
        >
          <Heart className="w-16 h-16 fill-current" />
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 25 }}
          whileInView={{ scale: 1, rotate: 15 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="absolute -bottom-12 right-1/3 text-pink-200/50"
        >
          <Heart className="w-12 h-12 fill-current" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="absolute top-1/3 -right-20 text-pink-300/40"
        >
          <Heart className="w-10 h-10 fill-current" />
        </motion.div>
      </>
    );
  }

  // February - letters and valentines
  if (month === 'February') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-12 right-1/4"
        >
          <div className="relative">
            <div className="w-20 h-16 bg-pink-100/40 border-2 border-pink-300/30 rounded-sm shadow-lg transform rotate-12">
              <Mail className="w-8 h-8 text-pink-400/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-300/50 rounded-full" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -30 }}
          whileInView={{ opacity: 1, rotate: -15 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-10 left-1/4 text-pink-300/60"
        >
          <Send className="w-12 h-12 fill-current" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/2 -left-16 text-pink-400/50"
        >
          <Heart className="w-14 h-14 fill-current" />
        </motion.div>
      </>
    );
  }

  // March - ferris wheel
  if (month === 'March') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="absolute -top-20 right-1/4"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="30" stroke="rgba(147, 197, 253, 0.4)" strokeWidth="2" />
            <circle cx="40" cy="40" r="20" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="10" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="1" />
            <line x1="40" y1="10" x2="40" y2="70" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="1.5" />
            <line x1="10" y1="40" x2="70" y2="40" stroke="rgba(147, 197, 253, 0.3)" strokeWidth="1.5" />
            <circle cx="40" cy="10" r="4" fill="rgba(96, 165, 250, 0.6)" />
            <circle cx="70" cy="40" r="4" fill="rgba(96, 165, 250, 0.6)" />
            <circle cx="40" cy="70" r="4" fill="rgba(96, 165, 250, 0.6)" />
            <circle cx="10" cy="40" r="4" fill="rgba(96, 165, 250, 0.6)" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-12 left-1/3 text-blue-300/50"
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
      </>
    );
  }

  // April - barbeque and soup
  if (month === 'April') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-14 right-1/4"
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Bowl */}
            <ellipse cx="30" cy="35" rx="20" ry="8" fill="rgba(191, 219, 254, 0.4)" stroke="rgba(147, 197, 253, 0.6)" strokeWidth="2" />
            <path d="M10 35 Q10 50 30 50 Q50 50 50 35" fill="rgba(191, 219, 254, 0.3)" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2" />
            {/* Steam */}
            <motion.path
              d="M20 25 Q18 15 20 10"
              stroke="rgba(147, 197, 253, 0.5)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M30 25 Q32 15 30 8"
              stroke="rgba(147, 197, 253, 0.5)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.path
              d="M40 25 Q38 15 40 12"
              stroke="rgba(147, 197, 253, 0.5)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -15 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-10 left-1/4"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            {/* Fork/skewer */}
            <line x1="15" y1="10" x2="15" y2="45" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2" />
            <line x1="20" y1="10" x2="20" y2="45" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2" />
            <line x1="25" y1="10" x2="25" y2="45" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2" />
            <rect x="12" y="5" width="16" height="5" fill="rgba(96, 165, 250, 0.4)" />
          </svg>
        </motion.div>
      </>
    );
  }

  // May - cake
  if (month === 'May') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-16 right-1/3"
        >
          <Cake className="w-16 h-16 text-pink-300/60 fill-current" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-12 left-1/4"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            {/* Candle */}
            <rect x="22" y="10" width="6" height="20" fill="rgba(147, 197, 253, 0.5)" />
            <motion.ellipse
              cx="25"
              cy="8"
              rx="3"
              ry="5"
              fill="rgba(251, 191, 36, 0.6)"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/2 -left-16 text-pink-400/50"
        >
          <Gift className="w-12 h-12 fill-current" />
        </motion.div>
      </>
    );
  }

  // June - coat and hair
  if (month === 'June') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-14 left-1/4"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            {/* Coat hanger */}
            <path d="M10 20 Q35 15 60 20" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="15" x2="35" y2="5" stroke="rgba(147, 197, 253, 0.4)" strokeWidth="2" />
            <circle cx="35" cy="5" r="3" fill="rgba(96, 165, 250, 0.6)" />
            {/* Coat */}
            <path d="M15 20 L15 55 Q15 60 20 60 L30 60 L30 35 L40 35 L40 60 L50 60 Q55 60 55 55 L55 20" fill="rgba(191, 219, 254, 0.3)" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -30 }}
          whileInView={{ opacity: 1, rotate: -15 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-10 right-1/4"
        >
          <Sparkles className="w-12 h-12 text-blue-300/60" />
        </motion.div>
      </>
    );
  }

  // July - coffee
  if (month === 'July') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-16 right-1/4"
        >
          <Coffee className="w-16 h-16 text-amber-300/60 fill-current" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-12 left-1/3"
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Coffee cup */}
            <path d="M15 20 L15 40 Q15 50 25 50 L35 50 Q45 50 45 40 L45 20" fill="rgba(191, 219, 254, 0.3)" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2" />
            <ellipse cx="30" cy="20" rx="15" ry="5" fill="rgba(120, 113, 108, 0.4)" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2" />
            <path d="M45 25 L50 25 Q55 25 55 30 Q55 35 50 35 L45 35" stroke="rgba(147, 197, 253, 0.5)" strokeWidth="2" fill="none" />
            {/* Steam */}
            <motion.path
              d="M22 15 Q20 8 22 3"
              stroke="rgba(147, 197, 253, 0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M30 15 Q32 8 30 2"
              stroke="rgba(147, 197, 253, 0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.path
              d="M38 15 Q36 8 38 4"
              stroke="rgba(147, 197, 253, 0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </svg>
        </motion.div>
      </>
    );
  }

  // August - pancakes
  if (month === 'August') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-14 left-1/4"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            {/* Stack of pancakes */}
            <ellipse cx="35" cy="50" rx="25" ry="8" fill="rgba(251, 191, 36, 0.4)" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="2" />
            <ellipse cx="35" cy="40" rx="25" ry="8" fill="rgba(251, 191, 36, 0.5)" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="2" />
            <ellipse cx="35" cy="30" rx="25" ry="8" fill="rgba(251, 191, 36, 0.6)" stroke="rgba(217, 119, 6, 0.5)" strokeWidth="2" />
            {/* Butter on top */}
            <rect x="30" y="22" width="10" height="6" fill="rgba(254, 240, 138, 0.7)" />
            {/* Syrup drip */}
            <motion.path
              d="M35 28 L35 55"
              stroke="rgba(180, 83, 9, 0.4)"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: 15 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-10 right-1/4"
        >
          <Heart className="w-12 h-12 text-amber-300/60 fill-current" />
        </motion.div>
      </>
    );
  }

  // September - vintage letter and origami flower
  if (month === 'September') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 1, rotate: -10 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-12 right-1/4"
        >
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
            {/* Vintage paper */}
            <rect x="5" y="5" width="70" height="50" fill="rgba(254, 252, 232, 0.4)" stroke="rgba(217, 119, 6, 0.3)" strokeWidth="1.5" />
            <line x1="15" y1="15" x2="65" y2="15" stroke="rgba(120, 113, 108, 0.3)" strokeWidth="1" />
            <line x1="15" y1="22" x2="65" y2="22" stroke="rgba(120, 113, 108, 0.3)" strokeWidth="1" />
            <line x1="15" y1="29" x2="55" y2="29" stroke="rgba(120, 113, 108, 0.3)" strokeWidth="1" />
            <line x1="15" y1="36" x2="60" y2="36" stroke="rgba(120, 113, 108, 0.3)" strokeWidth="1" />
            {/* Wax seal */}
            <circle cx="65" cy="45" r="8" fill="rgba(220, 38, 38, 0.5)" />
            <text x="65" y="48" fontSize="8" fill="rgba(254, 252, 232, 0.8)" textAnchor="middle">♥</text>
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-12 left-1/3"
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Origami flower */}
            <path d="M30 10 L35 25 L30 30 L25 25 Z" fill="rgba(244, 114, 182, 0.5)" stroke="rgba(236, 72, 153, 0.6)" strokeWidth="1.5" />
            <path d="M30 30 L45 35 L40 40 L30 35 Z" fill="rgba(251, 207, 232, 0.5)" stroke="rgba(236, 72, 153, 0.6)" strokeWidth="1.5" />
            <path d="M30 30 L25 45 L20 40 L25 30 Z" fill="rgba(244, 114, 182, 0.5)" stroke="rgba(236, 72, 153, 0.6)" strokeWidth="1.5" />
            <path d="M30 30 L15 25 L20 20 L30 25 Z" fill="rgba(251, 207, 232, 0.5)" stroke="rgba(236, 72, 153, 0.6)" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="4" fill="rgba(253, 224, 71, 0.7)" />
          </svg>
        </motion.div>
      </>
    );
  }

  // October - marshmallow
  if (month === 'October') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-14 right-1/4"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            {/* Marshmallows */}
            <rect x="15" y="30" width="15" height="20" rx="3" fill="rgba(254, 252, 232, 0.6)" stroke="rgba(226, 232, 240, 0.7)" strokeWidth="2" />
            <rect x="32" y="25" width="15" height="20" rx="3" fill="rgba(254, 252, 232, 0.7)" stroke="rgba(226, 232, 240, 0.7)" strokeWidth="2" />
            <rect x="25" y="45" width="15" height="20" rx="3" fill="rgba(254, 252, 232, 0.8)" stroke="rgba(226, 232, 240, 0.7)" strokeWidth="2" />
            {/* Sparkles */}
            <motion.circle
              cx="20"
              cy="20"
              r="2"
              fill="rgba(147, 197, 253, 0.6)"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="50"
              cy="18"
              r="2"
              fill="rgba(147, 197, 253, 0.6)"
              animate={{ opacity: [1, 0.3, 1], scale: [1.2, 0.8, 1.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: 20 }}
          whileInView={{ opacity: 1, rotate: 10 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-10 left-1/4"
        >
          <Heart className="w-12 h-12 text-pink-300/60 fill-current" />
        </motion.div>
      </>
    );
  }

  // November - vintage flower
  if (month === 'November') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-16 right-1/4"
        >
          <Flower className="w-16 h-16 text-pink-300/60 fill-current" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -30 }}
          whileInView={{ opacity: 1, rotate: -15 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-12 left-1/3"
        >
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            {/* Vintage rose */}
            <circle cx="35" cy="35" r="8" fill="rgba(244, 114, 182, 0.4)" />
            <circle cx="35" cy="35" r="14" fill="rgba(251, 207, 232, 0.3)" />
            <circle cx="35" cy="35" r="20" fill="rgba(252, 231, 243, 0.2)" />
            <path d="M35 35 L35 60" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="2" />
            <path d="M35 45 Q25 45 20 50" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1.5" fill="none" />
            <path d="M35 50 Q45 50 50 55" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/3 -left-16 text-pink-400/50"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
      </>
    );
  }

  // December - xmas and flowers
  if (month === 'December') {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-16 left-1/4"
        >
          <svg width="70" height="80" viewBox="0 0 70 80" fill="none">
            {/* Christmas tree */}
            <path d="M35 10 L45 30 L42 30 L50 45 L47 45 L55 60 L15 60 L23 45 L20 45 L28 30 L25 30 Z" fill="rgba(34, 197, 94, 0.4)" stroke="rgba(22, 163, 74, 0.6)" strokeWidth="2" />
            <rect x="32" y="60" width="6" height="10" fill="rgba(120, 113, 108, 0.5)" />
            {/* Star */}
            <motion.circle
              cx="35"
              cy="8"
              r="4"
              fill="rgba(253, 224, 71, 0.8)"
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Ornaments */}
            <circle cx="30" cy="35" r="3" fill="rgba(239, 68, 68, 0.6)" />
            <circle cx="40" cy="40" r="3" fill="rgba(59, 130, 246, 0.6)" />
            <circle cx="35" cy="50" r="3" fill="rgba(239, 68, 68, 0.6)" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-12 right-1/3"
        >
          <Flower className="w-14 h-14 text-red-300/60 fill-current" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="absolute top-1/2 -right-16"
        >
          <Sparkles className="w-12 h-12 text-blue-200/60" />
        </motion.div>
      </>
    );
  }

  return null;
}
