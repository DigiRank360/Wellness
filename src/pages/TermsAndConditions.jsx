import PolicyPage from './PolicyPage'

const sections = [
  {
    heading: '1. About these terms',
    paragraphs: [
      'These terms apply when you visit the Yogananda Wellness website or enquire about or use our wellness, Ayurveda, naturopathy, physiotherapy, fitness, yoga, swimming pool, aqua therapy, and group-event services. By using this website or our services, you agree to these terms and any service-specific instructions shared with you.',
      'If you do not agree, please do not use the website or book a service. Separate terms may apply to a particular programme, membership, event, or booking; we will communicate those terms before you confirm.',
    ],
  },
  {
    heading: '2. Website information and enquiries',
    paragraphs: [
      'We make reasonable efforts to keep website information current, but descriptions, schedules, availability, images, and general prices or offers may change. Website content is for general information and is not a confirmed booking or a guarantee that a service is available. Please contact us to confirm current details.',
      'An enquiry or appointment request is not confirmed until our team confirms it. Any fees, payment, cancellation, rescheduling, or refund terms will be shared for the relevant service or booking.',
    ],
  },
  {
    heading: '3. Health, fitness, and wellness services',
    paragraphs: [
      'Our wellness, Ayurveda, naturopathy, fitness, yoga, and aqua activities are not a substitute for diagnosis, emergency care, or treatment from a qualified medical professional. Outcomes vary between individuals and are not guaranteed.',
    ],
    bullets: [
      'Speak with your doctor before beginning an activity or treatment if you have a health concern, injury, pregnancy, allergy, or other condition that may affect your participation.',
      'Tell our team and the relevant practitioner or instructor about your health conditions, medicines, allergies, limitations, and any discomfort before a session. Follow their safety instructions and stop if you feel unwell.',
      'Do not delay or disregard medical advice based on information on this website. In an emergency, contact local emergency services or a medical professional.',
    ],
  },
  {
    heading: '4. Safety and participant responsibilities',
    paragraphs: [
      'You are responsible for providing accurate information, following staff instructions, and using our premises and equipment responsibly. You may be asked to postpone or stop a session if participation could put you or others at risk.',
    ],
    bullets: [
      'For swimming pool, aqua, and water-based activities, follow all posted pool rules and lifeguard or instructor directions. Children must be supervised by a responsible adult as instructed by our staff.',
      'For children or anyone unable to provide their own consent, a parent, guardian, or authorised representative must make the booking and provide any required consent.',
      'Treat other guests and staff respectfully and do not interfere with the safe operation of a service or facility.',
    ],
  },
  {
    heading: '5. Acceptable use and intellectual property',
    paragraphs: [
      'Use this website lawfully and do not attempt to disrupt, damage, gain unauthorised access to, or misuse the website or its content. Website text, branding, graphics, and other materials belong to Yogananda Wellness or their respective owners and may not be copied or reused commercially without permission.',
    ],
  },
  {
    heading: '6. Third-party websites',
    paragraphs: [
      'This website may link to third-party websites or services for convenience. We do not control and are not responsible for their content, availability, or privacy practices. Visiting them is at your own discretion.',
    ],
  },
  {
    heading: '7. Liability and changes',
    paragraphs: [
      'To the extent permitted by applicable law, Yogananda Wellness is not responsible for losses arising from your use of this website, reliance on general website information, interruptions outside our reasonable control, or failure to follow safety instructions. Nothing in these terms limits any liability that cannot lawfully be limited or excludes any rights you have under applicable law.',
      'We may update these terms from time to time by publishing a revised version here. The updated date will indicate when the page was last revised. Your continued use of the website after an update means you accept the revised terms.',
    ],
  },
  {
    heading: '8. Governing law',
    paragraphs: [
      'These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the competent courts in Bhopal, Madhya Pradesh, subject to applicable law.',
    ],
  },
]

export default function TermsAndConditions() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      subtitle="Please read these terms before using our website or wellness services."
      image="/images/services/gym-hero.jpg"
      sections={sections}
    />
  )
}
