const celulas = document.querySelectorAll(".celula");
let fimDeJogo = false;

const jogador_X = "X";
const jogador_O = "O";

const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

document.addEventListener("click", function(event){
    if(event.target.matches(".celula")){
        //se houver um click na identificaçao da class informada
        jogar(event.target.id, jogador_X);
        setTimeout(() => bot(), 500);
    }
});

function bot() {
    const posicoesDisponiveis = [];
    for (index in celulas) { //verifica os elementos dentro dele
        if(!isNaN(index)) {
            if (!celulas[index].classList.contains("X") && !celulas[index].classList.contains("O")) {
                posicoesDisponiveis.push(index)
            }
        }
    }
    
    const posicaoAleatoria = Math.floor(Math.random() * posicoesDisponiveis.length);

    if(!fimDeJogo) {
        jogar(posicoesDisponiveis[posicaoAleatoria], jogador_O);
    }
}

function jogar(id, turno) {
    const celula = document.getElementById(id);
    celula.textContent = turno;
    celula.classList.add(turno);
    
    checarVencedor(turno);
}

function checarVencedor (turno) {
    const vencedor = combinacoes.some(function(comb) {
         //se alguma das opçoes do array for true ele retorna 
        return comb.every(function(index) {
            //precisa que todas as combinaçoes retorne true para continuar
            return celulas[index].classList.contains(turno);
        });
    });

    if (vencedor) {
        encerrarJogo(turno);
    }else if (checarEmpate()) {
        encerrarJogo();
    }

}

function checarEmpate(){
    let x = 0;
    let o = 0;

    for(index in celulas) {
        if(!isNaN(index)) {
            if(celulas[index].classList.contains(jogador_X)) {
                x++;
            }

            if(celulas[index].classList.contains(jogador_O)) {
                o++;
            }
        }
    }

    return x + o === 9 ? true : false;
}

function encerrarJogo (vencedor = null) {
    fimDeJogo = true;
    const telaEscura = document.getElementById("tela-escura");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let mensagem = null;

    telaEscura.style.display = "block";
    telaEscura.appendChild(h2);
    telaEscura.appendChild(h3);

    if (vencedor) {
        h2.innerHTML = `O player <span>${vencedor}</span> venceu.`;
    } else {
        h2.innerHTML = "Empatou";
    }

    let contador = 3;
    setInterval(() => {
        h3.innerHTML = `Reiniciando em ${contador--}`;
    }, 1000);

    setTimeout( () => location.reload(), 4000);
}

