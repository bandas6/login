const ingresar = document.getElementById("ingresar");
const nombre = document.getElementById("nombre");
const footerlogin = document.querySelector(".footer");
const contrasena = document.getElementById("password");

//Validacion al ingresar

ingresar.addEventListener("click", async ()=>{
    let error = await validarNombre();
    if(error[0]){
       footerlogin.innerHTML=error[1];
       footerlogin.classList.add("red");
    }else{
       footerlogin.innerHTML=error[1]; 
       footerlogin.classList.add("green");
    }
 })

 const validarNombre = ()=>{
     let error = [];
     if(nombre.value.length > 10 || nombre.value.length < 4){
     error[0]=true;
     error[1]= "nombre invalido";
     return error;
     }else{
     error[0]= false;
     error[1]= "Se a registrado correctamente";
     return error;
     }
 }
 
 const validarContrasena = ()=>{
     let error = [];
     if(contrasena.value.length < 8 || contrasena.value.length >20){
     error[0] = true;
     error[1] = "contraseña invalida";
     }
 }

 
 //Ventana Resgistrar Usuario
 let registrar = document.getElementById("reg");
 let ventana = document.querySelector(".contain-registro");


 const lanzarRegistro = ()=>{
     let newHTML = ``;
     ventana.innerHTML += newHTML; 
 }

let login = document.querySelector(".container");

const ocultarIngresar = ()=>{
     login.classList.add("ocultar");
}
 
 registrar.addEventListener("click",()=>{
    lanzarRegistro();
    ocultarIngresar();
    document.documentElement.scrollTop = 699;
});



//callback
