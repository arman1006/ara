//Работа с класами
class um{

    arr;

    constructor(array){
    this.arr = array;
    }

    getSum(){
        let sum = 0;
        for( let i = 0; i < this.arr.length; i++){
            sum += this.arr[i];
        }

        return sum;
        
    }
    print(){
        const sum = this.getSum();
        console.log(sum);
    }
    
      

}

const arr = [1, 4, 5, 6];
const result = new um(arr);
result.print();


