let lng = document.getElementById('language');
let fr = document.getElementById('french');
let en = document.getElementById('english');
let es = document.getElementById('spanish');
fr.addEventListener('click', function() {
    lng.innerHTML = "Je parle ";
    fr.innerHTML = "le français";
    en.innerHTML = "l'anglais";
    es.innerHTML = "l'espagnol";
});
en.addEventListener('click', function() {
    lng.innerHTML = "I speak ";
    fr.innerHTML = "french";
    en.innerHTML = "english";
    es.innerHTML = "spanish";
});
es.addEventListener('click', function() {
    lng.innerHTML = "Hablo el ";
    fr.innerHTML = "frances";
    en.innerHTML = "el ingles";
    es.innerHTML = "el espanol";
});