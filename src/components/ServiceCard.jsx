import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-5 md:p-6 flex flex-col h-full group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-navy-800 to-royal-600 flex items-center justify-center">
          <Icon className="text-white text-base md:text-xl" />
        </div>
        <FiArrowRight className="text-navy-300 group-hover:text-royal-500 group-hover:translate-x-1 transition-all" />
      </div>
      <h3 className="text-base md:text-lg font-bold text-navy-900 mb-1.5">{title}</h3>
      <p className="text-xs md:text-sm text-navy-500 flex-grow leading-relaxed">{description}</p>
    </motion.div>
  )
}
