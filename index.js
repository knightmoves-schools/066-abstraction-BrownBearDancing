class TaxCalculator{
    
    constructor(){
        this.rate = 15;
        let state = 'TX';
        let exempt = false;
    }
    
    #calculate(){
        if(exempt){
            return calculateExempt(1.37);
        }else{
            return calculateNonExempt(5.72);
        }
    }
}

//should hide the rate
//should hide the calculateExempt method
//should hide the calculateNonExempt method




