const container = document.querySelector(".form-container");
const formButton = document.querySelector(".green-bg button");
const submitButton = document.querySelector(".form-submit");

formButton.addEventListener("click", () => {
	container.classList.toggle("change");
});

submitButton.addEventListener("click", () => {
	const formName = document.getElementById("input-name");
	const formEmail = document.getElementById("input-email");
	const formText = document.getElementById("input-query");

	window.open(
		`mailto:mevimei@gmail.com?subject=Consulta Web de ${formEmail.value}&body=Hola, mi nombre es ${formName.value}, tengo la siguiente consulta: ${formText.value}`
	);
});
