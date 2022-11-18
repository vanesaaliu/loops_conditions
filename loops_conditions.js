// Write a program that requests a number from a user and finds the summation of every number from 1 to num. 
// For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
// let number=parseInt(prompt("Enter a number"));
// let sum=0;
// for(let i=0;i<=number;i++){
//     sum+=i;
// }
// console.log(sum);


// Request two numbers and find only their largest common divisor.
// let x=prompt("First num: ");
// let y=prompt("Second num: ");
// while(y) {
//     var t = y;
//     y = x % y;
//     x = t;
//   }
// console.log("Largest common divisor",x);


// Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
// let num=parseInt(prompt("Enter a number: "));

// for(let i=0;i<=num;i++){
//     if(num%i==0){
//         console.log(i);
//     }
// }


// Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
// let num=parseInt(prompt("Enter a number: "));
// console.log(num.toString().length);


// Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. 
// There’s only one variable (not 10) needed for input by a user. 
// let num;
// let positive=0;
// let negative=0;
// let zero=0;
// let even=0;
// let odd=0;
// for(let i=0;i<10;i++){
//     num=parseInt(prompt("Enter a number"));
//     if(num>0){
//         positive += 1;
//     }else if(num<0){
//         negative += 1;
//     }else if(num==0){
//         zero += 1;
//     }
    
//     if(num%2==0){
//        even += 1;
//     }else {
//         odd += 1;
//     }
// }
// console.log("You have entered:",positive,"positive numbers");
// console.log("You have entered:",negative,"negative numbers");
// console.log("You have entered:",zero,"zero numbers");
// console.log("You have entered:",even,"even numbers");
// console.log("You have entered:",odd,"odd numbers");

// Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more.
//  The loop continues until the user refuses. 
// let isTrue=true;
// do{
// let num1=parseInt(prompt("Enter a number:"));
// let num2=parseInt(prompt("Enter a number:"));
// let sign=prompt("Enter a sign");
// if(sign=="+"){
//     console.log(a+b);
// }else if(sign=="-"){
//     console.log(a-b);
// }else if(sign=="*"){
//     console.log(a*b);
// }else if(sign=="/"){
//     console.log(a/b);
// }else{
//     console.log("Undefinded.");
// }
// let answer=prompt("Do you want to continue calculating?");
// answer=answer=="yes"? isTrue = true:isTrue=false;
// }while(isTrue);


// Request a number from a user and ask by how many digits to move it. 
// Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).

// Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.
// let isTrue=true;
// let days=0;
// do {
//     days++;
//     switch(days){
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             days=0;
//             continue;
//     }
//     let answer=prompt("Day of the week. Would you like to see the next one?");
//     answer=answer=="yes" ? isTrue = true : isTrue = false;
// }while(isTrue);


// Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 
// for(let i=2;i<=9;i++){
//    for(let j=0;j<=10;j++){
//     console.log(i*j);
//    }
// }

// “Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it in the following way: every loop iteration needs to divide the range of numbers in half, you represent the result as N and ask the user “Your number > N, < N or == N?” Depending on what the user said, narrow down the range. So the starting range is 0 to 100, divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 