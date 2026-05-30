import {
  FiGlobe,
  FiUsers,
  FiSmartphone,
  FiTrendingUp,
  FiBriefcase,
  FiCreditCard,
  FiShield,
  FiDollarSign,
  FiPieChart,
  FiSend,
  FiLock,
} from 'react-icons/fi'

import pp1 from '../assets/pp1.jpg'
import pp2 from '../assets/pp2.jpg'
import pp3 from '../assets/pp3.avif'
import tt1 from '../assets/tt.avif'
import tt2 from '../assets/tt2.jpeg'
import tt3 from '../assets/tt3.webp'
import tt4 from '../assets/tt4.jpg'

export const stats = [
  { label: 'Global Customers', value: 2400000, suffix: '+' },
  { label: 'International Transfers', value: 89000000, suffix: '+' },
  { label: 'Countries Served', value: 142, suffix: '' },
  { label: 'Trusted Businesses', value: 185000, suffix: '+' },
]

export const features = [
  {
    icon: FiGlobe,
    title: 'International Wire Transfers',
    description: 'Send money across 140+ countries with competitive FX rates and same-day settlement options.',
  },
  {
    icon: FiUsers,
    title: 'Joint Checking Accounts',
    description: 'Flexible joint accounts with shared access controls and real-time transaction notifications.',
  },
  {
    icon: FiShield,
    title: 'Online Banking',
    description: 'Secure 24/7 access to accounts, statements, and transfers from any device worldwide.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Banking',
    description: 'Award-winning mobile app with biometric login, instant alerts, and mobile check deposit.',
  },
  {
    icon: FiTrendingUp,
    title: 'Investment Accounts',
    description: 'Diversified portfolios, advisory services, and global market access for every investor.',
  },
  {
    icon: FiBriefcase,
    title: 'Business Banking',
    description: 'Treasury management, payroll solutions, and corporate cards for growing enterprises.',
  },
]

export const services = [
  { icon: FiCreditCard, title: 'Personal Banking', description: 'Checking, savings, and everyday banking tailored to your lifestyle.' },
  { icon: FiBriefcase, title: 'Corporate Banking', description: 'Enterprise solutions for multinational operations and trade finance.' },
  { icon: FiPieChart, title: 'Wealth Management', description: 'Private banking and bespoke investment strategies for high-net-worth clients.' },
  { icon: FiSend, title: 'Secure Transfers', description: 'Encrypted wire transfers with multi-factor authorization and fraud monitoring.' },
  { icon: FiDollarSign, title: 'Savings Accounts', description: 'Competitive interest rates with flexible terms and automatic savings tools.' },
  { icon: FiLock, title: 'Credit Services', description: 'Premium credit cards, lines of credit, and flexible repayment options.' },
]

export const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Global Trade Co.',
    avatar: pp1,
    text: 'MerchantSpring Bank transformed how we manage international payments. Their platform is intuitive and their support team is exceptional.',
    rating: 5,
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'CFO, Emirates Logistics',
    avatar: pp3,
    text: 'We process millions in cross-border transfers monthly. The reliability and transparency of MSB is unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'Elena Vasquez',
    role: 'Founder, TechVentures',
    avatar: pp2,
    text: 'From startup to scale-up, MerchantSpring has been our banking partner. Their wealth management team helped us grow strategically.',
    rating: 5,
  },
]

export const faqs = [
  {
    question: 'How do I open an international account?',
    answer: 'You can open an account online in minutes. Provide valid ID, proof of address, and complete our secure verification process. Our team will activate your account within 1-2 business days.',
  },
  {
    question: 'What are your wire transfer fees?',
    answer: 'International wire transfers start at $15 for online banking customers. Premium account holders enjoy reduced fees and preferential FX rates.',
  },
  {
    question: 'Is my money protected?',
    answer: 'Yes. MerchantSpring Bank is FDIC insured up to $250,000 per depositor. We also employ bank-grade encryption, 24/7 fraud monitoring, and multi-factor authentication.',
  },
  {
    question: 'Can I manage multiple currencies?',
    answer: 'Absolutely. Hold and exchange 30+ currencies in a single account. Real-time exchange rates and automated conversion rules are available in online banking.',
  },
  {
    question: 'How do I contact customer support?',
    answer: 'Reach us 24/7 via phone, live chat, or secure messaging in the app. Premium clients have access to dedicated relationship managers.',
  },
]

export const leadership = [
  { name: 'James Whitfield', role: 'Chief Executive Officer', avatar: tt1 },
  { name: 'Maria Santos', role: 'Chief Financial Officer', avatar: tt2 },
  { name: 'David Chen', role: 'Chief Technology Officer', avatar: tt3 },
  { name: 'Amira Hassan', role: 'Head of Global Operations', avatar: tt4 },
]

export const timeline = [
  { year: '1998', title: 'Founded in New York', description: 'MerchantSpring Bank established as a boutique international banking firm.' },
  { year: '2008', title: 'Global Expansion', description: 'Opened offices in London, Dubai, Singapore, and Hong Kong.' },
  { year: '2015', title: 'Digital Banking Launch', description: 'Launched award-winning online and mobile banking platforms.' },
  { year: '2022', title: '2M+ Customers', description: 'Reached milestone of 2 million global customers across 140 countries.' },
  { year: '2026', title: 'Next Generation Banking', description: 'AI-powered insights, instant global transfers, and sustainable finance initiatives.' },
]

export const branches = [
  { city: 'New York', address: '350 Fifth Avenue, NY 10118', phone: '+1 (212) 555-0100' },
  { city: 'London', address: '1 Canada Square, Canary Wharf, E14 5AB', phone: '+44 20 7555-0200' },
  { city: 'Dubai', address: 'DIFC Gate Village 3, Dubai, UAE', phone: '+971 4 555-0300' },
  { city: 'Singapore', address: '8 Marina View, Asia Square Tower 1', phone: '+65 6555-0400' },
]
