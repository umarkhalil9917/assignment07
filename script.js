// 1 Light Bulb Experiment

    user_input = prompt("Enter 1 to turn ON the light, 0 to turn OFF the light: ");

    if (user_input == "1"){
        console.log("The light is ON");
    }    
    else if (user_input == "0"){
        console.log("The light is OFF");
    }    
    else{
        console.log("Invalid Input");
    }    


// 2. Traffic Light Simulatorss

    light_input = prompt("Accept an input (Red, Yellow, Green) from the user.");

    if (light_input == "Red"){
        console.log("Stop for Red");
    }    
    else if (light_input == "Yellow"){
        console.log("Slow Down  for Yellow");
    }
    else if (light_input == "Green"){
        console.log("Go for Green");
    }    
    else{
        console.log("Invalid Color");
    }

// 3 Water Temperature Checker

// Ask the user for temperature input
temperature = parseFloat(prompt("Enter the water temperature in Celsius:"));

// Use if conditions to categorize the temperature
if (temperature <= 0) {
    console.log("Freezing");
}
if (temperature > 0 && temperature <= 15) {
    console.log("Cold");
}
if (temperature > 15 && temperature <= 30) {
    console.log("Warm");
}
if (temperature > 30) {
    console.log("Hot");
}

// 4 Rock-Paper-Scissors Game

// Accept inputs for two players
player1 = prompt("Player 1, enter rock, paper, or scissors:");
player2 = prompt("Player 2, enter rock, paper, or scissors:");

// Use if conditions to determine the winner
if (player1 === player2) {
    console.log("It's a Tie!");
} else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
) {
    console.log("Player 1 Wins");
} else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "paper" && player1 === "rock") ||
    (player2 === "scissors" && player1 === "paper")
) {
    console.log("Player 2 Wins");
} else {
    console.log("Invalid input! Both players must enter rock, paper, or scissors.");
}


// 5 Simple Alarm System

// Ask the user two yes/no questions
doorOpen = prompt("Is the door open? (yes or no):");
motionDetected = prompt("Is motion detected? (yes or no):");

// Use if conditions to determine the alarm status
if (doorOpen === "yes" || motionDetected === "yes") {
    console.log("Alarm Triggered");
}
if (doorOpen === "no" && motionDetected === "no") {
    console.log("All Safe");
}


// 6 Simple Temperature Conversion

// Ask the user to choose a conversion type
conversionType = parseInt(prompt("Enter 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius:"));

// Take the temperature as input
temperature = parseFloat(prompt("Enter the temperature to convert:"));

// Use if conditions to apply the correct formula and print the result
if (conversionType === 1) {
    // Celsius to Fahrenheit
    const fahrenheit = (temperature * 9 / 5) + 32;
    console.log(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
}
if (conversionType === 2) {
    // Fahrenheit to Celsius
    const celsius = (temperature - 32) * 5 / 9;
    console.log(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
}
if (conversionType !== 1 && conversionType !== 2) {
    console.log("Invalid input! Please enter 1 or 2 for the conversion type.");
}


// 7 Password Strength Checker

// Take a password as input
const password = prompt("Enter your password:");

// Check password length and provide feedback
if (password.length >= 8) {
    console.log("Strong Password");
    if (/[0-9]/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        console.log("Your password contains numbers or special characters for added strength.");
    }
} 
if (password.length >= 5 && password.length < 8) {
    console.log("Moderate Password");
} 
if (password.length < 5) {
    console.log("Weak Password");
    console.log("Consider using a longer password with numbers or special characters for better security.");
}

// 11. Eligibility for Voting
// Accept the age of the person
age = parseInt(prompt("Enter your age:"));

// Check if the person is eligible to vote
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


// 12. Maximum of Two Numbers

// Accept two numbers from the user
num1 = parseFloat(prompt("Enter the first number:"));
num2 = parseFloat(prompt("Enter the second number:"));

// Compare the numbers using if condition
if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num2 > num1) {
    console.log("The larger number is: " + num2);
} else {
    console.log("Both numbers are equal.");
}

