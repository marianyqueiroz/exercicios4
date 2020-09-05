//EXERCÍCIOS ARRAY


// Exercícios práticos com for e arrays!

// 1) Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// Exemplo: recebendo ["banana", "gatinho", "brócolis"] deve imprimir no console:
// índice 0, elemento "banana"
// índice 1, elemento "gatinho"
// índice 2, elemento "brócolis"



function imprimeIndiceEElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`indice ${i}. elemento ${arr[i]}`)
    }
}

const arrei = ['banana', 'gatinho', 'brócolis']

imprimeIndiceEElemento(arrei)


// 2) Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// Exemplo: recebendo [10,11,12] deve retornar 33

const inteiros = [10, 11, 12]
function somarInteiros(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    console.log(soma)
}


somarInteiros(inteiros)



// 3) Crie uma função que receba uma array de números inteiros e retorne outra array somente com os elementos maiores que 5.
// Exemplo, recebendo [88,55,0,2,85,81,24,12] deve retornar [ 88, 55, 85, 81, 24, 12 ]


function maiorQueCinco(arr) {
    const maiorQueCinco = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 5) {
        maiorQueCinco.push(arr[i])
      }
    }
    return maiorQueCinco
  }
  
  console.log(maiorQueCinco([88,55,0,2,85,81,24,12]))

// 4) Modifique a função anterior para que receba, além da array, o número para comparação (não deixar mais fixo como número 5).
// Exemplo, recebendo ([88,55,0,2,85,81,24,12], 20) deve retornar [ 88, 55, 85, 81, 24 ]

function numeros(arr, num) {
  const numerosMaiores = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      numerosMaiores.push(arr[i])
    }
  }
  return numerosMaiores
}

console.log(numeros([88,55,0,2,85,81,24,12], 20))


// 5) Crie uma função que receba uma array de números inteiros e retorne o maior número encontrado.
// Exemplo: recebendo [56, 12, 168, 66] deve retornar 168
// EXTRA: Pesquisar uma maneira iniciar com o menor número possível (dica: não é zero)

const numerosInteiros = [56, 12, 168, 66]

function imprimeMaior (arr){
    let maior = 0

    for (let i=0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i]
        }
    }
    return `O número maior é ${maior}!`
}

console.log (imprimeMaior(numerosInteiros))

// 6) Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: "o menor número é X e o maior número é Y".
// Exemplo, recebendo [5, 37, 18, 59, 12, -5] a função deve retornar "o maior número é 59 e o menor número é -5"

const numerosMaioresEMenores = [5,37,18,59,12,-5]

function imprimirMaiorMenor (arr){
    let maior = 0
    let menor = 0

    for (let i=0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i]
        }
        if (arr [i] < menor){
            menor = arr [i]
        }
    }
    return `O maior número é ${maior} e o menor número e ${menor}.`
}

console.log (imprimirMaiorMenor(numerosMaioresEMenores))



//EXERCICIO OBJ
// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. Retorne um objeto no formato: {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// retorna o objeto:
// {
//   titulo: 'Antes do Baile Verde', 
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

function livro(titulo, paginas, autoria) {
    return ({
      titulo, 
      paginas,
      autoria
    }) 
  }
  
  console.log(livro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))

// 3) Aproveite a função acima em outra função, que deve retornar a seguinte frase: "O livro XXXX foi escrito por XXX e tem XXX páginas". Você deve utilizar a função que já está pronta, e não reescrever a lógica dela dentro dessa nova função.

function livro(titulo, paginas, autoria) {
    const obj= {
      titulo,
      paginas,
      autoria
    } 
    return `O livro ${obj.titulo} foi escrito por ${obj.autoria}  e tem ${obj.paginas} páginas`
  }
  
  console.log(livro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles'))


    //EXERCICIO DA SEMANA
    
    // DESAFIO - validador de cartão de crédito
    
    // Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:
    
    // 1. Retire o último dígito do número. Ele é o verificador;
    
    const cartao = [5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 4]
    cartao.pop
    console.log(cartao) 
    
    // 2. Escreva os números na ordem inversa;
    
    const numero = ['5485755481460022']
    console.log('5485755481460022'.split('').reverse().join(''))