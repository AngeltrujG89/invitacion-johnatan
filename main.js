// main.js

// Animación simple al hacer scroll: muestra las secciones al entrar en pantalla
document.addEventListener('DOMContentLoaded', () => {
  const secciones = document.querySelectorAll('.seccion');
  const textos = document.querySelectorAll('.anim-text');

  const mostrarElementos = () => {
    const triggerBottom = window.innerHeight * 0.85;
    const triggerTop = window.innerHeight * 0.15;

    secciones.forEach(sec => {
      const boxTop = sec.getBoundingClientRect().top;
      const boxBottom = sec.getBoundingClientRect().bottom;
      // Si cualquier parte de la sección está en el viewport, mostrarla
      if (boxTop < triggerBottom && boxBottom > triggerTop) {
        sec.classList.add('visible');
      } else {
        sec.classList.remove('visible');
      }
    });

    textos.forEach(txt => {
      const txtTop = txt.getBoundingClientRect().top;
      const txtBottom = txt.getBoundingClientRect().bottom;
      // Si cualquier parte del texto está en el viewport, mostrarlo
      if (txtTop < triggerBottom && txtBottom > triggerTop) {
        txt.classList.add('visible');
      } else {
        txt.classList.remove('visible');
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
  
  // Cambiar número de invitados según parámetro de la URL (Base64)
  const urlParams = new URLSearchParams(window.location.search);
  const invitadosParam = urlParams.get('g');
  let invitadosValue = 'null';
  if (invitadosParam) {
    let decoded = '';
    try {
      decoded = atob(invitadosParam);
    } catch (e) {
      decoded = '';
    }
    if (/^\d+$/.test(decoded)) {
      invitadosValue = decoded;
    }
  }
  document.querySelectorAll('.invitados-numero').forEach(el => {
    el.textContent = invitadosValue;
  });

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

  // Modal Confirmar Asistencia
  const abrirModalBtn = document.getElementById('abrir-modal-confirmacion');
  const modal = document.getElementById('modal-confirmacion');
  const cerrarModalBtn = document.getElementById('cerrar-modal-confirmacion');
  const formConfirmacion = document.getElementById('form-confirmacion');

  if (abrirModalBtn && modal && cerrarModalBtn && formConfirmacion) {
    abrirModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
    });
    cerrarModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
    formConfirmacion.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
      // Número de WhatsApp destino actualizado
      const numeroDestino = '522281144559';
      const mensaje = `Hola, soy ${nombre}, confirmo mi asistencia a la invitación de Johnatan. Mi teléfono es: ${telefono}`;
      const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
      modal.style.display = 'none';
      formConfirmacion.reset();
    });
  }
}); 