import { motion } from 'framer-motion'
import { FiCheck, FiClock, FiShield, FiSend } from 'react-icons/fi'

const steps = [
  { label: 'Initiated', icon: FiSend },
  { label: 'Processing', icon: FiClock },
  { label: 'Verified', icon: FiShield },
  { label: 'Approved', icon: FiCheck },
]

export default function TransactionStepper({ currentStep = 3 }) {
  return (
    <div className="flex items-center justify-between w-full max-w-lg mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.15 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                i <= currentStep
                  ? 'bg-royal-500 text-white'
                  : 'bg-navy-100 text-navy-400'
              }`}
            >
              <step.icon size={18} />
            </motion.div>
            <span className={`text-xs mt-2 font-medium ${i <= currentStep ? 'text-royal-600' : 'text-navy-400'}`}>
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-2 mb-6 ${
                i < currentStep ? 'bg-royal-500' : 'bg-navy-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
