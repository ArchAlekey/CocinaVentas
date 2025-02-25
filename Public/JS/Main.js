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

    document.addEventListener("DOMContentLoaded", function () {
        // Botón de Home (No existe en index.html, por eso lo verificamos antes)
        const btnHome = document.querySelector(".btn__home");
        if (btnHome) {
            btnHome.addEventListener("click", function () {
                window.location.href = "/index.html";
            });
        }
    
        // Botones de navegación (Están en todas las vistas)
        const btnOpciones = document.querySelectorAll(".btn__opciones");
        const paginas = ["../View/MenuDia_FE.html", "../View/Desayunos_FE.html", "../View/Comidas_FE.html", "../View/Bebidas_FE.html"];
    
        btnOpciones.forEach((boton, index) => {
            boton.addEventListener("click", function () {
                if (index < paginas.length) {
                    window.location.href = paginas[index];
                }
            });
        });
    });
    