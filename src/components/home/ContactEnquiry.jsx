import { useState } from 'react'
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { contactInfo } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const field = 'w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/50 outline-none transition focus:border-brand-light focus:ring-4 focus:ring-brand-light/20'

const info = [
  [MapPin, 'Address', contactInfo.address, null],
  [Phone, 'Phone', contactInfo.phone, `tel:${contactInfo.phone.replace(/\s/g, '')}`],
  [MessageCircle, 'WhatsApp', contactInfo.whatsapp, `https://wa.me/91${contactInfo.whatsapp.replace(/\D/g, '')}`],
  [Mail, 'Email', contactInfo.email, `mailto:${contactInfo.email}`],
  [Clock, 'Working Hours', 'Mon - Sat: 8:00 - 20:00, Sun: 9:00 - 14:00', null],
]

export default function ContactEnquiry() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <section className="container-x py-20">
      <div className="mb-12"><SectionHeading center tag="Contact & Enquiry" title="Have a question? Talk to us" /></div>

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="relative h-full overflow-hidden rounded-[2rem] bg-brand-dark p-8 text-white md:p-10">
            <div className="absolute -bottom-16 -right-16 h-56 w-56 animate-spin-slow rounded-full border-[26px] border-white/5" />
            <h3 className="relative text-2xl font-bold">Get in touch</h3>
            <p className="relative mt-2 text-sm text-white/70">Visit us, call or send an enquiry. Our team replies within 24 hours.</p>
            <ul className="relative mt-8 space-y-6">
              {info.map(([Icon, label, text, href]) => (
                <li key={label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-teal"><Icon size={20} /></span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/60">{label}</div>
                    {href ? <a href={href} className="text-sm hover:text-teal">{text}</a> : <div className="text-sm">{text}</div>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={submit} className="h-full rounded-[2rem] border border-mint bg-mint/50 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-brand-dark">Send an enquiry</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input required name="name" className={field} placeholder="Full Name*" />
              <input required name="phone" type="tel" className={field} placeholder="Phone Number*" />
              <input required name="email" type="email" className={field} placeholder="Email Address*" />
              <select name="service" className={field} defaultValue="">
                <option value="" disabled>Select service</option>
                <option>Ayurveda</option><option>Gym</option><option>Swimming Pool</option><option>General enquiry</option>
              </select>
              <textarea required name="message" rows="5" className={`${field} sm:col-span-2`} placeholder="Your message*" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button className="btn-primary">Send Enquiry <Send size={16} /></button>
              {sent && <p className="text-sm font-medium text-brand">Thank you! We will contact you soon.</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
