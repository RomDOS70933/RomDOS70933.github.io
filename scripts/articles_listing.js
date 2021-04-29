var list_of_articles = {
    "10 films à avoir vu dans sa vie": {
        "description": "Liste de 10 films remarquables",
        "link": "../articles/culture/my_ten_favorite_movies.html",
        "date": "2021/04/02",
        "author": "RomDos",
        "theme": "culture"
    },
    "10 livres à avoir lu dans sa vie": {
        "description": "Liste de 10 livres remarquables",
        "link": "../articles/culture/my_ten_favorite_books.html",
        "date": "2021/04/02",
        "author": "RomDos",
        "theme": "culture"
    },
    "Le pain": {
        "description": "Recette et explications sur les mécanismes qui interviennent dans la préparation du pain",
        "link": "../articles/cook/bread.html",
        "date": "2021/04/02",
        "author": "RomDos",
        "theme": "cook"
    },
}

function select_articles_to_display(theme, last) {
    var shown_articles = 0;
    for (article in list_of_articles) {
        var article_theme = list_of_articles[article]["theme"];
        if ((article_theme == theme || theme == "all") && shown_articles < last) {
            const template = document.createElement('template');
            var link = list_of_articles[article]["link"];
            var description = list_of_articles[article]["description"];
            var date = list_of_articles[article]["date"];
            var author = list_of_articles[article]["author"];
            template.innerHTML = `
                <style>
                    h1 {
                        margin-left: 150px;
                        margin-right: 150px;
                        font-size: large;
                    }
                    hr {
                        width: 75%;
                        border: 0;
                        height: 1px;
                        margin-top: 20px;
                        margin-bottom: 20px;
                        background: #333;
                        background-image: linear-gradient(to right, #ccc, #333, #ccc);
                    } 
                    a{
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
                        margin-left: 170px;
                        margin-right: 170px;
                        font-family: 'Inconsolata', monospace;
                    }
                    #description {
                        font-size: x-small;
                    }
                    #date_and_author {            
                        font-size: xx-small;  
                    }
                
                </style>
                <h1><a href="${link}">${article}</a></h1>
                <p class="article_data" id="description">${description}</p>
                <p class="article_data" id="date_and_author">${date} - ${author}</p>
                <hr>
                `;
        
            document.body.appendChild(template.content);
            shown_articles += 1;
        }
    }
}

var current_theme = document.currentScript.getAttribute('theme');
var last = document.currentScript.getAttribute('last');
select_articles_to_display(current_theme, last);


