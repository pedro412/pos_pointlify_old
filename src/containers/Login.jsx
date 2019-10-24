import React from 'react';
import '../assets/styles/Login.scss';

const Login = () => {

  return (
    <div className='container mt-5'>
      <div className='card auth-card'>
        <div className='card-body'>
          <h1 className='text-center'>Inicia Sesión</h1>

          <button type='button' className='btn btn-twitter btn-block'>
            Inicia sesión con Twitter
          </button>

          <button type='button' className='btn btn-facebook btn-block'>
            Inicia sesión con Facebook
          </button>

          <form>
            <p className='text-center mt-3'>o</p>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                aria-describedby='correo'
                placeholder='Correo electrónico'
              />
            </div>
            <div className='form-group'>
              <input type='password' className='form-control' placeholder='Contraseña' />
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-success btn-block'>Inicia Sesión</button>
            </div>
            <div className='text-center mt-3'>
              <span>¿Aún no tienes cuenta? </span>
              <a href='https://google.com'>Regístrate</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
