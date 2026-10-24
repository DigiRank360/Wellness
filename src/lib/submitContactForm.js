const API_URL =
  import.meta.env.VITE_CONTACT_API_URL ||
  'https://api.yoganandawellness.com/api/contact'

export async function submitContactForm(form) {
  const formValues = Object.fromEntries(new FormData(form).entries())
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formValues,
      type: 'inquiry',
      submissionId: crypto.randomUUID(),
    }),
  })
  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.error || 'We could not send your request. Please try again.')
  }
  return result
}
