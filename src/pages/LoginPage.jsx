import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FiLock, FiUser } from 'react-icons/fi'
import Logo from '../components/Logo'
import loginBg from '../assets/bb4.avif'

export default function LoginPage() {
  const navigate = useNavigate()
  const [accountNumber, setAccountNumber] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!accountNumber.trim() || !password.trim()) {
      setError('Please enter your account number and password.')
      return
    }

    // Validate credentials - only this exact account number and password are allowed
    const validAccountNumber = '4827 9150 6632'
    const validPassword = 'AvN20119741id'

    if (accountNumber !== validAccountNumber || password !== validPassword) {
      setError('Invalid credentials. Please check your account number and password.')
      return
    }

    setLoading(true)
    // Fake auth to simulate a real banking sign-in
    await new Promise((r) => setTimeout(r, 700))

    localStorage.setItem('msb-auth', '1')
    navigate('/receipt', { replace: true })
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <img
        src={loginBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-navy-900/85 via-navy-900/55 to-black/30" />

      {/* subtle brand curves */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-royal-500/20 blur-3xl" />
      <div className="absolute -bottom-28 -right-20 w-[420px] h-[420px] rounded-full bg-brand-black/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-md mx-auto"
        >
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center justify-center mb-6">
              <Logo className="h-16 w-auto" link={false} />
            </div>

            <h1 className="text-xl font-bold text-navy-900 text-center mb-1">Login</h1>
            <p className="text-xs md:text-sm text-navy-500 text-center mb-5">
              Secure access to your international banking.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-700 mb-2">
                  Account Number
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-600" />
                  <input
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    inputMode="numeric"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-royal-400"
                    placeholder="e.g. 4827 9150 6632"
                    autoComplete="username"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-navy-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-600" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-royal-400"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 text-sm px-4 py-3">
                  {error}
                </div>
              )}

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`btn-primary w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Signing in...' : 'Login'}
              </motion.button>

              <p className="text-xs text-navy-500 leading-relaxed pt-2">
                Demo login only. Your credentials are not sent anywhere.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

