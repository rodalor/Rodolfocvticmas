//Al presionar sobre el boton  cerrar de la pagina Formulario 
  document.getElementById("cerrar").onclick= function cierrapag(){
    const msjcierre=confirm("Esta seguro que quiere salir de la pagina?");
    if (msjcierre){
       window.close();}
      };
//Al presionar sobre el boton  Borrar de la pagina Formulario 
  document.getElementById("clear").onclick= function limpiadatos(){
        const msjlimp=confirm("Esta seguro de borrar datos?");
        let formu=document.getElementById("datgral");
        if (msjlimp){
          formu.reset(); }
      };

     
//Al mover el mouse sobre el icono de  Watshap en la pagina Index
function muestraMensaje() {
 alert ('Permite enviar mensaje por Watshap');
}

//Verificación de ingreso de dirección correo electronico,ejemplo modificado, visto en la pagina www.freecodecamp.org
const btnEnviar = document.getElementById('envioform');

const validación = (e) => {
  e.preventDefault();//El método preventDefault() cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.W3S
  const correo= document.getElementById('correo');
if (correo.value === "") {
    alert("Por favor, escriba su direccion de correo.");
    correo.focus();
    return false;
  }
  

  if (!emailVálido(correo.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    correo.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);//Al realizar el evento onclik del boton enviar se valida

