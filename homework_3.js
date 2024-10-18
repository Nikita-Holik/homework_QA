
function pow(x, y) {          
    let result = 1;
    for(let i = 0; i < y; i++){
        result *= x;
    }
    return result;
}


let base = prompt("Введіть число, яке потрібно піднести: ")

let exponent = prompt("Введіть степінь: ")

console.log(pow(base, exponent))