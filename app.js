 
 function getInputValue(idName, price,  isUpdate){
    const inputNumber = document.getElementById(idName + '_number');
    let inputValue = inputNumber.value;
    if(isUpdate == true){
        inputValue = parseInt(inputValue) + 1;
    }
    else if ( inputValue > 0){
        inputValue = parseInt(inputValue) - 1;
    }
    inputNumber.value = inputValue;

    const inputTotal = document.getElementById(idName + '_total');
    inputTotal.innerText = inputValue * price;

    getCalculation();
 }

 function getUpdate(idName){
     const inputAmount = document.getElementById(idName + '_number');
     let inputAmountTotal = parseInt(inputAmount.value);
    return inputAmountTotal
 }

 function getCalculation(){
     const PhoneTotal = getUpdate('phone') * 1219;
     const caseTotal = getUpdate('case') * 59;
     const subTotal = PhoneTotal + caseTotal;
     const tax = subTotal / 10;
     const totalResult = subTotal + tax;

     document.getElementById('sub_total').innerText = subTotal;
     document.getElementById('tax').innerText = tax;
     document.getElementById('total').innerText = totalResult;
 }

 
 
 
 document.getElementById('phone_plus').addEventListener('click', function(){
     getInputValue('phone', 1219, true)
     
     
 })
 document.getElementById('phone_minus').addEventListener('click', function(){
      
    getInputValue('phone', 1219, false)
     
 })

 document.getElementById('case_plus').addEventListener('click', function(){
      
    getInputValue('case', 59,  true)
     
 })
 document.getElementById('case_minus').addEventListener('click', function(){
      
    getInputValue('case', 59,  false)
     
 })


























// function getUpdateInput(idName, price, isIncreasing){
//     const inputNumber = document.getElementById(idName + '_number');
//     let inputValue = inputNumber.value;
//     if(isIncreasing == true){
//         inputValue = parseInt(inputValue) + 1;
//     }
//     else if(inputValue > 0){
//         inputValue = parseInt(inputValue) - 1;
//     }
//     inputNumber.value = inputValue;

//     const inputAmount = document.getElementById(idName + '_total');
//     inputAmount.innerText = inputValue * price;

//     getCalculation()
// }

// function getInputAmount(idName){
//     const inputAmount = document.getElementById(idName + '_total');
//     const inputTotal = parseInt(inputAmount.value);
//     return inputTotal;
// }
// function getCalculation(){
//     const phoneTotal = getInputAmount('phone') * 1219;
//     const caseTotal = getInputAmount('case') * 59;
//     const totalAmount = phoneTotal + caseTotal;
//     const tax = totalAmount / 10;
//     const totalFinal = totalAmount + tax;

//     document.getElementById('sub_total').innerText = totalAmount;
//     document.getElementById('tax').innerText = tax;
//     document.getElementById('total').innerText = totalFinal; 
// }



// // phone Section Events Handeling

// document.getElementById('phone_plus').addEventListener('click', function(){
//    getUpdateInput('phone', 1219,  true)
// })

// document.getElementById('phone_minus').addEventListener('click', function(){
//    getUpdateInput('phone', 1219,  false)
// })

// // Case Section Events Handeling

// document.getElementById('case_plus').addEventListener('click', function(){
//     getUpdateInput('case', 59,  true)
//  })
 
//  document.getElementById('case_minus').addEventListener('click', function(){
//     getUpdateInput('case', 59,  true)
//  })
 