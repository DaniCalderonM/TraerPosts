// Al pulsar sobre un botón, realizaremos la llamada a la API y mostraremos los datos de los
// post obtenidos.
// Requerimientos
// 1. Realizar un request (consulta) a la API usando async-await.
// 2. Mostrar el resultado del request en HTML (utilizar listas desordenadas para mostrar
// cada uno de los post).
// 3. Manejar los posibles errores con try-catch.

//Creamos las variables btnCall y contenedorPosts
//que nos comunicaran con nuestro html mediante el id
const btnCall = document.getElementById("button");
const contenedorPosts = document.getElementById("post-data");
//Creamos la funcion asincrona que nos servira para conectarnos
//con la Api mediante su url.
const getDatos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        console.log("Response: ", response);
        //Si el response.estatus es distinto a 404, 
        //realizamos la ejecucion de nuestro programa
        if (response.status !== 404) {
            const datos = await response.json();
            //Mostrar los títulos y body ->
            //Creamos la variable ul a la cual le asignamos 
            //un 'ul'
            const ul = document.createElement('ul');
            //Mediante un forEach recorremos el arreglo de objetos
            datos.forEach(dato => {
                //Añadimos los elementos li con su contenido dentro de la 'ul'
                ul.innerHTML += `<li><p><b>${dato.title}</b></p><p>${dato.body}</p></li>`;
            });
            //Agregamos la ul al contenedorPosts con appendChild
            contenedorPosts.appendChild(ul);
        //Si el response.status es igual a 404, enviamos un
        //mensaje con el error
        } else {
            throw new Error('404!!!')
        }
    } catch (err) {
        alert(err);
    }
}

//Creamos la funcion con el evento click para que al presionar el boton
//nos traiga los posts de la Api
btnCall.addEventListener("click", function (e) {
    e.preventDefault();
    getDatos();
});
