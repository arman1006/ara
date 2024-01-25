const colleges = [
    {
        Name: "Aleg",
        lastName: "Basov",
        age: 18,
        well: 3,
        hobby: ["Swiming","Football"],
        studentСard: {
            number: 1234,
            group: 32,
            well: 3,

        }
    },
    {
        name: "Альбек",
        lastName: "Житваев",
        age: 30,
        item: "Русский",
        items: ["Русский","Математика","Лит-ра"],
        ContacDetails: {
            Phone: 89375354545,
            email: "ALBIBEK@mail.ru",
        }
            
            
        

    }
];

console.log(colleges[0]["Name"], colleges[0]["age"]);
console.log(colleges[1]["name"], colleges[1]["ContacDetails"]["email"]);




