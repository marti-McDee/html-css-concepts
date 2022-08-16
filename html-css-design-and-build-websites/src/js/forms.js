/* Forms.js */

const submitPersonal = document.getElementById('submit-personal')

function validate(email) {
  const email = document.getElementById('email-box')
  const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/

  if (input.value.match(pattern)) {
    email.classList.add('valid')
    email.classList.remove('invalid')
  }
}

submitPersonal.addEventListener('click', validate(email))
