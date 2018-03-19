Variables:

Programmers use variables to write code that is easy to understand and repurpose.

Imagine you're writing a weather app. Your thermometer outside reports the temperature in Celsius, 
but your goal is to record the temperature in Fahrenheit.

You write a program that takes a temperature of 15 degrees Celsius and calculates the temperature in Fahrenheit.

Once you've done this though, you see the temperature now reads 16 degrees Celsius. To find Fahrenheit again, 
you'd need to write a whole new program to convert 16 degrees Celsius to Fahrenheit.

That's where variables come in. Variables allow us to assign data to a word and use the word to reference the data. 
If the data changes (like degrees Celsius) we can replace the variable's value instead of re-writing the program.

In this lesson you will learn about two ways to declare variables: let and const.





Create a Variable: const

Let's dive in and see a variable in the wild. Here is how you declare a constant variable:
	const myName = 'Arya';
	console.log(myName);
	// Output: Arya

Let's consider the example above:

* const, short for constant, is a JavaScript keyword that creates a new variable with a value that cannot change.
* myName is the variable's name. Notice that the word has no spaces, and we capitalized the N. Capitalizing in this 
way is a standard convention in JavaScript called camelCasing, because the capital letters look like the humps on a 
camel's back.
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



