//Función para listar las empresas que hay en la base de datos

const url = "http://localhost:3000/companies";

let tbody = document.getElementById("tbody");
fetch(url)
.then(response => {
    return response.json()
}).then(data => {
    data.forEach(element => {
        
        const tr = document.getElementById("tr");
        const td = document.getElementById("td")

        tbody.innerHTML += `
                    <tr id="tr">
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.descripcion}</td>
                        <td>${element.founder}</td>
                        <td>${element.logo}</td>
                        <td>
                            <a href="">Detalle</a>
                            <a href="">Eliminar</a>
                            <a href="">Editar</a>
                        </td>
                    </tr>`

    });
})

//Función para agregar empresas a la base de datos
const boton = document.getElementById("button")

boton.addEventListener('click', () => {
    const nombre_empresa = document.getElementById("nombreEmpresa").value;
    const descripcion = document.getElementById("descripcionEmpresa").value;
    const fundador = document.getElementById("founder").value;
    const logo = document.getElementById("logo").value;
    const website = document.getElementById("website").value;
    
    const objeto = {
        name: nombre_empresa,
        descripcion: descripcion,
        founder: fundador,
        logo: logo,
        website: website
    };
    
    fetch("http://localhost:3000/companies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(objeto)
    }).then(response =>{
        return response.json()
    }).then(data => {
        console.log(data);
    
    }).catch(error => console.log('error: ', error));
});


//evento para eliminar registro
const eliminar = document.getElementById("eliminar");
console.log(eliminar);
tbody = document.getElementById("tbody");

eliminar.addEventListener('click', () => {
    fetch("http://localhost:3000/companies", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    }).then(response => {
        return response.json();
    }).then(data => {
        tbody.innerHTML = "";
        alert("Se ha eliminado correctamente")
    });

});
