import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return undefined;
    // A section counts as current when it crosses the middle band of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  // Keep the current tab visible when the bar scrolls sideways on small screens.
  useEffect(() => {
    if (!active) return;
    const link = document.querySelector(`nav a[href="#${active}"]`);
    link?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [active]);
  return active;
}

function usePastHero() {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return past;
}

const ids = SECTIONS.map((s) => s.id);

export default function SiteNav({ name }) {
  const active = useActiveSection(ids);
  const pastHero = usePastHero();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        aria-hidden='true'
        className='fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-gradient-to-r from-green-400 to-emerald-500'
        style={{ scaleX: progress }}
      />

      {/* Sticky section nav, shown once the hero is scrolled past */}
      <AnimatePresence>
        {pastHero && (
          <motion.nav
            aria-label='Sections'
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -64, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className='fixed top-1 left-0 right-0 z-50 bg-slate-900/85 backdrop-blur-md border-b border-green-500/20 shadow-lg'
          >
            <div className='max-w-5xl mx-auto px-4 md:px-6 h-14 flex items-center gap-4'>
              <a
                href='#top'
                className='hidden sm:block shrink-0 font-bold text-white hover:text-green-400 transition-colors'
              >
                {name}
              </a>
              <ul className='flex-1 flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar sm:justify-end'>
                {SECTIONS.map((s) => {
                  const isActive = active === s.id;
                  return (
                    <li key={s.id} className='shrink-0'>
                      <a
                        href={`#${s.id}`}
                        aria-current={isActive ? 'location' : undefined}
                        className={`block px-2.5 sm:px-3 py-1.5 rounded-full text-[13px] sm:text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400 ${
                          isActive
                            ? 'bg-green-500/25 text-green-300'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Back to top */}
      <AnimatePresence>
        {pastHero && (
          <motion.a
            href='#top'
            aria-label='Back to top'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className='fixed bottom-5 right-5 z-50 p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl hover:scale-110 transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400'
          >
            <ArrowUp className='w-5 h-5' />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
