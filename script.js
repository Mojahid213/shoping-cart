document.getElementById("case-increase").addEventListener("click",function(){
  handelCasePrice(true);
  TaxAmount();
  TotalAmount();
})

document.getElementById("case-decrease").addEventListener("click", function(){
 handelCasePrice(false);
 TaxAmount();
 TotalAmount();
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
  handelPhonePrice(true);
  TaxAmount();
  TotalAmount();
})
document.getElementById("phone-decrease").addEventListener("click",function(){
  handelPhonePrice(false);
  TaxAmount();
  TotalAmount();
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

function TaxAmount(){
  const subtotalAmount = document.getElementById("subtotal");
  const subtoNum = parseInt(subtotalAmount.innerText);
  const Taxresult = (subtoNum/100)*2;
  document.getElementById("MrTax").innerText = Taxresult;
}
function TotalAmount(){
  const subtotalPrice = document.getElementById("subtotal");
  const subtoPrice = parseFloat(subtotalPrice.innerText);
  const taxid = document.getElementById("MrTax");
  const taxidNum = parseFloat(taxid.innerText);
  const finalprice = document.getElementById("totalPrices");
  finalprice.innerText = subtoPrice+taxidNum;
}
TaxAmount();
TotalAmount();
