import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMessageCircle, FiMapPin, FiClock } from 'react-icons/fi'
import { branches } from '../data/mockData'
import contactBg from '../assets/bb2.jpg'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="pt-20">
      <section className="section-padding relative text-white overflow-hidden h-[400px]">
        <img src={contactBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/50 to-navy-950/75" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-sm md:text-base text-navy-200 max-w-2xl mx-auto">
            Our team is available 24/7 to assist with your banking needs worldwide.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: FiPhone, title: 'Banking Hotline', detail: '+1 (800) 555-MSB1', sub: 'Available 24/7' },
            { icon: FiMail, title: 'Email Support', detail: 'info@merchantspringbank.com', sub: 'Response within 2 hours' },
            { icon: FiMessageCircle, title: 'Live Chat', detail: 'Start a conversation', sub: 'Average wait: 30 seconds' },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 text-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-royal-100 flex items-center justify-center mx-auto mb-3">
                <card.icon className="text-royal-600 text-lg md:text-2xl" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-navy-900 mb-1.5">{card.title}</h3>
              <p className="text-sm md:text-base text-navy-900 font-medium">{card.detail}</p>
              <p className="text-xs md:text-sm text-navy-500 mt-1">{card.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 md:mb-6">Send a Message</h2>
            {submitted ? (
              <div className="p-6 rounded-xl bg-royal-50 text-royal-700 text-center font-medium">
                Thank you! Your message has been received. We&apos;ll respond shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: 'name', label: 'Full Name', type: 'text' },
                  { key: 'email', label: 'Email Address', type: 'email' },
                  { key: 'subject', label: 'Subject', type: 'text' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-sm font-medium text-navy-700">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full mt-1 px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:ring-2 focus:ring-royal-500 outline-none"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-navy-700">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full mt-1 px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:ring-2 focus:ring-royal-500 outline-none resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            )}
          </motion.div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 md:mb-6">Branch Locations</h2>
            <div className="space-y-4">
              {branches.map((branch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-6 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-royal-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">{branch.city}</h3>
                    <p className="text-sm text-navy-500 mt-1">{branch.address}</p>
                    <p className="text-sm text-royal-600 font-medium mt-2">{branch.phone}</p>
                    <p className="text-xs text-navy-400 flex items-center gap-1 mt-1">
                      <FiClock size={12} /> Mon–Fri 9AM–6PM local time
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4 md:mb-6 text-center">Global Presence</h2>
          <div className="glass-card overflow-hidden h-80 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-royal-50 flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="text-royal-500 mx-auto mb-4" size={48} />
                <p className="text-navy-600 font-medium">Interactive Map — New York · London · Dubai · Singapore</p>
                <p className="text-sm text-navy-400 mt-2">Visit any of our international banking centers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
