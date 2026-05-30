import { motion } from 'framer-motion'
import { FiShield, FiTarget, FiAward } from 'react-icons/fi'
import StatisticCounter from '../components/StatisticCounter'
import { leadership, timeline, stats } from '../data/mockData'
import bbBg from '../assets/bb1.webp'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="section-padding relative text-white overflow-hidden h-[400px]">
        <img src={bbBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/85 via-navy-900/60 to-navy-950/80" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About MerchantSpring Bank
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-navy-200 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            For over 25 years, MerchantSpring Bank has been at the forefront of international banking,
            connecting people and businesses across borders with innovative, secure financial solutions.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: FiTarget,
              title: 'Our Mission',
              text: 'To make international banking accessible, transparent, and secure for everyone — from individual savers to global enterprises.',
            },
            {
              icon: FiShield,
              title: 'Security Commitment',
              text: 'We employ military-grade encryption, 24/7 fraud monitoring, biometric authentication, and rigorous compliance with global banking standards.',
            },
            {
              icon: FiAward,
              title: 'Our History',
              text: 'Founded in 1998 in New York, we have grown to serve 2.4 million customers across 142 countries with offices on four continents.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 text-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-navy-800 to-royal-600 flex items-center justify-center mx-auto mb-3">
                <item.icon className="text-white text-lg md:text-2xl" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-navy-500 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-navy-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-10 md:mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-royal-500/30 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right flex items-start gap-4 md:justify-end">
                  <div className="w-8 h-8 rounded-full bg-royal-500 flex items-center justify-center shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className={i % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16 md:text-left'}>
                    <span className="text-royal-600 font-bold text-base md:text-lg">{item.year}</span>
                    <h3 className="text-base md:text-xl font-bold text-navy-900 mt-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-navy-500 mt-1.5">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-3">Leadership Team</h2>
          <p className="text-sm md:text-base text-navy-500 text-center mb-8 md:mb-12 max-w-xl mx-auto">
            Experienced leaders driving innovation in global banking.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-navy-100">
                  <img src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-navy-900">{person.name}</h3>
                <p className="text-sm text-royal-600 mt-1">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <StatisticCounter key={i} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
