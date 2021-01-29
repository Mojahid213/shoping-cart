document.getElementById("case-increase").addEventListener("click",function(){
  handelCasePrice(true);
})

document.getElementById("case-decrease").addEventListener("click", function(){
 handelCasePrice(false);
})

function handelCasePrice(Increase){
 const caseCount = document.getElementById("case-count");
 const caseInput = parseInt(caseCount.value);
 const SubTotal = document.getElementById("subtotal");
 const subtotalNum = parseInt(SubTotal.innerText);
 let caseNewcount = caseInput;
 let TotalSubtotal = subtotalNum;
  if(Increase==true){
    caseNewcount = caseInput+1;
    TotalSubtotal = subtotalNum + 59;
  }
  if(Increase==false && caseNewcount>0){
    caseNewcount = caseInput-1;
    TotalSubtotal = subtotalNum - 59;
  }
 caseCount.value = caseNewcount;
 const totalCost = document.getElementById("case-total");
 totalCost.innerText = caseNewcount*59;
 SubTotal.innerText = TotalSubtotal;
}

document.getElementById("phone-increase").addEventListener("click",function(){
  handelPhonePrice(true)
})
document.getElementById("phone-decrease").addEventListener("click",function(){
  handelPhonePrice(false)
})

function handelPhonePrice(IsPhone){
  const phoneCount = document.getElementById("phone-input");
  const phoneInput = parseInt(phoneCount.value);
  const SubTotal = document.getElementById("subtotal");
  const subtotalNum = parseInt(SubTotal.innerText);
  let phoneNewcount = phoneInput;
  let TotalSubtotal = subtotalNum;
   if(IsPhone==true){
    phoneNewcount = phoneInput+1;
    TotalSubtotal = subtotalNum + 1219;
   }
   if(IsPhone==false && phoneNewcount>0){
    phoneNewcount = phoneInput-1;
    TotalSubtotal = subtotalNum - 1219;
   }
   phoneCount.value = phoneNewcount;
  const totalCost = document.getElementById("phone-total");
  totalCost.innerText = phoneNewcount*1219;
  SubTotal.innerText = TotalSubtotal;
 }