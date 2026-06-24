function named(number){
    
    if (number>0) {
        return "It is a Positive Number";
        
        
    } else if(number<0) {
         return "It is a Negative Number";

        
    }else{
        return "It is equal to 0";
        
    }
}
let num = 10
console.log("num:", num);
console.log("Type:", named(num));