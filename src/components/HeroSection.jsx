import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGlobe, FiShield, FiSend } from 'react-icons/fi'
import Logo from './Logo'
import heroBg from '../assets/photo_2026-05-26_12-35-08.jpg'

const highlights = [
  { icon: FiGlobe, label: '142 Countries', sub: 'Global banking network' },
  { icon: FiShield, label: 'Bank-Grade Security', sub: '256-bit encryption' },
  { icon: FiSend, label: 'Wire Transfers', sub: 'Same-day international' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover brightness-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/75 via-navy-900/50 to-navy-950/70" />
      <div className="absolute inset-0 world-map-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-royal-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-900/8 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4 border border-white/20 backdrop-blur-sm">
              Trusted by 2.4M+ Global Customers
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 font-serif">
              International Banking{' '}
              <span className="bg-gradient-to-r from-white to-royal-200 bg-clip-text text-transparent">Made Simple</span>
            </h1>
            <p className="text-base sm:text-lg text-navy-100 mb-6 max-w-xl leading-relaxed">
              Experience secure global banking with instant transfers, multi-currency accounts,
              and world-class financial services — all in one premium platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="btn-primary">
                Get Started <FiArrowRight />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            <div className="glass-card p-6 md:p-8 shadow-2xl shadow-navy-900/15 w-full max-w-md text-center">
              <Logo className="h-20 md:h-28 w-auto mx-auto" link={false} />
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="h-px flex-1 bg-white/30 max-w-8" />
                <span className="text-[10px] font-semibold tracking-[0.3em] text-white uppercase">
                  Global Finance
                </span>
                <span className="h-px flex-1 bg-white/30 max-w-8" />
              </div>
              <p className="mt-3 text-xs md:text-sm text-white/80 leading-relaxed">
                Your partner for personal, corporate, and international banking across 140+ markets.
              </p>
            </div>

            {highlights.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.4 + i * 0.15 },
                  scale: { delay: 0.4 + i * 0.15 },
                  y: { repeat: Infinity, duration: 3.5 + i * 0.5, ease: 'easeInOut' },
                }}
                className={`absolute bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3 rounded-xl shadow-lg hidden sm:flex items-center gap-3 ${
                  i === 0 ? 'top-[8%] -left-4 lg:-left-8' : i === 1 ? 'top-[45%] -right-4 lg:-right-10' : 'bottom-[12%] -left-2'
                }`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                  <card.icon className="text-white" size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">{card.label}</p>
                  <p className="text-xs text-white/70">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
