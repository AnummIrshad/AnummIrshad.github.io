let incrementButton = document.getElementsByClassName("inc");
let decrementButton = document.getElementsByClassName("dec");
//console.log(incrementButton);
//console.log(decrementButton);

//INCREMENT
for (let i = 0; i < incrementButton.length; i++) {
  let button = incrementButton[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    //console.log(buttonClicked);

    let input = buttonClicked.parentElement.children[2];

    let inputValue = input.value;

    let newValue = parseInt(inputValue) + 1;
    //console.log(newValue);

    input.value = newValue;
  });
}

//DECREMENT
for (let i = 0; i < decrementButton.length; i++) {
  let button = decrementButton[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    //console.log(buttonClicked);

    let input = buttonClicked.parentElement.children[2];

    let inputValue = input.value;

    let newValue = parseInt(inputValue) - 1;
    //console.log(newValue);

    //to remove negative values
    if (newValue >= 0) {
      input.value = newValue;
    } else {
      alert("Qty cannot be less than zero");
    }
  });
}

//grab input elements

//grabbing inputs  values
let input = document.getElementById("sladult");
let input1 = document.getElementById("slchild");
let input2 = document.getElementById("fadult");
let input3 = document.getElementById("fchild");
let input4 = document.getElementById("infant");
let txtvisit = document.getElementById("visit");
let txtOutput = document.getElementById("total");

let btnCalculate = document.getElementById("calculate");
btnCalculate.addEventListener("click", calculate);
//Calculate total cost of tickets
// == should be a value

//let input = document.getElementById('sladult');

function calculate() {
  let sladult = parseInt(input.value);
  let slchild = parseInt(input1.value);
  let fadult = parseInt(input2.value);
  let fchild = parseInt(input3.value);
  let infant = parseInt(input4.value);
  //input values convert to Integers

  let visit = txtvisit.value;
  let amount1 = document.getElementById("sladultamount");
  let amount2 = document.getElementById("slchildamount");
  let amount3 = document.getElementById("fadultamount");
  let amount4 = document.getElementById("fchildamount");
  let amount5 = document.getElementById("infantamount");
  let amount6 = document.getElementById("cost");
  //step 2 catch element from table row

  if (visit == "half") {
    total =
      sladult * 1550 +
      slchild * 1050 +
      fadult * 5950 +
      fchild * 3150 +
      infant * 0;
  } else if (visit == "full") {
    total =
      sladult * 1800 +
      slchild * 1300 +
      fadult * 6300 +
      fchild * 3500 +
      infant * 0;
  } else {
    total =
      sladult * 1200 +
      slchild * 700 +
      fadult * 5500 +
      fchild * 2700 +
      infant * 0;
  }

  txtOutput.innerText = `LKR ${total}`;
  amount1.innerText = `${sladult}`;
  // from here: let sladult = parseInt(input.value);
  amount2.innerText = `${slchild}`;
  amount3.innerText = `${fadult}`;
  amount4.innerText = `${fchild}`;
  amount5.innerText = `${infant}`;
  amount6.innerText = `${total}`;
}
//amount7.innerText = `${total}`;
//step 3 is to get the output

//step 1: creating a new id so we can grab it in js
//step 2: creating a new variable to grab and store ID created:
//let amount1 = document.getElementById ("sladultamount");
//step 3: output the value : name of variable created, dot, innerText , equals and input value variable name
//amount1.innerText = `${sladult}`;

//------------------------------------------------------------------------------------------------
//------------------------------LOCAL STORAGE-----------------------------------------------
//A method of storing key value data in a website

let btnAddToFav = document.getElementById("addToFavourite");
let btnOrderFav = document.getElementById("orderFavourite");
let txtFavOrder = document.getElementById("total");

btnAddToFav.addEventListener("click", favourite);
function favourite() {
  event.preventDefault(event);
  localStorage.setItem(`Total order cost`, `LKR ${total.toFixed(2)}`);
}

btnOrderFav.addEventListener("click", orderFav);
function orderFav() {
  event.preventDefault(event);
  let Order = localStorage.getItem("Order");
  txtFavOrder.innerText = `${Order}`;
}

//------------------------------PLACE FINAL ORDER AND THANK YOU-----------------------------------------------
let theform = document.getElementById("form");

let btnPlaceOrder = document.getElementById("placeOrder");
btnPlaceOrder.addEventListener("click", placeOrder);
function placeOrder() {
  let amount1 = document.getElementById("sladultamount");
  let amount2 = document.getElementById("slchildamount");
  let amount3 = document.getElementById("fadultamount");
  let amount4 = document.getElementById("fchildamount");
  let amount5 = document.getElementById("infantamount");
  let amount6 = document.getElementById("cost");

  txtOutput.innerText = 0;
  amount1.innerText = 0;
  amount2.innerText = 0;
  amount3.innerText = 0;
  amount4.innerText = 0;
  amount5.innerText = 0;
  amount6.innerText = 0;
}
function alertMessage() {
  if (form.checkValidity()) {
    //event.preventDefault(event);
    alert(`Thank you for your custom reservation!`);
    window.location.reload();
  }
}

