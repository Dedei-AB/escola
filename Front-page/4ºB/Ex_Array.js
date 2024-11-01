// Ex 1)
function sumArray(arr){
    let soma = 0;
    for (let elemento = 0; elemento < arr.length; elemento ++){
        soma += arr[elemento]
    }
    return soma
}

// console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
// console.log(sumArray([10, -10, 10])); // Deve exibir: 10

// Ex 2)
function findMax(arr){
    let maior = arr[0];
    for(let elemento = 0; elemento < arr.length; elemento ++){
        if(arr[elemento] > maior){
            maior = arr[elemento]
        }
    } return maior
}

// console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
// console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10

// Ex 3)
function countOccurrences(arr, element){
    let repete = 0
    for(let elemento = 0; elemento < arr.length; elemento ++){
        if(arr[elemento] == element){
            repete ++
        }
    } return repete
}

// console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
// console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2

// Ex 4)
function allEquals(arr){
    for(let elemento = 1; elemento < (arr.length-1); elemento ++){
        if(arr[elemento] != arr[0]){
            return false;
        }
    } return true;
}
// console.log(allEquals([1, 1, 1])); // Deve exibir: true
// console.log(allEquals([1, 2, 1])); // Deve exibir: false

// Ex 5)
function removeDuplicates(arr){
    
}