class TaxCalculator{
    #rate
    constructor(){
        this.#rate = 15;
        this.state = 'TX';
        this.exempt = false;
    }
    #calculateExempt(number){
    return number * 100;
}
#calculateNonExempt(number){
    return number * 100;
}

    calculate(){
        if(this.exempt) {
            return this.#calculateExempt(1.37);
        }else{
            return this.#calculateNonExempt(5.72);
        }
    }
};

//should hide the rate
//should hide the calculateExempt method
//should hide the calculateNonExempt method











