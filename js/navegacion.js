var flag = 0, flagAnt = -1, width = dimWindow();

// Agrego el HTML de la barra de navegación al abrir la pagina web. 
selectMenuStyle ();

$(window).resize(function() {
    // Modificamos el HTML según el tamaño de la ventana del navegador de internet.
    width = dimWindow ();
    selectMenuStyle ();
});

// Función para cambio de menu responsive.
function selectMenuStyle () {
    const  navegacion = document.querySelector ("#bar-nav");

    if (width[0] < 768) 
        flag = 0;
    else
        flag = 1;
    
    if (flag === flagAnt)
        return;
    
    switch (flag)
    {
        case 0:
        var html =  '<div class="d-flex sup-bar">';
            html += '<a href="index.html">';
            html += '<img id="nav-logo" src="img/logotipo.png" alt="logotipo de la empresa">';
            html += '</a>';
            html += '<div class="d-flex">';
            html += '<div class="hamburger hamburger--emphatic">';
            html += '<div class="hamburger-box">';
            html += '<div class="hamburger-inner"></div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '<nav>';
            html += '<ul>';
            html += '<li><a href="nosotros.html">Nosotros</a></li>';
            html += '<li><a href="servicios.html">Servicios</a></li>';
            html += '<li><a href="cliente.html">Clientes</a></li>';
            html += '<li><a href="contacto.html">Contacto</a></li>';
            html += '</ul>';
            html += '</nav>';

            navegacion.innerHTML = html;

            const hamburger = document.querySelector (".hamburger");

            // Evento del click sobre el hamburger.
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
                moveMenu ();
            });

            break;

        case 1:
            html = '<nav>';
            html += '<ul>';
            html += '<li><a href="nosotros.html">Nosotros</a></li>';
            html += '<li><a href="servicios.html">Servicios</a></li>';
            html += '</ul>';
            html += '</nav>';
            html += '<a href="index.html">';
            html += '<img id="nav-logo" src="img/logotipo.png" alt="logotipo de la empresa">';
            html += '</a>';
            html += '<nav>';
            html += '<ul>';
            html += '<li><a href="cliente.html">Clientes</a></li>';
            html += '<li><a href="contacto.html">Contacto</a></li>';
            html += '</ul>';
            html += '</nav>';

            navegacion.innerHTML = html;
            break;
    }
    
    flagAnt = flag;
}

// Función que devuelve el tamaño del navegador de internet.
function dimWindow () {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined') {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    return tam;
}

// Función de apertura y cierre de menu.
function moveMenu () {
    let menu = document.querySelector ("nav");

    if (menu.style.top != '6.5rem' || menu.style.top === '')
        menu.style.top = "6.5rem";
    else
        menu.style.top = "-100vh";
}