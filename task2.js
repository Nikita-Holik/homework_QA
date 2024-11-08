var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


//Проверка регулярных выражений
function isTrustedEmail(email) {
    const regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
    return regex.test(email)
}

//Создание массива проверенных email
const trustedEmail = arr
.map(user => user.email)    //все email
.filter(isTrustedEmail);    //Фильтрация

console.log(trustedEmail)