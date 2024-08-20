// variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const msgError = document.querySelector(".msgError");
const inputNumber = document.querySelector("#inputNumber");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// foco inicial
inputNumber.focus();

// eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

// funções
function handleTryClick(event) {
	event.preventDefault();

	if (Number(inputNumber.value) === randomNumber) {
		toggleScreen();
		screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativa(s)`;
		btnReset.focus();
	} else if (inputNumber.value === "" || inputNumber.value < 0 ||	inputNumber.value > 10) {
		alert("O número precisa estar entre 0 e 10. Tente novamente!");
	} else {
		xAttempts++;
		msgError.classList.remove("hide");
	}

	inputNumber.focus();
	inputNumber.value = "";
}

function handleResetClick() {
	msgError.classList.add("hide");
	toggleScreen();
	xAttempts = 1;
	randomNumber = Math.round(Math.random() * 10);
	inputNumber.focus();
}

function toggleScreen() {
	screen1.classList.toggle("hide");
	screen2.classList.toggle("hide");
}

function toggleMsgError() {
	msgError.classList.toggle("hide");
}
