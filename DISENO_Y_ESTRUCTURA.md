# Diseño y Estructura de la Invitación

## 1. Estructura General
- Secciones principales de la invitación (ejemplo: portada, detalles, RSVP, etc.)
- Orden de aparición de los elementos

## 2. Paleta de Colores
- Colores principales:
  - **#FAF7F3** (fondo principal)
  - **#F0E4D3** (fondo/acento)
  - **#DCC5B2** (acento)
  - **#D9A299** (acento/detalles)

- Colores secundarios:
- Colores de acento:

## 3. Tipografía
- Tipografía principal:
- Tipografía secundaria:
- Tamaños y estilos sugeridos:

## 4. Imágenes y Elementos Visuales
- Banner o imagen principal:
- Iconos o ilustraciones:
- Estilo de las imágenes (realistas, ilustradas, minimalistas, etc.):
- **Nota:** Todas las imágenes y recursos visuales deben guardarse en la carpeta `imagenes/` ubicada en la raíz del proyecto.

## 5. Referencias de Diseño
- Enlaces a invitaciones que sirvan de inspiración:
- Notas sobre el estilo deseado (moderno, elegante, tropical, etc.):

## 6. Diseño Responsivo
- Consideraciones para móviles y escritorio:

---

### Personalización visual dinámica

- El diseño permite mostrar el número de invitados y el nombre del destinatario de forma personalizada usando parámetros en la URL.
- Ejemplo: `https://tusitio.amplifyapp.com/?invitados=3&nombre=Familia%20Gomez`
- El número de invitados y el nombre se reflejan automáticamente en la sección correspondiente de la invitación.

*Agrega aquí cualquier otra referencia o idea visual que quieras considerar para el diseño de la invitación.* 

---

### Ejemplo visual y código para personalización dinámica

- El diseño permite mostrar el número de invitados y el nombre del destinatario usando parámetros en la URL.
- Ejemplo de URL: `https://tusitio.amplifyapp.com/?invitados=3&nombre=Familia%20Gomez`
- Fragmento de código JavaScript:

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