// 1) Create variables number1 and number2. Use sameness operators to tell user is they equal or not. 
// Show answer using alert.



let number1 = 125;
let number2 = 136;
alert( `Is it ${ number1 } = ${ number2 }? Answer: ${ number1 === number2}` );



// 2) Input information method and logical equals:

// Use prompt to ask user to input number. Check if number is odd or even. Show result in console.log.



let oddEvenNum = prompt( "Can you input number", 0 );
console.log( +oddEvenNum % 2 ? `Your number = ${oddEvenNum} and it is ODD` : `Your number = ${oddEvenNum} and it is EVEN ` );



// 3) Product price and console.log.

// Use prompt for create variables price and quantity.
// Use formula (price * quantity) for count product price. Show result in console.log



let productPrice = prompt( "Can you input price", 1 );
let productQuantity = prompt( "Can you input quantity", 1 );
console.log( `Total price for products: ${productPrice} * ${productQuantity} = ${ +productPrice * +productQuantity }` );



//4) Product discount and alert

// Use prompt to ask user to input product price.
// Use alert to show user product discount which is 50% off price.


var noDiscPrice = prompt( "Can you input price", 1 );
alert( `Congratulation!!! You got discount 50% on your first purchase. Was ${ noDiscPrice } => NOW ${ +noDiscPrice * 0.5 }` );



//5) Сomparisons of 3 numbers:

// Use prompt to ask user to input 3 numbers.Show in console biggest number.



let numberOne = prompt( "Can you input FIRST NUMBER", 1 );
let numberTwo = prompt( "Can you input SECOND NUMBER", 1 );
let numberThree = prompt( "Can you input THIRD NUMBER", 1 );

if( +numberOne > +numberTwo && +numberOne > +numberThree ) {
    console.log( `Your numbers are: 1st number=${numberOne}, 2nd number=${numberTwo}, 3rd number=${ numberThree }. Biggest one is number1 = ${numberOne}` );
} else if ( +numberOne < +numberTwo && +numberTwo > +numberThree ) {
    console.log( `Your numbers are: 1st number=${numberOne}, 2nd number=${numberTwo}, 3rd number=${ numberThree }. Biggest one is number2 = ${numberTwo}` );
} else if ( +numberOne === +numberTwo && +numberTwo === +numberThree ) {
    console.log( `Your numbers are: 1st number=${numberOne}, 2nd number=${numberTwo}, 3rd number=${ numberThree }. They are equal` );
} else {
    console.log( `Your numbers are: 1st number=${numberOne}, 2nd number=${numberTwo}, 3rd number=${ numberThree }. Biggest one is number3 = ${numberThree}` );
}



// 6)Season:

// Ask user to input month number ( from 1 to 12 )
// Show in console to which season the entered month belong



let month = +prompt( " Can you input your favourite month (from 1 to 12) ", 1 );
if( month === 12 || month === 1 || month === 2 ) {
    console.log( `You have entered ${month} and your favourite season is WINTER` );
} else if ( month === 3 || month === 4 || month === 5 ) {
    console.log( `You have entered ${month} and your favourite season is SPRING` );
} else if ( month === 6 || month === 7 || month === 8 ) {
    console.log( `You have entered ${month} and your favourite season is SUMMER` );
} else if ( month === 9 || month === 10 || month === 11 ) {
    console.log( `You have entered ${month} and your favourite season is AUTUMN` );
} else {
    console.log( `You have entered ${month} we are so sorry you don't know how many months in a year` );
}



// 7) Student mark:

// Ask user to input mark for test ( from 0 to 100 )
// Transfer number to mark( A, B, C, D, F ) under such conditions
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// less than 60: F
// Increase student mark by 1 using postfix increment.
// Show mark before and after increase and use conditional operator to decide if student pass exam or not ( minimum 60 ).


let mark = +prompt( "Can you input your exam mark", 1 )

if ( mark >= 0 && mark <= 59 ) {
    console.log( `You have entered mark ${mark} it is equal to F` );
} else if ( mark >= 60 && mark <= 69 ) {
    console.log( `You have entered mark ${mark} it is equal to D` );
} else if ( mark >= 70 && mark <= 79 ) {
    console.log( `You have entered mark ${mark} it is equal to C` );
} else if ( mark >= 80 && mark <= 89 ) {
    console.log( `You have entered mark ${mark} it is equal to B` );
} else if ( mark >= 90 && mark <= 100 ) {
    console.log( `You have entered mark ${mark} it is equal to A` );
} else {
    console.log( `Try next year. You didn't read the assignment carefully.` );
}

console.log( `Your mark is ${mark++}. Congratulation we are decided to increase your mark for 1 point and now it is ${mark}` );
( mark >= 60  ) ? console.log("Congratulation! You are pass exam. See you soon") : console.log( "Sorry...See you next year" );


// Additional home work
//Rock scissor paper game  

let figure = +prompt( "Choose: 0 = rock; 1 = scissor; 2 = paper", 1 );

let randomNum = Math.floor( Math.random() * 3 );
console.log( "0 = rock; 1 = scissor; 2 = paper" );
console.log(` user: ${ figure },  computer: ${randomNum} `);

if( figure === 0 && randomNum === 1) {
    console.log("you win");
} else if ( figure === 1 && randomNum === 2 ) {
    console.log("you win");
} else if ( figure === 2 && randomNum === 0 ) {
    console.log( "you win" );
} else if ( figure === randomNum ) {
    console.log( "draw" );
} else if ( figure > 2 ) {
    console.error( "Try again" );
} else {
    console.log( "Loser" );
}

