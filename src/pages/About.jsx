import { Eye, HeartHandshake, Leaf, Target, UserRound } from 'lucide-react'
import CTABanner from '../components/ui/CTABanner'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import founderImage from '../assets/founder.png'
import monicaImage from '../assets/monicaSingh.png'
import pradeepImage from '../assets/pradeep-raghav.png'
import sanidhyaImage from '../assets/sanidhya.png'
import asifImage from '../assets/asif.png'
import sanjeevImage from '../assets/sanjeevJaitely.png'
import mukundImage from '../assets/mukundRaghav.png'
import { IMG } from '../data/content'

const founderName = 'Dr Devendra Singh Raghav'

const values = [
  [Leaf, 'Authenticity', 'Classical Ayurvedic methods with genuine herbal formulations.'],
  [HeartHandshake, 'Compassion', 'Every guest is treated with care, respect and attention.'],
  [Target, 'Results', 'Personalised plans with measurable progress.'],
  [Eye, 'Transparency', 'Clear pricing, honest advice and no unnecessary treatments.'],
]

const team = [
  founderName,
  'Mr Sanjeev Jaitely',
  'Dr Monica Singh',
  'Dr Sanidhya',
  'Dr Pradeep Raghav',
  'Mr Asif',
  'Ms Pooja',
  'Mr Mukund Raghav'
]

const teamImages = {
  [founderName]: founderImage,
  'Mr Sanjeev Jaitely': sanjeevImage,
  'Dr Monica Singh': monicaImage,
  'Dr Sanidhya': sanidhyaImage,
  'Dr Pradeep Raghav': pradeepImage,
  'Mr Asif': asifImage,
  'Mr Mukund Raghav': mukundImage,
}

const serviceGroups = [
  {
    title: 'Physical Wellness',
    services: [
      ['Ayurveda', 'Deep rest, sleep hygiene, rejuvenation, tissue repair and detox programs.'],
      ['Panchakarma', 'Personalised Panchakarma services planned as advised by Dr Sanidhya.'],
      ['Naturopathy', 'Traditional cleansing and detox, mud therapy and wax therapy.'],
      ['Gymnasium & Fitness Training', 'Fitness training and strength building to support an active lifestyle.'],
      ['Yoga', 'Yoga practices to nurture the body, mind and spirit.'],
    ],
  },
  {
    title: 'Physiotherapy',
    services: [
      ['Strength Building', 'Build strength with guided, goal-oriented movement.'],
      ['Desk Ergonomics', 'Practical guidance to make desk setups more comfortable.'],
      ['Movement & Deskercise', 'Simple movement practices and desk-based exercises for the day.'],
    ],
  },
  {
    title: 'Mental & Emotional Wellness',
    services: [
      ['Mindfulness & Meditation', 'Make space for calm, awareness and a more balanced day.'],
      ['Digital Detox', 'Create intentional breaks from screens and digital distractions.'],
      ['Calming the Mind', 'Quiet reflection through book reading and mindful activities.'],
      ['Emotional Intelligence', 'Build awareness of emotions and healthier ways to respond.'],
      ['Stress Management', 'Explore practices that support relaxation and wellbeing.'],
    ],
  },
  {
    title: 'Aqua Therapy',
    services: [
      ['Swimming Pool', 'Swimming and aqua-based wellness in a refreshing pool environment.'],
    ],
  },
]

