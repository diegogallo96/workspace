//array donde se cargarán los datos recibidos:
let productsArray = [];
let minPrice = undefined;
let maxPrice = undefined;
const ORDER_ASC_BY_PRICE = "AZ";
const ORDER_DESC_BY_PRICE = "ZA";
const ORDER_BY_PROD_SELLS = "";
let currentProductsArray = [];
let currentSortCriteria = undefined;

//Funcion que muestra el subtitulo con la categoría correspondiente
function showSubtitle(array){
document.getElementById("producto").innerHTML += "Verás aquí todos los productos de la categoría " + array.catName;
};

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showProductsList(array){
let htmlContentToAppend = "";
 
for(let i = 0; i < array.length; i++){ 
        let product = array[i];

        if (((minPrice == undefined) || (minPrice != undefined && parseInt(product.cost) >= minPrice)) &&
        ((maxPrice == undefined) || (maxPrice != undefined && parseInt(product.cost) <= maxPrice))){

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                            <h4>`+ product.name + " - " + product.currency + " " + product.cost +`</h4> 
                            <p> `+ product.description +`</p> 
                        </div>
                        <small class="text-muted">` + product.soldCount + ` artículos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
        }
        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend; 
    }  
}


function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort((a, b)=> {
            return a.cost - b.cost;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE)
    {
        result = array.sort((a,b)=> {
            return b.cost - a.cost;
        });
    }else if (criteria === ORDER_BY_PROD_SELLS)
    {
        result = array.sort((a,b)=> {
            return b.soldCount - a.soldCount;
        });
    }

    return result;
}

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray.products;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    //Muestro los productos ordenadas
    showProductsList(currentProductsArray);
}

/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en categoriesArray.
-Por último, se llama a showCategoriesList() pasándole por parámetro categoriesArray.

*/


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            showProductsList(productsArray.products);
            showSubtitle(productsArray);
        }
    });

//Ordenar parámetros

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_PRICE, productsArray);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_PRICE);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_SELLS);
    });


    //Limpia parametros del filtrado

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterPriceMin").value = "";
        document.getElementById("rangeFilterPriceMax").value = "";

        minPrice = undefined;
        maxPrice = undefined;

        showProductsList(productsArray.products);
    });

// Filtra

    document.getElementById("rangeFilterPrice").addEventListener("click", function(){

        minPrice = document.getElementById("rangeFilterPriceMin").value;
        maxPrice = document.getElementById("rangeFilterPriceMax").value;


        showProductsList(productsArray.products);
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