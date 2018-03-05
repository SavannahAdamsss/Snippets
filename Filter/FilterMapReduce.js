JavaScript’s Map, Reduce, and Filter::

As engineers we build and manipulate arrays holding numbers, 
strings, booleans and objects almost everyday. We use them 
to crunch numbers, collect objects, split strings, search, 
sort, and more. So what’s the preferred way to traverse arrays? 
For years it’s been the trusty for loop which ensures iterating 
over the elements in order by index.

In 2011, JavaScript introduced map, reduce, and filter as powerful 
alternatives when translating elements, finding cumulative values, 
or building subsets based on conditions. These methods help the 
developer manage less complexity, work without side effects, 
and often make code more readable.

In this post we’ll cover the usefulness of Array’s map, reduce, 
and filter methods. You’ll see use cases, code samples, behavior, 
and parameters of each method.

Drawbacks of Looping
Say I’m working on a bug fix and wading thru the 1,000s of lines 
of JavaScript in our codebase. I come across a for loop. 
Not exactly sure what it’s doing, I take a closer look.

for(var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) === i) {
        models.push(array[i]);
    }
}

We can see it traverses an array and inserts non-duplicate elements 
into a new array. But to figure this out we had to glean these 5 things.

Code piece:	                              Meaning:
var i = 0	                                Starts at left side of array
i < array.length	                        Finishes at right side of array
i++	                                      Increments by one
array.indexOf(array[i]) === i	            If value is first instance in array, it’ll match index. 
                                          okay this means it’s checking if it’s a duplicate
models.push(…)	                          models must be a list. But what data’s in it? 
                                          What are their data types? I must search the file for “models”. Rinse. Repeat.

We needed to check 5 pieces of information to determine what was going on. And this is a single for loop!



 
A Functional Approach:

This same effect could be written using JavaScript’s built-in filter() method.

var uniqueProducts = array.filter(function(elem, i, array) {
        return array.indexOf(elem) === i;
    }
);

Simple and elegant.

Seeing filter communicates code behavior so I know exactly what it’s doing. Compared to the looping approach above:

-- Checking #1, #2, #3 is unnecessary because filter() does these automatically.
-- #4 is the same but without the additional if(…) block.
-- A big hurdle was #5. I had to search thru the code base to find what models even was. 
Did it already have data? Was it targeting specific data types? map, reduce, and filter 
solves this problem by not depending on code outside the callbacks, called side-effects.

In sum, map, reduce and filter makes code less complex, without side effects, and often more readable.
Let’s look at each.

 




*****Map()
Use it when: You want to translate/map all elements in an array to another set of values.

Example: convert Fahrenheit temps to Celsius.

var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map(function(elem) {
    return Math.round((elem - 32) * 5 / 9);
}); 


// ES6
// fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));

celcius //  [-18, 0, 7, 10, 24, 27, 37, 49]
What it does: Traverses the array from left to right invoking a callback function on each element with parameters (below). For each callback the value returned becomes the element in the new array. After all elements have been traversed map() returns the new array with all the translated elements[1].

parameters:

array.map(function(elem, index, array) {
      ...
}, thisArg);

Param:	                                Meaning:
Elem	                                - element value
Index	                                - index in each traversal, moving from left to right
Array	                                - original array invoking the method
ThisArg	                              - (Optional) object that will be referred to as this in callback







*****Filter()
Use it when: You want to remove unwanted elements based on a condition.

Example: remove duplicate elements from an array.

var uniqueArray = array.filter(function(elem, index, array) {
        return array.indexOf(elem) === index;
    }
);

// ES6
// array.filter((elem, index, arr) => arr.indexOf(elem) === index);
What it does: Like map() it traverses the array from left to right invoking a callback function on each element. The returned value must be a boolean identifying whether the element will be kept or discarded. After all elements have been traversed filter() returns a new array with all elements that returned true[2].

It has the same parameters as map()

Parameters:

array.filter(function(elem, index, array) {
      ...
}, thisArg);

Param:	              Meaning:
elem	                - element value
index	                - index in each traversal, moving from left to right
array	                - original array invoking the method
thisArg	              - (Optional) object that will be referred to as this in callback







*****Reduce():

Use it when: You want to find a cumulative or concatenated value based on elements across the array.

Example: Sum up orbital rocket launches in 2014.

var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

var sum = rockets.reduce(function(prevVal, elem) {
    return prevVal + elem.launches;
}, 0);

// ES6
// rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0); 

sum // 85
What it does: Like map() it traverses the array from left to right 
invoking a callback function on each element. The value returned 
is the cumulative value passed from callback to callback. 
After all elements have been traversed reduce() returns the 
cumulative value[3].

Parameters:

array.reduce(function(prevVal, elem, index, array) {
      ...
}, initialValue);

Param	            Meaning
prevValue	        -  cumulative value returned thru each callback
elem	            -  element value
index	            -  index of the traversal, moving from left to right
array	            -  original array invoking the method
initialValue	    -  (Optional) object used as first argument in the first (leftmost) callback.


 
Extras:

Each are methods on the Array’s prototype object.
Changing an element in the array parameter in any callback 
will persist across all remaining callbacks but has no effect 
on the returned array. Callback functions are invoked on indexes 
with any value, even undefined, but not ones deleted or never assigned a value.
It’s worth noting for loops still definitely have a place when working with 
large arrays (e.g. over 1,000 elements) or needing to break the traversal if a condition is met.

In this post we covered how map(), reduce(), and filter() more easily communicate code 
behavior and likely reduces the need to track side effects. We also covered use cases, 
code samples, behavior, and parameters of each method. I hope this was useful for you. 







