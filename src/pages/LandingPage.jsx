import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import ServiceCard from '../components/ServiceCard'
import StatisticCounter from '../components/StatisticCounter'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'
import { stats, features, services, testimonials, faqs } from '../data/mockData'

export default function LandingPage() {
  return (
    <>
      <HeroSection />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <StatisticCounter key={i} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-navy-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
              Banking Features Built for You
            </h2>
            <p className="text-sm md:text-base text-navy-500 max-w-2xl mx-auto">
              Everything you need for modern international banking in one secure platform.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
              Our Banking Services
            </h2>
            <p className="text-sm md:text-base text-navy-500 max-w-2xl mx-auto">
              Comprehensive financial solutions for individuals and enterprises worldwide.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What Our Clients Say</h2>
            <p className="text-sm md:text-base text-navy-300 max-w-2xl mx-auto">
              Trusted by businesses and individuals across 140+ countries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-navy-500">Find answers to common banking questions.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  )
}
