/*var CustomerName = prompt('what is your name ?');
var Order =prompt('select your order');


if(Order='Pizza')
{
    var kind =prompt('what is the kind of pizza');

}


console.log( CustomerName);
console.log(Order );

console.log('Thank you');
document.write('<h1>Thank you</h1>');
console.log('We recieved your order');
document.write('We recieved your order');

document.write(CustomerName +","+  Order );



// today work

*/

var CustomerName = prompt('what is your name ?');
var Order = prompt('select your order');


while (Order !== "pizza" && Order !== "pasta")
{
    Order = prompt('select your order');
}


if (Order == "pizza") 
{
    var kind = prompt('what is the kind of pizza');
}

var itemOrder ='';
if (Order == "pizza") {
    itemOrder = '<img src="../pizza.jpg"/>';
}
else if (Order == "pasta") {
    itemOrder = '<img src="../pasta.jpg"/>';
}
document.write(itemOrder);

var num = prompt("What is the number of orders?")
var result = '';



document.write(result);



console.log(CustomerName);
console.log(Order);




console.log('Thank you');
document.write('<h1>Thank you</h1>');
console.log('We recieved your order');
document.write('<h1>We recieved your order</h1>');

document.write(CustomerName + ","+num+";" + Order);







