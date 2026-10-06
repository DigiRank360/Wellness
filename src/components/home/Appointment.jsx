import { useState } from 'react'
import { IMG } from '../../data/content'
import Reveal from '../ui/Reveal'

const field = 'w-full rounded-xl border border-transparent bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/50 outline-none transition focus:border-accent focus:ring-4 focus:ring-white/30'

export default function Appointment() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <section className="container-x pb-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <img src={IMG.doctor} alt="Ayurvedic doctor" className="h-full min-h-[380px] w-full rounded-[2rem] object-cover" />
        </Reveal>
        <Reveal delay={150}>
          <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand-light to-teal bg-[length:200%_200%] p-8 text-white animate-gradient-x md:p-12">
            <div className="absolute -right-16 -top-16 h-52 w-52 animate-spin-slow rounded-full border-[24px] border-white/10" />
            <span className="relative mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] uppercase tracking-widest">Appointment</span>
            <h2 className="relative mb-8 text-3xl font-bold leading-snug md:text-4xl">Begin your healing journey today</h2>
            <form className="relative grid gap-4 sm:grid-cols-2" onSubmit={submit}>
              <input required className={field} placeholder="Full Name*" />
              <input required className={field} placeholder="Email Address*" type="email" />
              <select className={field} defaultValue="">
                <option value="" disabled>Select service</option>
                <option>Ayurveda</option><option>Gym</option><option>Swimming Pool</option>
              </select>
              <input className={field} type="date" />
              <textarea className={`${field} sm:col-span-2`} rows="4" placeholder="Write a message" />
              <button className="btn-accent w-fit">Send Message</button>
              {sent && <p className="self-center text-sm font-medium">Thank you! We will contact you soon.</p>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
