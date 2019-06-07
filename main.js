const userInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const form = document.getElementById("login-form")

form.addEventListener("submit", event => {
  event.preventDefault()

  const bodyParaEnviar = JSON.stringify({
    user: userInput.value, 
    pass: passwordInput.value
  })

  fetch('https://lais-api-reprograma.herokuapp.com/login', {
  method:'POST',
  body: bodyParaEnviar,
  headers: {
    'Accept': 'application/json',
    'Content-type':'application/json'
  }
})
.then(resposta => resposta.json())
.then(objetoJavascript => {
  localStorage.setItem('token', objetoJavascript.token)
  window.location.href="home.html"
})
.catch(error => console.log(error))
})


