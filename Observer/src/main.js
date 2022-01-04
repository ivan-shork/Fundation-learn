
const form = document.querySelector('.form')
const inputs = form.getElementsByTagName('input')
let data = {}
Array.from(inputs).forEach(input=> {  
  data[input.name] = input.value
})
let tar = new Target(data)

document.getElementById('btn').addEventListener('click', ()=> {
  Array.from(inputs).forEach(input=> {      
    tar[input.name] = input.value
  })
})



