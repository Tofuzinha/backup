
// criacao das variaveis com base nas classes e ID do html
const flashcards = document.getElementsByClassName('flashcard') [0];
const creatBox = document.getElementsByClassName('create-box')[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');

//array que vai conter todos os flashcards, que será armazenado no LocalStorege.
// verifica se já existe algo armazenado no local (se nao fizer isso nao será exibido na tela)
//transforma os items em elemento JSON (para gerar o dados do array)
// se nao tiver no localstorage vai criar um novo array
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker);

//cria uma nova div para cada card adicionado
function divMaker (text) {
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");

    div.className = 'flashcard';

    h2_question.setAttribute('style', "border-top: 1px solid red; padding: 15px; margin-top: 30px;");

    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute('style', "text-aling: center; display: none; color: red");

    h2_answer.innerHTML = text.my_answer;

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function() {
        if(h2_answer.style.display == "none")
        h2_answer.style.display = "block";
        else
        h2_answer.style.display = "none";
    });
}


// botão de adicionar novo card

function addFlashcard (){
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }
    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length -1]);
    question.value = '';
    answer.value = '';
}

function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox() {
    creatBox.style.display = "block";
}

function hideCreateBox() {
    creatBox.style.display = "none";
}




if (idade >= 0) {
    console.log("erro");

} else {
    console.log("tadeu")
}

function calc(){
    let x1 = 2;
    let y = 3;

    return x1 + y;
}
calc();