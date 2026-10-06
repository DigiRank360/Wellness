import { ArrowUp, Clock, Facebook, Instagram, Linkedin, MapPin, Mail, MessageCircle, Phone, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactInfo } from '../../data/content'
import Logo from './Logo'

const socials = [
  ['Facebook', Facebook],
  ['Twitter', Twitter],
  ['LinkedIn', Linkedin],
  ['Instagram', Instagram],
]

const links = [
  ['Home', '/'], ['About Us', '/about'],
  ['Ayurveda', '/services/ayurveda'], ['Gym', '/services/gym'],
  ['Swimming Pool', '/services/swimming-pool'],
  ['Pool Parties & Group', '/services/pool-parties-and-group'], ['Reviews', '/reviews'],
  ['Contact', '/contact'],
]

const hours = [['Monday to Friday', '8.00 - 20.00 hrs'], ['Saturday', '8.00 - 18.00 hrs'], ['Sunday', '9.00 - 14.00 hrs']]

const contacts = [
  [MapPin, contactInfo.address],
  [Phone, contactInfo.phone, `tel:${contactInfo.phone.replace(/\s/g, '')}`],
  [MessageCircle, `WhatsApp: ${contactInfo.whatsapp}`, `https://wa.me/91${contactInfo.whatsapp.replace(/\D/g, '')}`],
  [Mail, contactInfo.email, `mailto:${contactInfo.email}`],
]

const heading = 'mb-5 text-lg font-bold text-brand-dark'

export default function Footer() {
  return (
    <footer className="container-x mt-20 pb-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-mint px-6 pt-12 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute -left-10 top-6 h-32 w-32 rounded-full bg-brand-light/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-teal/20 blur-2xl" />

        <div className="relative grid gap-10 text-center md:grid-cols-2 lg:grid-cols-3 lg:text-left">
          <div className="order-2 md:order-1">
            <h4 className={heading}>Useful Links</h4>
            <ul className="mx-auto grid max-w-xs grid-cols-2 gap-x-8 gap-y-3 text-sm lg:mx-0">
              {links.map(([n, href]) => (
                <li key={n}><Link to={href} className="text-ink/80 transition hover:text-accent">{n}</Link></li>
              ))}
            </ul>
          </div>

          <div className="order-1 flex flex-col items-center md:order-3 md:col-span-2 lg:order-2 lg:col-span-1">
            <Logo className="h-16" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/80">
              Swim, heal, detox, rejuvenate and strengthen with authentic Ayurveda guided by experienced vaidyas.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-ink/80">
              {contacts.map(([Icon, text, href]) => (
                <li key={text} className="flex items-start justify-center gap-2">
                  <Icon size={14} className="mt-0.5 shrink-0 text-accent" />
                  {href ? <a href={href} className="hover:text-accent">{text}</a> : <span>{text}</span>}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3">
              {socials.map(([label, Icon]) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="order-3 md:order-2 lg:order-3 lg:justify-self-end">
            <h4 className={`${heading} flex items-center justify-center gap-2 lg:justify-end`}><Clock size={18} className="text-accent" />Working Time</h4>
            <ul className="mx-auto max-w-xs space-y-3 text-sm lg:mx-0">
              {hours.map(([d, t]) => (
                <li key={d} className="flex justify-between gap-6 text-ink/80"><span>{d}</span><span className="font-medium text-ink">{t}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-12 flex flex-col items-center gap-4 rounded-t-3xl bg-white px-6 py-5 text-xs text-ink/80 sm:flex-row sm:justify-between">
          <span className="text-center sm:text-left">© {new Date().getFullYear()} Yogananda Ayurveda. All Rights Reserved</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-accent text-white shadow-md transition hover:bg-accent-dark sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
          >
            <ArrowUp size={18} />
          </button>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-accent">Terms and conditions</a>
            <span className="h-3 w-px bg-ink/20" />
            <a href="#" className="hover:text-accent">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
