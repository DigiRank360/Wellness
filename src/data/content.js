import poolpartyImage from "../assets/poolparty.jpeg";

const img = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

const svc = (name) => `/images/services/${name}.jpg`;

export const IMG = {
  hero: img("photo-1544161515-4ab6ce6db874", 1600),
  about: img("photo-1545205597-3d9d02c29597", 900),
  about2: img("photo-1540555700478-4be289fbecef", 600),
  pool: img("photo-1530053969600-caed2596d242", 700),
  massage: img("photo-1600334129128-685c5582fd35", 700),
  detox: img("photo-1596178060671-7a80dc8059ea", 700),
  yoga: img("photo-1506126613408-eca07ce68773", 700),
  rejuvenate: img("photo-1570172619644-dfd03ed5d881", 700),
  strength: img("photo-1519823551278-64ac92734fb1", 700),
  doctor: img("photo-1576013551627-0cc20b96c2a7", 900),
  video: img("photo-1515377905703-c4788e51af15", 1400),
  avatar: img("photo-1552693673-1bf958298935", 200),
  herbs: img("photo-1512290923902-8a9f81dc236c", 1400),
  gymHero: svc("gym-hero"),
  gym1: img("photo-1571019613454-1cb2f99b2d8b", 800),
  gym2: img("photo-1517836357463-d25dfeac3438", 800),
  gym3: img("photo-1540497077202-7c8a3999166f", 800),
  poolHero: img("photo-1530549387789-4c1017266635", 1600),
  pool1: img("photo-1576610616656-d3aa5d1f4534", 800),
  pool2: img("photo-1519315901367-f34ff9154487", 800),
  pool3: img("photo-1560090995-01632a28895b", 800),
  ayur1: img("photo-1593079831268-3381b0db4a77", 800),
  ayur2: img("photo-1526506118085-60ce8714f8c5", 800),
  team: img("photo-1581009146145-b5ef050c2e1e", 900),
  contact: img("photo-1544367567-0f2fcb009e0b", 900),
};

export const serviceLinks = [
  { label: "Ayurveda", to: "/services/ayurveda" },
  { label: "PhysioGym", to: "/services/gym" },
  { label: "Swimming Pool", to: "/services/swimming-pool" },
  { label: "Pool Parties & Group", to: "/services/pool-parties-and-group" },
];

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Services", children: serviceLinks },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export const segments = [
  [
    "Physical Wellness",
    "Personalized Ayurveda, Panchakarma and naturopathy—including herbal treatments, cleansing, detox and mud therapy—to support rest, rejuvenation and physical balance.",
    svc("physical-wellness"),
    "/services/ayurveda",
  ],
  [
    "Ayurveda & Panchakarma",
    "Explore traditional Ayurvedic care and personalized Panchakarma programs designed to support cleansing, balance and rejuvenation.",
    svc("ayurveda-panchakarma"),
    "/services/ayurveda",
  ],
  [
    "PhysioFitness",
    "Physiotherapy, strength building, movement coaching and gym training tailored to improve mobility, support recovery and help you stay active.",
    svc("physio-fitness"),
    "/services/gym",
  ],
  [
    "Mental & Emotional Wellness",
    "Mindfulness, meditation, stress management, digital-detox activities and calming sessions to nurture emotional balance and mental well-being.",
    svc("mental-wellness"),
    "/about",
  ],
  [
    "Aqua Therapy",
    "Swimming, coaching and gentle aqua therapy in a clean, temperature-controlled pool with trained lifeguards.",
    svc("aqua-home"),
    "/services/swimming-pool",
  ],
  [
    "Social & Corporate Wellness Events",
    "Custom day-long or 5- to 7-day wellness workshops, pool gatherings, nutrition and hydration sessions, Class of Calm, health-check camps and free Friday meditation.",
    poolpartyImage,
    "/services/pool-parties-and-group",
  ],
];

