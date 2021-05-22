export default () => {
    const pintarRegistro = `    
      <form id="formRegistro" name="formResgistro" method="post" action="formRegistro.php" onsubmit="return validarRegistro();">
      Nombre Completo: <input type="text" id="txt1" name="txt1" />
      email: <input type="text" id="txt2" name="txt2" />
      Contraseña: <input type="text" id="txt3" name="txt3" />
      <input type="submit" id="btnRegistrar" name="btnRegistrar" value="Regístrate" />
  </form>`;
      // return pintarRegistro;
    const form = document.createElement('form');
    form.innerHTML = pintarRegistro;
    return form;
  };