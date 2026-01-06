import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ScrapbookMonth } from './components/ScrapbookMonth';
import { useDebounce } from './hooks/useDebounce';
import { ChevronDown } from 'lucide-react';
import { BlueFlowers } from './components/BlueFlowers';
import januaryImage from 'figma:asset/cdeeb447c928647f069e516bfe3e8008be1c95ef.png';
import februaryImage from 'figma:asset/0e0b11aab72d017c64c7d4af4d8bea47c70bcf68.png';
import marchImage from 'figma:asset/a061c8cff52bd59a111daf488af804bc2b4c82ab.png';
import aprilImage from 'figma:asset/9af4faef1c149e61e427b3c51a8fcc21679e3f7e.png';
import mayImage from 'figma:asset/cd3ad031952d2686b52d4a01873be46ceab70119.png';
import juneImage from 'figma:asset/4888869049693c5be6914c3cfa8412c1043fc259.png';
import julyImage from 'figma:asset/3c7aff2e3af0e96268f27b7fc1c2b5a193eef289.png';
import augustImage from 'figma:asset/089954b99f1d18f44a98c51d9698f268ef07ca7d.png';
import septemberImage from 'figma:asset/dce9acf692070ca8f0cb7ad73d509b6847daae2c.png';
import octoberImage from 'figma:asset/caf214876027c347426e2dfdc2da3bd43a777446.png';
import novemberImage from 'figma:asset/fb8f58cf977d37893b40d0765bb2a158402ff358.png';
import decemberImage from 'figma:asset/a89e3d0d1cf05c0cb4bb3070355ba3116b10a460.png';

