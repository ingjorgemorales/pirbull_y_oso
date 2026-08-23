# Landing romántica

Landing page estática, romántica e interactiva hecha con HTML, CSS y JavaScript Vanilla. Funciona abriendo `index.html` y también está lista para publicarse en GitHub Pages.

## Estructura

```text
/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── images/
│   ├── foto-01.jpeg
│   ├── foto-02.jpeg
│   ├── foto-03.jpeg
│   └── ...
├── audio/
│   └── nuestra-cancion.mp3
└── favicon/
    └── favicon.svg
```

## 1. Cómo reemplazar las fotografías

Reemplaza los archivos dentro de `images/` manteniendo los mismos nombres:

- `foto-01.jpeg`: foto principal de la portada.
- `foto-02.jpeg`: foto de la sección "Cómo empezó todo".
- `foto-03.jpeg` a `foto-26.jpeg`: fotos para línea de tiempo, galería, momentos especiales y cierre.
- `preview.jpg`: imagen que se mostrará al compartir el enlace por WhatsApp u otras redes.

Puedes usar JPG o WebP, pero si cambias la extensión también debes actualizar las rutas en `index.html` y `js/app.js`.

## 2. Cómo cambiar los nombres

Abre `js/app.js` y edita el bloque inicial:

```javascript
const CONFIG = {
  nombreElla: "mi Pirbull",
  nombreMio: "Oso",
  fechaInicioRelacion: "2024-07-24",
  cancion: "audio/nuestra-cancion.mp3"
};
```

Cambia `mi Pirbull` y `Oso` si quieres ajustar los nombres de cariño que se muestran en la página.

## 3. Cómo cambiar las frases

En `js/app.js` puedes editar estos arrays:

- `recuerdosTimeline`: momentos de la línea de tiempo. Están escritos sin fechas exactas.
- `galeriaRecuerdos`: fotos y frases de la galería Polaroid.
- `momentosEspeciales`: bloques grandes de foto y texto.
- `razones`: tarjetas de "10 razones por las que te amo".
- `mensajesCuandoMeExtranes`: frases aleatorias del botón "Cuando me extrañes".
- `mensajesSecretos`: mensajes escondidos en corazones pequeños.

## 4. Cómo configurar la fecha de la relación

En `js/app.js`, cambia:

```javascript
fechaInicioRelacion: "2024-01-01"
```

Usa el formato `AAAA-MM-DD`, por ejemplo:

```javascript
fechaInicioRelacion: "2024-05-20"
```

El contador se actualiza automáticamente.

## 5. Cómo poner la canción

Coloca tu archivo de música en:

```text
audio/nuestra-cancion.mp3
```

El navegador no reproducirá la música automáticamente. La reproducción se habilita después de que la persona interactúa con la página.

Si quieres usar otro nombre de archivo, actualiza esta línea en `js/app.js`:

```javascript
cancion: "audio/nuestra-cancion.mp3"
```

## 6. Cómo probarlo localmente

Opción simple:

1. Abre `index.html` con doble clic.
2. Revisa la página en celular usando la vista responsive del navegador.

Opción con servidor local:

```bash
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000/
```

## 7. Cómo publicarlo en GitHub Pages

Sube el proyecto a GitHub y luego entra al repositorio:

```text
Settings
→ Pages
→ Deploy from a branch
→ main
→ /root
→ Save
```

Después de unos minutos, quedará disponible aproximadamente en:

```text
https://usuario.github.io/nombre-repositorio/
```

## Notas importantes

- Todas las rutas son relativas, por ejemplo `images/foto-01.jpeg`, para que funcionen dentro de un subdirectorio de GitHub Pages.
- La música tiene un control flotante para reproducir, pausar y ajustar volumen.
- La página respeta `prefers-reduced-motion` para usuarios que prefieren menos animación.
- Las imágenes que no están en la portada usan `loading="lazy"`.
- El contenido ya está personalizado para Pirbull y Oso, y puedes seguir editándolo desde `js/app.js` e `index.html`.
