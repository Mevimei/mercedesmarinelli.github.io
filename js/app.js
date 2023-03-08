const hamburger = document.querySelector(
	".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
	".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = "#355F90";
		header.style.opacity = 0.7;
	} else {
		header.style.backgroundColor = "#355F90";
		header.style.opacity = 0.8;
	}
});

menu_item.forEach((item) => {
	item.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		mobile_menu.classList.toggle("active");
	});
});

// Graficos skills

let ctx1 = document.getElementById("skill-radius-1");
let skill1 = ["Trabajo en equipo"];
let skill1Qty = [70, 30];

let ctx2 = document.getElementById("skill-radius-2");
let skill2 = ["Comunicación"];
let skill2Qty = [91, 9];

let ctx3 = document.getElementById("skill-radius-3");
let skill3 = ["Atención al detalle"];
let skill3Qty = [95, 5];

let ctx4 = document.getElementById("skill-radius-4");
let skill4 = ["Adaptación"];
let skill4Qty = [90, 10];

graficarSkillRadius1();
graficarSkillRadius2();
graficarSkillRadius3();
graficarSkillRadius4();

function graficarSkillRadius1() {
	let skills1 = new Chart(ctx1, {
		type: "pie",
		data: {
			labels: skill1,
			datasets: [
				{
					label: "#",
					data: skill1Qty,
					backgroundColor: ["rgba(52, 172, 224, 1)", "rgba(248, 202,220, 1)"],
					borderWidth: 0,
				},
			],
		},
		options: {
			responsive: true,
			scales: {
				yAxes: [
					// {
					// 	ticks: {
					// 		beginAtZero: true,
					// 		stepSize: 1,
					// 		min: 0,
					// 		max: 0,
					// 	},
					// },
				],
			},
		},
	});
}

function graficarSkillRadius2() {
	let skills2 = new Chart(ctx2, {
		type: "pie",
		data: {
			labels: skill2,
			datasets: [
				{
					label: "#",
					data: skill2Qty,
					backgroundColor: ["rgba(52, 172, 224, 1)", "rgba(248, 202,220, 1)"],
					borderWidth: 0,
				},
			],
		},
		options: {
			responsive: true,
			scales: {
				yAxes: [
					// {
					// 	ticks: {
					// 		beginAtZero: true,
					// 		stepSize: 1,
					// 		min: 0,
					// 		max: 0,
					// 	},
					// },
				],
			},
		},
	});
}

function graficarSkillRadius3() {
	let skills3 = new Chart(ctx3, {
		type: "pie",
		data: {
			labels: skill3,
			datasets: [
				{
					label: "#",
					data: skill3Qty,
					backgroundColor: ["rgba(52, 172, 224, 1)", "rgba(248, 202,220, 1)"],
					borderWidth: 0,
				},
			],
		},
		options: {
			responsive: true,
			scales: {
				yAxes: [
					// {
					// 	ticks: {
					// 		beginAtZero: true,
					// 		stepSize: 1,
					// 		min: 0,
					// 		max: 0,
					// 	},
					// },
				],
			},
		},
	});
}

function graficarSkillRadius4() {
	let skills4 = new Chart(ctx4, {
		type: "pie",
		data: {
			labels: skill4,
			datasets: [
				{
					label: "#",
					data: skill4Qty,
					backgroundColor: ["rgba(52, 172, 224, 1)", "rgba(248, 202,220, 1)"],
					borderWidth: 0,
				},
			],
		},
		options: {
			responsive: true,
			scales: {
				yAxes: [
					// {
					// 	ticks: {
					// 		beginAtZero: true,
					// 		stepSize: 1,
					// 		min: 0,
					// 		max: 0,
					// 	},
					// },
				],
			},
		},
	});
}
