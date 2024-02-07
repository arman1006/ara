//Работа с клcacс
class Animal{
    constructor(view, habital){
     this.view = view;
     this.habital = habital;
    }

    
}

class MammalAnimal extends Asset{
    constructor(view, habital, nutrition, reproduction ){
     super(view, habital);
     this.nutrition = nutrition;
     this.reproduction = reproduction;
     
    }
}

class BirdAnimal extends Asset{
    constructor( view, habital, movement, nestingsite ){
        super(view, habital);
        this.movement = movement;
        this.nestingsite = nestingsite;
        
    }
}

const bitcoin = new MammalAnimal ("насекомый", "трава" , "листики",  "спариваються");
console.log(bitcoin);