export const heroSlides = [
  {
    tag: "Authentic Ayurvedic Wellness",
    title: "Heal Naturally,",
    highlight: "Live Fully",
    text: "Personalised Ayurvedic therapies and Panchakarma detox guided by experienced vaidyas.",
    image: IMG.hero,
    to: "/services/ayurveda",
    cta: "Explore Ayurveda",
  },
  {
    tag: "Modern Fitness Studio",
    title: "Build Strength,",
    highlight: "Boost Energy",
    text: "Certified trainers, quality equipment and programmes designed around your goals.",
    image: IMG.gymHero,
    to: "/services/gym",
    cta: "Explore Gym",
  },
  {
    tag: "Safe & Clean Swimming Pool",
    title: "Swim, Relax,",
    highlight: "Rejuvenate",
    text: "A temperature-controlled pool for fitness, coaching and gentle aqua therapy.",
    image: IMG.poolHero,
    to: "/services/swimming-pool",
    cta: "Explore Pool",
  },
];

export const pillars = [
  ["Swim", "Aqua therapy sessions in warm, herb-infused pools/tubs.", "🌊"],
  ["Heal", "Classical Ayurvedic treatments by expert vaidyas.", "🌿"],
  ["Detox", "Panchakarma cleansing to reset body and mind.", "🍃"],
  ["Rejuvenate", "Abhyanga and Shirodhara for deep renewal.", "✨"],
  ["Strengthen", "Yoga and movement therapy for lasting vitality.", "💪"],
  [
    "PhysioGym",
    "Comprehensive physiotherapy and modern gym facilities for holistic fitness.",
    "🏋️‍♂️",
  ],
  [
    "Relax",
    "Meditation and stress relief sessions for mental well-being.",
    "🧘‍♂️",
  ],
  [
    "Nutrition",
    "Personalized dietary guidance to support overall wellness.",
    "🥗",
  ],
  [
    "Mindfulness",
    "Guided meditation and mindfulness practices for mental clarity and emotional balance.",
    "🧘‍♀️",
  ],
  [
    "Grooming",
    "Personal care and grooming services for overall wellness.",
    "💇‍♂️",
  ],
];

export const therapies = [
  ["Aqua Therapy", svc("t-aqua")],
  ["Abhyanga Massage", svc("t-abhyanga")],
  ["Panchakarma Detox", svc("t-panchakarma")],
  ["Yoga & Strength", svc("t-yoga-strength")],
  ["Shirodhara", svc("t-shirodhara")],
  ["Marma Therapy", svc("t-marma")],
];

export const packages = [
  ["Abhyanga Full Body", "₹2,500"],
  ["Shirodhara Therapy", "₹3,200"],
  ["Panchakarma (7 days)", "₹24,000"],
  ["Aqua Wellness Session", "₹1,800"],
  ["Herbal Steam & Swedana", "₹1,500"],
  ["Yoga & Strength Program", "₹4,500"],
];

export const reviews = [
  [
    "BB Saxena ",
    "The Panchakarma programme completely changed my energy levels. The doctors are attentive and the facility is spotless.",
  ],
  [
    "Anna",
    "Aqua therapy followed by Abhyanga was the most relaxing experience I have had. Highly recommended for stress relief.",
  ],
  [
    "Sangita Saxena",
    "Authentic Ayurveda with a professional approach. My back pain is gone after the two-week rejuvenation plan.",
  ],
  [
    "Jitendra",
    "kati vasti and potli The combination of Kati vasti and potli relieved my pain.",
  ],
  [
    "Manisha Jain",
    "Full body massage and steam bath experience was rejuvenating and relaxing.",
  ],
  [
    "Maan Singh Thakur",
    "Panchkarma treatment was highly effective and rejuvenating, staff is very sincere.",
  ],
];

export const stats = [
  ["11+", "Expert Vaidyas"],
  ["100+", "Herbal Formulations"],
  ["13+", "Years of Experience"],
  ["115+", "Happy Patients"],
];

export const posts = [
  ["Benefits of Abhyanga: Daily Oil Massage Explained", svc("blog-abhyanga")],
  [
    "Panchakarma: What to Expect from Your First Detox",
    svc("blog-panchakarma"),
  ],
  ["Why Aqua Therapy Complements Ayurvedic Healing", svc("blog-aqua")],
  ["Yoga and Ayurveda: Building Strength the Natural Way", svc("blog-yoga")],
];

