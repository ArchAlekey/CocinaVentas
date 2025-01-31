async function loadHTML(selector, url, callback) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error ${response.status}: No se pudo cargar ${url}`);
        const html = await response.text();
        document.querySelector(selector).innerHTML = html;

        // Ejecutar el callback si está definido
        if (callback && typeof callback === "function") {
            callback();
        }
    } catch (error) {
        console.error(error);
    }
}

// Función para renderizar el menú del día después de cargar el HTML
function renderMenuDia() {
    const contMenuDia = document.querySelector('.contenedor__menuIndividual');
    if (contMenuDia) {
        contMenuDia.innerHTML = `
            <ul>
                <li>Guisado: ${menuDia.guisados.guisado1}</li>
                <li>Entrada: ${menuDia.entradas.entradaArroz}</li>
                <li>Sopa: ${menuDia.entradas.entradaSopas.Sopa1}</li>
                <li>Bebida: ${menuDia.bebidas}</li>
                <li>Postre: ${menuDia.postre}</li>
                
                <li>Precio en cocina: $70</li>
                <li>Precio a domicilio: $80</li>
            </ul>
                <img src="Public/Img/Productos/TortasPollo.jpg" alt="">
                <div class="contenedor__linkWA">
                    <a href="https://wa.me/525626666865?text=Haz%20tu%20pedido%20aqui"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            `;
    } else {
        console.error('El contenedor .contenedor__menuIndividual no está disponible');
    }
}

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    
    currentIndex += step;
    
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 300; // Ancho de cada imagen
    document.querySelector(".carrusel").style.transform = `translateX(${offset}px)`;
}

// Cambio automático cada 3 segundos
setInterval(() => moveSlide(1), 2500);

function renderBebidas(){
    const contMenuBebidas = document.querySelector(".contenedor__menuIndividual")
            if(contMenuBebidas){
                contMenuBebidas.innerHTML = `
        <div class="contenedor__carrusel">
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <div class="carrusel">
                <img src="CocinaVentas/Public/Img/Productos/Bebidas/Cafe.jpg" alt="" class="carousel-slide">
                <img src="../Public/Img/Productos/Bebidas/CafeLeche.jpg" alt="" class="carousel-slide">
                <img src="../Public/Img/Productos/Bebidas/Té.jpg" alt="" class="carousel-slide">
                <img src="../Public/Img/Productos/Bebidas/Frappe.jpg" alt="" class="carousel-slide">
                <img src="../Public/Img/Productos/Bebidas/Jugo.jpg" alt="" class="carousel-slide">
                <img src="../Public/Img/Productos/Bebidas/coca.jpg" alt="" class="carousel-slide">
            </div>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>
        <ul>
            <th>Bebidas</th>
            <li>${Bebidas.bebida1}</li>
            <li>${Bebidas.bebida2}</li>
            <li>${Bebidas.bebida3}</li>
            <li>${Bebidas.bebida4}</li>
        </ul>
        <ul>
            <th>Frappes</th>
            <li>${Bebidas.bebida5.frappe1}</li>
            <li>${Bebidas.bebida5.frappe2}</li>
            <li>${Bebidas.bebida5.frappe3}</li>
            <li>${Bebidas.bebida5.frappe4}</li>
        </ul>
        <ul>
            <th>Jugos</th>
            <li>${Bebidas.bebida6.jugo1}</li>
            <li>${Bebidas.bebida6.jugo2}</li>
            <li>${Bebidas.bebida6.jugo3}</li>
        </ul>
                <div class="contenedor__linkWA">
                    <a href="https://wa.me/525626666865?text=Haz%20tu%20pedido%20aqui"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
                `
            }
}

// Cargar contenido inicial y ejecutar lógica adicional después de cargar
loadHTML('.contenedor__Menu', 'View/MenuDia_FE.html', renderMenuDia);

// Cambiar contenido al hacer clic en los botones
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn__1')) {
        loadHTML('.contenedor__Menu', 'View/MenuDia_FE.html', renderMenuDia);
    } else if (event.target.classList.contains('btn__2')) {
        loadHTML('.contenedor__Menu', 'View/Desayunos_FE.html');
    } else if (event.target.classList.contains('btn__3')) {
        loadHTML('.contenedor__Menu', 'View/Comidas_FE.html');
    } else if (event.target.classList.contains('btn__4')) {
        loadHTML('.contenedor__Menu', 'View/Bebidas_FE.html', renderBebidas);
    }
});

