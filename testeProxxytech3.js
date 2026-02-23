//EX 3

// OBS: INFELIZMENTE ATINGI O TEMPO LIMITE DE 1:30, TRAVEI NESSA QUESTAO E NAO CONSEGUI TERMINAR, DEIXO O CODIGO PARCIALMENTE FEITO E A LINHA DE RACIOCINIO

// TEMPO ****
// MEMORIA ****

// CODIGO + EXPLICACAO + 3 CASOS DE TESTE

const nomes1 = [
    "Maria Silva",
    "João Pereira",
    "Ana Souza",
    "João Silva",
    "Ana Lima"
]
const nomes2 = [
    "Carlos Oliveira",
    "Ana Maria Costa Silva",
    "João Souza",
    "Paula Oliveira",
    "Ana Costa"
]
const nomes3 = [
    "Lucas Lima",
    "Lucas Lima",
    "Lucas Alves",
    "Pedro Lima",
    "Ana Lima"
]

function ultimoSobrenome(nome) { // função que retorna o último sobrenome de um nome completo
    const partes = nome.split(" ") // divide o nome em palavras
    return partes[partes.length - 1] // pega o último elemento (sobrenome principal)
}


function primeiroNome(nome) { // função que retorna o primeiro nome de um nome completo
    const partes = nome.split(" ") // divide o nome em palavras
    return partes[0] // pega o primeiro elemento
}


function ordenarNomes(nomes) { 
    return nomes.sort((a, b) => { //ordena por ordem alfabetica
        const sobrenomeA = ultimoSobrenome(a) // pega sobrenome1
        const sobrenomeB = ultimoSobrenome(b) // pega sobrenome2

        // criar comparacao entre sobrenomes
        
        const primeiroA = primeiroNome(a) // pega nome1
        const primeiroB = primeiroNome(b) // pega nome2

        // criar comparacao entre nomes para desempate

        // criar desempate final mantendo a ordem original

    })
}

console.log(ordenarNomes(nomes1)) 
console.log(ordenarNomes(nomes2)) 
console.log(ordenarNomes(nomes3)) 