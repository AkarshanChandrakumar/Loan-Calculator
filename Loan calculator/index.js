function claculateLoan(){
   loanAmountValue=document.getElementById("loan-amount").value;
     interestRateValue=document.getElementById("interest-rate").value;
   monthNumber=document.getElementById("months").value;
    interest=(loanAmountValue*(interestRateValue*0.01))/monthNumber;
 MonthlyPayment=(loanAmountValue/monthNumber+interest);
   fees=Math.floor(MonthlyPayment)
    document.getElementById("payment").innerHTML=`Monthly Payment : ${fees}`;
}