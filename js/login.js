
function registrarse () {
    let email = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;
    
    if (email === "" || password === "") {
        alert("Debe llenar todos los campos");
    }
    else {
        location.href="index.html";
    }
    }
    
    document.addEventListener('DOMContentLoaded', () =>{
        document.getElementById("boton").addEventListener('click', () => {
            registrarse();
        })
    })
    
    