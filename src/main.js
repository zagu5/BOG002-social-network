
import { router } from './router/index.routers.js';
// Evento que escuche cada vez que la ventana del navegador cambia el hash
window.addEventListener('hashchange', () => {
// console.log(window.location.hash) // window.location -> me da la url actual
  router(window.location.hash);
});
router(window.location.hash);
