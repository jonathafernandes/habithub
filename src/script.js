const form = document.querySelector('#form-habits')
const app = new NLWSetup(form)
const button = document.querySelector(".button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {

  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = app.dayExists(today)

  if (dayExists) {
    alert("O dia de hoje já foi adicionado!")
    return
  }

  alert("Dia adicionado com sucesso!")
  app.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(app.data)) // Usando JSON para transformar os dados de objeto para string
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} // Usando JSON para trasnformas dados de string para objeto

app.setData(data)
app.load()