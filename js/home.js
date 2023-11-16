let totalBalance= document.getElementById('total_balance');
let btnCashIn= document.getElementById('btn_cashIn');
let btnCashOut= document.getElementById('btn_cashOut');
let pin = 1234;
let notification = document.getElementById('notification_space');

btnCashIn.addEventListener('click', function(e){
    e.preventDefault();

    let cashIn = document.getElementById('cash_in_amount').value;
    let cashInNum= parseFloat(cashIn);

    if(cashIn == ''){
        alert("Please input the ammount correctly")
    }
    else{
        let totalBalanceNum = parseFloat(totalBalance.innerText);

    totalBalance.innerText = totalBalanceNum + cashInNum;

    cashIn = document.getElementById('cash_in_amount').value = " ";

    let history = document.getElementById('history');

    const para = document.createElement("p");
     para.innerText = `${cashInNum} cash in Successfully
     Cash In `;
     para.className= "text-xl bg-white font-semibold text-gray-800 p-4 rounded-lg shadow-md"
     history.appendChild(para);

//  notification
     var p = document.createElement('p');
     var text = document.createElement('span')

     text.innerHTML = `${cashInNum} cash in Successfully`;

     var crossBtn = document.createElement('button');
     crossBtn.innerHTML= "X";
     crossBtn.className= "cross"
     

     crossBtn.addEventListener('click', function(){
        p.remove();
     })

     p.appendChild(text);
     p.appendChild(crossBtn);

     p.className= "text-xl bg-white font-semibold text-gray-800 p-4 rounded-lg shadow-md";

     notification.appendChild(p);

     setTimeout(()=> {
        text.innerHTML = ` `;
         crossBtn.classList.remove= "cross";
         p.className= "hidden";

     },3000)


    //  notification

    //  let noti= document.getElementById('notification_space');
    //  np.innerHTML = `<p id="noti-p" class="inline-block">${cashInNum} cash in Successfully Cash In</p> <button id="cross" class="text-red-700">X</button>`;
    //  np.className= "text-xl  font-semibold text-gray-800 p-4 rounded-lg shadow-md"
    //  noti.appendChild(np);

    //  let notiCross= document.getElementById('cross');
    //  notiCross.addEventListener('click', function(){
    //     let noti_p= document.getElementById('noti-p');
    //     noti_p.classList.add('hidden');
    //     notiCross.classList.add('hidden');


    //  })



    }

    // let totalBalanceNum = parseFloat(totalBalance.innerText);

    // totalBalance.innerText = totalBalanceNum + cashInNum;

    // cashIn = document.getElementById('cash_in_amount').value = " ";

    // let history = document.getElementById('history');

    // const para = document.createElement("p");
    //  para.innerText = `${cashInNum} cashed in 
    //  Cash In`;
    //  para.className= "text-xl bg-white font-semibold text-gray-800 p-4 rounded-lg shadow-md"
    //  history.appendChild(para);

})

// if( parseFloat(totalBalance.innerText) > parseFloat(cashOut)){
//     btnCashOut.addEventListener('click', function(e){
//         e.preventDefault();
    
//         let cashOut = document.getElementById('cash_out_amount').value;
//         let cashOutNum= parseFloat(cashOut);
//         let cashPin= document.getElementById('cashout-pin');
//         cashPin.classList.remove("hidden");
        
    
//         if(cashOut == ''){
//             alert("Please input the ammount correctly")
//             cashPin.classList.add("hidden");
//         }
//         else{
//             let btnCashOut_pin = document.getElementById('btn_cashOut_pin');
//             let cashoutPin = document.getElementById('cash_out_amount_pin');
//             let crossPin = document.getElementById('pin_cross');
//             crossPin.addEventListener('click', function(){
//                 cashPin.classList.add("hidden");
//             })
    
//             btnCashOut_pin.addEventListener('click', function(e){
//                 e.preventDefault();
//                 if(cashoutPin.value == pin){
//                     let totalBalanceNum = parseFloat(totalBalance.innerText);
    
//                     totalBalance.innerText = totalBalanceNum - cashOutNum;
    
//                     cashOut = document.getElementById('cash_out_amount').value = " ";
    
//                     let history = document.getElementById('history');
    
//                      const para = document.createElement("p");
//                      para.innerText = `${cashOutNum} cash out Successfully
//                         Cash In`;
//                      para.className= "text-xl bg-white font-semibold text-gray-800 p-4 rounded-lg shadow-md"
//                       history.appendChild(para);
//                       cashoutPin = document.getElementById('cash_out_amount_pin').value= " ";
//                       cashPin.classList.add("hidden");
//                 }
//                 else{
//                     alert("Wrong Pin");
//                 }
//             })
    
