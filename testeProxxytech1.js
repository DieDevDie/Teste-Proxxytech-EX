//EX 1

// TEMPO O
// MEMORIA O(1) 

// CODIGO + EXPLICACAO + 3 CASOS DE TESTE
const string1 = 'aaabbbaaa' 
const string2 = 'a'
const string3 = 'abaaaabbbbbb'

function maiorSequencia (string) {
    let atual = string[0] //pega o primeiro caractere da string que estamos contando e salva, vai servir para comparacao e "percorrer" a string
    let contadorAtual = 1 // cria uma contagem para poder salvar contagem atual, ja comeca em 1 pois o primeiro caractere ja conta, seve para segurar o valor da contagem atual

    let maior = string [0] // variavel para guardar o caractere de maior sequencia
    let maiorQuantidade = 1 //variavel para guardar o comprimento do maior caractere

    for (let i = 1; i < string.length; i++) { // percorre do segundo caractere ate o final
        if (string[i] === atual) { //verifica se o caractere atual e igual ao anterior
            contadorAtual++ // incrementa o contador da sequencia atual
        } else { //caso o caractere seja diferente do anterior, reinicia o contador para 1 e atualiza o caractere que esta sendo contado
        atual = string[i]
        contadorAtual = 1
        }
        if (contadorAtual > maiorQuantidade) { //se a sequencia atual for maior que a maior encontrada anteriormente
            maior = atual
            maiorQuantidade = contadorAtual
        }
    } 
    
    return [maior, maiorQuantidade] // retorna uma lista com o caractere com o maior comprimento e seu comprimento
}

const res1 = maiorSequencia(string1) 
const res2 = maiorSequencia(string2) 
const res3 = maiorSequencia(string3) 
console.log (`O caractere que forma maior sequência consecutiva e ${res1[0]} com comprimento de ${res1[1]}`) // a, 3
console.log (`O caractere que forma maior sequência consecutiva e ${res2[0]} com comprimento de ${res2[1]}`) // a, 1
console.log (`O caractere que forma maior sequência consecutiva e ${res3[0]} com comprimento de ${res3[1]}`) // b, 6

