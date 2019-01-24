const menu = document.querySelector(".inicio_navegacion");
const burgerButton=document.querySelector("#burger-menu");

function showMenu() {
	if(menu.classList.contains("is-active")){
		menu.classList.remove("is-active");
	}
	else {
		menu.classList.add("is-active");
	}
}
