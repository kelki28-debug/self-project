let button = document.querySelector('#button');
let div = document.querySelector('.container');
button.addEventListener('click', sendData)
async function sendData() {
    try {
        let genre = document.querySelector('#genre').value
        let title = document.querySelector('#title').value
        let year = document.querySelector('#date').value
        let image = document.querySelector('#image').value
        let description = document.querySelector('#area').value         


        let userData = {
            genre,
            title,
            year,
            image,
            description
        }
        

        let url = 'https://5ef168f21faf160016b4d5c9.mockapi.io/api/movie-list'
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        }
        let response = await fetch(url, options);
        let push = await response.json();
    
        alert('Added Success')
        window.location.reload()
        
        

    } catch(error){
        console.error(error)
    }
}

async function getData(){
    try{
        let url = 'https://5ef168f21faf160016b4d5c9.mockapi.io/api/movie-list'
        let options = {
            method: 'GET'
        }
        let response = await fetch(url, options)
        let result = await response.json();

        result.map(data =>{
            let img = document.createElement('img');
            img.setAttribute('src', data.image)

            let liGenre = document.createElement('li');
            let text = document.createTextNode(`Genre: ${data.genre}`);
            liGenre.appendChild(text);

            let liTitle = document.createElement('li');
            let text1 = document.createTextNode(`Title: ${data.title}`);
            liTitle.appendChild(text1);

            let liDate = document.createElement('li');
            let text2 = document.createTextNode(`Year: ${data.year}`)
            liDate.appendChild(text2)

            let liText = document.createElement('li');
            let text3 = document.createTextNode(`Description: ${data.description}`)
            liText.appendChild(text3)

            div.appendChild(img)
            div.appendChild(liGenre)
            div.appendChild(liTitle)
            div.appendChild(liDate)
            div.appendChild(liText)
            
        })
        
        
    }
    catch(error){
        console.error(error)
    }
}

getData()