export default () => {
    const pintarHeader = `  <header>
    <nav>
      <ul>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#/Registro">Registro</a>
        </li>
        <li>
          <a href="#/Login">Login</a>
        </li>
      </ul>
    </nav>
  </header>`;
    // return pintar;
  
    const div = document.createElement('div');
    div.innerHTML = pintarHeader;
    return div;
  };