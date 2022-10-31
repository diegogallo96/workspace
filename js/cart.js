
  
  




function finalCost (event, data){

    let cost = data;
    let count = event;  
    total = parseInt(cost) * parseInt(count);
    document.getElementById('finalCost').innerHTML = "USD " + total
    document.getElementById('finalCost2').innerHTML = "USD " + total


  }  

function costoEnvio(data){
    let primero = document.getElementById('primero');
    let segundo = document.getElementById('segundo');
    let tercero = document.getElementById('tercero');
    let cantidad = document.getElementById('input').value;
    let valor = "";
    if(primero.checked){
    valor = (parseInt(data) * 0.15 * cantidad);
    document.getElementById('costoEnvio').innerHTML = "USD " + valor}
    else if(segundo.checked){
    valor = (parseInt(data) * 0.07 * cantidad)
    document.getElementById('costoEnvio').innerHTML = "USD " +valor;}
    else if(tercero.checked){
    valor = (parseInt(data) * 0.05 * cantidad)
    document.getElementById('costoEnvio').innerHTML = "USD " + valor;}

    document.getElementById('total').innerHTML = "USD " + (parseInt(data) + valor);

    
};


  function showCart(data){
        let carrito = document.getElementById('carrito');
        htmlContentToAppend = "";
        htmlContentToAppend +=
        //TABLA
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
            <hr class="fuerte">
            <tr>
                <td> <img src="` + data.articles[0].image + `" class="imag_tab"></td>
                <td>` + data.articles[0].name + `</td>
                <td> USD` + data.articles[0].unitCost + `</td>
                <label for="input" class="form-label"></label>
                <td> <input id="input" name="input" type="number" class="form-control" value="" onchange="finalCost(this.value, ` + data.articles[0].unitCost +` )" onclick="costoEnvio(`+ data.articles[0].unitCost +`)">
                <div class="invalid-feedback">
                Debe ingresar un número.
                </div></td>
                <td id="finalCost">USD 0 </td>
            </tr>
            </table>
            <hr>

            
            <h5 class="title_tab_2"> Tipo de envio </h5>
                <input type="radio" id="primero" name="envio" value="prim" onclick="costoEnvio(`+ data.articles[0].unitCost +`)">
                Premium de 2 a 5 días (15%) <br>
                <input type="radio" id="segundo" name="envio" value="seg" onclick="costoEnvio(`+ data.articles[0].unitCost +`)"> 
                Express de 5 a 8 días (7%) <br>
                <input type="radio" id="tercero" name="envio" value="ter" onclick="costoEnvio(`+ data.articles[0].unitCost +`)"> 
                Standard de 12 a 15 días (5%) 
                <div class="invalid-feedback">
                Debe seleccionar un tipo de envio.
                <span class="invalid-feedback" id="terms2">
                Debe seleccionar forma de pago.
              </span>
              </div>
            <hr>


            <h5 class="title_tab_2"> Dirección de envio </h5>
            <form name="form" id="myForm" action="#" method="get" class="row mt-4" novalidate>
            <label for="calle" class="form-label">Calle</label>
            <input type="text" class="form-control" id="calle" name="calle" required>
            <div class="invalid-feedback">
              Debe ingresar una calle.
            </div>
            <label for="esquina" class="form-label">Esquina</label>
            <input type="text" class="form-control" id="esquina" name="esquina" required>
            <div class="invalid-feedback">
              Debe ingresar una esquina.
            </div>
            <label for="number" class="form-label">Número</label>
            <input type="number" class="form-control" id="numero" name="numero" required>
            <div class="invalid-feedback">
              Debe ingresar un número.
            </div>



            <h5 class="title_tab_2"> Costos </h5>
            <div class="divmargin2">
                <p class="fuerte">Subtotal <span id="finalCost2" class="spanright"> USD 0 </span></p> 
                <p>Costo unitario del producto por cantidad</p>
            </div>
            <div class="divmargin2">
                <p class="fuerte">Costo de envio <span id="costoEnvio" class="spanright"> USD 0</span></p>
                <p>Segun el tipo de envio</p>
            </div>
            <div class="divmargin2">
                <p class="fuerte">Total ($) <span id="total" class="spanright"> USD 0</span></p>
            </div>
            <hr>



            <h5 class="title_tab_2"> Forma de pago </h5>
            <p class="fuerte">No a seleccionado </p>
            <div class="col-sm-12">
            <button type="button" class="btn btn-link ps-0" id="terms" data-bs-toggle="modal"
              data-bs-target="#modalTerminos">Seleccionar</button>
            <span class="invalid-feedback" id="feedback-modal-terminos">
              Debe seleccionar forma de pago.
            </span>
          </div>
          <button class="btn btn-primary" type="submit" id="regBtn">Finalizar Compra</button>
          </form>
        </div>



        <div class="modal fade" id="modalTerminos" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">Forma de pago.</h1>
                        <hr>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <span>
                        <input type="radio" id="credito" name="pagar" value="">
                        Tarjeta de crédito<br>
                        </span>
                        <hr>
                        <label for="numtarjeta" class="form-label">Número de tarjeta</label> 
                        <input type="number" class="form" id="numtarjeta" name="numtarjeta" required><br>
                        <label for="codigo" class="form-label">Código de seg.</label>
                        <input type="text" class="form" id="codigo" name="codigo" required><br>
                        <label for="vencimiento" class="form-label">Vencimiento</label>
                        <input type="number" class="form" id="vencimiento" name="vencimiento" required><br>
                        <span> <br>
                        <input type="radio" id="transferencia" name="pagar" value="">Transferencia bancaria <br>
                        </span>
                        <hr>
                        <label for="numcuenta" class="form-label">Número de cuenta</label>
                        <input type="number" class="form" id="numcuenta" name="numcuenta" required>
                    </div>
                </div>
            </div>
        </div>
        `
        carrito.innerHTML = htmlContentToAppend;
    };



    function validateForm() {
              
        const calle =  document.getElementById("calle")
        const numero = document.getElementById("numero")
        const esquina = document.getElementById("esquina")
        const transferencia = document.getElementById("transferencia")
        const credito = document.getElementById("credito")
        const cantidad = document.getElementById("input")
        const primero = document.getElementById("primero")
        const segundo = document.getElementById("segundo")
        const tercero = document.getElementById("tercero")


        if((!cantidad.value == "") && (!calle.value == "") && (!esquina.value == "")&&(!numero.value == "") && (primero.checked || segundo.checked || tercero.checked) && (transferencia.checked || credito.checked)){
            Swal.fire('Compra realizada con exito')


        }
        if(primero.checked || segundo.checked || tercero.checked){
            tercero.classList.remove("is-invalid");
            tercero.classList.remove("link-danger");
          } else {
            tercero.classList.add("is-invalid");
            tercero.classList.add("link-danger");
          };
       
        if (cantidad.value === "") {
            cantidad.classList.add("is-invalid");
          } else {
            cantidad.classList.remove("is-invalid");
          };

        if (calle.value === "") {
          calle.classList.add("is-invalid");
        } else {
          calle.classList.remove("is-invalid");
        };

        if (esquina.value === "") {
            esquina.classList.add("is-invalid");
        } else {
            esquina.classList.remove("is-invalid");
        };

        if (numero.value === "") {
          numero.classList.add("is-invalid");
        } else {
          numero.classList.remove("is-invalid");
        };

         if(transferencia.checked || credito.checked){
           terms.classList.remove("is-invalid");
           terms.classList.remove("link-danger");
         } else {
           terms.classList.add("is-invalid");
           terms.classList.add("link-danger");
         }
      };

    // Al cargar la pagina

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(CART_INFO_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                cart = resultObj.data;
                showCart(cart);
                costoEnvio(cart.articles[0].unitCost);
            };
            document.getElementById('myForm').addEventListener("submit", function(event) {
                event.preventDefault();
                validateForm();
                document.querySelectorAll("input").forEach((input) => {
                input.onkeyup=() => validateForm()
                if (input.type === "checkbox"){
                  input.onclick=()=>validateForm()
                }
              });
              });
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

    