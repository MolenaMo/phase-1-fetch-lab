function fetchBooks() {
/* calling `fetch()` and passing a URL to a data source as the
    argument. The function call returns an object that represents what the data
    source sent back. It does *not* return the actual content.

  // To pass the tests, don't forget to return your fetch!*/
  fetch("https://anapioficeandfire.com/api/books")//fetch("string representing a URL to a data source")

//   .then(function(response)
// {
//   return response.json()
// })
.then((resp) => resp.json())//The returned response should be converted to JSON.
/*Then, it should call the second function, renderBooks(), 
passing in the JSON-ified data as the argument.*/
.then((json) => renderBooks(json))//if done correctly, a list will display on index.html
/* The tests in this lab need to access the fetch() request you will create inside 
fetchBooks(). In order to give them access, write your solution so that fetchBooks() 
returns the fetch().*/
return fetch("https://anapioficeandfire.com/api/books")
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
    
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
