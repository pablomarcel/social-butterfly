describe("Books App", ()=>{
//
     describe("urlBuilder", ()=> {

         const url1 = 'https://api.nytimes.com/svc/books/v3/lists/2015-05-05/hardcover-fiction.json?api-key=mGqS9lCf3m3v6lc7FKR9rLCBcHxAMo0f'

         const BASE_URL = 'https://api.nytimes.com/svc/books/v3/';

         const API_KEY ='mGqS9lCf3m3v6lc7FKR9rLCBcHxAMo0f'

         const year = '2015'

         const month = '05'

         const date = '05'

         it("should return an url", ()=>{
             let result = urlBuilder(BASE_URL, year, month, date, API_KEY)
             expect(result).toEqual(url1)
         })

     })

    // describe("fetch Function", ()=> {
    //
    //     const url1 = 'https://api.nytimes.com/svc/books/v3/lists/2015-05-05/hardcover-fiction.json?api-key=mGqS9lCf3m3v6lc7FKR9rLCBcHxAMo0f'
    //
    //     const BASE_URL = 'https://api.nytimes.com/svc/books/v3/';
    //
    //     const API_KEY ='mGqS9lCf3m3v6lc7FKR9rLCBcHxAMo0f'
    //
    //     const year = '2015'
    //
    //     const month = '05'
    //
    //     const date = '05'
    //
    //     it("should return an url", ()=>{
    //         let result = fetchAPI()
    //         expect(result).toEqual(url1)
    //     })
    //
    // })


//
//         //const formEl = document.getElementById('best-books-form');
//
//         const url1 = 'https://api.nytimes.com/svc/books/v3/lists/2015-05-05/hardcover-fiction.json?api-key=mGqS9lCf3m3v6lc7FKR9rLCBcHxAMo0f'
//
//         it("should return url", () => {
//             const result = fetchAPI()
//             expect(result).toEqual(url1)
//         })
//
//
//     // it("should return MEMORY MAN", ()=>{
//     //
//     //     const result = fetch(url1)
//     //
//     //     // result.then(function (data){
//     //     //     return data.json()
//     //     // }).then(function(responseJson){
//     //     //     expect(responseJson.results.books[0]).toEqual("MEMORY MAN")
//     //     // })
//     //
//     //     result.then(function (data){
//     //         expect(data.json()).toEqual()
//     //     })
//     //
//     //     // console.log(result)
//     //     //
//     //     // expect(result).toEqual("MEMORY MAN")
//     //
//     // })
//
//     // it("should be async", function(done){
//     //
//     //     fetch(url1).then(function(data){
//     //         expect(data).toBe(true)
//     //         done()
//     //     })
//     //
//     // })
//
//     // beforeEach(function() {
//     //     return new Promise(function(resolve, reject) {
//     //         // do something asynchronous
//     //         resolve();
//     //     });
//     // });
//     //
//     // it('does a thing', function() {
//     //     return fetch(url1).then(function (result) {
//     //         expect(result.json().copyright).toEqual("Copyright (c) 2022 The New York Times Company.  All Rights Reserved.");
//     //     });
//     // });
//
})