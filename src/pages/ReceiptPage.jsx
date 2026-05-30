import { motion } from 'framer-motion'
import { FiPrinter, FiDownload, FiShield, FiLock, FiCheckCircle } from 'react-icons/fi'
import Logo from '../components/Logo'
import TransferTable from '../components/TransferTable'
import TransactionStepper from '../components/TransactionStepper'

const transferDetails = [
  { label: 'Date of Transfer', value: '29th May 2026' },
  { label: 'Time', value: '10:30 AM USA Time' },
  { label: 'Amount Wired', value: '€709,000' },
  { label: 'Transfer Reference', value: 'MSB-WT-2026-709000-8847' },
  { label: 'SWIFT/BIC Code', value: 'MSBNUS33XXX' },
  { label: 'Transfer Type', value: 'International Wire Transfer (SWIFT)' },
]

const recipientDetails = [
  { label: 'Account Name', value: 'Alison Felicia & AhrensVolker' },
  { label: 'Account Type', value: 'Joint Checking Account' },
  { label: 'Account Number', value: '4827 9150 6632' },
  { label: 'Routing Number', value: '091000019' },
  { label: 'Branch', value: 'Minneapolis Financial District Branch' },
 
]

const senderDetails = [
  { label: 'Sending Bank', value: 'MerchantSpring Bank N.A.' },
  { label: 'Sender Account', value: 'MSB Premium International · **** 7291' },
  { label: 'Origin Branch', value: 'New York International Banking Center' },
  { label: 'Authorization Code', value: 'AUTH-MSB-20260529-1030' },
]

export default function ReceiptPage() {
  const handlePrint = () => window.print()

  return (
    <div className="receipt-page min-h-screen bg-navy-100 py-24 px-4">
      <div className="max-w-4xl mx-auto px-0">
        <div className="no-print flex flex-wrap gap-3 justify-end mb-6">
          <button onClick={handlePrint} className="btn-secondary text-sm py-2.5">
            <FiPrinter /> Print Receipt
          </button>
          <button className="btn-primary text-sm py-2.5">
            <FiDownload /> Download PDF
          </button>
        </div>

        <motion.div
          id="receipt-print-area"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="receipt-document relative bg-white text-navy-900 shadow-2xl rounded-sm overflow-hidden"
        >
          <div
            className="receipt-watermark absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]"
            aria-hidden
          >
            <span className="text-[120px] font-black rotate-[-25deg] tracking-widest">MERCHANTSPRING</span>
          </div>

          <div className="receipt-inner relative p-5 md:p-12 border border-navy-200">
            <div className="receipt-header flex items-start justify-between border-b-2 border-navy-900 pb-6 mb-8">
              <div>
                <p className="text-[10px] md:text-xs tracking-widest text-navy-500 uppercase">Official Banking Document</p>
                <h1 className="text-lg md:text-3xl font-black tracking-tight mt-1 md:mt-2 text-navy-900">
                  INTERNATIONAL WIRE TRANSFER
                </h1>
                <p className="text-xs md:text-sm text-navy-500 mt-0.5 md:mt-1">Transaction Confirmation Receipt</p>
              </div>
              <div className="text-right">
                <Logo className="receipt-logo h-16 md:h-20 w-auto ml-auto mb-1" link={false} />
                <p className="text-xs text-navy-500">N.A. · Member FDIC</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-8 no-print">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-royal-50 border border-royal-200 text-royal-700 rounded-full text-xs md:text-sm font-semibold">
                <FiCheckCircle size={14} /> Transaction Approved
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-navy-50 text-navy-600 rounded-full text-[10px] md:text-xs">
                <FiShield size={12} /> SSL Secured
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-navy-50 text-navy-600 rounded-full text-[10px] md:text-xs">
                <FiLock size={12} /> Encrypted
              </span>
            </div>

            <div className="print-only hidden mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 border-2 border-royal-600 text-royal-700 font-bold text-sm">
                ✓ TRANSACTION APPROVED
              </span>
            </div>

            <div className="mb-10 no-print">
              <TransactionStepper currentStep={3} />
            </div>

            <TransferTable title="Transfer Details" rows={transferDetails} />
            <TransferTable title="Recipient Details" rows={recipientDetails} />
            <TransferTable title="Sender Details" rows={senderDetails} />

            <div className="receipt-footer-row mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-navy-200 pt-8">
              <div className="relative shrink-0">
                <div className="receipt-stamp w-32 h-32 rounded-full border-4 border-royal-600/30 flex items-center justify-center -rotate-12">
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-royal-700 uppercase tracking-wider">Digital</p>
                    <p className="stamp-approved text-sm font-black text-navy-900">APPROVED</p>
                    <p className="text-[9px] text-navy-500">May 29, 2026</p>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right text-xs text-navy-500 max-w-md">
                <p className="font-mono text-navy-700 mb-2">VERIFICATION: MSB-SHA256-7F3A9B2C1D4E5F6A</p>
                <p>
                  This document serves as a digital confirmation of the submitted international transfer request.
                </p>
              </div>
            </div>

            <div className="receipt-disclaimer mt-8 pt-6 border-t border-navy-100 text-[10px] text-navy-400 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> This is a demonstration document for MerchantSpring Bank (fictional).
                MerchantSpring Bank N.A. is not a real financial institution. Wire transfers are subject to verification,
                compliance review, and applicable international banking regulations. For inquiries, contact support@merchantspring.bank
                or call +1 (800) 555-MSB1. Document ID: DOC-WT-20260529-709000.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
