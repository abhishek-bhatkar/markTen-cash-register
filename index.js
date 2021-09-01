//input
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
//processing
function validateBillandCash(){
    let billValue = Number(billAmount.value);
    let cashValue = Number(cashGiven.value);
    
    if(checkButton.innerText == "Next"){
        if(billAmount.value === ""){
            setMessage("Please enter bill amount!");
        } else if(billAmount.value < 0 || !Number.isInteger(Number(billValue))){
            setMessage("Please enter valid bill amount!");
        } else if(billAmount.value === 0){
            setMessage("Bill amount cannot be zero!");
        } else{
            console.log("true");
            return true;
        }
    } else {
        if(billAmount.value === "" || cashGiven.value === "" ){
            setMessage("Please enter amount!");
        } else if(billAmount.value < 0 || cashValue < 0 || !Number.isInteger(Number(billValue)) || !Number.isInteger(Number(cashValue))){
            setMessage("Please enter valid amount! Amount should be number!");
        } else if(billAmount.value === 0){
            setMessage("Bill amount cannot be zero!");
        } else if(cashGiven.value === 0){
            setMessage("Cash given cannot be zero!");
        } else if(billValue > cashValue){
            setMessage("Cash given is less than bill");
        } else if(billValue === cashValue){
            setMessage("No change to return!");
        } else {
            console.log("true");
            return true;
        }
    }
};

function calculateChange(){
    let billValue = Number(billAmount.value);
    let cashValue = Number(cashGiven.value);
    let returnAmount = cashValue - billValue;

    let returnNotesCount = Array(availableNotes.length).fill(0);;

    for(let i = 0; i < availableNotes.length; i++){

        returnNotesCount[i] = Math.floor(returnAmount / availableNotes[i]);
    
        returnAmount -= availableNotes[i] * returnNotesCount[i];

        if(returnAmount === 0){
            return returnNotesCount;
        }
    }

};

function displayChange(returnNotes){

    for (let i = 0; i < availableNotes.length; i++) {
        noOfNotes[i].innerText = returnNotes[i];
    }
}


function setMessage(msg){
    message.innerText = msg;
};

function reset(){
    message.innerText = " ";
    //console.log("msg");
};

//output

checkButton.addEventListener("click", () => {
    if(checkButton.innerText == "Next"){
        if(validateBillandCash() === true){
            checkButton.innerText = "Submit";
        } else {

        }
    } else if(validateBillandCash() === true){
        let change = calculateChange();
        displayChange(change);
    }
});

cashGiven.addEventListener("click",() =>{
    reset();
});
billAmount.addEventListener("click",() =>{
    reset();
});