export const marquee = [
  "AYURVEDA",
  "NATUROPATHY",
  "PANCHAKARMA",
  "PHYSIOTHERAPY",
  "STRENGTH BUILDING",
  "DESKERCISE",
  "MINDFULNESS",
  "MEDITATION",
  "DIGITAL DETOX",
  "AQUA THERAPY",
  "SOCIAL WELLNESS",
  "CORPORATE WELLNESS",
  "CLASS OF CALM",
];

export const serviceOptions = [
  "Ayurveda",
  "Panchakarma",
  "Naturopathy",
  "Physiotherapy",
  "Gymnasium & Fitness Training",
  "Yoga",
  "Mindfulness & Meditation",
  "Digital Detox",
  "Emotional Intelligence & Stress Management",
  "Aqua Therapy / Swimming Pool",
  "Pool Parties & Group Events",
  "Social & Corporate Wellness Events",
  "General enquiry",
];

export const contactInfo = {
  address:
    "In Front of Sagar College Gate, Ayodhya Bypass Road, Minal, Bhopal, Madhya Pradesh.",
  phones: ["90982 59789"],
  whatsapp: "9981504644",
  email: "info@yogananda.com",
  hours: [
    ["Monday to Friday", "8.00 - 20.00 hrs"],
    ["Saturday", "8.00 - 20.00 hrs"],
    ["Sunday", "9.00 - 14.00 hrs"],
  ],
};

