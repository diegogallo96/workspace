
function registrarse () {
    let email = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;
    let alerta = document.getElementById("alerta");
    let alerta1 = document.getElementById("alerta1");
    
    if (email === "" && password === "") {
        document.getElementById("floatingInput").style.border = "3px solid #FF0000";
        document.getElementById("floatingPassword").style.border = "3px solid #FF0000";
        alerta.innerHTML = "ingresa tu email"
        alerta1.innerHTML = "ingresa tu contraseña"
    }
    else if (email === ""){
        document.getElementById("floatingInput").style.border = "3px solid #FF0000";
        alerta.innerHTML = "ingresa tu email"
    }
    else if (password === ""){
        document.getElementById("floatingPassword").style.border = "3px solid #FF0000";
        alerta1.innerHTML = "ingresa tu contraseña"
    }
    else {
        localStorage.setItem('user',email);
        location.href="index.html";
    }
    }
    
    document.addEventListener('DOMContentLoaded', () =>{
        document.getElementById("boton").addEventListener('click', () => {
            registrarse();
        })
    })
    
    