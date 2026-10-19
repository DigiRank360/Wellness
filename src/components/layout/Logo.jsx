import logoImage from '../../assets/logo.png'

export default function Logo({ className = 'h-12' }) {
  return (
    <img
      src={logoImage}
      alt="Yogananda Wellness"
      className={`block w-auto object-contain mix-blend-multiply ${className}`}
    />
  )
}
