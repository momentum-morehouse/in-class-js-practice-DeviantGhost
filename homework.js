// Problem 1
// declare a variable called fruit
// assign your variable the value "banana"
// console log your variable
// reassign your variable the value "peach"
// console log your variable
var fruit = "banana";
console.log(fruit);
fruit = "peach";
console.log(fruit);
// Problem 2
// write a function called product that accepts two numbers and 
// logs the product in the console and then
// returns the answer when you multiply them both together
// call that function on the numbers 4 & 689 to test it
let numOne = 4;
let numTwo = 689;
function product (numOne, numTwo){
    console.log(sumOne + sumTwo);
    return (sumOne * sumTwo);
}
product(numOne,numTwo);
// Problem 3
// write a function called evens that takes an array of numbers, removes 
// all the numbers that are odd and returns a new array with only the even numbers
// remember that even numbers have a remainder of 0 when you divide them by 2
// call your function on this array of numbers [4, 37, 18, 29, 52, 103, 22]
let numArray = [4, 37, 18, 29, 52, 103, 22];
function evens(numArray){
    evenArray = [];
    for(let i = 0; i < numArray.lenght; i++){
        if(numArray[i] % 2 === 0){
            evenArray.push(numArray[i]);
        }
    }
    return evenArray;
}
evens(numArray);
//Problem 4
// write a function called five that takes a word and prints it in the console
// five times
// call your function on the word "pineapple" to test it
let word = "pineapple";
function five (word){
    for(let i = 0; i < 5; i++){
        console.log(word);
    }
}
five(word);
//Problem 5
// write a function called shortWords that takes an array of words and then
// returns a new array with only the words that are 3 letters long or less
// call your function on this array ["basin", "pit", "cheese", "bun", "river"]
let listWords = ["basin", "pit", "cheese", "bun", "river"];
function shortWords(wordArray){
    let shortArray = [];
    for(let i = 0; i < wordArray.lenght;){
        if(wordArray[i].lenght <= 3){
            shortArray.push(wordArray[i]);
        }
    }
    return shortArray;
}
shortWords(listWords);

