/*
Traduction simple en introduction
*/
let lng = document.getElementById('language');
let fr = document.getElementById('french');
let en = document.getElementById('english');
let es = document.getElementById('spanish');

fr.addEventListener('click', function () {
    lng.innerHTML = "Je parle ";
    fr.innerHTML = "le français";
    en.innerHTML = "l'anglais";
    es.innerHTML = "l'espagnol";
});

en.addEventListener('click', function () {
    lng.innerHTML = "I speak ";
    fr.innerHTML = "french";
    en.innerHTML = "english";
    es.innerHTML = "spanish";
});

es.addEventListener('click', function () {
    lng.innerHTML = "Hablo el ";
    fr.innerHTML = "frances";
    en.innerHTML = "el ingles";
    es.innerHTML = "el espanol";
});


/*
Afficher le dernier article à l'endroit indiqué
*/
var last_article = {
    "title": "Fermentation 01: le pain",
    "description": "Recettes et mécanismes de fermentation du pain",
    "link": "articles/alimentation/fermentation01.html",
    "date": "2021/08/04",
    "author": "RomDos",
    "theme": "alimentation"
};
let ticket_last_article = document.getElementById('ticket-last-article');
var title = last_article["title"];
var link = last_article["link"];
var description = last_article["description"];
var date = last_article["date"];
var author = last_article["author"];
ticket_last_article.innerHTML = `
<style>
    h1 {
        font-size: large;
    }
    a {
        color: none;
        text-decoration: none;
    }
    a:hover {
        cursor: pointer; 
    }
    a:visited { 
        color: rgba(27, 32, 33, 0.616);
    }
    .article_data {
        margin-left: 20px;
        font-family: 'Inconsolata', monospace;
    }
    #description {
        font-size: x-small;
    }
    #date_and_author {            
        font-size: xx-small;  
    }

</style>
<h1><a href="${link}">${title}</a></h1>
<p class="article_data" id="description">${description}</p>
<p class="article_data" id="date_and_author">${date} - ${author}</p>
`;
