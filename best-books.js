const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/';
const API_KEY ='mGqS9lCf3m3v6lc7FKR9rLCBcHxAMo0f'

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  let divEl = document.getElementById('books-container');

  const year = yearEl.value;

  const month = monthEl.value;

  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  // Best hardcover fiction books for the date

  const url = `${BASE_URL}lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`;

  fetch(url)
      .then(function(data) {
        //debugger
        return data.json();
      })
      .then(function(responseJson) {
        console.log(responseJson);

        for (let counter=0; counter<5; counter++){

          let book = responseJson.results.books[counter].title
          let author_ = responseJson.results.books[counter].author
          let description = responseJson.results.books[counter].description
          let book_img = responseJson.results.books[counter].book_image
          let book_link = responseJson.results.books[counter].amazon_product_url
          const h1Elem = document.createElement('h1')
          const h2Elem = document.createElement('h2')
          const imgElem = document.createElement('img')
          const pElem = document.createElement('p')
          const aElem = document.createElement('a')

          if (book_img.length > 0) {
            const imgUrl = book_img;
            imgElem.src=imgUrl
          }

          h1Elem.innerText=book
          h2Elem.innerText=author_
          pElem.innerText=description
          aElem.href=book_link
          aElem.id="book-link"
          aElem.innerText="Amazon Link"

          divEl.append(h1Elem)
          divEl.append(h2Elem)
          divEl.append(imgElem)
          divEl.append(pElem)
          divEl.append(aElem)


        }

      });

});
