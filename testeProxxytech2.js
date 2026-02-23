//EX 2

// TEMPO O(n²) 
// MEMORIA O(1) 

// CODIGO + EXPLICACAO + 3 CASOS DE TESTE
const nums1 = [2, 7, 11, 15]
const target1 = 9
const nums2 = [1, 7, 2, 2, 4]
const target2 = 4
const nums3 = [5, 9, 3, 4, 2]
const target3 = 6

function doisNumerosSoma(nums, target) { // loop percorre cada elemento como o primeiro número
    for (let i = 0; i < nums.length; i++) { // loop percorre todos os próximos elementos
        for (let j = i + 1; j < nums.length; j++) { // verifica se a soma dos dois números é igual ao target
            if (nums[i] + nums[j] === target) {
                // retorna os índices 
                // como percorremos da esquerda para a direita, garante que o segundo índice será o menor possível
                return [i, j]
            }
        }
    }
    // caso nenhum par seja encontrado, escreve na tela
    console.log ('nenhum par encontrado')
}

console.log(doisNumerosSoma(nums1, target1)) // [0, 1]
console.log(doisNumerosSoma(nums2, target2)) // [2, 3]
console.log(doisNumerosSoma(nums3, target3)) // [3, 4]