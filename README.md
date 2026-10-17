# Electricista Sur — vista previa estática

Réplica estática original de la portada pública de Electricista Sur y de su ruta de contacto. No usa WordPress, bibliotecas ni backend. Los archivos comerciales de imagen se guardan localmente en `assets/`.

## Estructura

- `index.html`: portada.
- `electricista-quilmes/electricista-cerca-de-mi-casa/index.html`: formulario visual, datos de contacto y horario.
- `assets/styles.css`, `assets/site.js`: estilos adaptables y navegación/formulario.
- `assets/`: logotipo, iconos de servicio y fotografías autorizadas.

La ruta de contacto conserva el slug público y todos los enlaces internos usan la base `/electricista-sur-preview/` de GitHub Pages.

## Contacto

El formulario no transmite datos a un servidor: al enviarlo, prepara un mensaje de WhatsApp para que la persona lo revise y decida si lo envía. El sitio no inicia mensajes por sí mismo.

## Publicación

Sitio estático publicado desde la rama `main` con GitHub Pages. Para vista local, sirve esta carpeta con cualquier servidor estático existente; no requiere instalar dependencias.
