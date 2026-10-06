import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-x py-28 text-center">
      <div className="text-8xl font-extrabold text-gradient">404</div>
      <h1 className="mt-4 text-2xl font-bold text-brand-dark">Page not found</h1>
      <p className="mt-2 text-ink/70">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary mt-8">Back to Home</Link>
    </section>
  )
}
