let productsInfo = [];
let comentarios = [];

function relatedProds (prod) {
    localStorage.setItem("prodID",prod);
    window.location = "product-info.html";
};

//Funcion que muestra información acerca del producto
function showData (data) {
let info = document.getElementById('product_information');
htmlContentToAppend = "";
htmlContentToAppend += 
    `<h2>` + data.name + `</h2>
    <div class="divmargin">
    <br><h6>Precio</h4>` + data.cost + 
    `<br> <br> <h6>Descripción</h6> ` + data.description + 
    `<br> <br> <h6>Categoría</h6> ` + data.category + 
    `<br> <br> <h6>Cantidad de vendidos</h6> ` + data.soldCount + 
    `<br> <br> <h6>Imágenes ilustrativas</h6>
    </div>`;
for(let i = 0; i < data.images.length; i++){ 
    let imagen = data.images[i];
    htmlContentToAppend += `<img src="` + imagen + `" alt="product image" class="imag">`;
}
info.innerHTML = htmlContentToAppend;
};

function mostrarRelatedProducts (data){
    let relatedProds = document.getElementById('relatedProducts');

    for (let i = 0; i < data.relatedProducts.length; i++) {
        relatedProds.innerHTML += `
        <div onclick="relatedProds(${data.relatedProducts[i].id})" class="divmargin">
            <img src="` + data.relatedProducts[i].image + `" alt="product image" class="imag">
            <p>${data.relatedProducts[i].name}</p>
        </div>
    `
    }
}

function mostrarComentarios (comentarios) {
let info =  document.getElementById('comentarios');
htmlContentToAppend = "";
htmlContentToAppend +=     
`<h2> Comentarios </h2>`;
for(let i = 0; i < comentarios.length; i++){
    let comentario = comentarios[i];
    htmlContentToAppend += `<div class="divmargin2">
                            <p class="fuerte">`+ comentario.user + 
                                ` <span class="normal">` + comentario.dateTime + `<span> 
                            </p> 
                            <p>` + mostrarEstrellas(comentario) + `</p>
                            <p>` + comentario.description + `</p> 
                            </div>`
                            estrella = '';

}

info.innerHTML = htmlContentToAppend;

};

function mostrarEstrellas (comentarios){
    let estrella = "";
    for(let i = 1; i <= 5; i++) {
        if (i<=comentarios.score){
        estrella += '<span class="fas fa-star checked">'
        }else{
            estrella += '<span class="far fa-star"></span>'
        }
    }
        return estrella
};

    // Al cargar la pagina

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsInfo = resultObj.data;
            showData(productsInfo);
            mostrarRelatedProducts(productsInfo);
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comentarios = resultObj.data;
            mostrarComentarios(comentarios);
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