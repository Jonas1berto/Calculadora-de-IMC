# Calculadora de IMC
#
## Link do projeto https://jonas1berto.github.io/Calculadora-de-IMC/
#
### Projeto feito para solidificar meus conhecimentos em lógica de programação, HTML, CSS e JS

## Aqui é onde eu pego o valor que o usuário digitou no peso e na altura, e faço o calculo do IMC.
```
    let peso = document.querySelector('.peso').value
    let altura = document.querySelector('.altura').value


    peso = peso.replace(',', '.')
    altura =  altura.replace(',', '.')

    alturaEmDobro = altura * altura

    let imcConvertido = peso / alturaEmDobro
    imcConvertido = parseFloat(imcConvertido)
```

## Checando o calculo do imc, e imprimindo na tela conforme o resultado.
```
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
```

## Checando se o usuário digitou os dados.
```
    if (!altura) {
      resultado.innerHTML = `<h4>Informe a altura e o peso corretamente</h4>`
    } else if (!peso) {
      resultado.innerHTML = `<h4>Digite o seu peso</h4>`
    }
```

## Tecnologias usadas no Projeto
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)   
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)    
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
