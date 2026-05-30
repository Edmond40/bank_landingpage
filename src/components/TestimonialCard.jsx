import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

export default function TestimonialCard({ name, role, avatar, text, rating, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="glass-card p-6 md:p-8 h-full"
    >
      <div className="flex gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <FiStar key={i} className="text-royal-500 fill-royal-500" size={16} />
        ))}
      </div>
      <p className="text-sm md:text-base text-navy-600 leading-relaxed mb-4 italic">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-navy-100" />
        <div>
          <p className="text-sm md:text-base font-semibold text-navy-900">{name}</p>
          <p className="text-xs md:text-sm text-navy-500">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