const months = [
  {
    month: 'January',
    description: 'heart shape',
    caption: 'the time nga official najod ta! it sure felt like yesterday :3',
    image: januaryImage,
    theme: 'deep-winter',
    rotation: -3,
  },
  {
    month: 'February',
    description: 'letters and valentines',
    caption: 'where i gave you a letter the first time as an official couple :D',
    image: februaryImage,
    theme: 'soft-romance',
    rotation: 2,
  },
  {
    month: 'March',
    description: 'ferris wheel',
    caption: 'where we celebrated our first LCO as couples! na meet sab nako imo friends and got along with them!',
    image: marchImage,
    theme: 'light-denim',
    rotation: -2,
  },
  {
    month: 'April',
    description: 'barbeque and soup',
    caption: 'i had a rough day here but u came in clutch jod babb gi hagad ko nimo og dinner and u paid most of the stuff kay broke ko ana nga time sjdhsjhd babawi aq ng sobra soon!',
    image: aprilImage,
    theme: 'bright-playful',
    rotation: 3,
  },
  {
    month: 'May',
    description: 'cake',
    caption: 'GRABEE kaayo imo pag prep sa bday nako! suprised kaayo ko kay first time ko naka experience na e suprise ko, I LOVE THE CAKE, THE PRESENTS ACKKK nice kaayo kay every gift na gi hatag nimo sa snacks shows how you know me so well! this was also our first major fight kay nakalimot kos atoa mootmoot, u forgiving despite still being upset shows that you\'re so understanding and acting maturely  towards the situation :3',
    image: mayImage,
    theme: 'sky-movement',
    rotation: -4,
  },
  {
    month: 'June',
    description: 'coat and hair',
    caption: 'gwapa kaayo ka here with ur smol haircut!',
    image: juneImage,
    theme: 'calm-summer',
    rotation: 2,
  },
  {
    month: 'July',
    description: 'coffee',
    caption: 'gi hagad taka og date diri for our mootmoot! unya tong first na cafe ato na adtoan kay way lami since tam-is kaayo! after ana kay nag janata cafe ta since gi gutom pa uuuu. i was ur study buddy here din since exams where nearing jdhshjd.',
    image: julyImage,
    theme: 'bold-joy',
    rotation: -3,
  },
  {
    month: 'August',
    description: 'pancakes',
    caption: 'WE HAD OUR FIRST PANCAKES TOGETHER HERE!',
    image: augustImage,
    theme: 'midnight-depth',
    rotation: 4,
  },
  {
    month: 'September',
    description: 'vintage letter and origami flower',
    caption: 'OMG september naaaaa, you giving me arts and crafts stuff always make me appreciate u moreee! PLEASE DONT STOP!!!',
    image: septemberImage,
    theme: 'muted-gray',
    rotation: -2,
  },
  {
    month: 'October',
    description: 'marshmallow',
    caption: ' this mootmoot nag make ka og sweets table! OMG ALL OF IT WERE YUMMY GRABE AKO EATTTT!! we also watched tong show nga "Mutya ng Section E"',
    image: octoberImage,
    theme: 'nostalgic-layers',
    rotation: 3,
  },
  {
    month: 'November',
    description: 'vintage flower',
    caption: 'RAAAAHHHHH gi hagad taka og sangka hereee! i also got to meet ur cmns friends again! they\'re so fun kauban! also gave u a miraflora flower because u want it sm!',
    image: novemberImage,
    theme: 'warm-gratitude',
    rotation: -3,
  },
  {
    month: 'December',
    description: 'xmas and flowers',
    caption: 'gave u a flower kahit smol lang :3 i also want to do my best to give u flower each month para mapuno imo flower journal og flowers nako! u also gave me some kind of perfume capsule! convenient kaayo until now!',
    image: decemberImage,
    theme: 'snow-glow',
    rotation: 0,
  },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstMonthRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [currentMonth, setCurrentMonth] = useState(0);
  const debouncedScrollYProgress = useDebounce(scrollYProgress, 100);

  useEffect(() => {
    const totalMonths = months.length;
    const monthIndex = Math.floor(debouncedScrollYProgress * totalMonths);
    setCurrentMonth(monthIndex);
  }, [debouncedScrollYProgress]);

  const scrollToFirstMonth = () => {
    firstMonthRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Opening */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a2332] via-[#2d3f5f] to-[#1a2332] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 transition-opacity duration-700">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"60\\" height=\\"60\\" viewBox=\\"0 0 60 60\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"1\\"%3E%3Cpath d=\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        {/* Skip to End Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-50 mr-8">
          <motion.button
            onClick={() => {
              const sections = document.querySelectorAll('section');
              sections[sections.length - 1].scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 transition-all duration-500 ease-out shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
            aria-label="Skip to end"
          >
            <ChevronDown className="w-6 h-6 text-white rotate-[-90deg] transition-transform duration-300" />
          </motion.button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center z-10 px-6 relative"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            className="relative z-20"
          >
            <h1 className="text-white mb-6 px-8 py-4 transition-all duration-300" style={{ fontFamily: "'Courier New', monospace" }}>
              Our Year in Blue
            </h1>
          </motion.div>
          <p className="text-blue-200/80 max-w-md mx-auto px-6 py-3 relative z-20 transition-all duration-300" style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.05em' }}>
            A scrapbook of memories
          </p>
          <motion.button
            onClick={scrollToFirstMonth}
            className="mt-12 text-blue-300/60 cursor-pointer hover:text-blue-200 transition-all duration-500 ease-out"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to first month"
          >
            <ChevronDown className="w-8 h-8 mx-auto transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Floating dust particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Blue flowers decorations */}
        <BlueFlowers 
          variant="dark" 
          positions={[
            { top: '8%', left: '6%', rotation: 15, scale: 1 },
            { top: '15%', right: '10%', rotation: -25, scale: 0.8 },
            { bottom: '12%', left: '8%', rotation: 30, scale: 0.9 },
            { bottom: '18%', right: '12%', rotation: -15, scale: 1.1 },
          ]}
        />
      </section>

      {/* Months */}
      {months.map((month, index) => (
        <div key={month.month} ref={index === 0 ? firstMonthRef : null}>
          <ScrapbookMonth
            month={month.month}
            description={month.description}
            caption={month.caption}
            image={month.image}
            theme={month.theme}
            rotation={month.rotation}
            index={index}
            totalMonths={months.length}
          />
        </div>
      ))}

      {/* Closing */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1923] via-[#1a2d47] to-[#0f1923] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 transition-opacity duration-700">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          }} />
        </div>

        {/* Back to December Arrow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-50 ml-8">
          <motion.button
            onClick={() => {
              const sections = document.querySelectorAll('section');
              sections[sections.length - 2].scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 transition-all duration-500 ease-out shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            aria-label="Back to December"
          >
            <ChevronDown className="w-6 h-6 text-white rotate-[90deg] transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Back to Top Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-50 mr-8">
          <motion.button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 transition-all duration-500 ease-out shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            aria-label="Back to top"
          >
            <ChevronDown className="w-6 h-6 text-white rotate-[180deg] transition-transform duration-300" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center z-10 px-6 max-w-2xl"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-12 shadow-2xl relative transition-all duration-500">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-blue-300/30 transition-all duration-300" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-blue-300/30 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-blue-300/30 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-blue-300/30 transition-all duration-300" />

            <h2 className="text-white mb-8 px-6 py-3 relative z-20 transition-all duration-300" style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.1em' }}>
              One year.
            </h2>
            <p className="text-blue-200/90 mb-6 px-6 py-2 relative z-20 transition-all duration-300" style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.05em' }}>
              Twelve months.
            </p>
            <p className="text-blue-300/80 px-6 py-2 relative z-20 transition-all duration-300" style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.05em' }}>
              A lifetime full of cherished memories.
            </p>

            {/* Decorative elements */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transition-all duration-500" />
              <div className="w-2 h-2 rounded-full bg-blue-400/50 transition-all duration-500" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transition-all duration-500" />
            </div>
          </div>
        </motion.div>

        {/* Snow particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}

        {/* Blue flowers decorations */}
        <BlueFlowers 
          variant="dark" 
          positions={[
            { top: '10%', left: '5%', rotation: -20, scale: 0.9 },
            { top: '12%', right: '7%', rotation: 35, scale: 0.7 },
            { bottom: '10%', left: '7%', rotation: 15, scale: 1 },
            { bottom: '15%', right: '6%', rotation: -30, scale: 0.85 },
          ]}
        />
      </section>
    </div>
  );
}