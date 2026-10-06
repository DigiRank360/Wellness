const img = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const IMG = {
  hero: img('photo-1544161515-4ab6ce6db874', 1600),
  about: img('photo-1545205597-3d9d02c29597', 900),
  about2: img('photo-1540555700478-4be289fbecef', 600),
  pool: img('photo-1530053969600-caed2596d242', 700),
  massage: img('photo-1600334129128-685c5582fd35', 700),
  detox: img('photo-1596178060671-7a80dc8059ea', 700),
  yoga: img('photo-1506126613408-eca07ce68773', 700),
  rejuvenate: img('photo-1570172619644-dfd03ed5d881', 700),
  strength: img('photo-1519823551278-64ac92734fb1', 700),
  doctor: img('photo-1576013551627-0cc20b96c2a7', 900),
  video: img('photo-1515377905703-c4788e51af15', 1400),
  avatar: img('photo-1552693673-1bf958298935', 200),
  herbs: img('photo-1512290923902-8a9f81dc236c', 1400),
  gymHero: img('photo-1534438327276-14e5300c3a48', 1600),
  gym1: img('photo-1571019613454-1cb2f99b2d8b', 800),
  gym2: img('photo-1517836357463-d25dfeac3438', 800),
  gym3: img('photo-1540497077202-7c8a3999166f', 800),
  poolHero: img('photo-1530549387789-4c1017266635', 1600),
  pool1: img('photo-1576610616656-d3aa5d1f4534', 800),
  pool2: img('photo-1519315901367-f34ff9154487', 800),
  pool3: img('photo-1560090995-01632a28895b', 800),
  ayur1: img('photo-1593079831268-3381b0db4a77', 800),
  ayur2: img('photo-1526506118085-60ce8714f8c5', 800),
  team: img('photo-1581009146145-b5ef050c2e1e', 900),
  contact: img('photo-1544367567-0f2fcb009e0b', 900),
}

export const serviceLinks = [
  { label: 'Ayurveda', to: '/services/ayurveda' },
  { label: 'Gym', to: '/services/gym' },
  { label: 'Swimming Pool', to: '/services/swimming-pool' },
  { label: 'Pool Parties & Group', to: '/services/pool-parties-and-group' },
]

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', children: serviceLinks },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export const segments = [
  ['Ayurveda', 'Classical therapies, Panchakarma detox and personalised herbal care.', IMG.ayur1, '/services/ayurveda'],
  ['Gym', 'Modern equipment, certified trainers and programmes built for strength.', IMG.gym1, '/services/gym'],
  ['Swimming Pool', 'Temperature-controlled pool for lap swimming, coaching and aqua therapy.', IMG.pool1, '/services/swimming-pool'],
  ['Pool Parties & Group', 'Bring friends, family or your group together for a poolside celebration.', IMG.poolHero, '/services/pool-parties-and-group'],
]

export const heroSlides = [
  {
    tag: 'Authentic Ayurvedic Wellness',
    title: 'Heal Naturally,',
    highlight: 'Live Fully',
    text: 'Personalised Ayurvedic therapies and Panchakarma detox guided by experienced vaidyas.',
    image: IMG.hero,
    to: '/services/ayurveda',
    cta: 'Explore Ayurveda',
  },
  {
    tag: 'Modern Fitness Studio',
    title: 'Build Strength,',
    highlight: 'Boost Energy',
    text: 'Certified trainers, quality equipment and programmes designed around your goals.',
    image: IMG.gymHero,
    to: '/services/gym',
    cta: 'Explore Gym',
  },
  {
    tag: 'Safe & Clean Swimming Pool',
    title: 'Swim, Relax,',
    highlight: 'Rejuvenate',
    text: 'A temperature-controlled pool for fitness, coaching and gentle aqua therapy.',
    image: IMG.poolHero,
    to: '/services/swimming-pool',
    cta: 'Explore Pool',
  },
]

export const pillars = [
  ['Swim', 'Aqua therapy sessions in warm, herb-infused pools.', '🌊'],
  ['Heal', 'Classical Ayurvedic treatments by expert vaidyas.', '🌿'],
  ['Detox', 'Panchakarma cleansing to reset body and mind.', '🍃'],
  ['Rejuvenate', 'Abhyanga and Shirodhara for deep renewal.', '✨'],
  ['Strengthen', 'Yoga and movement therapy for lasting vitality.', '💪'],
]