export const servicePages = {
  ayurveda: {
    title: "Ayurveda",
    tagline: "Heal and detox with time-tested Ayurvedic care",
    heroImage: IMG.herbs,
    introImage: svc("ayurveda-intro"),
    introTitle: "Personalised Ayurvedic treatment, rooted in tradition",
    intro:
      "Our vaidyas assess your prakriti and design a programme that treats the root cause. Every therapy uses authentic herbal oils and medicines prepared with care.",
    highlights: [
      "Prakriti and pulse diagnosis",
      "Herbal oils and medicines",
      "Diet and lifestyle guidance",
      "Private therapy rooms",
    ],
    offeringsTitle: "Our Ayurvedic therapies",
    offerings: [
      ["Abhyangam", "Full body oil massage.", svc("abhyangam")],
      ["Sirodhara", "Medicated oil therapy.", svc("sirodhara")],
      ["Potali", "Herbal bolus massage.", svc("potali")],
      ["Kati Vasti", "Lower back oil therapy.", svc("kati-vasti")],
      ["Greeva", "Neck oil therapy.", svc("greeva")],
      ["Janu Vasti", "Knee oil therapy.", svc("janu-vasti")],
      ["Herbal Steam", "Swedana therapy.", svc("herbal-steam")],
      ["Kati Shan", "Localized water therapy.", svc("kati-shan")],
      ["Powder Massage", "Herbal powder therapy.", svc("powder-massage")],
      ["Enima Vasti", "Medicated enema therapy.", svc("enima-vasti")],
    ],
    plansTitle: "Ayurveda treatment prices",
    plans: [
      ["Abhyangam", "₹755/-"],
      ["Sirodhara", "₹985/-"],
      ["Potali", "₹855/-"],
      ["Kati Vasti", "₹695/-"],
      ["Greeva", "₹795/-"],
      ["Janu Vasti", "₹895/-"],
      ["Herbal Steam", "₹275/-"],
      ["Kati Shan", "₹495/-"],
      ["Powder Massage", "₹1,295/-"],
      ["Enima Vasti", "₹495/-"],
    ],
  },
  gym: {
    title: "PhysioGym",
    tagline: "Strengthen your body with expert-led training",
    heroImage: svc("gym-hero"),
    introImage: svc("gym-intro"),
    introTitle: "A professional fitness space for every goal",
    intro:
      "From strength training to mobility work, our certified trainers build programmes that complement Ayurvedic wellness. Train in a clean, well-equipped and supportive environment.",
    highlights: [
      "Certified personal trainers",
      "Modern cardio and strength equipment",
      "Diet plans by Ayurvedic nutritionists",
      "Separate time slots for women",
    ],
    offeringsTitle: "Training programmes",
    offerings: [
      [
        "Strength Training",
        "Free weights and machines with progressive plans.",
        svc("strength-training"),
      ],
      [
        "Personal Training",
        "One-to-one coaching tailored to your body and goals.",
        svc("personal-training"),
      ],
      [
        "Cardio & Endurance",
        "Treadmills, cycles and guided conditioning sessions.",
        svc("cardio"),
      ],
      [
        "Yoga & Mobility",
        "Flexibility and posture classes to prevent injury.",
        svc("yoga-mobility"),
      ],
      [
        "Group Classes",
        "Energising batches for fat loss and fitness.",
        svc("group-classes"),
      ],
      [
        "Rehab Conditioning",
        "Safe return-to-strength programmes after injury.",
        svc("rehab"),
      ],
    ],
    plansTitle: "Membership plans",
    plans: [
      ["Monthly", "₹1,500", "1 month"],
      ["Quarterly", "₹4,000", "3 months"],
      ["Half Yearly", "₹7,000", "6 months"],
      ["Annual", "₹12,000", "12 months"],
    ],
  },
  "swimming-pool": {
    title: "Swimming Pool",
    tagline: "Swim, relax and recover in a clean, safe pool",
    heroImage: svc("pool-hero"),
    introImage: svc("pool-intro"),
    introTitle: "Temperature-controlled pool with trained lifeguards",
    intro:
      "Our pool supports fitness, learning and therapy. Water is filtered daily and maintained at a comfortable temperature all year, with trained staff on duty at all times.",
    highlights: [
      "Daily filtered and tested water",
      "Trained lifeguards on duty",
      "Clean changing rooms and showers",
      "Separate batches for kids and women",
    ],
    offeringsTitle: "Pool programmes",
    offerings: [
      ["Lap Swimming", "Open lanes for fitness swimmers.", svc("lap-swimming")],
      [
        "Learn to Swim",
        "Structured coaching for beginners and kids.",
        svc("learn-to-swim"),
      ],
      [
        "Aqua Therapy",
        "Low-impact water exercises for joints and recovery.",
        svc("aqua-therapy"),
      ],
      [
        "Aqua Aerobics",
        "Fun, full-body workout in the water.",
        svc("aqua-aerobics"),
      ],
      [
        "Kids Batch",
        "Safe, supervised sessions for children.",
        svc("kids-batch"),
      ],
      [
        "Advanced Coaching",
        "Technique and stamina training for confident swimmers.",
        svc("advanced-coaching"),
      ],
    ],
    plansTitle: "Swimming packages",
    plans: [
      ["Per Hour", "₹250/-", "1 hour"],
      ["Monthly", "₹3,000/-", "1 month"],
      ["Quarterly", "₹7,500/-", "3 months"],
      ["Half Yearly", "₹12,500/-", "6 months"],
      ["Yearly", "₹15,000/-", "12 months"],
    ],
  },
  "pool-parties-and-group": {
    title: "Pool Parties & Group Events",
    tagline: "Make time together memorable with a poolside gathering",
    heroImage: svc("party-hero"),
    introImage: svc("party-intro"),
    introTitle: "A refreshing setting for your next get-together",
    intro:
      "Plan a poolside celebration or group visit with friends, family, classmates or colleagues. Share your preferred date and group size with our team, and we will help you arrange your booking.",
    highlights: [
      "Birthday and celebration bookings",
      "Family and friends gatherings",
      "School, club and team visits",
      "Corporate group enquiries",
      "Maximum 50 members per group",
      "Snacks and starter breakfast included",
    ],
    offeringsTitle: "Gather by the pool",
    offerings: [
      [
        "Birthday Pool Parties",
        "Celebrate a special day with a pool visit for your invited group.",
        svc("birthday-party"),
      ],
      [
        "Family & Friends",
        "Spend time together with a group swimming session.",
        svc("family-friends"),
      ],
      [
        "School & Club Groups",
        "Arrange a group visit for your school, club or team.",
        svc("school-club"),
      ],
      [
        "Corporate Gatherings",
        "Plan a refreshing group outing for colleagues.",
        svc("corporate"),
      ],
    ],
    plansTitle: "Group booking options",
    plans: [
      ["Pool Party Group Package", "₹1,000 / person", "Maximum 50 members"],
      ["Birthday Celebration", "Enquire", "Group booking"],
      ["Family & Friends", "Enquire", "Group booking"],
      ["School or Club Visit", "Enquire", "Group booking"],
      ["Corporate Gathering", "Enquire", "Custom booking"],
    ],
  },
};
