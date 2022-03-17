const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

"use strict";

function exportToJsonFile(jsonData) {
  let dataStr = JSON.stringify(jsonData, null, 2);
  let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

  let exportFileDefaultName = 'data.json';

  let linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}


class BookBatch{

  constructor(){
    this.bookList=[]
  }

  exportToTxt(){

    console.log(JSON.stringify(this.bookList, null, 2))

    let myJsonString = JSON.stringify(this.bookList)

    //create an alert to ask the user if they want to export the list of books to json file

    exportToJsonFile(this.bookList)

    //jsonify a list of objects

  }

  clearItems(){

    this.bookList.clearItems()

  }

}

const deleteElements = function (){

  //timing function did not work
  //add a promise instead

  // const notice = document.getElementById('maintenance-notice')
  // setTimeout(()=>{
  //
  //   notice.style.display='none'
  //
  // }, 1000)


  // add a time delay function

  let parentDiv = document.getElementById('books-container');
  while (parentDiv.firstChild){
    parentDiv.firstChild.remove()
  }

}


const urlBuilder = function(BASE_URL, year, month, date, API_KEY){

  return `${BASE_URL}lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`

}

const fetchAPI = function(e){
  if(e){
    e.preventDefault();
  }


  //add a timing function to display a message that dissapears
  //does not automatically refresh. if you change the year, the form does not identify the change
  //for now, you have to hit the refresh button

  let divEl = document.getElementById('books-container');

  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/';

  const API_KEY ='mGqS9lCf3m3v6lc7FKR9rLCBcHxAMo0f'

  const year = yearEl.value;

  const month = monthEl.value;

  const date = dateEl.value;

  let url = urlBuilder(BASE_URL, year, month, date, API_KEY)

  // Fetch bestselling books for date and add top 5 to page
  // Best hardcover fiction books for the date

  //const url = `${BASE_URL}lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`;

  fetch(url)
      .then(function(data) {
        //debugger
        //console.log(data.json())
        return data.json();
      })
      .then(function(responseJson) {
        console.log(responseJson);

        let myList = new BookBatch()
        //let bks=[]

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

          const bk = {
            title:book,
            author:author_,
          }

          myList.bookList.push(bk)



          //myList.bookList.push(book)

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



        if(formEl){
          formEl.addEventListener('change', deleteElements, false)
        }

        myList.exportToTxt()

        myList.clearItems()

        // event listener for change. if the user changes the year, month or date,
        // then it deletes the items already present in the webpage




        //return responseJson.results.books[0].title

      });

  return url
}

if(formEl){
  formEl.addEventListener('submit', fetchAPI, false)
  //formEl.addEventListener('change', fetchAPI, false)
}

// if(formEl){
//   formEl.addEventListener('change', fetchAPI, false)
// }


