import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import CustomToggle from './CustomToggle';

const Header = ({ user }) => {

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
        <ul className='navbar-nav ml-auto'>
          {
            user ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/awd'>Inventario</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/awd'>Facturas</Link>
                </li>
                <li className='nav-item'>
                  <Dropdown className='nav-link hover'>
                    <Dropdown.Toggle as={CustomToggle} id='dropdown-basic'>
                      {user.user.organization}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href='#/action-1'>Cofiguración</Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>Salir</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </>
            ) : (
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/signin'>Inicia sesión</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/signup'>Regístrate</Link>
                </li>
              </ul>
            )
          }
        </ul>
      </div>
    </nav>
  );
};

const mapSateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapSateToProps, null)(Header);
