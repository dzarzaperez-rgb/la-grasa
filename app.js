
const main = document.getElementById("main-1")


const carrito = []

const P1 = {
    name: "esquite perro",
    precio: 50,
    desc: "esquite con sal y limón",
    img: "esquite.jpg"
}

const P2 = {
    name: "elote perro",
    precio: 75,
    desc: "elote preparado con chile, mayonesa y queso",
    img: "elote.png"
}

const lista = [P1, P2]

// agregar producto al carrito
function agregarAlCarrito(index) {
    const producto = lista[index]
    carrito.push(producto)
    mostrarCarrito()
}

// mostrar carrito pantalla
function mostrarCarrito() {
    const carritoDiv = document.getElementById("carrito")
    
    if (carrito.length === 0) {
        carritoDiv.innerHTML = "<p>El carrito está vacío</p>"
        return
    }

    let total = 0
    let html = "<h2>🛒 Carrito</h2>"

    carrito.forEach((item, i) => {
        total += item.precio
        html += `
            <div class="carrito-item">
                <img src="${item.img}" alt="${item.name}" width="60">
                <span>${item.name}</span>
                <span>$${item.precio}</span>
                <button onclick="eliminarDelCarrito(${i})">❌</button>
            </div>`
    })

    html += `<p><strong>Total: $${total}</strong></p>`
    carritoDiv.innerHTML = html
}

// eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1)
    mostrarCarrito()
}

// imprimir productos
function printprodcuto(producto, index) {
    main.innerHTML += `
        <div class="product-card">
            <img src="${producto.img}" alt="${producto.name}">
            <p>${producto.name}</p>
            <p>${producto.desc}</p>
            <p>$${producto.precio}</p>
            <button type="button" onclick="agregarAlCarrito(${index})">
                Agregar al carrito
            </button>
        </div>`
}

lista.forEach((producto, index) => printprodcuto(producto, index))

// Inicializar carrito vacío
mostrarCarrito()