export default function About() {
  return (
    <>
      <PageHero
        title="Yogananda Wellness"
        subtitle="Ayurveda | Naturopathy | Physiotherapy | Gymnasium | Aqua Therapy | Swimming Pool"
        image={IMG.herbs}
        crumbs={['About']}
      />

      <section className="container-x py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src={founderImage} alt={founderName} className="h-[440px] w-full rounded-[2rem] object-cover object-center shadow-xl" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-3 shadow-lg backdrop-blur">
                <p className="font-bold text-brand-dark">{founderName}</p>
                <p className="text-sm text-accent">Founder &amp; Managing Director</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading tag="About Us" title="Holistic Wellness, Healthier Living" />
            <Reveal delay={150}>
              <p className="mt-6 leading-relaxed text-ink/70">
                Discover a healthier and more balanced lifestyle with our integrated wellness services. We bring together the ancient wisdom of Ayurveda and Naturopathy with modern physiotherapy, fitness training, yoga, meditation and swimming to nurture your body, mind and spirit. We work on physical, mental, emotional and social health.
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                Yogananda Wellness is designed to address modern lifestyle-related problems through a unique range of services. From physical wellbeing to mind and soul, our aim is to support physical strength, inner rejuvenation, a peaceful mind and emotional wellbeing.
              </p>
              <p className="mt-4 leading-relaxed text-ink/70">
                Established in 2020 by Dr Devendra Singh Raghav under the banner of Yogananda Shikha Evam Jan Kalyan Samiti, Bhopal, Yogananda Wellness is committed to compassionate care in a peaceful, rejuvenating environment.
              </p>
              <p className="mt-6 rounded-2xl border-l-4 border-accent bg-mint px-5 py-4 font-bold text-brand-dark">
                {founderName}
                <span className="mt-1 block text-sm font-medium text-accent">Founder &amp; Managing Director</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x">
        <Reveal className="rounded-[2rem] bg-brand-dark px-8 py-10 text-center text-white md:px-14 md:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Our mission</p>
          <p className="mx-auto mt-4 max-w-3xl text-xl font-semibold leading-relaxed md:text-2xl">
            To help you feel healthier, move better, relax deeply and live life to the fullest in a peaceful and rejuvenating environment.
          </p>
          <p className="mt-6 font-bold tracking-wide text-teal">Reconnect with Nature. Restore Your Balance. Rediscover Your Wellbeing.</p>
        </Reveal>
      </section>

      <section className="container-x py-20">
        <div className="mb-10"><SectionHeading center tag="Our values" title="What guides us" /></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="card-lift h-full rounded-3xl border border-mint bg-white p-7 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-mint text-brand"><Icon size={26} /></div>
                <h3 className="font-bold text-brand-dark">{t}</h3>
                <p className="mt-2 text-sm text-ink/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <div className="mb-10">
          <SectionHeading center tag="Our Services" title="Wellbeing for every part of you" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceGroups.map(({ title, services }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-mint bg-white p-7 shadow-sm md:p-8">
                <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
                <ul className="mt-5 space-y-4">
                  {services.map(([name, description]) => (
                    <li key={name}>
                      <h4 className="font-semibold text-brand">{name}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink/70">{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x">
        <div className="rounded-[2rem] bg-mint p-8 md:p-14">
          <SectionHeading tag="Events & Community" title="Wellness experiences, shared together" />
          <Reveal delay={150}>
            <p className="mt-6 max-w-4xl leading-relaxed text-ink/70">
              Every quarter, we plan Social Wellness and Corporate Wellness events tailored to community needs. These include day-long workshops and residential workshops of 5 or 7 days, along with customised pool parties, birthdays and special-day celebrations.
            </p>
            <p className="mt-4 max-w-4xl leading-relaxed text-ink/70">
              Our gatherings can also include balanced nutrition and hydration sessions, and our Class of Calm—with storytelling, book reading, instrument playing and singing. We organise free health check-up camps twice a year and offer an exclusive free meditation session every Friday.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="mb-10"><SectionHeading center tag="Our Expert Team" title="Meet the experts" /></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((name, i) => (
            <Reveal key={name} delay={i * 100}>
              <div className="card-lift overflow-hidden rounded-3xl bg-mint text-center">
                {teamImages[name] ? (
                  <img
                    src={teamImages[name]}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className={`h-56 w-full bg-white/50 ${name === 'Dr Monica Singh' ? 'object-contain' : 'object-cover object-top'}`}
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`${name} photo coming soon`}
                    className="flex h-56 w-full flex-col items-center justify-center gap-2 bg-white/50 text-brand/60"
                  >
                    <UserRound aria-hidden="true" size={40} strokeWidth={1.5} />
                    <span className="text-xs font-medium">Photo coming soon</span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-brand-dark">{name}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
