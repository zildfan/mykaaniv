import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Heart, Star, Sparkles } from 'lucide-react';
import { DenimHeart } from './DenimHeart';
import { DenimDecorations } from './DenimDecorations';
import { CollageElements } from './CollageElements';
import { BlueFlowers } from './BlueFlowers';
import { MonthDecorations } from './MonthDecorations';

interface ScrapbookMonthProps {
  month: string;
  description: string;
  caption: string;
  image: string;
  theme: string;
  rotation: number;
  index: number;
  totalMonths: number;
}

const themeColors: Record<string, { bg: string; accent: string; textureOpacity: number; fontColor: string; descriptionColor: string; captionColor: string }> = {
  'deep-winter': { bg: 'from-[#1a2845] via-[#2d3f5f] to-[#243654]', accent: '#4a6fa5', textureOpacity: 0.15, fontColor: 'text-white', descriptionColor: 'text-blue-200/80', captionColor: 'text-white/90' },
  'soft-romance': { bg: 'from-[#d4e4f7] via-[#e8f1fc] to-[#d4e4f7]', accent: '#8badd6', textureOpacity: 0.08, fontColor: 'text-slate-800', descriptionColor: 'text-slate-700/80', captionColor: 'text-slate-800/90' },
  'light-denim': { bg: 'from-[#6b8caf] via-[#8ba5c4] to-[#7a9abc]', accent: '#4a6fa5', textureOpacity: 0.12, fontColor: 'text-white', descriptionColor: 'text-blue-100/80', captionColor: 'text-white/90' },
  'bright-playful': { bg: 'from-[#5a8fc4] via-[#6ba3d8] to-[#5a8fc4]', accent: '#3d6fa1', textureOpacity: 0.1, fontColor: 'text-white', descriptionColor: 'text-blue-100/80', captionColor: 'text-white/90' },
  'sky-movement': { bg: 'from-[#87b5e5] via-[#a8cef2] to-[#87b5e5]', accent: '#5a8fc4', textureOpacity: 0.09, fontColor: 'text-slate-800', descriptionColor: 'text-slate-700/80', captionColor: 'text-slate-800/90' },
  'calm-summer': { bg: 'from-[#4a7ba7] via-[#5b8bb8] to-[#4a7ba7]', accent: '#7ea8cf', textureOpacity: 0.11, fontColor: 'text-white', descriptionColor: 'text-blue-100/80', captionColor: 'text-white/90' },
  'bold-joy': { bg: 'from-[#3d6fa1] via-[#4a7fb5] to-[#3d6fa1]', accent: '#5a9ad6', textureOpacity: 0.13, fontColor: 'text-white', descriptionColor: 'text-blue-100/80', captionColor: 'text-white/90' },
  'midnight-depth': { bg: 'from-[#0f1d2e] via-[#1a2d47] to-[#0f1d2e]', accent: '#2d4a6f', textureOpacity: 0.18, fontColor: 'text-white', descriptionColor: 'text-blue-200/80', captionColor: 'text-white/90' },
  'muted-gray': { bg: 'from-[#5d7a9a] via-[#6e8aaa] to-[#5d7a9a]', accent: '#8ba5c4', textureOpacity: 0.1, fontColor: 'text-white', descriptionColor: 'text-blue-100/80', captionColor: 'text-white/90' },
  'nostalgic-layers': { bg: 'from-[#3a5270] via-[#4a6280] to-[#3a5270]', accent: '#5a7a9f', textureOpacity: 0.14, fontColor: 'text-white', descriptionColor: 'text-blue-200/80', captionColor: 'text-white/90' },
  'warm-gratitude': { bg: 'from-[#4a6380] via-[#5a7390] to-[#4a6380]', accent: '#7a93b0', textureOpacity: 0.11, fontColor: 'text-white', descriptionColor: 'text-blue-100/80', captionColor: 'text-white/90' },
  'snow-glow': { bg: 'from-[#0d1824] via-[#1a2d47] to-[#0d1824]', accent: '#2d4a6f', textureOpacity: 0.2, fontColor: 'text-white', descriptionColor: 'text-blue-200/80', captionColor: 'text-white/90' },
};

