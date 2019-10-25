import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        <h1 className='bold text-primary m-0'>Pointlify</h1>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/awd'>Inventario</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/wad'>Reportes</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/awd'>Facturas</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/awd'>Organización</Link>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>Inicia sesión</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
