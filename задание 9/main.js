//Работа с клcac
class negative{
    constructor(array){
    this.array = array;
    }
    hasNegative(){
        let number = [];
        for (let number of this.array){
            if(number < 0) {
                console.log("да");
            } else{
                console.log("нет");
            }
        }
        
        return number;
        
    }
    

}
const numbers = [1, 2, -3, 4, 5];
const result = new negative(numbers);
result.hasNegative();

