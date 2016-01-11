//Here we declare our variables, firstPhoneNumber, secondPhoneNumber, and thirdPhoneNumber.
//If we do not declare our variables, the computer will not know what firstPhoneNumber (and
//other variables) we are talking about are.
//We declare them here at the top, outside the function, so they can be accessed by the functions
//that follow.  This is called declaring variables globally.

//Our phone numbers
var firstPhoneNumber;
var secondPhoneNumber;
var thirdPhoneNumber;

//The length of the phone numbers
var firstPhoneNumberLength;
var secondPhoneNumberLength;
var thirdPhoneNumberLength;

//The sum of the digits of each phone numbers
var firstNumberDigitsSum;
var secondNumberDigitsSum;
var thirdNumberDigitsSum;

//The highest sum
var highestSum;
var highestSumPhoneNumber;

//We will do our first function, I called this 'performCalculation'.  This is called when the
//'Calculate' button is pressed
function performCalculation() {

	//Get the value of each of the textfields.
    firstPhoneNumber = document.getElementById("firstTextfield").value;
    secondPhoneNumber = document.getElementById("secondTextfield").value;
    thirdPhoneNumber = document.getElementById("thirdTextfield").value;

    //Now that we got the values, we need to check the length of these numbers to make sure they
    //don't exceed the standard 10 phone number digits.  Feel free to modify this to the needs
    //of your assignment.  We call 'figureOutLength' function, which is the function declare on line 79.

    figureOutLength();

    //Now that we got the length of the phone numbers, we create a conditional, an if statement, to
    //give the computer two options of the direction the script may go. 

    //#1) IF any of the phone numbers are longer than 10, present an alert.
    if (firstPhoneNumberLength > 10 || secondPhoneNumberLength > 10 || thirdPhoneNumberLength > 10){
    	//Present an alert
    	alert("Phone numbers cannot exceed 10 digits.  Do not include spaces or hyphens.");
    }
    //#2) OTHERWISE, RUN THESE FUNCTIONS
    else{
    	//First, we call the function to add each of the digits
		addDigits();

		//Next, we call the function to figure out highest sum
    	figureOutHighestSum();

    	//Finally, we call the function which presents the user the highest sum
   	    presentHighestSum();
    }
}

//This function figures out the length of the phone numbers to ensure the user doesn't input bogus,
//and remains pertinent to "phone numbers".
function figureOutLength(){
	firstPhoneNumberLength = firstPhoneNumber.length;
	secondPhoneNumberLength = secondPhoneNumber.length;
	thirdPhoneNumberLength =  thirdPhoneNumber.length;
}

