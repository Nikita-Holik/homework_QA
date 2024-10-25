let tank = {
    name: "Leopard",
    caliber: "120mm",
    speed: "70 km/h",

    getInfo: function() {
        for (let property in this) {
            if(typeof this[property] !== 'function'){
                console.log(`${property}: ${this[property]}`)
            }
        }

    }

    //Цикл перебирает все свойства объекта
    //Затем следует проверка, не является ли свойство функцией
    //Если свойство - не функция, вводим её в формате КЛЮЧ:ЗНАЧЕНИЕ


}

tank.getInfo();

tank.speed = '75 km/h';

tank.getInfo();