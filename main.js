const phone = 15.678;
const laptop = 123.965;
const printer = 90.2345;

document.write('<pre>');

const max = Math.max (phone, laptop, printer);
console.log(max);
document.writeln("Max number: " + max);

const min = Math.min (phone, laptop, printer);
console.log(min);
document.writeln("Min number: " + min);

const sum = phone + laptop + printer;
console.log(sum);
document.writeln ("Sum of all products: " + sum);

const minNoChange = Math.floor(phone) + Math.floor(laptop) + Math.floor(printer);
console.log(minNoChange);
document.writeln("Sum of all products rounded to the lower side: " +minNoChange);


const maxRoundPrice = (Math.round(minNoChange/100))*100 ;
console.log(maxRoundPrice);
document.writeln("Rounded to hundreds: " + maxRoundPrice); 

const pairedNoPairedSum = (minNoChange % 2 === 0) ? true : false; 
console.log(pairedNoPairedSum);
document.writeln("Paired: " + pairedNoPairedSum);

const change = 500 - (phone + laptop + printer);
console.log(change);
document.writeln("Change from 500: " +change);

const roundAveragePrice = Math.round((sum/3)*100)/100;
console.log(roundAveragePrice);
document.writeln("Average price rounded to the second decimal place: " + roundAveragePrice);


const discount = Math.floor(Math.random() * 100); 
console.log(discount);
document.writeln("Discount: " + discount + "%");

const roundCheck = Math.round((sum)*100)/100;
console.log(roundCheck);
document.writeln("To pay without discount: " + roundCheck);

const roundDiscountCheck = Math.round((roundCheck - (roundCheck * (discount/100)))*100)/100;
console.log(roundDiscountCheck);
document.writeln("To pay with discount: " +roundDiscountCheck);

const myProfit = Math.round(((roundCheck/2) - (roundCheck * (discount/100)))*100)/100;
console.log(myProfit);
document.writeln("My net profit: " + myProfit);



