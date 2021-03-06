https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209

A Map From List to List
Often, we find ourselves needing to take an array and modify every element in it in exactly 
the same way. Typical examples of this are squaring every element in an array of numbers, 
retrieving the name from a list of users, or running a regex against an array of strings.

map is a method built to do exactly that. It's defined on Array.prototype, so you can call it on any array, 
and it accepts a callback as its first argument. 

When you call map on an array, it executes that callback on every element within it, 
returning a new array with all of the values that the callback returned.

Under the hood, map passes three arguments to your callback:

The current item in the array
The array index of the current item
The entire array you called map on 
Let's look at some code.

map in Practice
Suppose we have an app that maintains an array of your tasks for the day. 
Each task is an object, each with a name and duration property:

// Durations are in minutes
 
var tasks = [
 
  {
 
    'name'     : 'Write for Envato Tuts+',
 
    'duration' : 120
 
  },
 
  {
 
    'name'     : 'Work out',
 
    'duration' : 60
 
  },
 
  {
 
    'name'     : 'Procrastinate on Duolingo',
 
    'duration' : 240
 
  }
 
];

Let's say we want to create a new array with just the name of each task, 
so we can take a look at everything we've gotten done today. Using a for loop, 
we'd write something like this:

var task_names = [];
 
for (var i = 0, max = tasks.length; i < max; i += 1) {
 
    task_names.push(tasks[i].name);
 
}

JavaScript also offers a forEach loop. It functions like a for loop, but manages all the messiness 
of checking our loop index against the array length for us:

var task_names = [];
 
tasks.forEach(function (task) {
 
    task_names.push(task.name);
     
});
Using map, we can write:

var task_names = tasks.map(function (task, index, array) {
 
    return task.name; 
 
});
I include the index and  array parameters to remind you that they're there if you need them. 
Since I didn't use them here, though, you could leave them out, and the code would run just fine.

There are a few important differences between the two approaches:

Using map, you don't have to manage the state of the for loop yourself.
You can operate on the element directly, rather than having to index into the array.
You don't have to create a new array and push into it. map returns the finished product 
all in one go, so we can simply assign the return value to a new variable.
You do have to remember to include a return statement in your callback. 
If you don't, you'll get a new array filled with undefined. 
Turns out, all of the functions we'll look at today share these characteristics.

The fact that we don't have to manually manage the state of the loop makes our code simpler and more maintainable. 
The fact that we can operate directly on the element instead of having to index into the array makes things more readable. 

Using a forEach loop solves both of these problems for us. But map still has at least two distinct advantages:

forEach returns undefined, so it doesn't chain with other array methods. map returns an array, so you can chain it with other array methods.
map returns an array with the finished product, rather than requiring us to mutate an array inside the loop. 
Keeping the number of places where you modify state to an absolute minimum is an important tenet of functional programming. 
It makes for safer and more intelligible code.

Now is also a good time to point out that if you're in Node, testing these examples in the Firefox browser console, 
or using Babel or Traceur, you can write this more concisely with ES6 arrow functions:

var task_names = tasks.map((task) => task.name );
Arrow functions let us leave out the return keyword in one-liners. 

It doesn't get much more readable than that.

Gotchas
The callback you pass to map must have an explicit return statement, or map will spit out an array full of undefined. 
It's not hard to remember to include a return value, but it's not hard to forget. 

If you do forget, map won't complain. Instead, it'll quietly hand back an array full of nothing. Silent errors like that 
can be surprisingly hard to debug. 

Fortunately, this is the only gotcha with map. But it's a common enough pitfall that I'm obliged to emphasize: 
Always make sure your callback contains a return statement!

Implementation
Reading implementations is an important part of understanding. So, let's write our own lightweight map to better understand 
what's going on under the hood. If you want to see a production-quality implementation, check out Mozilla's polyfill at MDN.


var map = function (array, callback) {
 
    var new_array = [];
 
    array.forEach(function (element, index, array) {
       new_array.push(callback(element)); 
    });
 
    return new_array;
 
};
 
