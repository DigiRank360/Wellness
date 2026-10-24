import { Mail, MessageCircle, Phone } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import { contactInfo } from '../data/content'

const updatedOn = '23 October 2026'

export default function PolicyPage({ title, subtitle, image, sections }) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} image={image} crumbs={[title]} />
      <section className="container-x py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-sm text-ink/60">Last updated: {updatedOn}</p>
          <div className="space-y-8">
            {sections.map(({ heading, paragraphs, bullets }) => (
              <section key={heading}>
                <h2 className="text-xl font-bold text-brand-dark md:text-2xl">
                  {heading}
                </h2>
                {paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-7 text-ink/75">
                    {paragraph}
                  </p>
                ))}
                {bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-ink/75">
                    {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-mint p-6 md:p-8">
            <h2 className="text-xl font-bold text-brand-dark">Contact us</h2>
            <p className="mt-2 leading-7 text-ink/75">
              If you have a question about this page, please get in touch with
              Yogananda Wellness.
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-6">
              <a className="inline-flex items-center gap-2 hover:text-accent" href={`mailto:${contactInfo.email}`}>
                <Mail size={16} /> {contactInfo.email}
              </a>
              {contactInfo.phones.map((phone) => (
                <a key={phone} className="inline-flex items-center gap-2 hover:text-accent" href={`tel:${phone.replace(/\s/g, '')}`}>
                  <Phone size={16} /> {phone}
                </a>
              ))}
              <a
                className="inline-flex items-center gap-2 hover:text-accent"
                href={`https://wa.me/91${contactInfo.whatsapp.replace(/\D/g, '')}`}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
