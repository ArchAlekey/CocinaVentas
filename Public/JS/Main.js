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
    const contMenu = document.querySelector('.contenedor__menuIndividual');
    if (contMenu) {
        contMenu.innerHTML = `
            <ul>
                <li>Guisado: ${menuDia.guisados.guisado1}</li>
                <li>Entrada: ${menuDia.entradas.entradaArroz}</li>
                <li>Sopa: ${menuDia.entradas.entradaSopas.Sopa1}</li>
                <li>Bebida: ${menuDia.bebidas}</li>
                <li>Postre: ${menuDia.postre}</li>
                <img src="${menuDia.imagenMenu.TortasPollo}" alt="">
                <li>Precio en cocina: $70</li>
                <li>Precio a domicilio: $80</li>
                <div class="contenedor__linkWA">
                    <a href="https://wa.me/525626666865?text=Haz%20tu%20pedido%20aqui"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </ul>
            `;
    } else {
        console.error('El contenedor .contenedor__menuIndividual no está disponible');
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
        loadHTML('.contenedor__Menu', 'View/Bebidas_FE.html');
    }
});

