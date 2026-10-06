import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTABanner({ title = 'Ready to begin your wellness journey?', text = 'Book a consultation with our team today.' }) {
  return (
    <section className="container-x py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand via-brand-light to-teal bg-[length:200%_200%] p-10 text-white animate-gradient-x md:p-14">
          <div className="absolute -right-12 -top-12 h-52 w-52 animate-spin-slow rounded-full border-[22px] border-white/10" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
              <p className="mt-2 text-white/85">{text}</p>
            </div>
            <Link to="/contact" className="btn-accent shrink-0">Book Appointment <ArrowRight size={16} /></Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
