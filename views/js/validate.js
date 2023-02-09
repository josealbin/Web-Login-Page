
const form = document.querySelector('form')
const text = document.querySelector('input[type=text]')
const email = document.querySelector('input[type=email]')
const password = document.querySelector('input[type=password]')

form.addEventListener('submit', (event)=> {
    if(text.value === "" || email.value === "" || password.value === ""){
        event.preventDefault()
        alert('Please fill all the required fields')
        return false
    }
})