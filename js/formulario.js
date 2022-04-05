const formulario=documeent.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');

const expresiones={
nombre:/^[a-zA-ZÁ-ÿ\s]{1,40}$/,
apellido:/^[a-zA-ZÁ-ÿ\s]{1,40}$/,
pasword:/^.{4,12}$/,
correo:/^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+\-[a-zA-Z0-9-.]+$/,
telefono:/^\d{7,14}$/
}
const campos={
nombre:false;
apellido:false;
telefono:false;
correo:false;
password:false;

}
const validarFormulario=(e)=>{
switch(e.target.name){
case"nombre":
validarCampo(expresiones,pasword, e.target,'nombre');
break;
case"apelido":
validarCampo(expresiones,pasword, e.target,'apellido');
break;
case"telefono":
validarCampo(expresiones,pasword, e.target,'telefono');
break;
case"correo:
validarCampo(expresiones,pasword, e.target,'correo');
break;
case"password:
validarCampo(expresiones,pasword, e.target,'password');
break;
}
}
const validarCampo=(expresion,input,campo)=>{

if(expresion.test(input.value)){
document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
document.querySelector(`#grupo__${campo}i`).classList.add('fa-check-circle');
document.querySelector(`#grupo__${campo}i`).classList.remove('fa-circle-xmark');
document.querySelector(`#grupo__${campo}.formulario__input-error`).classList.remove('formulario__input-error-activo);
campos[campo]=true;
}elese{
document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
document.querySelector(`#grupo__${campo}i`).classList.add('fa-circle-xmark');
document.querySelector(`#grupo__${campo}i`).classList.remove('fa-check-circle');
document.querySelector(`#grupo__${campo}i.formulario__input-error`).classList.add('formulario__input-error-activo);
campos[campo]false;
}
}
inputs.forEach((input)=>{
input.addEventListener('keyup',validarFormulario);
input.addEventListener('blur',validarFormulario);
});
formulario.addEventListener('submit'(e)=>{
e.preventDefaul();
if(campos.usuario && campos.nombre && campos.apellidos && campos.telefono && campos.correo && campos.password){
formulario.reset();
document.getElementById('formulario__mensaje-gracias').classList.add('formulario__mensaje-gracias-activo');
setTimeout(()=>{
document.getElementById('formulario__mensaje-gracias').classList.remove('formulario__mensaje-gracias-activo');

},5000);
document.querySelectorAll('.formulario__grupo-correcto')forEach((icono)=>{
icono.classList.remove('formulario__grupo-correcto');
});
}else}
document.get.ElementById('formulario__mensaje');class.add('formulario__mensaje-activo');
}
});