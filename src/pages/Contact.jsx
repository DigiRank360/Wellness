import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Appointment from '../components/home/Appointment'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import { IMG, contactInfo } from '../data/content'

const cards = [
  [MapPin, 'Address', contactInfo.address],
  [Phone, 'Phone', contactInfo.phone],
  [Mail, 'Email', contactInfo.email],
  [Clock, 'Working Hours', 'Mon - Sat: 8:00 - 20:00'],
]

export default function Contact() {
  return (
    <>
      <div className="pt-6">
        <PageHero title="Contact Us" subtitle="We are here to help you begin your wellness journey." image={IMG.contact} crumbs={['Contact']} />
      </div>
      <section className="container-x pb-20 pt-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="card-lift h-full rounded-3xl bg-mint p-7 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-white text-accent"><Icon size={24} /></div>
                <h3 className="font-bold text-brand-dark">{t}</h3>
                <p className="mt-2 text-sm text-ink/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Appointment />
    </>
  )
}
