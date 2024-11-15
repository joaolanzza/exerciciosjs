//EXEMPLO: Tabuada apenas de multiplicadores pares------------------------------
function gerarTabuadaPar() {
    // Pega o valor do input
    const numero = parseInt(document.getElementById("inputNumero").value);

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoTabuada");

    // Verifica se o número é válido
    if (isNaN(numero)) {
        resultadoElemento.innerText = "Por favor, insira um número válido.";
        return;
    }

    // Gera a tabuada apenas para os multiplicadores pares
    let tabuada = `Tabuada do ${numero} (somente multiplicadores pares):\n`;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) { // Apenas números pares
            tabuada += `${numero} x ${i} = ${numero * i}\n`;
        }
    }

    // Exibe o resultado no parágrafo
    resultadoElemento.innerText = tabuada;
};

// Esse evento é acionado quando o documento HTML foi completamente carregado e analisado, ou seja, o DOM (Document Object Model) está pronto para ser manipulado.
// A função passada como argumento será executada assim que o evento DOMContentLoaded for disparado. Isso é útil para garantir que o código seja executado apenas depois que os elementos da página estejam disponíveis.
document.addEventListener("DOMContentLoaded", () => {
    const botaoTabuada = document.getElementById("btnTabuada");
    botaoTabuada.addEventListener("mouseover", gerarTabuadaPar);
});



// 1- Verificação de para ou impar --------------------------------------------------------------

function verificarParImpar() {
    const numero = parseInt(document.getElementById("numParImpar").value);

    const resultadoElemento = document.getElementById("resultadoParImpar");

    let resultado = `O numero ${numero} é `;

    if (numero % 2 === 0) {
        resultado += `par`;
    } else {
        resultado += `impar`;
    }

    resultadoElemento.innerText = resultado;
};



// 2- Calculadora de média -------------------------------------------------------------------

function calcularMedia() {

    const nota1 = parseInt(document.getElementById("nota1").value);
    const nota2 = parseInt(document.getElementById("nota2").value);
    const nota3 = parseInt(document.getElementById("nota3").value);
    const resultadoElemento = document.getElementById("resultadoMedia");

    let resultadoMedia = (nota1 + nota2 + nota3) / 3;

    if (resultadoMedia >= 7) {
        resultadoMedia = `Sua media é ${resultadoMedia.toFixed(2)} - aprovado`;
    }
    else {
        resultadoMedia = `Sua media é ${resultadoMedia.toFixed(2)} - reprovado`;
    }
    resultadoElemento.innerText = resultadoMedia;

    document.addEventListener("DOMContentLoaded", () => {
        const calcularMedia = document.getElementById("btncalcularMedia");
    });
}



//função utilitaria
function bloquearCopia() {
    // Bloqueia o clique direito
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("Cópia desabilitada no site.");
    });

    // Bloqueia a seleção de texto
    document.addEventListener("selectstart", (e) => {
        e.preventDefault();
        alert("Seleção de texto desabilitada.");
    });

    // Bloqueia atalhos de teclado (Ctrl+C, Ctrl+X, Ctrl+U)
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "u")) {
            e.preventDefault();
            alert("Este atalho está desabilitado no site.");
        }
    });
}



// 3- Soma doas números pares ---------------------------------------

function somarPares() {
    const numero = parseInt(document.getElementById("numSomaPares").value);
    let somaPares = 0;
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            somaPares += i;
        }
    }

    document.getElementById(`resultadoSomaPares`).textContent = `À soma dos numeros pares até ${numero} é: ${somaPares}`;
}

// 4- Validação de login e senha------------------------------------------------------

function validarLogin() {
    // pegar o valor do usuário e da senha
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // validar se o nome do usuario é admin e a senha dele é 1234
    if (username == "admin" && password == "1234") {
        document.getElementById(`resultadoLogin`).textContent = "Usuário e senha correto";
    }
    else {

        document.getElementById(`resultadoLogin`).textContent = "Usuário e senha incorreto";
    }
    // mostra o resultado se está certo ou não
}

// 5- Calculadora de fatorial ---------------------------------------------------

function calcularFatorial1() {
    // obter o valor digitado
    const numero = parseInt(document.getElementById("numFatorial").value); 
    let resultadoFatorial = numero;
    for (let i = numero; i > 1; i--) {
        debugger;
        resultadoFatorial *= i - 1 ;
    }
    document.getElementById(`resultadoFatorial`).textContent = `O cálculo fatorial do numero ${numero} é: ${resultadoFatorial}`;
}


function calcularFatorial() {
    // obter o valor digitado
    const numero = parseInt(document.getElementById("numFatorial").value); 
    let resultadoFatorial = 1;
    for (let i = 1; i <= numero; i++) {
        resultadoFatorial *= i;
    }
    document.getElementById(`resultadoFatorial`).textContent = `O cálculo fatorial do numero ${numero} é: ${resultadoFatorial}`;
}
