import { motion } from 'framer-motion'

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group glass-card p-6 md:p-8 relative overflow-hidden cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-royal-500/0 to-royal-500/0 group-hover:from-royal-500/5 group-hover:to-navy-900/5 transition-all duration-500 rounded-2xl" />
      <div className="absolute -inset-1 bg-gradient-to-r from-royal-500/0 via-royal-500/20 to-royal-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      <div className="relative">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-navy-900 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white text-lg md:text-2xl" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-sm md:text-base text-navy-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
