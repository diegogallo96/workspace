function validateForm (){
    let nombre1 = document.getElementById('nombre1');
    let nombre2 = document.getElementById('nombre2');
    let apellido1 = document.getElementById('apellido1');
    let apellido2 = document.getElementById('apellido2');
    let telefono = document.getElementById('telefono');
    let email = document.getElementById('email');
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if((!nombre1.value == "") && (!apellido1.value == "") && (!email.value === "" || regex.test(email.value))){
       

        localStorage.setItem('nombre1', nombre1.value)
        localStorage.setItem('nombre2', nombre2.value)
        localStorage.setItem('apellido1', apellido1.value)
        localStorage.setItem('apellido2', apellido2.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('telefono', telefono.value)
    }

    if(nombre1.value == ""){
        nombre1.classList.add("is-invalid")
    }
    else{
        nombre1.classList.remove("is-invalid");
    }
    if(apellido1.value == ""){
        apellido1.classList.add("is-invalid")
    }
    else{
        apellido1.classList.remove("is-invalid");
    }

    if (email.value === "" || !regex.test(email.value)) {
        email.classList.add("is-invalid");
      } else {
        email.classList.remove("is-invalid");
      }
};

function remember(){ 

    let nombre1 = document.getElementById('nombre1');
    let nombre2 = document.getElementById('nombre2');
    let apellido1 = document.getElementById('apellido1');
    let apellido2 = document.getElementById('apellido2');
    let telefono = document.getElementById('telefono');
    let email = document.getElementById('email');
    
    let Nombre1 = localStorage.getItem('nombre1');
    let Nombre2 = localStorage.getItem('nombre2');
    let Apellido1 = localStorage.getItem('apellido1');
    let Apellido2 = localStorage.getItem('apellido2');
    let Telefono = localStorage.getItem('telefono');
    let Email = localStorage.getItem('email');

    if(!Nombre1 == ""){
    nombre1.value = Nombre1
    }
    if(!Nombre2 == ""){
        nombre2.value = Nombre2
    }
    if(!Apellido1 == ""){
        apellido1.value = Apellido1    
    }
    if(!Apellido2 == ""){
        apellido2.value = Apellido2
    }
    if(!Telefono == ""){
        telefono.value = Telefono
    }
    if(!Email == ""){
        email.value = Email
    }
}


document.addEventListener("DOMContentLoaded", function(e){
    remember()
        });

document.getElementById('perfil').addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });


let usuario = localStorage.getItem('user');

if (usuario == null) {
    this.location.href = "login.html";
    alert("No iniciaste sesión");
}else{
    document.getElementById('usuario').innerHTML = 'Sesión de ' + '<b>' + usuario + '</b>';
}

    // Cerrar sesion

    document.getElementById('Exit').addEventListener('click', ()=> {
        localStorage.clear();
        this.location.href = "login.html"
    });