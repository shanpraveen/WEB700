const fs = require('fs').promises; // Use the promise-based fs module

class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;

// Initialize the data collection
const initialize = async () => {
    try {
        // Read students data
        let studentData = await fs.readFile('./data/students.json', 'utf8');
        let students = JSON.parse(studentData);

        // Read courses data
        let courseData = await fs.readFile('./data/courses.json', 'utf8');
        let courses = JSON.parse(courseData);

        // Create a new Data instance with students and courses
        dataCollection = new Data(students, courses);
    } catch (err) {
        // Handle errors for both file read operations
        throw new Error("unable to read students.json or courses.json");
    }
};

// Get all students
const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        // Check if students data is available
        if (dataCollection.students.length === 0) {
            reject("no results returned");
        } else {
            resolve(dataCollection.students);
        }
    });
};

// Get all TAs
const getTAs = () => {
    return new Promise((resolve, reject) => {
        // Filter students to get only TAs
        const TAs = dataCollection.students.filter(student => student.TA === true);
        if (TAs.length === 0) {
            reject("no results returned");
        } else {
            resolve(TAs);
        }
    });
};

// Get all courses
const getCourses = () => {
    return new Promise((resolve, reject) => {
        // Check if courses data is available
        if (dataCollection.courses.length === 0) {
            reject("no results returned");
        } else {
            resolve(dataCollection.courses);
        }
    });
};

// Export the functions
module.exports = { initialize, getAllStudents, getTAs, getCourses };
