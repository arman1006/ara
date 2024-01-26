const people = [
    {name: "михаил", age: 16, group: "СП-1"  , hobbies: ["рыбалка", "охота"] },
    {name: "богдан", age: 17, group: "СП-2" , hobbies: ["просмотр кино", "отдых"] },
    {name: "слава", age: 16, group: "ПБ-1" , hobbies: ["майнкрафт", "смотреть аниме"] },
    {name: "валера", age: 16, group: "ССА-1" , hobbies: ["спать", "есть","гулять"] },
    {name: "андрей", age: 17, group: "ПБ-2" , hobbies: ["зал", "плавание","компуктер"] },
    {name: "евгений", age: 18, group: "ЭЛИ-3" , hobbies: ["спать", "есть","компуктер"] },
    {name: "серега", age: 18, group: "ССА-3" , hobbies: ["спать", "есть","компуктер"] },
    {name: "леха", age: 17, group: "ПБ-2" , hobbies: ["спать", "есть","компуктер"] },
    {name: "денись", age: 16, group: "СП-1" , hobbies: ["спать", "есть","компуктер"] },
    {name: "некит", age: 17, group: "ПБ-2" , hobbies: ["спать", "есть","компуктер"] },
    {name: "илья", age: 17, group: "ССА-2", hobbies: ["спать", "есть","компуктер"] }
];

function filterPeople(targetArray, targetGroup){
    return targetArray.filter(person => person.group === targetGroup );

}

let resultFilter = filterPeople(people, "СП-1"  );

console.log(resultFilter);