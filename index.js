class TaxCalculator{
    #rate = 15;
    constructor(){
       this.state = 'TX';
        this.exempt = false;
    }
        #calculateExempt(value) {
        return value * (this.#rate / 100);
    }

    #calculateNonExempt(value) {
        return value * (this.#rate / 100) + 1;
    }
    #calculate(){
        if(this.exempt){
            return this.#calculateExempt(1.37);
        }else{
            return this.#calculateNonExempt(5.72);
        }
    }
}

//should hide the rate
//should hide the calculateExempt method
//should hide the calculateNonExempt method






