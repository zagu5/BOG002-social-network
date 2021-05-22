import Home from '../views/home.js';
import header from '../views/header.js';
import formRegistro from '../views/formRegistro.js';
import formLogin from '../views/formLogin.js';

// creacion de elemento que quiero que me pinte

document.body.appendChild(header());
// Funcion que recibe los # hash, route->ruta
const router = (route) => {
  const content = document.getElementById('root'); 
  content.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/': {
      //  console.log('home');
      const nodo = Home();
      //   console.log(nodo);
      //  console.log(content);
      content.appendChild(nodo); // paso el string
      break;
    }
    case '':
      const nodo = Home();
      content.appendChild(nodo);
      console.log('vacio')
      // content.appendChild(Home());  
      break;
    // return console.log('Este es el home');
    case '#/Registro':
      content.appendChild(formRegistro());
      // console.log('Has parte del universo Marvel');
      break;
    case '#/Login':
      content.appendChild(formLogin());
      // console.log('Logueate aquí');
      break;
    default:
      console.log('Error 404');
      break;
  } 
};
export { router };