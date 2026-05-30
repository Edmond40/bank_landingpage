import { Link } from 'react-router-dom'

export default function Logo({ className = 'h-12 md:h-14 w-auto', link = true }) {
  const img = (
    <img
      src="/logo.png"
      alt="MerchantSpring Bank"
      className={className}
    />
  )

  if (link) {
    return (
      <Link to="/" className="inline-flex shrink-0">
        {img}
      </Link>
    )
  }

  return img
}
