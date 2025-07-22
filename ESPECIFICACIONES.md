# Especificaciones del Proyecto: Invitación Johnatan

## Objetivo
Desarrollar una invitación digital personalizada para el evento de Johnatan, que sea atractiva, fácil de compartir y accesible desde cualquier dispositivo.

## Requerimientos Funcionales
- Página principal con información del evento (fecha, hora, lugar, etc.).
- Sección para confirmar asistencia (RSVP).
- Mapa de ubicación integrado.
- Opción para agregar el evento al calendario.
- Diseño responsivo (adaptable a móviles y escritorio).
- Posibilidad de compartir la invitación por redes sociales o WhatsApp.

## Requerimientos No Funcionales
- Desempeño óptimo en dispositivos móviles.
- Carga rápida de la página.
- Accesibilidad básica (uso de etiquetas semánticas, contraste adecuado, etc.).
- Fácil de mantener y actualizar.

## Tecnologías Sugeridas
- HTML, CSS, JavaScript (o framework como React/Vue si se requiere mayor interactividad).
- Hosting en Netlify, Vercel, o GitHub Pages.

## Entregables
- Código fuente del proyecto.
- Instrucciones de despliegue.
- Documentación básica de uso y mantenimiento.

---

### Personalización dinámica de la invitación

- La invitación permite personalización dinámica mediante parámetros en la URL:
  - `invitados`: número de personas invitadas (se refleja en la sección de invitados)
  - `nombre`: nombre del destinatario (opcional)
- Ejemplo de URL personalizada:
  - `https://tusitio.amplifyapp.com/?invitados=5&nombre=Familia%20Pérez`
- El sitio detecta estos parámetros y los muestra automáticamente en la invitación.

*Agrega aquí cualquier requerimiento adicional o comentario relevante.* 

---

### Implementación técnica de la personalización dinámica

- Se utiliza JavaScript para leer los parámetros `invitados` y `nombre` de la URL y reflejarlos en la invitación.
- Fragmento de código:

```js
function personalizarInvitacion() {
  const params = new URLSearchParams(window.location.search);
  const invitados = params.get('invitados');
  const nombre = params.get('nombre');
  if (invitados && !isNaN(invitados)) {
    document.getElementById('invitados-numero').textContent = invitados;
  }
  if (nombre) {
    document.getElementById('invitados-nombre').textContent = decodeURIComponent(nombre);
  }
}
personalizarInvitacion();
```

- En el HTML debe existir:
```html
<span class="invitados-numero anim-text" id="invitados-numero">2</span>
<span id="invitados-nombre"></span>
``` 