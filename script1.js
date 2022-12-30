// Define a function that takes a function as a parameter
function executeFunction(fn) {
    // Call the function passed as a parameter
    fn();
}

// Define a function to be passed as a parameter
function sayHello() {
    console.log('Hello');
}

// Pass the sayHello function as a parameter to the executeFunction function
executeFunction(sayHello);
