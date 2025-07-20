// main.js

// Animación simple al hacer scroll: muestra las secciones al entrar en pantalla
document.addEventListener('DOMContentLoaded', () => {
  const secciones = document.querySelectorAll('.seccion');
  const textos = document.querySelectorAll('.anim-text');

  const mostrarElementos = () => {
    const triggerBottom = window.innerHeight * 0.85;

    secciones.forEach(sec => {
      const boxTop = sec.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        sec.classList.add('visible');
      }
    });

    textos.forEach(txt => {
      const txtTop = txt.getBoundingClientRect().top;
      if (txtTop < triggerBottom) {
        txt.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', mostrarElementos);
  mostrarElementos();

  // Animación de entrada solo al cargar para el encabezado
  const numero = document.querySelector('.titulo-40 .numero');
  const nombre = document.querySelector('.titulo-40 .nombre');
  const subtitulo = document.querySelector('.titulo-40 .subtitulo-script');

  if (numero) numero.classList.add('animar-entrada');
  if (nombre) nombre.classList.add('animar-entrada');
  if (subtitulo) subtitulo.classList.add('animar-entrada');

  // Animar invitados al cargar
  const invitadosLabels = document.querySelectorAll('.invitados-titulo .invitados-label');
  const invitadosNumero = document.querySelector('.invitados-titulo .invitados-numero');

  if (invitadosLabels[0]) invitadosLabels[0].classList.add('animar-entrada');
  if (invitadosNumero) invitadosNumero.classList.add('animar-entrada');
  if (invitadosLabels[1]) invitadosLabels[1].classList.add('animar-entrada');
  
  // Contador regresivo
  function actualizarContador() {
    const fechaEvento = new Date('November 15, 2025 16:00:00').getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;
    
    if (diferencia > 0) {
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
      
      document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
      document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
      document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
      document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
    } else {
      document.getElementById('dias').textContent = '00';
      document.getElementById('horas').textContent = '00';
      document.getElementById('minutos').textContent = '00';
      document.getElementById('segundos').textContent = '00';
    }
  }
  
  // Actualizar contador cada segundo
  actualizarContador();
  setInterval(actualizarContador, 1000);
}); 