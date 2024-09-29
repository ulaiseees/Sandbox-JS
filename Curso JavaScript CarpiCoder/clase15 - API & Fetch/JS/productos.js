const listaProductos = document.querySelector("#lista-productos")    
    
    fetch("./JS/productos.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(producto => {
                const li = document.createElement("li")
                li.innerText = producto.nombre + " - $" + producto.precio
                listaProductos.append(li)
            });
        })