export function ScrapbookMonth({ month, description, caption, image, theme, rotation, index, totalMonths }: ScrapbookMonthProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const themeConfig = themeColors[theme] || themeColors['deep-winter'];

  const scrollToNext = () => {
    const sections = document.querySelectorAll('section');
    const currentSection = sectionRef.current?.parentElement;
    const currentIndex = Array.from(sections).indexOf(currentSection?.querySelector('section') as Element);
    if (currentIndex < sections.length - 1) {
      sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrev = () => {
    const sections = document.querySelectorAll('section');
    const currentSection = sectionRef.current?.parentElement;
    const currentIndex = Array.from(sections).indexOf(currentSection?.querySelector('section') as Element);
    if (currentIndex > 0) {
      sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Decorative stickers based on month theme
  const getDecorations = () => {
    const decorations = [];
    
    // Hearts for February
    if (theme === 'soft-romance') {
      decorations.push(
        <motion.div
          key="heart1"
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="absolute -top-6 -right-6 text-pink-300/60"
        >
          <Heart className="w-8 h-8 fill-current transition-all duration-300" />
        </motion.div>
      );
    }
    
    // Stars for playful months
    if (theme === 'bright-playful' || theme === 'bold-joy') {
      decorations.push(
        <motion.div
          key="star1"
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="absolute -top-8 -left-6 text-yellow-300/50"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Star className="w-6 h-6 fill-current transition-all duration-300" />
        </motion.div>
      );
    }
    
    // Sparkles for special months
    if (theme === 'snow-glow' || theme === 'sky-movement') {
      decorations.push(
        <motion.div
          key="sparkle1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="absolute -bottom-6 -left-8 text-blue-200/60"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-6 h-6 transition-all duration-300" />
        </motion.div>
      );
    }
    
    return decorations;
  };

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${themeConfig.bg} relative overflow-hidden py-20`}
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: themeConfig.textureOpacity }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      {/* Gingham pattern for certain themes */}
      {(theme === 'soft-romance' || theme === 'light-denim') && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px),
                            repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`,
          }} />
        </div>
      )}

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto px-6"
      >
        {/* Navigation Arrows */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-50" style={{ width: 'calc(100% + 100px)', marginLeft: '-50px' }}>
          {/* Previous Arrow */}
          {index > 0 && (
            <motion.button
              onClick={scrollToPrev}
              className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 transition-all duration-500 ease-out shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              aria-label="Previous month"
            >
              <ChevronUp className="w-6 h-6 text-white rotate-[-90deg] transition-transform duration-300" />
            </motion.button>
          )}
          
          {/* Next Arrow */}
          {index < totalMonths - 1 && (
            <motion.button
              onClick={scrollToNext}
              className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 transition-all duration-500 ease-out shadow-lg hover:shadow-xl ml-auto"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              aria-label="Next month"
            >
              <ChevronDown className="w-6 h-6 text-white rotate-[-90deg] transition-transform duration-300" />
            </motion.button>
          )}
        </div>

        {/* Scrapbook page */}
        <div className="relative">
          {/* Paper background with shadow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-sm transform rotate-1 shadow-2xl" />
          
          <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-sm p-8 md:p-12 shadow-2xl">
            {/* Canvas/Fabric texture background */}
            <div className="absolute inset-0 opacity-30 rounded-sm overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(200,200,200,0.1) 0px, transparent 1px, transparent 2px, rgba(200,200,200,0.1) 3px),
                  repeating-linear-gradient(90deg, rgba(200,200,200,0.1) 0px, transparent 1px, transparent 2px, rgba(200,200,200,0.1) 3px)
                `,
                backgroundSize: '3px 3px',
              }} />
            </div>

            {/* Navy blue border accent on left side */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0f172a]/60 to-transparent rounded-l-sm" />
            
            {/* Month header with typewriter style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mb-6 relative z-30 px-4 py-3"
            >
              <h2 
                className={`${themeConfig.fontColor} mb-2 tracking-wider transition-all duration-300`}
                style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.15em' }}
              >
                {month}
              </h2>
              <p 
                className={`${themeConfig.descriptionColor} italic transition-all duration-300`}
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {description}
              </p>
            </motion.div>

            {/* Photo frame */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative mb-8 transition-all duration-500"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Tape pieces - more random and organic */}
              <div className="absolute -top-3 left-8 w-20 h-7 bg-yellow-100/30 backdrop-blur-sm rotate-[-8deg] shadow-md z-20" 
                   style={{ 
                     borderLeft: '1px dashed rgba(255,255,255,0.4)', 
                     borderRight: '1px dashed rgba(255,255,255,0.4)',
                     clipPath: 'polygon(2% 15%, 98% 10%, 97% 85%, 1% 90%)'
                   }} />
              <div className="absolute -top-4 right-12 w-24 h-8 bg-yellow-50/25 backdrop-blur-sm rotate-[6deg] shadow-md z-20"
                   style={{ 
                     borderLeft: '1px dashed rgba(255,255,255,0.4)', 
                     borderRight: '1px dashed rgba(255,255,255,0.4)',
                     clipPath: 'polygon(3% 20%, 97% 15%, 96% 80%, 2% 85%)'
                   }} />

              {/* Torn paper backing layer */}
              <div className="absolute -inset-1 bg-blue-100/10 shadow-xl" 
                   style={{
                     clipPath: 'polygon(1% 3%, 15% 1%, 30% 2%, 45% 0%, 60% 1%, 75% 2%, 90% 1%, 99% 5%, 100% 20%, 99% 35%, 100% 50%, 99% 65%, 100% 80%, 98% 95%, 85% 99%, 70% 98%, 55% 100%, 40% 98%, 25% 99%, 10% 97%, 2% 93%, 0% 75%, 1% 60%, 0% 45%, 1% 30%, 0% 15%)',
                   }} 
              />

              {/* Photo container with irregular torn edge */}
              <div className="relative bg-white p-2 shadow-2xl overflow-hidden" 
                   style={{
                     clipPath: 'polygon(2% 2%, 98% 1%, 99% 98%, 1% 99%)',
                   }}>
                {/* Image with blue tint and vintage effect */}
                <div className="relative overflow-hidden aspect-[4/3]" style={{
                  clipPath: 'polygon(1% 2%, 20% 1%, 40% 2%, 60% 0%, 80% 1%, 99% 3%, 100% 25%, 99% 50%, 100% 75%, 98% 98%, 75% 99%, 50% 100%, 25% 99%, 2% 97%, 0% 70%, 1% 40%, 0% 20%)',
                }}>
                  <img
                    src={image}
                    alt={`${month} memory`}
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'sepia(0.3) contrast(1.1) brightness(0.95)',
                      mixBlendMode: 'normal',
                    }}
                  />
                  
                  {/* Blue tint overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none mix-blend-color"
                    style={{ backgroundColor: themeConfig.accent, opacity: 0.3 }}
                  />
                  
                  {/* Grain overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px',
                  }} />

                  {/* Light leak effect */}
                  {(theme === 'bold-joy' || theme === 'sky-movement') && (
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-yellow-200/30 to-transparent blur-2xl" />
                  )}

                  {/* Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
                </div>

                {/* Hand-drawn border lines */}
                <div className="absolute inset-1 pointer-events-none">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <path 
                      d="M5 5 Q50 3, 100 5 T195 5 L195 145 Q150 147, 100 145 T5 145 Z" 
                      fill="none" 
                      stroke="rgba(0,0,0,0.15)" 
                      strokeWidth="1.5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </div>

              {/* Corner pins/buttons - more organic placement */}
              {index % 2 === 0 && (
                <>
                  <div className="absolute -top-3 -left-3 w-5 h-5 rounded-full bg-gradient-to-br from-blue-300/40 to-blue-500/60 shadow-xl border-2 border-white/30" 
                       style={{ transform: 'rotate(25deg)' }} />
                  <div className="absolute -bottom-3 -right-3 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-600/70 shadow-xl border-2 border-white/30"
                       style={{ transform: 'rotate(-15deg)' }} />
                </>
              )}
            </motion.div>

            {/* Handwritten caption */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative z-30 px-4 py-3"
            >
              <p 
                className={`${themeConfig.captionColor} text-center italic leading-relaxed transition-all duration-300`}
                style={{ 
                  fontFamily: "'Georgia', serif",
                  textShadow: theme === 'soft-romance' || theme === 'sky-movement' ? '0 1px 2px rgba(0,0,0,0.2)' : '0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                "{caption}"
              </p>

              {/* Decorative line under caption */}
              <div className="mt-4 flex items-center justify-center gap-2 transition-all duration-500">
                <div className={`w-8 h-px transition-all duration-500 ${theme === 'soft-romance' || theme === 'sky-movement' ? 'bg-slate-600/30' : 'bg-white/30'}`} />
                <div className={`w-1 h-1 rounded-full transition-all duration-500 ${theme === 'soft-romance' || theme === 'sky-movement' ? 'bg-slate-600/30' : 'bg-white/30'}`} />
                <div className={`w-8 h-px transition-all duration-500 ${theme === 'soft-romance' || theme === 'sky-movement' ? 'bg-slate-600/30' : 'bg-white/30'}`} />
              </div>
            </motion.div>

            {/* Lace edge decoration for romantic themes */}
            {theme === 'soft-romance' && (
              <div className="absolute -bottom-4 left-0 right-0 h-8 opacity-20">
                <svg width="100%" height="100%" preserveAspectRatio="none">
                  <pattern id="lace" x="0" y="0" width="40" height="32" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="16" r="8" fill="white" opacity="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#lace)" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Floating dust particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating confetti for celebration months */}
        {(theme === 'bold-joy' || theme === 'bright-playful') && [...Array(15)].map((_, i) => (
          <motion.div
            key={`confetti-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 4}px`,
              height: `${8 + Math.random() * 8}px`,
              backgroundColor: ['#93c5fd', '#bfdbfe', '#dbeafe', '#fde68a', '#fef08a'][Math.floor(Math.random() * 5)],
              opacity: 0.4,
              borderRadius: '2px',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 40 - 20],
              rotate: [0, Math.random() * 360],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Ribbon decoration for special months */}
        {(index === 0 || index === totalMonths - 1) && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
            className="absolute -top-12 right-0 w-20 h-24"
          >
            <div className="relative">
              <div className="absolute top-0 right-0 w-12 h-16 bg-gradient-to-b from-blue-400/40 to-blue-500/40 rounded-sm shadow-lg"
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }} />
              <div className="absolute top-0 right-1 w-10 h-14 bg-gradient-to-b from-blue-300/20 to-transparent" 
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }} />
            </div>
          </motion.div>
        )}

        {/* Washi tape effect for nostalgic month */}
        {theme === 'nostalgic-layers' && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 left-12 right-12 h-8 opacity-40"
            style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(147, 197, 253, 0.3) 10px, rgba(147, 197, 253, 0.3) 20px)',
              borderTop: '1px dashed rgba(255,255,255,0.2)',
              borderBottom: '1px dashed rgba(255,255,255,0.2)',
            }}
          />
        )}

        {/* Paper clip decoration */}
        {index % 4 === 1 && (
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: -15, opacity: 0.7 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            viewport={{ once: true }}
            className="absolute -top-8 left-1/4"
          >
            <svg width="30" height="60" viewBox="0 0 30 60" fill="none">
              <path
                d="M15 5 Q10 5 10 10 L10 40 Q10 50 15 50 Q20 50 20 40 L20 15 Q20 10 15 10 Q10 10 10 15 L10 38"
                stroke="rgba(147, 197, 253, 0.5)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </motion.div>
        )}

        {/* Decorative stickers */}
        {getDecorations()}

        {/* Denim Hearts scattered around */}
        <DenimHeart size={45} className="absolute -top-10 -right-10" delay={0.5} />
        <DenimHeart size={35} className="absolute -bottom-8 -left-12" delay={0.8} />
        <DenimHeart size={30} className="absolute top-1/3 -right-14" delay={1.1} />

        {/* Denim Decorations at corners */}
        <DenimDecorations position="top-left" theme={theme} />
        <DenimDecorations position="top-right" theme={theme} />
        <DenimDecorations position="bottom-left" theme={theme} />
        <DenimDecorations position="bottom-right" theme={theme} />

        {/* Collage Elements */}
        <CollageElements theme={theme} index={index} />

        {/* Blue Flowers scattered around the page */}
        <BlueFlowers 
          variant={theme === 'soft-romance' || theme === 'sky-movement' ? 'light' : 'dark'}
          positions={[
            { top: '-10%', left: `${5 + (index % 3) * 2}%`, rotation: 15 + index * 5, scale: 0.7 },
            { bottom: '-8%', right: `${8 + (index % 4) * 3}%`, rotation: -20 + index * 3, scale: 0.6 },
          ]}
        />

        {/* Month-specific decorations */}
        <MonthDecorations month={month} theme={theme} index={index} />
      </motion.div>
    </section>
  );
}