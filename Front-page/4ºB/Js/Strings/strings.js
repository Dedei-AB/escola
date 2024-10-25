//  1)
function reverseString(str){
    let palavra = str.split('',3).reverse().join('')
    return palavra
}

// console.log(reverseString("javascript")); //Deve exibir: "tpircsavaj"
// console.log(reverseString("hello")); //Deve exibir: "olleh"

//2)
function countVowels(str){
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let palavra = str.toLowerCase()
    let contVogal = 0
    for (let letra of palavra){
        for(let i of vogais){
            if(letra == i){
                contVogal ++
            }
        }   
    }
    return contVogal
}

// console.log(countVowels("OpenAI")); // Deve exibir: 3
// console.log(countVowels("JavaScript")); // Deve exibir: 3

// 3)
function isPalindrome(str){
    let pOriginal = str
    let pReverse = str.split('').reverse().join('')
    if(pOriginal == pReverse){
        return true
    }else{
        return false
    }
}

//console.log(isPalindrome("arara")); //Deve exibir: true
//console.log(isPalindrome("hello")); //Deve exibir: false

// 4)
function countOccurrences(str, char){
    let palavra = str.split('')
    let caracter = char
    let contChar = 0
    for(let i of palavra){
        if(i == caracter){
            contChar ++
        }
    } return contChar
}

//console.log(countOccurrences("banana", "a")); //Deve exibir: 3
//console.log(countOccurrences("hello worldl", "l")); //Deve exibir: 3

// 5)
function getInitials(name){
    let Nome = name.split(' ')
    let inicial = ''
    for(let n of Nome){
        inicial += n[0]
    } return inicial
}

//console.log(getInitials("João Silva")); // Deve exibir: "JS"
//console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"

// 6)
function toSnakeCase(str){
    let palavra = str.split(' ').join('_').toLowerCase()
    return palavra
}

//console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
//console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"

// 7)
function capitalizeWords(str){
    let palavra = str.split(' ')
    for(let i of palavra){
        i[0] = i[0].toUpperCase()
    }
}

//console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
//console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"