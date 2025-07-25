document.addEventListener("DOMContentLoaded", function () {
  // Inicializa EmailJS
  emailjs.init("CQfLOBTxfMiPFbM0y");

  const form = document.getElementById('contact-form');
  const burger = document.getElementById('burgerMenu');
  const navMenu = document.getElementById('menuNav');
  const toggleFormBtn = document.getElementById("toggle-form");
  const formularioBox = document.getElementById("formulario-box");

  // Envío del formulario
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Enviar el formulario al administrador
      emailjs.sendForm('service_hjdrs5n', 'template_6mxa4yr', this)
        .then(function (response) {
          console.log('Correo enviado con éxito al administrador', response);
          mostrarModal();
          form.reset();
        })
        .catch(function (error) {
          console.error('Error al enviar al administrador', error);
          alert('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
        });
    });
  }

  // Botón para mostrar u ocultar el formulario
  if (toggleFormBtn && formularioBox) {
    toggleFormBtn.addEventListener("click", function (e) {
      e.preventDefault();
      formularioBox.classList.toggle("show");
    });
  }

  // Menú hamburguesa
  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
  }
});

function mostrarModal() {
  const modal = document.getElementById("modalExito");
  modal.style.display = "flex";

  // Cierra el modal después de 5 segundos (5000 milisegundos)
  setTimeout(() => {
    cerrarModal();
  }, 5000);
}

function cerrarModal() {
  const modal = document.getElementById("modalExito");
  modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-form');
  const formSection = document.getElementById('formulario-box');

  toggleButton.addEventListener('click', function () {
    const offset = 85; // Espacio extra desde arriba en px
    const topPosition = formSection.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  });
});
