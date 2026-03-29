// Ask marks for Subject 1
let subject1 = prompt("Enter marks for Subject 1 (0 to 100):");

// Keep asking until valid input is entered
while (
  subject1 === "" ||
  subject1 === null ||
  isNaN(subject1) ||
  Number(subject1) < 0 ||
  Number(subject1) > 100
) {
  alert("Invalid input! Please enter a number between 0 and 100.");
  subject1 = prompt("Enter marks for Subject 1 (0 to 100):");
}

// Convert input to number
subject1 = Number(subject1);

// Ask marks for Subject 2
let subject2 = prompt("Enter marks for Subject 2 (0 to 100):");

// Validate Subject 2 input
while (
  subject2 === "" ||
  subject2 === null ||
  isNaN(subject2) ||
  Number(subject2) < 0 ||
  Number(subject2) > 100
) {
  alert("Invalid input! Please enter a number between 0 and 100.");
  subject2 = prompt("Enter marks for Subject 2 (0 to 100):");
}

// Convert input to number
subject2 = Number(subject2);

// Ask marks for Subject 3
let subject3 = prompt("Enter marks for Subject 3 (0 to 100):");

// Validate Subject 3 input
while (
  subject3 === "" ||
  subject3 === null ||
  isNaN(subject3) ||
  Number(subject3) < 0 ||
  Number(subject3) > 100
) {
  alert("Invalid input! Please enter a number between 0 and 100.");
  subject3 = prompt("Enter marks for Subject 3 (0 to 100):");
}

// Convert input to number
subject3 = Number(subject3);

// Ask marks for Subject 4
let subject4 = prompt("Enter marks for Subject 4 (0 to 100):");

// Validate Subject 4 input
while (
  subject4 === "" ||
  subject4 === null ||
  isNaN(subject4) ||
  Number(subject4) < 0 ||
  Number(subject4) > 100
) {
  alert("Invalid input! Please enter a number between 0 and 100.");
  subject4 = prompt("Enter marks for Subject 4 (0 to 100):");
}

// Convert input to number
subject4 = Number(subject4);

// Ask marks for Subject 5
let subject5 = prompt("Enter marks for Subject 5 (0 to 100):");

// Validate Subject 5 input
while (
  subject5 === "" ||
  subject5 === null ||
  isNaN(subject5) ||
  Number(subject5) < 0 ||
  Number(subject5) > 100
) {
  alert("Invalid input! Please enter a number between 0 and 100.");
  subject5 = prompt("Enter marks for Subject 5 (0 to 100):");
}

// Convert input to number
subject5 = Number(subject5);

// Calculate total marks
let total = subject1 + subject2 + subject3 + subject4 + subject5;

// Calculate average marks
let average = total / 5;

// Variable to store final grade
let grade;

// Decide grade based on average
if (average >= 90) {
  grade = "A+";
} else if (average >= 80) {
  grade = "A";
} else if (average >= 70) {
  grade = "B";
} else if (average >= 60) {
  grade = "C";
} else if (average >= 50) {
  grade = "D";
} else {
  grade = "F";
}

// Show final result in alert box
alert(
  "----- Grade Report -----" +
  "\nSubject 1: " + subject1 +
  "\nSubject 2: " + subject2 +
  "\nSubject 3: " + subject3 +
  "\nSubject 4: " + subject4 +
  "\nSubject 5: " + subject5 +
  "\n\nTotal Marks: " + total +
  "\nAverage Marks: " + average.toFixed(2) +
  "\nGrade: " + grade
);