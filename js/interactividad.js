const $hideMenu = document.getElementById('menu-button');
const $navegacionHide = document.getElementById('inicio_navegacion');
const $showMenu = document.getElementById('menu-button');
//Creamos el boton de responsive design del menu
 $hideMenu.addEventListener('click', (event) =>{
	 $navegacionHide.classList.toggle('active');
});
