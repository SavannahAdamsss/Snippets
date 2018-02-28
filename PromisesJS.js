// Understanding Promises:

// A promise in short:
// "Imagine you are a kid. Your mom promises you that she'll get you a new phone next week."

// You don't know if you will get that phone until next week. Your mom can either really buy you a brand new phone, or stand you up and withhold the phone if she is not happy :(.
// That is a promise. A promise has 3 states. They are:

// 1. Promise is pending: You don't know if you will get that phone until next week.
// 2. Promise is resolved: Your mom really buy you a brand new phone.
// 3. Promise is rejected: You don't get a new phone because your mom is not happy.

// Creating a Promise
// Let's convert this to JavaScript.

/* ES5 */
var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// The code is quite expressive in itself.

// 1.  We have a boolean isMomHappy, to define if mom is happy.
// 2.  We have a promise willIGetNewPhone. The promise can be either resolved (if mom get you a new phone) or rejected(mom is not happy, she doesn't buy you one).
// 3.  There is a standard syntax to define a new Promise, refer to MDN documentation, a promise syntax look like this.

// promise syntax look like this
new Promise(/* executor*/ function (resolve, reject) { ... } );
                                                      
// What you need to remember is, 
// when the result is successful, 
// call resolve(your_success_value), 
// if the result fails, 
// call reject(your_fail_value) in your promise. 
// In our example, if mom is happy, we will get a phone. 
// Therefore, we call resolve function with phone variable. 
// If mom is not happy, we will call reject function with a reason reject(reason);
                                                      
// Consuming Promises:
// Now that we have the promise, let's consume it.
                                                      
/* ES5 */
...

// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

askMom();
                                                      
// 1. We have a function call askMom. In this function, we will consume our promise willIGetNewPhone.
// 2. We want to take some action once the promise is resolved or rejected, we use .then and .catch to handle our action.
// 3. In our example, we have function(fulfilled) { ... } in .then. What is the value of fulfilled? The fulfilled value is exactly the value you pass in your promise resolve(your_success_value). Therefore, it will be phone in our case.
// 4. We have function(error){ ... } in .catch. What is the value of error? As you can guess, the error value is exactly the value you pass in your promise reject(your_fail_value). Therefore, it will be reason in our case.                                                      

// Chaining Promises
// Promises are chainable.

// Let's say, you, the kid, promise your friend that you will show them the new phone when your mom buy you one.

// That is another promise. Let's write it!  

...

// 2nd promise
var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};
                                                      
// Notes:

// - In this example, you might realize we didn't call the reject. It's optional.
// - We can shorten this sample like using Promise.resolve instead.         
                                                      
// shorten it
...

// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};
                                                      
// Let's chain the promises. You, the kid can only start the showOff promise after the willIGetNewPhone promise.   
                                                      
...

// call our promise
var askMom = function () {
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);
         // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
}; 
                                                      
// Promises are Asynchronous:
// Promises are asynchronous. Let's log a message before and after we call the promise.        
                                                      
// call our promise
var askMom = function () {
    console.log('before asking Mom'); // log before
    willIGetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        });
    console.log('after asking mom'); // log after
}

// What is the sequence of expected output? Probably you expect:

// 1. before asking Mom
// 2. Hey friend, I have a new black Samsung phone.
// 3. after asking mom

// However, the actual output sequence is:

// 1. before asking Mom
// 2. after asking mom
// 3. Hey friend, I have a new black Samsung phone.

// Why? Because life (or JS) waits for no man.
// You, the kid, wouldn't stop playing while waiting for your mom promise (the new phone). 
// Don't you? That's something we call asynchronous, the code will run without blocking or waiting for the result. 
// Anything that need to wait for promise to proceed, you put that in .then.

// Promises in ES5, ES6/2015, ES7/Next
// ES5 - Majority browsers
// The demo code is workable in ES5 environments (all major browsers + NodeJs) if you include Bluebird promise library. It's because ES5 doesn't support promises out of the box. Another famous promise library is Q by Kris Kowal.

// ES6 / ES2015 - Modern browsers, NodeJs v6
// The demo code works out of the box because ES6 supports promises natively. In addition, with ES6 functions, we can further simplify the code with fat arrow => and use const and let.

// Here is an example of ES6 code:

/* ES6 */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();

// Notes that all the var are replaced with const. All the function(resolve, reject) has been simplified to (resolve, reject) =>. There are a few benefits come with these changes. Read more on:-

// -  JavaScript ES6 Variable Declarations with let and const
// -  An introduction to Javascript ES6 arrow functions

// ES7 - Async Await make the syntax look prettier
// ES7 introduce async and await syntax. It makes the asynchronous syntax look prettier and easier to understand, without the .then and .catch.

// Rewrite our example with ES7 syntax.       
                                                      
/* ES7 */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

// 2nd promise
async function showOff(phone) {
    return new Promise(
        (resolve, reject) => {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    );
};

// call our promise
async function askMom() {
    try {
        console.log('before asking Mom');

        let phone = await willIGetNewPhone;
        let message = await showOff(phone);

        console.log(message);
        console.log('after asking mom');
    }
    catch (error) {
        console.log(error.message);
    }
}

(async () => {
    await askMom();
})();
                                                      
// 1. Whenever you need to return a promise in a function, you prepend async to that function. E.g. async function showOff(phone)
// 2. Whenever you need to call a promise, you prepend with await. E.g. let phone = await willIGetNewPhone; and let message = await showOff(phone);.
// 3. Use try { ... } catch(error) { ... } to catch promise error, the rejected promise.       
                                                      
                                                      
                                                      
