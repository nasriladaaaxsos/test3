function displayMessage() {
    console.log("Delayed message");  
    
    

}
    
function chooseLunch(element){
    inputResgion = document.querySelector(".postalCode");
    if ( element.value === "USA"){
        inputResgion.value = "+1"
    }
    if ( element.value === "Palestine"){
        inputResgion.value = "00970"
    }
    else if ( element.value === "Jordan" ){
        inputResgion.value = "00971"
    }
    
}
/*
console.log("Start");
var count = 10;
setTimeout(displayMessage, 10000);    //call back function 
console.log("End");
*/
