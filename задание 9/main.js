//Работа с класами
class Sum{
    x;
    y;
    


    constructor(varX, varY, varZ){
        this.x = varX;
        this.y = varY;
        this.z = varZ;
    }

    print(){
        this.totalSum = (this.x + this.y);
        console.log(`Сумма чисел равна - ${this.totalSum}`);
    }

   
}
    const totalSum = new Sum(3, 56);
    totalSum.print();