//This function stores each digit of the phone number to a variable, then adds them up to a sum, then sets
//them to firstNumberDigitsSum/secondNumberDigitsSum/thirdNumberDigitsSum (line 33-35).
function addDigits(){

	//Getting each number of the first phone number and storing them to a variable
    var firstNumberFirstDigit = firstPhoneNumber.substring(0, 1);
    var firstNumberSecondDigit = firstPhoneNumber.substring(1, 2);
    var firstNumberThirdDigit = firstPhoneNumber.substring(2, 3);
    var firstNumberFourthDigit = firstPhoneNumber.substring(3, 4);
    var firstNumberFifthDigit = firstPhoneNumber.substring(4, 5);
    var firstNumberSixthDigit = firstPhoneNumber.substring(5, 6);
    var firstNumberSeventhDigit = firstPhoneNumber.substring(6, 7);
    var firstNumberEighthDigit = firstPhoneNumber.substring(7, 8);
    var firstNumberNinthDigit = firstPhoneNumber.substring(8, 9);
	var firstNumberTenthDigit = firstPhoneNumber.substring(9, 10);

	//Setting firstNumberDigitsSum to the sum of each digit.
	//The reason why there are two + is to make sure the computer knows that we are adding the numbers,
	//instead of combining the numbers.  E.g  1 + 2 ----> 12   VS   1 + 2 ----> 3
	firstNumberDigitsSum = +firstNumberFirstDigit + +firstNumberSecondDigit + +firstNumberThirdDigit + +firstNumberFourthDigit + +firstNumberFifthDigit + +firstNumberSixthDigit + +firstNumberSeventhDigit + +firstNumberEighthDigit + +firstNumberNinthDigit + +firstNumberTenthDigit;
	console.log(firstNumberDigitsSum);

	//Getting each number of the second phone number and storing them to a variable
	var secondNumberFirstDigit = secondPhoneNumber.substring(0, 1);
    var secondNumberSecondDigit = secondPhoneNumber.substring(1, 2);
    var secondNumberThirdDigit = secondPhoneNumber.substring(2, 3);
    var secondNumberFourthDigit = secondPhoneNumber.substring(3, 4);
    var secondNumberFifthDigit = secondPhoneNumber.substring(4, 5);
    var secondNumberSixthDigit = secondPhoneNumber.substring(5, 6);
    var secondNumberSeventhDigit = secondPhoneNumber.substring(6, 7);
    var secondNumberEighthDigit = secondPhoneNumber.substring(7, 8);
    var secondNumberNinthDigit = secondPhoneNumber.substring(8, 9);
	var secondNumberTenthDigit = secondPhoneNumber.substring(9, 10);

	//Setting secondNumberDigitsSum to the sum of each digit.
	secondNumberDigitsSum = +secondNumberFirstDigit + +secondNumberSecondDigit + +secondNumberThirdDigit + +secondNumberFourthDigit + +secondNumberFifthDigit + +secondNumberSixthDigit + +secondNumberSeventhDigit + +secondNumberEighthDigit + +secondNumberNinthDigit + +secondNumberTenthDigit;
	console.log(secondNumberDigitsSum);

	var thirdNumberFirstDigit = thirdPhoneNumber.substring(0, 1);
    var thirdNumberSecondDigit = thirdPhoneNumber.substring(1, 2);
    var thirdNumberThirdDigit = thirdPhoneNumber.substring(2, 3);
    var thirdNumberFourthDigit = thirdPhoneNumber.substring(3, 4);
    var thirdNumberFifthDigit = thirdPhoneNumber.substring(4, 5);
    var thirdNumberSixthDigit = thirdPhoneNumber.substring(5, 6);
    var thirdNumberSeventhDigit = thirdPhoneNumber.substring(6, 7);
    var thirdNumberEighthDigit = thirdPhoneNumber.substring(7, 8);
    var thirdNumberNinthDigit = thirdPhoneNumber.substring(8, 9);
	var thirdNumberTenthDigit = thirdPhoneNumber.substring(9, 10);

	//Setting thirdNumberDigitsSum to the sum of each digit.
	thirdNumberDigitsSum = +thirdNumberFirstDigit + +thirdNumberSecondDigit + +thirdNumberThirdDigit + +thirdNumberFourthDigit + +thirdNumberFifthDigit + +thirdNumberSixthDigit + +thirdNumberSeventhDigit + +thirdNumberEighthDigit + +thirdNumberNinthDigit + +thirdNumberTenthDigit;
	console.log(thirdNumberDigitsSum);
}

//This function figures out what the highest sum is after the digits have been added together using if/else if/else statement.
function figureOutHighestSum() {
	//if the first number sum is bigger than the second number sum, and the third number sum, set highestSum to the first number
	if (firstNumberDigitsSum > secondNumberDigitsSum && firstNumberDigitsSum > thirdNumberDigitsSum){
		highestSum = firstPhoneNumber;
		highestSumPhoneNumber = firstNumberDigitsSum;
	}
	//otherwise, if the second number sum is bigger than the first number sum, and the third number sum, set highestSum to the 
	//second number
	else if (secondNumberDigitsSum > firstNumberDigitsSum && secondNumberDigitsSum > thirdNumberDigitsSum){
		highestSum = secondPhoneNumber;
		highestSumPhoneNumber = secondNumberDigitsSum;
	}
	//and if any other condition (third number is highest number), set highest sum to third number.
	else{
		highestSum = thirdPhoneNumber;
		highestSumPhoneNumber = thirdNumberDigitsSum;
	}
}

//This function prints out the sum of the digits of each phone number and the one with the highest sum to the user.
function presentHighestSum() {
	document.getElementById("outputArea1").innerHTML = "Phone #1 sum of it's digits is " + firstNumberDigitsSum + ".";
    document.getElementById("outputArea2").innerHTML = "Phone #2 sum of it's digits is " + secondNumberDigitsSum + ".";
    document.getElementById("outputArea3").innerHTML = "Phone #3 sum of it's digits is " + thirdNumberDigitsSum + ".";
    document.getElementById("sumOutputArea").innerHTML = "The number with the highest sum of it's digits is " + highestSum + " and it's sum is " + highestSumPhoneNumber + ".";
}