export const therapies = [
  ['Aqua Therapy', IMG.pool],
  ['Abhyanga Massage', IMG.massage],
  ['Panchakarma Detox', IMG.detox],
  ['Yoga & Strength', IMG.yoga],
  ['Shirodhara', IMG.rejuvenate],
  ['Marma Therapy', IMG.strength],
]

export const packages = [
  ['Abhyanga Full Body', '₹2,500'],
  ['Shirodhara Therapy', '₹3,200'],
  ['Panchakarma (7 days)', '₹24,000'],
  ['Aqua Wellness Session', '₹1,800'],
  ['Herbal Steam & Swedana', '₹1,500'],
  ['Yoga & Strength Program', '₹4,500'],
]

export const reviews = [
  ['Rohit Sharma', 'The Panchakarma programme completely changed my energy levels. The doctors are attentive and the facility is spotless.'],
  ['Anjali Verma', 'Aqua therapy followed by Abhyanga was the most relaxing experience I have had. Highly recommended for stress relief.'],
  ['Meera Nair', 'Authentic Ayurveda with a professional approach. My back pain is gone after the two-week rejuvenation plan.'],
]

export const stats = [
  ['25+', 'Expert Vaidyas'],
  ['100+', 'Herbal Formulations'],
  ['13+', 'Years of Experience'],
  ['5000+', 'Happy Patients'],
]

export const posts = [
  ['Benefits of Abhyanga: Daily Oil Massage Explained', IMG.massage],
  ['Panchakarma: What to Expect from Your First Detox', IMG.detox],
  ['Why Aqua Therapy Complements Ayurvedic Healing', IMG.pool],
  ['Yoga and Ayurveda: Building Strength the Natural Way', IMG.yoga],
]

export const marquee = ['SWIM', 'HEAL', 'DETOX', 'REJUVENATE', 'STRENGTHEN']

export const contactInfo = {
  address: 'In Front of Sagar College Gate, Ayodhya Bypass Road, Minal, Bhopal, Madhya Pradesh.',
  phone: '9098259789',
  whatsapp: '91797 57017',
  email: 'info@yogananda.com',
  hours: [['Monday to Friday', '8.00 - 20.00 hrs'], ['Saturday', '8.00 - 18.00 hrs'], ['Sunday', '9.00 - 14.00 hrs']],
}

