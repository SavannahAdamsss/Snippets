JavaScript Notes:

* Four primitive data types (simple-built forms) that lay the foundation for all JavaScript programs.  
	
	console.log(‘New York City’); — Strings — A grouping of 	keyboard characters (letters, spaces, numbers, or 		symbols) 	surrounded by single quotes (‘Hello’) or double 	quotes (“World!”)
	

	console.log(40.7); — Numbers — Any number, including 	numbers with decimals: 4, 1516, .002, 23.42. In the 		example above, 40.7 is a number.
	
	
	console.log(true); — Booleans — Either true or false, with 	no quotations. In the example above, true is a boolean.
	

	console.log(null); — Null — Can only be null. It represents 
	the absence of a value.



* Operators used in JavaScript:
    * Add: +
    * Subtract: -
    * Multiply: *
    * Divide: /

	• console.log(3 + 4); // Equals 7
	• console.log(5 - 1); // Equals 4
	• console.log(4 * 2); // Equals 8
	• console.log(9 / 3); // Equals 3





Properties:

When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. An instance is an individual case (or object) of a data type.

JavaScript will save a new piece of data, like 'Hello', as a string instance in the computer's memory. Another example, the number 40.7, is stored as an instance of the number data type.

An instance, like the string 'Hello', has additional information attached to it.

For example, every string instance has a property called length that stores the number of characters in it. You can retrieve property information by appending the string with a period and the property name:

console.log('Hello'.length);

In the example above, the value saved to the length property is retrieved from the string, 'Hello'. The program prints 5 to the console, because Hello has five characters in it.






Built-in Methods:

While the length of a string is calculated when an instance is created, a string instance also has methods that calculate new information as needed. When these built-in methods are called on an instance, they perform actions that generate an output.

Built-in methods are called, or used, by appending an instance with a period, the name of the method, and opening (() and closing ()) parentheses. Consider the examples below:

	console.log('Hello'.toUpperCase()); // 'HELLO'

	console.log('Hey'.startsWith('H')); // true

Let's look at each line separately:

* On the first line, the .toUpperCase()method is called on the string instance 'Hello'. The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.
* On the second line, the .startsWith()method is called on the string instance "Hey". This method also accepts the character 'H' as an input between the opening and closing parentheses. Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.

Find built-in-string methods at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype






Libraries:

Instance methods, by definition, require that you create an instance before you can use them. What if you want to call a method without an instance? That's where JavaScript libraries come in. Libraries contain methods that you can call without creating an instance.

One such collection contains mathematical methods, aptly named the Math library.

Let's see how you call the .random() method from the Math library:

console.log(Math.random()); // random number between 0 and 1

In the example above, we called the .random() method by appending the library name with a period, the name of the method, and opening (() and closing ()) parentheses. This method returns a random number between 0 and 1. This code prints a random number between 0 and 1.

To generate a random number between 0 and 50, we could multiply this result by 50, like so:
Math.random() * 50;

The answer in the example above will most likely be a decimal. To ensure the answer is a whole number, JavaScript provides a built-in method called Math.floor(). 
Math.floor() takes a decimal number, and rounds down to the nearest whole number. 
You can use Math.floor() to round a random number like this:
	Math.floor(Math.random() * 50);

In this case:
* Math.random generates a random number between 0 and 1.
* We then multiply that number by 50, so now we have a number between 0 and 50.
* Then, Math.floor rounds the number down to the nearest whole number.

	console.log(Math.floor(Math.random() * 100));

Find more methods at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


Checks if number is an integer:
console.log(Number.isInteger(2017));





Comments:

As we write JavaScript, we can create comments in our code.

Programs do not evaluate comments when you run them. In other words, they exist just for human readers. Good comments are useful for you and other developers, because they describe what the code does.

There are two types of code comments in JavaScript:

* A single line comment will comment out a single line and is denoted with two forward slashes // preceding a line of JavaScript code. // The first 5 decimals of pi
* console.log('Pi is equal to ' + 3.14159);    
* A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment, and */ to end the comment. /*
* console.log('All of this code');
* console.log('Is commented out');
* console.log('And will not be executed);
* */






Create a Variable: const

Let's dive in and see a variable in the wild. Here is how you declare a constant variable:
	const myName = 'Arya';
	console.log(myName);
	// Output: Arya

Let's consider the example above:

* const, short for constant, is a JavaScript keyword that creates a new variable with a value that cannot change.

* myName is the variable's name. Notice that the word has no spaces, and we capitalized the N. Capitalizing 
in this way is a standard convention in JavaScript called camelCasing, because the capital letters look like the 
humps on a camel's back.

* = is the assignment operator. It assigns the value ('Arya') to the variable (myName).

* 'Arya' is the value assigned (=) to the variable myName.

After the variable is declared, we can print 'Arya' to the console with: 
	console.log(myName).

You can save any data type in a variable. For example, here we save numbers:

	const myAge = 11;
	console.log(myAge);
	// Output: 11

In the example above, on line 1 the myAgevariable is set to 11. Below that, console.log() is used to print 11 to the console.







Create a Variable: let


In the final task of the previous exercise you received the following error:

	TypeError: Assignment to constant variable.

JavaScript threw an error because you assigned a new value to a constant variable. 
Constant variables, as their name implies, are constant — you cannot assign them a different value.

Let variables however, can be reassigned.

let meal = 'Enchiladas';
console.log(meal);
meal = 'Tacos';
console.log(meal);
// output: Enchiladas
// output: Tacos

In the example above, the let keyword is used to create the meal variable with the string 'Enchiladas' saved to it. 
On line three, the me alvariable is changed to store the string 'Tacos'.

You may be wondering, when to use const vs let. In general, only use const if the value saved to a variable does not 
change in your program.






Undefined:

What happens if you create a variable, but don't assign it a value?

JavaScript creates space for this variable in memory and sets it to undefined. Undefined is the fifth and final 
primitive data type. JavaScript assigns the undefined data type to variables that are not assigned a value.

let whatAmI;

In the example above, we created the variable whatAmI without any value assigned to it. JavaScript creates 
the variable and sets it equal to the value undefined.






