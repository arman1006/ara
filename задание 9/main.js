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
        this.max = (this.x, this.y);
        console.log(`ваше максимальое значение - ${this.max}`);
    }

   
}
    const max = new Sum(3, 56);
    max.print();