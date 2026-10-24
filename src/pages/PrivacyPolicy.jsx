import PolicyPage from './PolicyPage'

const sections = [
  {
    heading: '1. About this policy',
    paragraphs: [
      'This Privacy Policy explains how Yogananda Wellness handles personal information when you visit this website or contact us about our wellness services. We aim to collect only information that is relevant to responding to you and providing or organising the services you request.',
    ],
  },
  {
    heading: '2. Information you may share with us',
    paragraphs: [
      'Depending on how you contact or use our services, you may choose to share information such as:',
    ],
    bullets: [
      'Contact details, such as your name, phone number, email address, and preferred way or time to contact you.',
      'Enquiry and booking details, such as the service you are interested in, your message, and scheduling preferences.',
      'Health-related information that you choose to share with our team or a practitioner so they can discuss suitability, preparation, or safety.',
      'Information you provide when you call, email, message us on WhatsApp, or visit our centre.',
    ],
  },
  {
    heading: '3. How we use information',
    paragraphs: [
      'We use information you provide to respond to enquiries, discuss or coordinate appointments and services, communicate service updates, support safe participation, and handle requests or feedback. We may also use it to meet legal obligations and protect the safety and rights of our clients, staff, and centre.',
      'When you submit a contact enquiry, the details you provide are stored in our contact-submissions database. After the save succeeds, the website opens WhatsApp with your enquiry details prefilled; you decide whether to send that message to our team. Appointment form details are prepared in WhatsApp and are not stored in our website database. WhatsApp is a third-party service and its own privacy policy applies when you use it.',
    ],
  },
  {
    heading: '4. When information may be shared',
    paragraphs: [
      'We do not sell your personal information. We may share relevant information with staff, practitioners, or service providers who need it to respond to you or support a service, and where required by law or necessary to protect someone’s safety or rights. We expect anyone handling information for us to use it only for the relevant purpose and to protect it appropriately.',
    ],
  },
  {
    heading: '5. Health information',
    paragraphs: [
      'Health details are sensitive. Please share only what is relevant to your enquiry or care, and use a direct contact channel rather than a public comment or social media post. Health information you provide to a practitioner may be handled as part of your service record and subject to applicable professional and legal requirements.',
    ],
  },
  {
    heading: '6. Security and retention',
    paragraphs: [
      'We take reasonable steps to protect personal information against unauthorised access, loss, or misuse. No method of sending or storing information is completely secure. We keep information only for as long as reasonably needed for the purpose it was collected, to provide requested services, and to meet legal or operational requirements.',
    ],
  },
  {
    heading: '7. Cookies and external links',
    paragraphs: [
      'Your browser may store basic technical information when you visit a website. You can manage cookies through your browser settings; disabling them may affect some website features. This website may include links to third-party websites. Their privacy practices are governed by their own policies, which we encourage you to review.',
    ],
  },
  {
    heading: '8. Your choices and requests',
    paragraphs: [
      'You may contact us to ask what personal information you have provided, request a correction, or ask us to stop contacting you. We may need to retain certain information where required by law or for a legitimate service-related purpose. We will handle requests in accordance with applicable law.',
    ],
  },
  {
    heading: '9. Updates to this policy',
    paragraphs: [
      'We may update this policy to reflect changes to our website, services, or legal requirements. The date shown at the top of this page indicates when it was last updated.',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      subtitle="How Yogananda Wellness handles information you choose to share with us."
      image="/images/services/ayurveda-intro.jpg"
      sections={sections}
    />
  )
}
