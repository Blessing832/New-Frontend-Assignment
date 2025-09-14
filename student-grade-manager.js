// Simple Student Grade Manager
// Demonstrates: arrays, functions, loops, logical operators, type conversions

// Array to store students
var students = [];

// Function to add student
function addStudent(name, grade) {
    // Type conversion - make sure grade is a number
    grade = Number(grade);
    
    // Logical operator - check if valid input
    if (name && grade >= 0 && grade <= 100) {
        students.push({name: name, grade: grade});
        console.log("Added: " + name + " with grade " + grade);
        return true;
    } else {
        console.log("Invalid input!");
        return false;
    }
}

// Function to show all students
function showAllStudents() {
    console.log("=== All Students ===");
    
    // For loop to display students
    for (var i = 0; i < students.length; i++) {
        console.log((i + 1) + ". " + students[i].name + " - Grade: " + students[i].grade);
    }
    
    // Logical operator - check if empty
    if (students.length === 0) {
        console.log("No students found!");
    }
}

// Function to calculate average grade
function calculateAverage() {
    if (students.length === 0) {
        console.log("No students to calculate average!");
        return 0;
    }
    
    var total = 0;
    
    // While loop to sum grades
    var i = 0;
    while (i < students.length) {
        total = total + students[i].grade;
        i++;
    }
    
    var average = total / students.length;
    console.log("Average grade: " + average.toFixed(2));
    return average;
}

// Function to find top student
function findTopStudent() {
    if (students.length === 0) {
        console.log("No students found!");
        return;
    }
    
    var topStudent = students[0];
    
    // For loop to find highest grade
    for (var i = 1; i < students.length; i++) {
        if (students[i].grade > topStudent.grade) {
            topStudent = students[i];
        }
    }
    
    console.log("Top student: " + topStudent.name + " with grade " + topStudent.grade);
    return topStudent;
}

// Function expression - another way to write functions
var clearAllStudents = function() {
    students = [];
    console.log("All students cleared!");
};

// Test the program
console.log("=== Student Grade Manager Started ===");

// Add some students
addStudent("John", "85");     // Type conversion: string to number
addStudent("Mary", 92);       // Already a number
addStudent("Bob", "78");
addStudent("", 95);           // Invalid - empty name
addStudent("Alice", 150);     // Invalid - grade too high

// Show results
showAllStudents();
calculateAverage();
findTopStudent();

// Clear and test empty case
clearAllStudents();
showAllStudents();
