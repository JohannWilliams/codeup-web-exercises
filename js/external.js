"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let favoriteColor = prompt("What is your favorite color?", "Black");

alert("Great, " + favoriteColor + " is my favorite color too");

/**
 * Working on Exercise 3
 * Rent Movies
 *      - little mermaid 3 days
 *      - Brother bear  5 days
 *      - Hercules      1 day
 *      - Movie/day     $3
 */

let rentalDaysString = "How many days to rent: ";
let littleM = parseInt(prompt(rentalDaysString + "The Little Mermaid"));
let brotherB = parseInt(prompt(rentalDaysString + "Brother Bear"));
let hercules = parseInt(prompt(rentalDaysString + "Hercules"));
let pricePerDay = parseInt(prompt("What is the fee for renting a movie per day?"));
let rentalFee = (littleM + brotherB + hercules) * pricePerDay;

alert("The total rental fee is: $" + rentalFee);


/**
 * Working on Exercise 3
 * Working for Google, Amazon, and FaceBook
 *      - Google Pay    $400
 *      - Amazon Pay    $380
 *      - FaceBook Pay  $350
 *      - Hours worked
 *          * Google    6
 *          * Amazon    4
 *          * FaceBook  10
 */

let gPay = parseInt(prompt("How much is Google paying you?"));
let aPay = parseInt(prompt("How much is Amazon paying you?"));
let fbPay = parseInt(prompt("How much is FaceBook paying you?"));
let gHrs = parseInt(prompt("How many hours did you work for Google?"));
let aHrs = parseInt(prompt("How many hours did you work for Amazon?"));
let fbHrs = parseInt(prompt("How many hours did you work for FaceBook?"));
let weeklyPay = (gPay * gHrs) + (aPay * aHrs) + (fbPay * fbHrs);

alert("You made $" + weeklyPay + " this week!!!");



/**
 * Working on Exercise 3
 * Class Enrollment Conditions Check
 *      - Enroll
 *          * Class NOT full
 *                  AND
 *          * NO schedule conflict
 *      - No Enroll
 *          * class full
 *                  OR
 *          * Schedule conflict
 */

let classNotFull = confirm("Does the Class have space available?");
let noSchedConf = confirm("Is the time free in your schedule?");

alert("You can register: " + (classNotFull && noSchedConf));

/**
 * Working on Exercise 3
 * Apply Product Offer?
 *      - Apply
 *          * Premium Member AND Offer Not Expired
 *                  OR
 *          * More Than 2 Items AND Offer NOT Expired
 *      - Don't Apply
 *          * Offer expired
 *                  OR
 *          * Member Not Premium and Has 2 or Fewer Items
 */

let codeNotExp = confirm("Is the code still valid?");
let premiumMember = confirm("Are you a Premium Member?");
let moreThanTwoItems = confirm("Do you have More than 2 Items?");

alert("Offer Applied: " + (codeNotExp && (premiumMember || moreThanTwoItems)));