//------------------------------LOCAL STORAGE TESTING-----------------------------------------------
/* 
  let myArray = {
  fadult: "",
  fchild: "",
  infant: "",
  total: "",
};
let jsonArray = JSON.stringify(myArray);
localStorage.setItem("newStorage", jsonArray);

let newStorage = localStorage.getItem("newStorage");
let newobj = JSON.parse(newStorage);
console.log(newobj); */

//------------------------------LOYALTY POINTS-----------------------------------------------
let btnLoyalty = document.getElementById("checkLoyality");
btnLoyalty.addEventListener("click", calcLoyaltyPoints);

let loyaltyPoints = 0;
let totalTicket = 0;

function calcLoyaltyPoints() {
  let sladult = parseInt(input.value);
  let slchild = parseInt(input1.value);
  let fadult = parseInt(input2.value);
  let fchild = parseInt(input3.value);
  let infant = parseInt(input4.value);

  totalTicket = totalTicket + sladult + slchild + fadult + fchild + infant;

  if (totalTicket > 3) {
    loyaltyPoints =
      sladult * 15 + slchild * 15 + fadult * 15 + fchild * 15 + infant * 15;
    localStorage.setItem("loyalty", loyaltyPoints);
  } else {
    loyaltyPoints = 0;
  }
}

btnLoyalty.addEventListener("click", showLoyaltyPoints);
function showLoyaltyPoints() {
  event.preventDefault(event);
  loyaltyPoints = JSON.parse(localStorage.getItem(`loyalty`));
  if (loyaltyPoints > 0) {
    alert(
      "Congratulations! You have earned " +
        loyaltyPoints +
        " loyalty points so far"
    );
  } else {
    event.preventDefault(event);
    alert("Sorry! You don't have any loyalty points so far");
  }
  localStorage.removeItem(`loyalty`);
  localStorage.setItem("loyalty", loyaltyPoints);
}
//showLoyaltyPoints();

//------------------------------------------------------------------------------------------------

//------------------------------MULTIPLE ORDER TABLE-----------------------------------------------
/*let noOfTickets = [];

function tableData() {
  let html = "<table border ='0|0> class='table' ";
  setTimeout(() => {
    html += "<thead>";
    html += "<tr>";
    html += "<td>No.</td>";
    html += "<td>Local Adult</td>";
    html += "<td>Local Adult</td>";
    html += "<td>Local Child</td>";
    html += "<td>Foreign adult</td>";
    html += "<td>Foreign Child</td>";
    html += "<td>Infant</td>";
    html += "<td>Total Cost</td>";
    html += "<tr>";
    html += "</thead>";

    for (let i = 0; i < noOfTickets.length; i++) {
      let no = i + 1;

      html += "<tr>";
      html += "<td>" + "(" + no + ")" + "</td>";
      html += "<td>" + noOfTickets[i].sladult + "</td>";
      html += "<td>" + noOfTickets[i].slchild + "</td>";
      html += "<td>" + noOfTickets[i].fadult + "</td>";
      html += "<td>" + noOfTickets[i].fchild + "</td>";
      html += "<td>" + noOfTickets[i].infant + "</td>";
      html += "<td>" + noOfTickets[i].total + "</td>";
      html += "</tr>";
    }
    html += "</table>";
    document.getElementById("table").innerHTML = html;
  }, 10);
}
tableData();

function addOnclick() {
  let tladults = document.getElementById("sladult").value;
  let tlchild = document.getElementById("slchild").value;
  let tfadult = document.getElementById("fadult").value;
  let tfchild = document.getElementById("fchild").value;
  let tinfant = document.getElementById("infant").value;
  let ttotal = document.getElementById("total").value;

  noOfTickets.push({
    sladult: tladults,
    slchild: tlchild,
    fadult: tfadult,
    fchild: tfchild,
    infant: tinfant,
    total: ttotal,
  });

  tableData();
  addOnclick();
}

*/

/* Overall table code repeat test

let noOfTickets = [];

function tableData () {
  let html = "<table border ='0|0>";
  setTimeout (() => {
    html += "<thead>";
    html += "<tr>";
     html += "<th>Local Adult</th>";
    html += "<th>Local Adult</th>";
    html += "<th>Local Child</th>";
    html += "<th>Foreign adult</th>";
    html += "<th>Foreign Child</th>";
    html += "<th>Infant</th>";
    html += "<th>Total Cost</th>";
    html += "<th></th>";
    html += "<tr>";
    html += "</thead>";

    for (let i = 0; i< noOfTickets.length; i++){
      let no = i+1;
      html += "<tr>";
      html += "<td>" + noOfTickets[i].sladult + "</td>";
      html += "<td>" + noOfTickets[i].slchild + "</td>";
      html += "<td>" + noOfTickets[i].fadult + "</td>";
      html += "<td>" + noOfTickets[i].fchild + "</td>";
      html += "<td>" + noOfTickets[i].infant + "</td>";
      html += "<td>" + noOfTickets[i].total + "</td>";
      html += "</tr>";
    }
  html += "</table>";
  document.getElementById("table").innerHTML = html
  }, 200);
}
tableData();


btnCalculate.addEventListener("click", addOnclick);
function addOnclick(){ 


   //let sladult = document.getElementById('sladult').value

  //store things in a variable by grabbing the ids of the input fields
  if ( amount1>0  || amount2>0  || amount3>0 || amount4>0 || amount5>0 || amount6>0) {
      let sladult= amount1 ;
      let slchild = amount2;
      let fadult = amount3;
      let fchild = amount4;
      let infant = amount5;
      let total = amount6;

      noOfTickets.push({
        sladult: sladult,
        slchild: slchild,
        fadult: fadult,
        fchild: fchild,
        infant: infant,
        total: total
      })
}
tableData();
addOnclick();

}



*/

