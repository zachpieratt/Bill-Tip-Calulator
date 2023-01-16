//Prompt for data input from customer, assign unique check number, modify cardFee
const billPrompt = prompt('Enter Bill Amount');
let bill = parseFloat(billPrompt);
const checkNumber = Date.now();
const cardFee = 0.75;
console.log(`There is a $${cardFee} fee for paying by card.`);
const cardPrompt = prompt(`Will you be paying by card? Y/N`);
const tipPercentage = prompt(`What percentage would you like to tip? (Enter number only)`);

//Tip calculation based on customer bill and tip % input
let tipAmount = (bill * tipPercentage / 100);
tipAmount = tipAmount.toFixed(2);
let totalBill = parseFloat(bill) + parseFloat(tipAmount);
totalBill = Math.round(totalBill * 100) / 100;

// Itemized summary of bill
console.log(`


Check Number: ${checkNumber}
Subtotal: $${bill}`);
console.log(`Tip: $${tipAmount}`);
if (cardPrompt == 'Y' ) {
    console.log(`Card Fee: $${cardFee}`);
}
console.log(' ');
console.log('-------------------------------------------');
console.log();

// Total of bill / Error prompting customer to retry
if (cardPrompt == 'Y') {
  let completeBill = (totalBill += cardFee);
  console.log(`Total Bill: $${completeBill}`);
} else if (cardPrompt == 'N') {
  let completeBill = (totalBill + 0);
  console.log(`Total Bill: $${completeBill}`);
} else {
  console.log(`Invalid value for payment method, please try again`);

}
