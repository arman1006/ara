//Работа с клcac
class Filter{
    inputNumbers;
    resultFilter;

    constructor(numbers){
    this.inputNumbers = numbers;
    }

    filter(){
        return this.inputNumbers.filter(number =>number % 3 === 0 || number % 5 === 0 || number % 7 === 0);
        
    }
    print(){
        this.resultFilter = this.filter();
        console.log(this.resultFilter);
    }

}
const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultArrays = new Filter(inputNumbers);
resultArrays.print();

