# Contenido de la Invitación

## 1. Encabezado
- Nombre del evento:
- Nombre del anfitrión: **Johnatan**
- Imagen o banner principal (opcional): Foto principal en la playa, o una imagen del anfitrión en la playa

## 2. Invitados
- Número de personas invitadas:

## 3. Detalles del Evento
- Fecha: **15 de noviembre del 2025**
- Hora: **A partir de las 4:00 pm**
- Lugar: **Playa Villa Rica, Veracruz**
- Dirección: **Hotel Don Cangrejo, Villa Rica, Veracruz**
- Mapa de ubicación (enlace o embebido):

## 4. Mensaje Personalizado
- Texto de bienvenida o invitación especial:

## 5. Confirmación de Asistencia (RSVP)
- Instrucciones para confirmar asistencia:
- Formulario o enlace para RSVP:

## 6. Agregar al Calendario
- Enlaces para Google Calendar, Outlook, etc.:

## 7. Información Adicional
- Código de vestimenta: **Colores claros y frescos**
- Estacionamiento:
- Notas importantes:
- Itinerario:

## 8. Redes Sociales y Compartir
- Botones o enlaces para compartir en WhatsApp, Facebook, etc.:

---

## Ejemplo de personalización dinámica en la invitación

Puedes personalizar la invitación usando parámetros en la URL para definir el número de invitados y el nombre del destinatario. Ejemplo:

```
https://tusitio.amplifyapp.com/?invitados=3&nombre=Familia%20Gomez
```

- **invitados**: Número de personas invitadas (se mostrará en la sección de invitados)
- **nombre**: Nombre del destinatario (opcional, se puede mostrar en la invitación)

### Fragmento de código JavaScript utilizado:

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

En el HTML, asegúrate de tener:
```html
<span class="invitados-numero anim-text" id="invitados-numero">2</span>
<span id="invitados-nombre"></span>
```

*Agrega aquí cualquier otro elemento que desees incluir en la invitación.* 