export const servicePages = {
  ayurveda: {
    title: 'Ayurveda',
    tagline: 'Heal and detox with time-tested Ayurvedic care',
    heroImage: IMG.herbs,
    introImage: IMG.ayur2,
    introTitle: 'Personalised Ayurvedic treatment, rooted in tradition',
    intro: 'Our vaidyas assess your prakriti and design a programme that treats the root cause. Every therapy uses authentic herbal oils and medicines prepared with care.',
    highlights: ['Prakriti and pulse diagnosis', 'Herbal oils and medicines', 'Diet and lifestyle guidance', 'Private therapy rooms'],
    offeringsTitle: 'Our Ayurvedic therapies',
    offerings: [
      ['Abhyanga Massage', 'Warm oil full-body massage that relaxes muscles and improves circulation.', IMG.massage],
      ['Shirodhara', 'A steady stream of warm oil on the forehead for deep calm and better sleep.', IMG.rejuvenate],
      ['Panchakarma Detox', 'Five-fold cleansing programme to remove toxins and restore balance.', IMG.detox],
      ['Swedana Herbal Steam', 'Herbal steam therapy to open channels and ease stiffness.', IMG.about2],
      ['Marma Therapy', 'Gentle pressure on vital points to release blockages and pain.', IMG.strength],
      ['Yoga & Pranayama', 'Guided practice to support healing and long-term vitality.', IMG.yoga],
    ],
    plansTitle: 'Ayurveda packages',
    plans: [
      ['Abhyanga Full Body', '₹2,500', '60 min'],
      ['Shirodhara Therapy', '₹3,200', '45 min'],
      ['Herbal Steam & Swedana', '₹1,500', '30 min'],
      ['Panchakarma (7 days)', '₹24,000', 'Residential'],
    ],
  },
  gym: {
    title: 'Gym',
    tagline: 'Strengthen your body with expert-led training',
    heroImage: IMG.gymHero,
    introImage: IMG.gym2,
    introTitle: 'A professional fitness space for every goal',
    intro: 'From strength training to mobility work, our certified trainers build programmes that complement Ayurvedic wellness. Train in a clean, well-equipped and supportive environment.',
    highlights: ['Certified personal trainers', 'Modern cardio and strength equipment', 'Diet plans by Ayurvedic nutritionists', 'Separate time slots for women'],
    offeringsTitle: 'Training programmes',
    offerings: [
      ['Strength Training', 'Free weights and machines with progressive plans.', IMG.gym1],
      ['Personal Training', 'One-to-one coaching tailored to your body and goals.', IMG.gym2],
      ['Cardio & Endurance', 'Treadmills, cycles and guided conditioning sessions.', IMG.gym3],
      ['Yoga & Mobility', 'Flexibility and posture classes to prevent injury.', IMG.yoga],
      ['Group Classes', 'Energising batches for fat loss and fitness.', IMG.strength],
      ['Rehab Conditioning', 'Safe return-to-strength programmes after injury.', IMG.massage],
    ],
    plansTitle: 'Membership plans',
    plans: [
      ['Monthly', '₹1,500', '1 month'],
      ['Quarterly', '₹4,000', '3 months'],
      ['Half Yearly', '₹7,000', '6 months'],
      ['Annual', '₹12,000', '12 months'],
    ],
  },
  'swimming-pool': {
    title: 'Swimming Pool',
    tagline: 'Swim, relax and recover in a clean, safe pool',
    heroImage: IMG.poolHero,
    introImage: IMG.pool2,
    introTitle: 'Temperature-controlled pool with trained lifeguards',
    intro: 'Our pool supports fitness, learning and therapy. Water is filtered daily and maintained at a comfortable temperature all year, with trained staff on duty at all times.',
    highlights: ['Daily filtered and tested water', 'Trained lifeguards on duty', 'Clean changing rooms and showers', 'Separate batches for kids and women'],
    offeringsTitle: 'Pool programmes',
    offerings: [
      ['Lap Swimming', 'Open lanes for fitness swimmers.', IMG.pool1],
      ['Learn to Swim', 'Structured coaching for beginners and kids.', IMG.pool3],
      ['Aqua Therapy', 'Low-impact water exercises for joints and recovery.', IMG.pool],
      ['Aqua Aerobics', 'Fun, full-body workout in the water.', IMG.pool2],
      ['Kids Batch', 'Safe, supervised sessions for children.', IMG.pool3],
      ['Advanced Coaching', 'Technique and stamina training for confident swimmers.', IMG.pool1],
    ],
    plansTitle: 'Swimming plans',
    plans: [
      ['Single Session', '₹300', '1 visit'],
      ['Monthly Pass', '₹2,500', '1 month'],
      ['Learn to Swim (12 classes)', '₹4,500', 'Coaching'],
      ['Aqua Wellness Session', '₹1,800', '45 min'],
    ],
  },
  'pool-parties-and-group': {
    title: 'Pool Parties & Group Events',
    tagline: 'Make time together memorable with a poolside gathering',
    heroImage: IMG.poolHero,
    introImage: IMG.pool1,
    introTitle: 'A refreshing setting for your next get-together',
    intro: 'Plan a poolside celebration or group visit with friends, family, classmates or colleagues. Share your preferred date and group size with our team, and we will help you arrange your booking.',
    highlights: ['Birthday and celebration bookings', 'Family and friends gatherings', 'School, club and team visits', 'Corporate group enquiries', 'Maximum 50 members per group', 'Snacks and starter breakfast included'],
    offeringsTitle: 'Gather by the pool',
    offerings: [
      ['Birthday Pool Parties', 'Celebrate a special day with a pool visit for your invited group.', IMG.pool2],
      ['Family & Friends', 'Spend time together with a group swimming session.', IMG.pool3],
      ['School & Club Groups', 'Arrange a group visit for your school, club or team.', IMG.pool1],
      ['Corporate Gatherings', 'Plan a refreshing group outing for colleagues.', IMG.poolHero],
    ],
    plansTitle: 'Group booking options',
    plans: [
      ['Pool Party Group Package', '₹1,000 / person', 'Maximum 50 members'],
      ['Birthday Celebration', 'Enquire', 'Group booking'],
      ['Family & Friends', 'Enquire', 'Group booking'],
      ['School or Club Visit', 'Enquire', 'Group booking'],
      ['Corporate Gathering', 'Enquire', 'Custom booking'],
    ],
  },
}
