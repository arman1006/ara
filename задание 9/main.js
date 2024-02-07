//Работа с клcac
class Filter{
    i;
    resultFilter;

    

    filter(){
        this.i = [];
        for (let i = 0; i <= 100; i++){
            if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0){
                this.i.push(i);
            } 
               

        }
        return this.i;
       
    }
    print() {
        this.resultFilter = this.filter();
        console.log(this.resultFilter);
    }
      
    


   

}
const filter = new Filter();
filter.print();


