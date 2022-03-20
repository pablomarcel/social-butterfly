$.ajax({
    url: "https://api.imgflip.com/get_memes",
    type: "GET",
    dataType: "json",
    success: function(result)
    {
        console.log(result);

        console.log(result.data.memes[0].url);

        let myList = new MemeBatch()

        let divEl = document.getElementById('meme-container');




        for (let counter=0; counter<5; counter++){

            let index = getRandomIntInclusive(0,100)

            let meme_img = result.data.memes[index].url
            const imgElem = document.createElement('img')

            if (meme_img.length > 0) {
                const imgUrl = meme_img;
                imgElem.src=imgUrl
            }

            divEl.append(imgElem)

            //counter =0


            //console.log(result.Results[0].Make_Name)

            console.log()

        }


        // myList.exportToTxt()
        //
        // myList.clearList()


    },
    error: function(xhr, ajaxOptions, thrownError)
    {
        console.log(xhr.status);
        console.log(thrownError);
    }
});

function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData, null, 2);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

const deleteElements = function (){

    let parentDiv = document.getElementById('meme-container');
    while (parentDiv.firstChild){
        parentDiv.firstChild.remove()
    }

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

class MemeBatch{

    constructor(){
        this.memeList=[]
    }

    exportToTxt(){

        console.log(JSON.stringify(this.memeList, null, 2))

        let myJsonString = JSON.stringify(this.memeList)

        //create an alert to ask the user if they want to export the list of books to json file

        exportToJsonFile(this.memeList)

        //jsonify a list of objects

    }

    clearList(){

        //kind of redundant, because when the constructor is called the list is emptied.
        this.memeList=[]


    }

}

