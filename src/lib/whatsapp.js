export function createWhatsAppUrl(phone, form, requestLabel) {
  const digits = phone.replace(/\D/g, '')
  const internationalPhone = digits.startsWith('91') ? digits : `91${digits}`
  const values = new FormData(form)
  const lines = [
    `Hello Yogananda Wellness, I would like to make a ${requestLabel}.`,
    `Name: ${values.get('name') || ''}`,
    `Phone: ${values.get('phone') || ''}`,
    `Email: ${values.get('email') || ''}`,
  ]
  const service = values.get('service')
  const preferredDate = values.get('preferredDate')
  const message = values.get('message')

  if (service) lines.push(`Service: ${service}`)
  if (preferredDate) lines.push(`Preferred date: ${preferredDate}`)
  if (message) lines.push('', `Message: ${message}`)

  return `https://wa.me/${internationalPhone}?text=${encodeURIComponent(lines.join('\n'))}`
}
