# Toast Notifications | By dioverdm.com

Este repositorio contiene un conjunto de toast notifications personalizables y fáciles de integrar en cualquier proyecto web. Las notificaciones están diseñadas para ser visualmente atractivas, con soporte para temas claros y oscuros, y una barra de progreso animada.

## Características

- **Temas personalizables**: Soporte para temas claros y oscuros.
- **Barra de progreso animada**: Muestra el tiempo restante de la notificación.
- **Tipos de notificaciones**: Éxito, Información y Advertencia.
- **Fácil de integrar**: Solo necesitas incluir los archivos CSS y JavaScript.
- **Responsivo**: Diseño adaptable a cualquier dispositivo.

## Instalación

Para usar estas toast notifications en tu proyecto, sigue estos pasos:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/dioverdm/toast-notifications.git
   ```
2. Copia los archivos `toast.css` y `toast.js` en tu proyecto.
3. Incluye los archivos CSS y JavaScript en tu archivo HTML:
   ```html
   <link rel="stylesheet" href="ruta/al/archivo/toast.css">
   <script src="ruta/al/archivo/toast.js"></script>
   ```

## Uso

Para mostrar una toast notification, simplemente llama a la función `showToast` con el mensaje deseado:

```javascript
showToast('¡Operación exitosa!');
```

### Personalización

Puedes personalizar el tipo de notificación y otros aspectos directamente en el código JavaScript. Aquí tienes un ejemplo de cómo modificar el tipo de notificación:

```javascript
toast.classList.add('toast__success'); // Para notificaciones de éxito
toast2.classList.add('toast__info');   // Para notificaciones de información
toast3.classList.add('toast__warnning'); // Para notificaciones de advertencia
```

### Cambiar entre temas claro y oscuro

El proyecto incluye soporte para temas claros y oscuros. Puedes alternar entre ellos haciendo clic en el ícono de tema en la esquina superior derecha.

```javascript
document.documentElement.setAttribute('data-theme', 'light'); // Tema claro
document.documentElement.setAttribute('data-theme', 'dark');  // Tema oscuro
```

## Estructura del Proyecto

- **toast.css**: Contiene todos los estilos necesarios para las notificaciones.
- **toast.js**: Contiene la lógica para mostrar y ocultar las notificaciones, así como la barra de progreso.
- **index.html**: Ejemplo de cómo integrar las notificaciones en un proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de mis redes sociales o abrir un issue en este repositorio.

Redes sociales:
- [Threads](https://threads.net/@dioverdm)
- [Instagram](https://instagram.com/dioverdm)
- [Dioverdm.com](https://dioverdm.com)
- [hola@dioverdm.com](mailto:hola@dioverdm.com)

---

¡Esperamos que estas toast notifications sean útiles para tus proyectos! Si te gusta este repositorio, no olvides darle una ⭐️.
