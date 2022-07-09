class DonutMaker{

    constructor(numDonuts, numAutoclickers, numMultipliers,multiplierCost ){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.numMultipliers = numMultipliers;
        this.multiplierCost=multiplierCost;
    }

    addDonut(){
        this.numDonuts += 1;
        
    }
    addAutoclicker(){
        if (this.numDonuts >= 100){
            this.numDonuts -=100;
            this.numAutoclickers += 1;
        }
    }
  
    addAutoclicker2 (){
       
            for (this.numDonuts=1; this.numDonuts<= this.numAutoclickers; this.numDonuts++){
           this.numDonuts+=Number(Math.pow(1.2, this.numAutoclickers).toFixed(2));
            }
            
            this.numAutoclickers += 1;
        }
            

   


    addMultiplier(){

    if (this.numDonuts<=14){
        this.numDonuts -=14;
        this.numMultipliers +=1;
        let multiplierCost=10;
       for (let i=0; i<=this.numDonuts; i++) {
             multiplierCost += (multiplierCost*20/100);
         }}
    
        }
 
    addDonutMultiplier(){
      this.numDonuts=10;
      this.numAutoclickers=0;
      this.numMultipliers=1;

    //this.numDonuts += this.numDonuts*1.2;
    for (let i=0; i<this.numMultipliers; i++) {
        //i+=1;
        this.numDonuts += Math.pow(1.2, this.numMultipliers);
    }}



 addDonutMultiplier2(){
   this.numDonuts=10;
   this.numAutoclickers=0;
   this.numMultipliers=2;
   this.numDonuts += Math.pow(1.2, this.numMultipliers);
  
 }
makeZero(){
 this.numDonuts=0;
 this.multiplierCost=0;
 this.numAutoclickers=0;
} 

}



export default DonutMaker;