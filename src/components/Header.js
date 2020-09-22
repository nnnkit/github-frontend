import React from 'react';

function Header() {
  return (
    <header className='header'>
      <nav className='container flex'>
        <a className='logo' href='#'>
          <img src='img/media/altcampus.png' alt='altcampus' />
        </a>

        <label className='bars' for='toggle'>
          <i className='fas fa-bars'></i>
        </label>
        <input id='toggle' className='toggle' type='checkbox' />

        <ul className='nav-menu flex'>
          <li className='nav-item'>
            <a href='#'>portfolio</a>
          </li>
          <li className='nav-item'>
            <a href='#'>about</a>
          </li>
          <li className='nav-item'>
            <a href='#'>contact</a>
          </li>
          <li className='nav-item nav-last-item'>
            <a href='#'>
              more
              <i className='fas fa-chevron-down'></i>
            </a>
            <div className='sub-menu-box'>
              <ul className='sub-menu'>
                <li>
                  <a href='#'>AltCampus</a>
                </li>
                <li>
                  <a href=''>Google</a>
                </li>
                <li>
                  <a href=''>Progrram</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