// --------------------------Donate section---------------------------------
//--------------------------------------------------------------------------

//Input validations for the donate form
function inputValidation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var cardNumber = document.getElementById("cardNum").value;
  var pinNumber = document.getElementById("cvv").value;
  var cardholderName = document.getElementById("cardHolder").value;
  var mothInput = document.getElementById("monthInput").value;
  var yearInput = document.getElementById("yearInput").value;
  var fixedDonatons = document.getElementById("fixedDonatons").value;
  var email_pattern = /^[A-Za-z\d\.\_]+\@[A-Za-z\d\.\-]+\.[A-Za-z]{2,5}$/;
  var name_pattern = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;
  var addr_pattern = /^[A-Za-z\d\.\-\/\#\,\s]+$/;
  var card_pattern = /^[0-9]{16,16}$/;
  var pin_pattern = /^[0-9]{3,3}$/;
  var holder_pattern = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/;

  if (!name.match(name_pattern)) {
    alert("Please enter a valid name");
    document.getElementById("txtname").focus();
    return false;
  }

  if (!email.match(email_pattern)) {
    alert("Please enter a valid email");
    document.getElementById("txtemail").focus();
    return false;
  }
  if (!address.match(addr_pattern)) {
    alert("Please enter a valid address");
    document.getElementById("address").focus();
    return false;
  }
  if (fixedDonatons == "") {
    alert("Please select the donation amout");
    return;
  }
  if (!cardNumber.match(card_pattern)) {
    alert("Please enter a valid cardnumber");
    document.getElementById("cardNum").focus();
    return false;
  }
  if (!cardholderName.match(holder_pattern)) {
    alert("Please enter a valid cardholder name");
    document.getElementById("card-holder").focus();
    return false;
  }
  if (!pinNumber.match(pin_pattern)) {
    alert("Please enter a valid pin number(cvv)");
    document.getElementById("txtadd").focus();
    return false;
  }

  if (mothInput == "") {
    alert("Please select expiration month of your credit/debit card");
    document.getElementById("monthInput").focus();
    return;
  }
  if (yearInput == "") {
    alert("Please select the expiration year of your credit/debit card");
    document.getElementById("yearInput").focus();
    return;
  }
  alert(
    "Thank you so much for your contribution! The receipt will be sent to your email address."
  );
  clearDonatiom();
}
// clear form after click the Donate button
function clearDonatiom() {
  const inputs = document.querySelectorAll(
    "#name, #email, #address, #fixedDonatons, #comment, #cardNum, #cardHolder, #monthInput, #yearInput, #cvv"
  );
  inputs.forEach((input) => {
    input.value = "";
  });
}

/*


//calculate and store loyalty points and save it in the local storage
//create initial variables 

let loyaltyPoints =0;
let totalTicket = 0;
function calcLoyaltyPoints(){
 
  
  totalTicket = input + input1 + input2 + input3 + input4 ;
  
  if(totalTicket > 3){
      loyaltyPoints = 15 * totalTicket; 
      localStorage.setItem("loyality",loyaltyPoints);
  }
} 

//when user clicks on the "Check loyalty points" button,
//it shows total loyalty points that have earned by the user so far based on the overall order


function showLoyaltyPoints(){
  
  loyaltyPoints = JSON.parse(localStorage.getItem(`loyality`));
 
  if(loyaltyPoints>0){
      alert("Congratulations! You have earned "+  loyaltyPoints + " loyalty points so far");
  }
  else{
      alert("Sorry! You don't have any loyalty points so far");
  }
}
showLoyaltyPoints();




/*
let decrement1 = document.getElementById('decrement1');
let increment1 = document.getElementById('increment1');

let decrement2 = document.getElementById('decrement2');
let increment2 = document.getElementById('increment2');

let decrement3 = document.getElementById('decrement3');
let increment3 = document.getElementById('increment3');


let minus3 = document.getElementById('decrement4');
let plus3 = document.getElementById('increment4');


let minus4 = document.getElementById('decrement5');
let plus4 = document.getElementById('increment5'); 
*/
