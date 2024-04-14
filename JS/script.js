$(document).ready(function() {
    $('.sidebar-dropdown-menu').slideUp('fast')
    $('.sidebar-menu-item.has-dropdown > a, .sidebar-dropdown-menu-item.has-dropdown > a').click(function(e) {
        e.preventDefault()

        if(!($(this).parent().hasClass('focused'))) {
            $(this).parent().parent().find('.sidebar-dropdown-menu').slideUp('fast')
            $(this).parent().parent().find('.has-dropdown').removeClass('focused')
        }

        $(this).next().slideToggle('fast')
        $(this).parent().toggleClass('focused')
    })

    $('.sidebar-toggle').click(function(){
        $('.sidebar').toggleClass('collapsed')
        $('.sidebar.collapsed').mouseleave(function() {
            $('.sidebar-dropdown-menu').slideUp('fast')
            $('.sidebar-menu-item.has-dropdown, .sidebar-dropdown-menu-item.has-dropdown').removeClass('focused')
        })
    })
})

const container_contenido = document.getElementById('container_contenido');

const item_menu_index = document.getElementById('item_menu_index');
const item_menu_date = document.getElementById('item_menu_date');
const item_menu_cambio = document.getElementById('item_menu_cambio');
const item_menu_accesos = document.getElementById('item_menu_accesos');
const item_menu_actividad = document.getElementById('item_menu_actividad');
const item_menu_entrada = document.getElementById('item_menu_entrada');
const item_menu_salida = document.getElementById('item_menu_salida');
const item_menu_inventario = document.getElementById('item_menu_inventario');
const item_menu_grafica = document.getElementById('item_menu_grafica');
const item_menu_config = document.getElementById('item_menu_config');


item_menu_index.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('index.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});

item_menu_date.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('date.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});


item_menu_cambio.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('cambio.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});

item_menu_accesos.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('accesos.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});

item_menu_actividad.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('actividad.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});

item_menu_entrada.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('entrada.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});

item_menu_salida.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('salida.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});

item_menu_inventario.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('inventario.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});

item_menu_grafica.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('graficas.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});

item_menu_config.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('config.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
});