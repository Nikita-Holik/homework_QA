function checkProbabilityTheory(count) {
    let evenCount = 0; // переменная, которая сохраняет кол-во парных чисел
    let i = 0; // для цикла while

    while (i < count) {
        let randomNumber = Math.floor(Math.random() * 901) + 100; // генерирует случайное число в диапазоне от 100 до 1000
        if(randomNumber % 2 === 0) evenCount++; // проверка на то, является ли число парным. Если да, увеличивается счётчик парных чисел evenCount
        i++; // увеличивает значение, чтобы двигаться к завершению цикла
    }

    // цикл работает до тех пор, пока i не станет меньше чем count


    let oddCount = count - evenCount; // подсчёт кол-ва непарных чисел
    let evenPercentage = (evenCount / count) * 100; // подсчёт процентов
    let oddPercentage = (oddCount / count) * 100; // подсчёт процентов

    console.log(`Кіл-ть згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних чисел: ${evenPercentage.toFixed(2)}%`);
    console.log(`Відсоток непарних чисел: ${oddPercentage.toFixed(2)}%`);
}

checkProbabilityTheory(1000); // тут задаём кол-во чисел