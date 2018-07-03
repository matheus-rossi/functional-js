//     ----   Trabalhando com Objetos   ----       //

// Objeto Inicial
const refeicao = {
  id: 1,
  descricao: 'Café da Manhã'
}
console.log('Objeto Inicial:', refeicao)

// Adicionando novos items
const adicionandoNovaRefeicao = {
  ...refeicao,
  calorias: 600
}
console.log('Adicionando item ao objeto', adicionandoNovaRefeicao)

// Atualizando valores
const atualizandoRefeicao = {
  ...refeicao,
  descricao: 'Café das 09hrs'
}
console.log('Atualizando valor do objeto:', atualizandoRefeicao)

// Destructuring - Extraindo Valores
const { descricao } = refeicao
console.log('Extraindo valores:', descricao)

// Destructuring + Rest - Removendo valores
const { id, ...refeicaoSemId } = refeicao
console.log('Removendo valores do objeto:', refeicaoSemId)

//     ----   Trabalhando com Arrays   ----       //
console.log('----   Trabalhando com Arrays   ----')

// Arrays Iniciais
const refeicaoArray = [
  { id: 1, descricao: 'Café da Manhã', calorias: 420 },
  { id: 2, descricao: 'Almoço', calorias: 580 }
]

const novaRefeicao = {
  id: 3,
  descricao: 'Café da Tarde',
  calorias: 280
}

// Adicionando item ao array
const refeicaoAtualizada = [ ...refeicaoArray, novaRefeicao ]
console.log('Adicionando item ao Array: ', refeicaoAtualizada)

// Atualizando item no array (.map)
const numeros = [1, 2, 3]

function dobrar(num) {
  return num * 2
}

const numerosDobrados = numeros.map(dobrar)
console.log(numerosDobrados)

// Atualizando item no array refeicoes
function atualizarDescricao (refeicao) {
  if (refeicao.id === 2) {
    return {
      ...refeicao,
      descricao: 'Almoço Atualizado'
    }
  }
  return refeicao
}

const descricaoRefeicoesAtualizadas = refeicaoAtualizada.map(atualizarDescricao)

console.log('Descrição Atualizada:', descricaoRefeicoesAtualizadas)

// Removendo item no array refeicoes (.filter)
function filtro(refeicao) {
  if (refeicao.id === 2) {
    return true
  }
}

const refeicaoFiltradas = refeicaoAtualizada.filter(filtro)
console.log('Refeição Filtradas:', refeicaoFiltradas)
