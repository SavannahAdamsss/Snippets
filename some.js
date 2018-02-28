// Get Request and POST for calling API information like photo and image Nodes. Similar to Telephone API drill 1- Stranger Things:
 
// The html for this: <h1>Authors</h1>    <ul id="authors"></ul>
 
 
 
 function createNode(element) {
      return document.createElement(element);  // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
    return parent.appendChild(el);  // Append the second parameter(element) to the first one
  }

  const ul = document.getElementById('authors'); // Get the list where we will place our authors.  
  const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users. 
  fetch(url) // Call the fetch function passing the url of the API as a parameter
  .then((resp) => resp.json())  // Transform the data into json.
  .then(function(data) {  //Your code for handling the data you get from the API. Here you get the data to modify as you please. Create and append the li's to the ul
    let authors = data.results;  // Get the results
    return authors.map(function(author) { . // Map through the results and for each run the code below
      let li = createNode('li'),  // Create the elements we need
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
      span.innerHTML = `${author.name.first} ${author.name.last}`;  // Make the HTML of our span to be the first and last name of our aurthor
      append(li, img);  // Append all our elements
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) { // This is where you run code if the server returns any errors. If there is any error you will catch them here.
    console.log(error);
  });  

// The POST part

const url = 'https://randomuser.me/api';
// The data we are going to send in our request
let data = {
    name: 'Sara'
}
// The parameters we are gonna pass to the fetch function
let fetchData = { 
    method: 'POST', 
    body: data,
    headers: new Headers()
}
fetch(url, fetchData)
.then(function() {
    // Handle response you get from the server
});

// A second option for POST:

const url = 'https://randomuser.me/api';
// The data we are going to send in our request
let data = {
    name: 'Sara'
}
// Create our request constructor with all the parameters we need
var request = new Request(url, {
    method: 'POST', 
    body: data, 
    headers: new Headers()
});

fetch(request)
.then(function() {
    // Handle response we get from the API
})
