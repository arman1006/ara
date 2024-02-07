//Работа с клcac
class NumCheck{
    constructor(array){
    this.array = array;
    }
    
    filter(){
        return this.array.some(num => num % 3 === 0);
    }

    print() {
        if (this.filter()) {
            console.log("Да");
        } else {
            console.log("Нет");
        }
    }
}

const numbers = [1, 2, 4, 1, 9, 10];
const numCheck = new NumCheck(numbers);
numCheck.print();