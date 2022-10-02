function createLine() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  function valueInput(e) {
    e.preventDefault()

    let peso = document.querySelector('.peso').value
    let altura = document.querySelector('.altura').value


    peso = peso.replace(',', '.')
    altura =  altura.replace(',', '.')

    alturaEmDobro = altura * altura

    let imcConvertido = peso / alturaEmDobro
    imcConvertido = parseFloat(imcConvertido)

    if (imcConvertido < 18.5) {
      resultado.innerHTML = `<p>Voce está abaixo do peso com o imc de ${imcConvertido.toFixed(
        1
      )}</p>`
    } else if (imcConvertido >= 18.5 && imcConvertido <= 24.9) {
      resultado.innerHTML = `<p>Você está com o peso normal com o imc de ${imcConvertido.toFixed(
        1
      )}</p>`
    } else if (imcConvertido >= 25 && imcConvertido <= 29.9) {
      resultado.innerHTML = `<p>Você está com Sobrepeso com o imc de ${imcConvertido.toFixed(
        1
      )}</p>`
    } else if (imcConvertido >= 30 && imcConvertido <= 34.9) {
      resultado.innerHTML = `<p>Você está com Obesidade grau 1 com o imc de ${imcConvertido.toFixed(
        1
      )}</p>`
    } else if (imcConvertido >= 35 && imcConvertido <= 39.9) {
      resultado.innerHTML = `<p>Você está com Obesidade grau 2 com o imc de ${imcConvertido.toFixed(
        1
      )}</p>`
    } else if (imcConvertido >= 40) {
      resultado.innerHTML = `<p>Você está com Obesidade grau 3 com o imc de ${imcConvertido.toFixed(
        1
      )}</p>`
    } else {
      resultado.innerHTML = `<p>Digite um peso valido</p>`
    }

    if (!altura) {
      resultado.innerHTML = `<h4>Informe a altura e o peso corretamente</h4>`
    } else if (!peso) {
      resultado.innerHTML = `<h4>Digite o seu peso</h4>`
    }
  }
  form.addEventListener('submit', valueInput)
}

createLine()
