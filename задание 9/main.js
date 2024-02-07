//Работа с клcacс
class Asset{
    constructor(name, price){
     this.name = name;
     this.price = price;
    }

    
}

class FinancialAsset extends Asset{
    constructor(name, price, profitability, typeOfInvestment){
     super(name, price);
     this.profitability = profitability;
     this.typeOfInvestment = typeOfInvestment;
     
    }
}

class RealAsset extends Asset{
    constructor( name, price, adres, assetType ){
        super(name, price);
        this.adres = adres;
        this.assetType = assetType;
        
    }
}

const bitcoin = new FinancialAsset ("storm", 40000, 5000,  "USDT");
console.log(bitcoin);