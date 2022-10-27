function finalCost (event, data){

    let cost = data;
    let count = event;  
    total = parseInt(cost) * parseInt(count);
    document.getElementById('finalCost').innerHTML = total
  }  
  function showCart(data){
        let carrito = document.getElementById('carrito');
        htmlContentToAppend = "";
        htmlContentToAppend +=
        `
        <h3 class="title_tab"> CARRITO DE COMPRAS </h3>
        <div class="tab">
            <table>
            <tr>
                <td class="fuerte">IMAGEN</td>
                <td class="fuerte">NOMBRE</td>
                <td class="fuerte">COSTO</td>
                <td class="fuerte">CANTIDAD</td>
                <td class="fuerte">SUBTOTAL</td>
            </tr>
            <tr>
                <td> <img src="` + data.articles[0].image + `" class="imag_tab"></td>
                <td>` + data.articles[0].name + `</td>
                <td> USD` + data.articles[0].unitCost + `</td>
                <td> <input id="input" type="number" value="0" onchange="finalCost(this.value, ` + data.articles[0].unitCost + `)"></td>
                <td id="finalCost"> </td>
            </tr>
            </table>
            <hr>
            <h5 class="title_tab_2"> Tipo de envio </h5>
            <input type="radio" id="primero" name="primero" value=""
            checked> Premium de 2 a 5 días (15%) <br>
            <input type="radio" id="primero" name="primero" value=""
            > Express de 5 a 8 días (7%) <br>
            <input type="radio" id="primero" name="primero" value=""
            > Standard de 12 a 15 días (5%) 
            <hr>
            <h5 class="title_tab_2"> Dirección de envio </h5>
            <p>Calle</p>
            <input type="text" value="">
            <p>Número</p>
            <input type="text" value="">
            <p>Esquina</p>
            <input type="text" value="">
            <hr>
        </div>
        `
        carrito.innerHTML = htmlContentToAppend;
    };
    
    
    // Al cargar la pagina

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(CART_INFO_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                cart = resultObj.data;
                showCart(cart);
            }
        });

        //Verificacion de ingreso de sesión
    
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
    
    });