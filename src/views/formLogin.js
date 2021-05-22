export default () => {
    const pintarLogin = `  
      <form id="formLogin" name="formLogin" method="post" action="formLogin.php" onsubmit="return validarLogin();">
      email: <input type="text" id="txt1" name="txt1" />
      Contraseña: <input type="text" id="txt2" name="txt2" />
      <input type="submit" id="btnIniciarSesion" name="btnIniciarSesion" value="iniciar sesion" />
  </form>`;
      // return pintarLogin;
  
    const form = document.createElement('form');
    form.innerHTML = pintarLogin;
   return form;
  };
    