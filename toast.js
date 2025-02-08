/***************************************
 *
 *          MENU EXPLICATIVO         
 * 1. Definición de elementos
 * 2. Barra de progreso
 * 3. Cerrar Toast
 * 4. Mensaje del Toast
 * 5. Alternar tema
 *
 * © DioverDM - DIOVERDM.COM
 * 
 **************************************/

/***************************************
 * 1. Definición de elementos
***************************************/
const toast = document.getElementById('toast');
const toast2 = document.getElementById('toast2');
const toast3 = document.getElementById('toast3');
const progressBar = document.querySelector('.toast__progress.success');
const progressBar2 = document.querySelector('.toast__progress.info');
const progressBar3 = document.querySelector('.toast__progress.warnning');
const closeButton = document.querySelector('.toast__close');
const closeButton2 = document.querySelector('.toast__close2');
const closeButton3 = document.querySelector('.toast__close3');

function showToast(message) {
  toast.querySelector('.toast__message').textContent = message;
  toast2.querySelector('.toast__message').textContent = message;
  toast3.querySelector('.toast__message').textContent = message;
  toast.classList.add('show');
  toast2.classList.add('show');
  toast3.classList.add('show');

/***************************************
 * 2. Barra de progreso
***************************************/
  let width = 0;
  const interval = setInterval(() => {
    width++;
    progressBar.style.width = width + '%';
    progressBar2.style.width = width + '%';
    progressBar3.style.width = width + '%';
    if (width >= 96) {
      clearInterval(interval);
      setTimeout(() => {
        toast.classList.remove('show');
        toast2.classList.remove('show');
        toast3.classList.remove('show');
      }, 500); // Espera medio segundo antes de ocultar el toast
    }
  }, 50); // Aumenta el ancho cada 50 milisegundos (ajusta la velocidad aquí, recomendado: 50)
}

/***************************************
 * 1. Cerrar Toast
***************************************/
closeButton.addEventListener('click', () => {
  toast.classList.remove('show');
});

closeButton2.addEventListener('click', () => {
  toast2.classList.remove('show');
});

closeButton3.addEventListener('click', () => {
  toast3.classList.remove('show');
});

/***************************************
 * 4. Mensaje del Toast
***************************************/
// Ejemplo de uso:
showToast('Notificacion de prueba...');

/***************************************
 * 5. Alternar tema
***************************************/
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme__toggle');
    const themeIcon = themeToggle.querySelector('p');

    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌕';
        
        localStorage.setItem('theme', newTheme);
    });
});