//         }
    
    
    
    
//     })
// }
// else{
//     alert('Not Enough Balance');
// }

btnCashOut.addEventListener('click', function(e){
    e.preventDefault();

    let cashOut = document.getElementById('cash_out_amount').value;
    let cashOutNum= parseFloat(cashOut);
    let cashPin= document.getElementById('cashout-pin');
    cashPin.classList.remove("hidden");
    

    if(cashOut == ''){
        alert("Please input the ammount correctly")
        cashPin.classList.add("hidden");
    }
    else{
        let btnCashOut_pin = document.getElementById('btn_cashOut_pin');
        let cashoutPin = document.getElementById('cash_out_amount_pin');
        let crossPin = document.getElementById('pin_cross');
        crossPin.addEventListener('click', function(){
            cashPin.classList.add("hidden");
        })

        btnCashOut_pin.addEventListener('click', function(e){
            e.preventDefault();
            if(cashoutPin.value == pin){
                let totalBalanceNum = parseFloat(totalBalance.innerText);

                totalBalance.innerText = totalBalanceNum - cashOutNum;

                cashOut = document.getElementById('cash_out_amount').value = " ";

                let history = document.getElementById('history');

                 const para = document.createElement("p");
                 para.innerText = `${cashOutNum} cash out Successfully
                    Cash In`;
                 para.className= "text-xl bg-white font-semibold text-gray-800 p-4 rounded-lg shadow-md"
                  history.appendChild(para);
                  cashoutPin = document.getElementById('cash_out_amount_pin').value= " ";
                  cashPin.classList.add("hidden");



                  //  notification
                  var p = document.createElement('p');
                  var text = document.createElement('span')

                  text.innerHTML = `${cashOutNum} cash out Successfully`;

                  var crossBtn = document.createElement('button');
                  crossBtn.innerHTML= "X";
                  crossBtn.className= "cross"
     

                  crossBtn.addEventListener('click', function(){
                     p.remove();
                  })

                  p.appendChild(text);
                  p.appendChild(crossBtn);

                  p.className= "text-xl bg-white font-semibold text-gray-800 p-4 rounded-lg shadow-md ml-2";

                  notification.appendChild(p);
                  
                  setTimeout(()=> {
                    text.innerHTML = ` `;
                     crossBtn.classList.remove= "cross";
                     p.className= "hidden";
            
                 },3000)
            }
            else{
                alert("Wrong Pin");
            }
        })

    }




})


 document.getElementById("submitBtn").addEventListener("click", function() {
      const operator = document.getElementById("operator").value;
      const number = document.getElementById("number").value;
      const amount = document.getElementById("amount").value;
      
      
      let validPattern = "";
      let operatorName = "";
      if (operator === "gp") {
        validPattern = /^017\d{8}$/;
        operatorName = "Grameenphone (GP)";
      } else if (operator === "robi") {
        validPattern = /^018\d{8}$/;
        operatorName = "Robi";
      } else if (operator === "banglalink") {
        validPattern = /^019\d{8}$/;
        operatorName = "Banglalink";
      }

      if (!validPattern.test(number)) {
        alert(`Invalid mobile number format for ${operatorName}. Please use ${operatorName} numbers according to the selected operator.`);
        return;
      }

       let totalBalanceNum = parseFloat(totalBalance.innerText);
       let amountBalance = parseFloat(amount)

                totalBalance.innerText = totalBalanceNum - amountBalance;

      const message = `Recharge of ${amount} Taka to ${operatorName} number ${number} successful!`;
      alert(message);

      let history = document.getElementById('history');

    const para = document.createElement("p");
     para.innerText = `Recharge of ${amount} Taka to ${operatorName} number ${number} successful!
     Recharge `;
     para.className= "text-xl bg-white font-semibold text-gray-800 p-4 rounded-lg shadow-md"
     history.appendChild(para);

//  notification
     var p = document.createElement('p');
     var text = document.createElement('span')

     text.innerHTML = `Recharge of ${amount} Taka to ${operatorName} number ${number} successful!`;

     var crossBtn = document.createElement('button');
     crossBtn.innerHTML= "X";
     crossBtn.className= "cross"
     

     crossBtn.addEventListener('click', function(){
        p.remove();
     })

     p.appendChild(text);
     p.appendChild(crossBtn);

     p.className= "text-xl bg-white font-semibold text-gray-800 p-4 rounded-lg shadow-md";

     notification.appendChild(p);

     setTimeout(()=> {
        text.innerHTML = ` `;
         crossBtn.classList.remove= "cross";
         p.className= "hidden";

     },3000)

     
    });


