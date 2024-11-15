const productos=[
   {   	nombre:'platanos', valor:500 },
   {   	nombre:'Pera', valor:500 },
   {   	nombre:'sandia', valor:500 },
   {   	nombre:'melon', valor:500 },
   {   	nombre:'Frutillas', valor:500 }



]
const formulario=document.querySelector('#formulario');
const boton=document.querySelector('#boton');
const resultado=document.querySelector('#resultado');

const filtrar = ()=>{
	
	
	resultado.innerHTML = '';
	const texto=formulario.value.toLowerCase();
	for (let producto of productos) {
		let nombre=producto.nombre.toLowerCase();
		if (nombre.indexOf(texto) !== -1) {
			resultado.innerHTML+=`<li>${producto.nombre} - valor: ${producto.valor}</li>`
		}
		
		}
		if (resultado.innerHTML === '') {
			resultado.innerHTML+=`<li>no escontrado</li>`
}
}
boton.addEventListener('click',filtrar)
/*formulario.addEventListener('keyup', filtrar)
filtrar();*/