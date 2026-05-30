import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiShield, FiMail, FiPhone } from 'react-icons/fi'
import Logo from './Logo'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/receipt', label: 'Transfer Receipt' },
  { to: '/contact', label: 'Contact' },
]

const securityLinks = [
  'Privacy Policy',
  'Terms of Service',
  'Security Center',
  'Fraud Protection',
]

export default function Footer() {
  return (
    <footer className="site-footer bg-navy-950 text-navy-200">
      <div className="max-w-7xl mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="inline-block bg-white rounded-lg px-3 py-2 mb-4">
              <Logo className="h-12 w-auto" link={false} />
            </div>
            <p className="text-sm text-navy-400 leading-relaxed">
              International banking made simple. Trusted by millions of customers and businesses worldwide.
            </p>
            <div className="flex gap-3 mt-6">
              {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-royal-600 flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-royal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-semibold text-white mb-3 flex items-center gap-2">
              <FiShield className="text-royal-400 shrink-0" size={16} /> Security
            </h4>
            <ul className="space-y-2">
              {securityLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-royal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <FiPhone className="text-royal-400 shrink-0" />
                <span>+1 (800) 555-MSB1</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-royal-400 shrink-0" />
                <span>info@merchantspringbank.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800">
          <p className="text-xs text-navy-500 leading-relaxed text-center max-w-4xl mx-auto">
            <strong className="text-navy-400">Banking Disclaimer:</strong> MerchantSpring Bank is a fictional
            institution created for demonstration purposes. This website does not represent a real bank.
            Deposits are not FDIC insured in this demo. All data shown is simulated. © 2026 MerchantSpring Bank.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
