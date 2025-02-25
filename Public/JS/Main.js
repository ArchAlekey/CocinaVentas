/*     const btn__Home = document.querySelector('.btn__home    ');

    btn__Home.addEventListener('click', function(){
        window.location.href = "../index.html";
    });

    const btnOpciones = document.querySelectorAll('.btn__opciones');
    const btnMD = btnOpciones[0];
    const btnDes = btnOpciones[1];
    const btnCom = btnOpciones[2];
    const btnBeb = btnOpciones[3];

    btnMD.addEventListener('click', function(){
        window.location.href = "View/MenuDia_FE.html";
    });
 */
/*     document.addEventListener("DOMContentLoaded", function () {
        // Botón de Home (No existe en index.html, por eso lo verificamos antes)
        const btnHome = document.querySelector(".btn__home");
        if (btnHome) {
            btnHome.addEventListener("click", function () {
                window.location.href = "../index.html";
            });
        }
    
        // Botones de navegación (Están en todas las vistas)
        const btnOpciones = document.querySelectorAll(".btn__opciones");
        const paginas = ["/view/MenuDia_FE.html", "/view/Desayunos_FE.html", "/view/Comidas_FE.html", "/view/Bebidas_FE.html"];
    
        btnOpciones.forEach((boton, index) => {
            boton.addEventListener("click", function () {
                if (index < paginas.length) {
                    window.location.href = paginas[index];
                }
            });
        });
    }); */
    document.addEventListener("DOMContentLoaded", function () {
        // Botón de Home (redirige siempre al index)
        const btnHome = document.querySelector(".btn__home");
        if (btnHome) {
            btnHome.addEventListener("click", function () {
                window.location.href = "/index.html"; // <-- Ruta absoluta
            });
        }
    
        // Botones de navegación (están en todas las vistas)
        const btnOpciones = document.querySelectorAll(".btn__opciones");
        const paginas = ["/view/MenuDia_FE.html", "/view/Desayunos_FE.html", "/view/Comidas_FE.html", "/view/Bebidas_FE.html"]; // <-- Rutas absolutas
    
        btnOpciones.forEach((boton, index) => {
            boton.addEventListener("click", function () {
                if (index < paginas.length) {
                    window.location.href = paginas[index]; // <-- Ahora siempre apunta a la raíz
                }
            });
        });
    });
    