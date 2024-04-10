const appointmentForm = document.querySelector('.appointment-form')

appointmentForm.addEventListener('submit', function (event) {
  event.preventDefault()

  // Collect form data using FormData
  const formData = new FormData(this)

  // Replace this with the URL of your deployed Google Apps Script
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbx215HOQ3TjOWIZYVsUr3T5shBkRT0skuK5I-Uxybo_LgoYuwKr16BIO77MUF6JDI8bWw/exec'

  fetch(scriptURL, { method: 'POST', body: formData })
    .then((response) => {
      alert('Your message has been received. We will respond shortly. Thank you.')
      this.reset()
    })
    .catch((error) => console.error('Error!', error.message))
})
