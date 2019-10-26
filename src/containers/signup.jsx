import React, { useState } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import '../assets/styles/Login.scss';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='container mt-5'>
      <div className='card auth-card'>
        <div className='card-body'>
          <h1 className='text-center'>Regístrate</h1>

          <button type='button' className='btn btn-twitter btn-block'>
            <FaTwitter className='mr-2' />
          Inicia sesión con Twitter
          </button>

          <button type='button' className='btn btn-facebook btn-block'>
            <FaFacebookF className='mr-2' />
          Inicia sesión con Facebook
          </button>

          <form onSubmit={handleSumbit}>
            <p className='text-center mt-3'>o</p>
            <div className='form-group'>
              <input
                name='email'
                onChange={handleInput}
                type='email'
                className='form-control'
                aria-describedby='correo'
                placeholder='Correo electrónico'
              />
            </div>
            <div className='form-group'>
              <input
                name='password'
                onChange={handleInput}
                type='password'
                className='form-control'
                placeholder='Contraseña'
              />
            </div>
            <div className='form-group'>
              <input
                name='password'
                onChange={handleInput}
                type='password'
                className='form-control'
                placeholder='Confirma tu contraseña'
              />
            </div>
            <div className='form-group'>
              <input
                name='organizacion'
                onChange={handleInput}
                type='text'
                className='form-control'
                aria-describedby='organizacion'
                placeholder='Nombre de tu negocio'
              />
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-success btn-block'>Regístrate</button>
            </div>
            <div className='text-center mt-3'>
              <span>¿Ya tienes cuenta? </span>
              <Link to='/signin'>Inicia sesión</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
