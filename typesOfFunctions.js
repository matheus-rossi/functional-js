function saudar (cumprimento, nome) {
  return `${cumprimento} ${nome}`
}

const saudacao = saudar('Bom Dia', 'Matheus')
console.log(saudacao)

//     ----   Currying  ----       //
console.log('----   Currying  ----')

const listaDeNomes = ['Matheus', 'José', 'João', 'Marcos']

const saudacoesNOK = listaDeNomes.map(saudar)
console.log('Saudações (Atenção ao Resultado): ', saudacoesNOK)

function saudarVarios (cumprimento) {
  return function (nome) {
    return `${cumprimento} ${nome}`
  }
}

const saudacoesOK = listaDeNomes.map(saudarVarios('Bom Dia'))
console.log(saudacoesOK)

//     ----   High-Order Functions  ----       //
//            Exemplos das linhas 16-20 e 22   //
//            Closure                          //

