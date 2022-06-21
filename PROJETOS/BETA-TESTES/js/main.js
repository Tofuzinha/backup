// CALCULO MÉDIA

// let num1 = prompt('Digite um número');
// num1 = parseFloat(num1);

// let num2 = prompt('Digite outro número');
// num2 = parseFloat(num2);

// let result = num1 + num2;

// console.log(result);

// window.alert('O resultado da soma é: ' + result);

// VARIÁVEIS

// let varA = 'A'; // B
// let varB = 'B'; // C
// let varC = 'C'; // A

// De uma forma pode criar um avaro'avel constante para guardar o valor.

// const varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;

// ou metedo mais moderno, criar um array para conter as variaveis

// [varA, varB, varC] = [varB, varC, varA];
// console.log(varA, varB, varC);

// const nome = prompt('Digite seu nome: ');

// document.body.innerHTML += `O seu nome e: ${nome} <br/>`;
// document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
// // document.body.innerHTML += `A segunda letra do seu nome e: ${} <br/>`;
// document.body.innerHTML += `Qual o primeiro indice da letra a no seu nome? <br>`;

// ************************************************************************************

// CRIAÇAO DE OBJETOS

// function person (nome, anime, n1, n2) {
   
//     this.nome = nome;
//     this.nota1 = n1;
//     this.nota2 = n2;

//     this.media = function () {
//         return (this.nota1 + this.nota2) / 2;
//     }
// }

// var select = [
//     criarPerson("Kuroko", "kuroko no basket", 7, 8),
//     criarPerson("Aomine", "kuroko no basket", 10, 9),
//     criarPerson("Kise", "kuroko no basket", 8, 9),
// ]

// var a = new person ("Kuroko", "kuroko no basket", 7, 8);
// var a = new person ("Aomine", "kuroko no basket", 10, 9);

// console.log(a);

// OBJETO DATE *****

// var d = new Date("02/10/2022");

// var day = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

// console.log(d);
// console.log(day[d.getDay()]);

// function loaded() {
//     let t = document.getElementById("title");

//     t.addEventListener("click", mudarText)

// }

// function mudarText() {
//     this.innerHTML = "Oi";
// }

// function onOver(elemento) {
//     elemento.style.backgroundImage = "url(./assets/anime-dark.png)";

// }

// function onOut(elemento) {
//     elemento.style.backgroundImage = "url(./assets/anime.png)";

// }

// function onOverBtn(elemento) {
//     elemento.style.backgroundColor = "red";

// }

// function onOutBtn(elemento) {
//     elemento.style.backgroundColor = "#0b924e";
   
 
// }

// function sortear () {

//     let dados = ["Kukoro", "Aomine", "Kise", "Midorima", "Akashi", "Murasakibara"];

//     let np = dados.length;

//     let ns = Math.floor(Math.random() * np);
//     document.getElementById("dado").innerHTML = dados[ns];
// }

// function speakGeneric(){
//     console.log(this.sound);
// }

// let dog = {
//     sound: "Au Au",
//     speak: speakGeneric
// }

// let cat = {
//     sound: "Miau",
//     speak: speakGeneric
// }

// let bindeFunction = speakGeneric.bind(dog);

// bindeFunction();

// let usuarios = ["Aomine", "Kise", "Kuroko"];

// function inserirUsuario(nome) {

//     let promise = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             usuarios.push(nome);
//             let error = false;

//             if(!error) {
//                 resolve();
//             }else {
//                 reject();
//             }
//         }, 1000);
//     })
//     return promise;

// }

// function listarUsuarios() {
//     console.log(usuarios);
// }

// inserirUsuario("Momo").then(listarUsuarios);


// let persons = ["Jinx", "Akali", "Ahri", "Eve", "Kaisah"];

// function inserirPersons (nome) {

//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => { 
//             persons.push(nome);
//             let error = false;

//             if(!error) {
//                 resolve();
//             } else {
//                 reject({mgs: "O dado esta errado!"})
//             }

//         }, 1000);

//     })
//     return promise;
    

// }

// function listarPersons () {
//     console.log(persons);

// }

// async function executar() {
//     await inserirPersons("Seraphine");
//     listarPersons();
// }
// executar();

// let itemLoja = [
//     {
//     chaveiro: 'Kaisah',
//     estoque: 5
//     },
//     {
//     chaveiro: 'Akali',
//     estoque: 1
//     },
//     {
//     chaveiro: 'Ahri',
//     estoque: 2
//     },
//     {
//     chaveiro: 'Eve',
//     estoque: 6
//     },
//     {
//     chaveiro: 'Seraphine',
//     estoque: 10
//     }

// ]

// function inserirItemLoja(item) {

//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             itemLoja.push(item);
           
//             let semEstoque = true;

//             if(semEstoque) {
//                 resolve();
//             } else {
//                 reject();
//                 console.log("SemEstoque");
//             }
//         }, 1000);
        
//     })
//     return promise;

// }

// function listarItem () {
//     console.log(itemLoja);
// }

// async function executar () {
//     await inserirItemLoja ({chaveiro: 'jinx', estoque:3});
//     listarItem();
// }

// executar();

// function novoItem (chaveiro, estoque) {
//     return { chaveiro, estoque }
// }

// let itens = [
//     novoItem("Ahri", 5),
//     novoItem("Kaisah", 3),
//     novoItem("Akali", 1),
//     novoItem("Evelyn", 0),
// ]

// function chaveiroEstoque (item) {
//     return "Chaveiro KDA " + item.chaveiro + " tem " + item.estoque + " em estoque.";
// }

// console.log(itens.map(chaveiroEstoque));

fetch("https://ranekapi.origamid.dev/json/api/produto")
    .then(r => r.json())
    .then(jsonBody => {
        document.querySelector("#app").innerHTML = jsonBody[0].preco;
        console.log(jsonBody);
    });

    const data = {
        id: "JinxZuca",
        nome: "Jinx",
        email: "jinxExplosion@gmail.com",
        senha: "123456",
        cep: "1234567",
        rua: "Ali perto",
        numero: "666",
        bairro: "zaum",
        cidade: "Piltover",
        estado: "Runeterra"
    }

    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });

    
