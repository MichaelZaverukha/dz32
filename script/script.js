const movieSearchBox = document.querySelector('#movie-search-box');
const searchList = document.querySelector('.movieList_items');
const btn = document.querySelector('.btn');

async function List(searchTerm) {
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=2362c69f`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    displayMovies(data.Search);
    console.log(data);
}

function displayMovies(items) {
    items.forEach(item => {
        let listItem = document.createElement('li');
        let oneItem = document.createElement('p');
        let listImg = document.createElement('img'); // заменяем div на img
        let listYear = document.createElement('p');
        let imdbID = document.createElement('p');
        let type = document.createElement('p');
        let containerImg = document.createElement('div');
        let containerText = document.createElement('div');
        listItem.style.listStyle = 'none';
        listItem.style.display= 'flex';
        listItem.style.gap= '200px'
        listItem.style.border= '3px solid white';
        containerText.style.display= 'flex';
        containerText.style.flexDirection= 'column';
        containerText.style.justifyContent= 'space-around'
        oneItem.style.fontSize='32px';
        oneItem.innerText = item.Title;
        listImg.src = item.Poster;
        listYear.innerText = `Year: ${item.Year}`;
        imdbID.innerText = `imdbID: ${item.imdbID}`;
        type.innerText = `Type: ${item.Type}`;
        searchList.appendChild(listItem);
        listItem.appendChild(containerImg);
        listItem.appendChild(containerText);
        containerImg.appendChild(listImg);
        containerText.appendChild(oneItem);
        containerText.appendChild(listYear);
        containerText.appendChild(imdbID);
        containerText.appendChild(type);
    });
}

function SearchMovie() {
    const searchTerm = (movieSearchBox.value).trim();
    searchList.innerHTML = '';
    List(searchTerm);
}

btn.addEventListener('click', SearchMovie);