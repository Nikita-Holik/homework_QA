var services = [
    { name: "стрижка", price: 60 },
    { name: "гоління", price: 80 },
    { name: "Миття голови", price: 100 }
];

//Считает общую стоимость, добавляя цену всех услуг
function totalPrice() {    
    var total = 0;
    for(let i = 0; i < services.length; i++) {
        total += services[i].price;
    }
    return total + " грн";
}

//Находит наименьшую цену, сравнивая каждую услугу
function minPrice() {
    var min = services[0].price;
    for(let i = 1; i < services.length; i++) {
        if(services[i].price < min){
            min = services[i].price;
        }
    }
    return min + " грн"
}

//Находит наибольшую цену, сравнивая каждую услугу 
function maxPrice() {
    var max = services[0].price;
    for(let i = 1; i < services.length; i++) {
        if(services[i].price > max){
            max = services[i].price;
        }
    }
    return max + " грн"
}

services.push({ name: "Розбити скло", price: 200}); //добавление новой услуги

console.log("Загальна вартість послуг: ", totalPrice());       //Вывод 440 грн
console.log("Мінімальна вартість послуги:", minPrice()); // Вывод 60 грн
console.log("Максимальна вартість послуги:", maxPrice()); // Вывод 200 грн