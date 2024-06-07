/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Praveen Shanmugalingam Student ID: 156224230 Date: 24.05.2024
*
********************************************************************************/


// 3: Creating the "Server Paths" 
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This course name is WEB700. This assignment was prepared by Praveen Shanmugalingam",
    "pshanmugalingam1@myseneca.ca\nPraveen Shanmugalingam",
    "Hello User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
];

// 4: Creating the "web server simulator" Function - "httpRequest"
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

//  5: Manually Testing the "httpRequest" Function
console.log(httpRequest("GET", "/")); // indicates "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // depicit "200: This course name is WEB700. This assignment was prepared by Praveen Shanmugalingam"
console.log(httpRequest("GET", "/contact")); // indicates "200: Student Email\nStudent Name"
console.log(httpRequest("POST", "/login")); // represents "200: Hello User Logged In"
console.log(httpRequest("GET", "/panel")); // represents "200: Main Panel"
console.log(httpRequest("POST", "/logout")); // indicates "200: Logout Complete. Goodbye"
console.log(httpRequest("PUT", "/")); // shows "404: Unable to process PUT request for /"


//  6: Automating the Tests by creating a "automateTests" Function
function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

function automateTests() {
    let testVerbs = ["GET", "POST"];
    let testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        let randVerb = testVerbs[getRandomInt(testVerbs.length)];
        let randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

    setInterval(randomRequest, 1000);
}

// 7: Invoke the "automateTests" function
automateTests();