var task_names = map(tasks, function (task) {
 
    return task.name;
 
});
This code accepts an array and a callback function as arguments. It then creates a new array; 
executes the callback on each element on the array we passed in; pushes the results into the new 
array; and returns the new array. If you run this in your console, you'll get the same result as before. 
Just make sure you initialize tasks before you test it out!

While we're using a for loop under the hood, wrapping it up into a function hides the details 
and lets us work with the abstraction instead. 

That makes our code more declarative—it says what to do, not how to do it. 
You'll appreciate how much more readable, maintainable, and, erm, debuggable this can make your code.

Filter Out the Noise
The next of our array operations is filter. It does exactly what it sounds like: It takes an array, 
and filters out unwanted elements.

Like map, filter is defined on Array.prototype. It's available on any array, and you pass it a callback 
as its first argument. filter executes that callback on each element of the array, and spits out a new 
array containing only the elements for which the callback returned true.

Also like map, filter passes your callback three arguments:

The current item 
The current index
The array you called filter on
filter in Practice
Let's revisit our task example. Instead of pulling out the names of each task, let's say I want to get a 
list of just the tasks that took me two hours or more to get done. 

Using forEach, we'd write:

var difficult_tasks = [];
 
tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});
With filter:

1
2
3
4
5
6
var difficult_tasks = tasks.filter(function (task) {
    return task.duration >= 120;
});
 
// Using ES6
var difficult_tasks = tasks.filter((task) => task.duration >= 120 );
Here, I've gone ahead and left out the index and array arguments to our callback, since we don't use them.

Just like map, filter lets us:

avoid mutating an array inside a forEach or for loop
assign its result directly to a new variable, rather than push into an array we defined elsewhere
Gotchas
The callback you pass to map has to include a return statement if you want it to function properly. 
With filter, you also have to include a return statement, and you must make sure it returns a boolean value.

If you forget your return statement, your callback will return undefined, which filter will unhelpfully 
coerce to false. Instead of throwing an error, it will silently return an empty array! 

If you go the other route, and return something that's isn't explicitly true or false, then filter will 
try to figure out what you meant by applying JavaScript's coercion rules. More often than not, this is a bug. 
And, just like forgetting your return statement, it'll be a silent one. 

Always make sure your callbacks include an explicit return statement. And always make sure your callbacks 
in filter return true or false. Your sanity will thank you.

Implementation
Once again, the best way to understand a piece of code is... well, to write it. Let's roll our own lightweight filter. 
The good folks at Mozilla have an industrial-strength polyfill for you to read, too.

var filter = function (array, callback) {
 
    var filtered_array = [];
 
    array.forEach(function (element, index, array) {
        if (callback(element, index, array)) {
            filtered_array.push(element);    
        }
    });
 
    return filtered_array;
 
};
Reducing Arrays
map creates a new array by transforming every element in an array, individually. 
filter creates a new array by removing elements that don't belong. reduce, on the other hand, 
takes all of the elements in an array, and reduces them into a single value.

Just like map and filter, reduce is defined on Array.prototype and so available on any array, 
and you pass a callback as its first argument. But it also takes an optional second argument: 
the value to start combining all your array elements into. 

reduce passes your callback four arguments:

The current value
The previous value 
The current index
The array you called reduce on
Notice that the callback gets a previous value on each iteration. On the first iteration, 
there is no previous value. This is why you have the option to pass reduce an initial value: 
It acts as the "previous value" for the first iteration, when there otherwise wouldn't be one.

Finally, bear in mind that reduce returns a single value, not an array containing a single item. 
This is more important than it might seem, and I'll come back to it in the examples.

reduce in Practice
Since reduce is the function that people find most alien at first, we'll start by walking step 
by step through something simple.

Let's say we want to find the sum of a list of numbers. Using a loop, that looks like this:

var numbers = [1, 2, 3, 4, 5],
    total = 0;
     
numbers.forEach(function (number) {
    total += number;
});
While this isn't a bad use case for forEach, reduce still has the advantage of allowing us to avoid mutation. 
With reduce, we would write:

1
2
3
var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);
First, we call reduce on our list of numbers. We pass it a callback, which accepts the previous value and 
current value as arguments, and returns the result of adding them together.  Since we passed 0 as a second 
argument to reduce, it'll use that as the value of previous on the first iteration.
