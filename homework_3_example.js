


function pow(x, y) {          
    let result = 1;
    for(let i = 0; i < y; i++){
        result *= x;
    }
    return result;
}
console.log(pow(2, 3));



// function pow(x, y) 
// x - число, которое нужно возвести в степень
// y - степень, в которую нужно возвести число

// let result = 1;
// Создаём переменную, которая имеет единицу на начале
// Она будет накапливать результат умножения. А пишем единицу, ибо любое число, которое умножено на 1, остаётся тем же

// for(let i = 0; i < y; i++){
//     result *= x;
//}
// Цикл будет повторяться "y" раз. Т.е., если "y" будет равен 7, то цикл будет повторяться 7 раз
// Каждую итерацию мы умножаем переменную result на число x

// return result;
// После завершения цикла, мы возвращаем конечное значение переменной

// console.log(pow(2, 3))
// Вывод результата с аргументами 2, 3 (можно записать другие)