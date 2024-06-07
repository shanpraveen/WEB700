/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
*  
*  Name: Praveen Shanmugalingam  Student ID: 156224230  Date: 05.06.2024
*
*******************************************clear*************************************/

// Import the collegeData module
const collegeData = require('./modules/collegeData');

// Define an asynchronous function to run the program
async function run() {
    try {
        // Initialize the collegeData module and wait for it to complete
        await collegeData.initialize();
        console.log("Initialization successful");

        // Retrieve all students and wait for the result
        const students = await collegeData.getAllStudents();
        // Log the number of students retrieved
        console.log(`Successfully retrieved ${students.length} students`);

        // Retrieve all courses and wait for the result
        const courses = await collegeData.getCourses();
        // Log the number of courses retrieved
        console.log(`Successfully retrieved ${courses.length} courses`);

        // Retrieve all TAs and wait for the result
        const TAs = await collegeData.getTAs();
        // Log the number of TAs retrieved
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    } catch (err) {
        // If any error occurs during the asynchronous operations, log the error
        console.error(err);
    }
}

// Call the run function to execute the program
run();
