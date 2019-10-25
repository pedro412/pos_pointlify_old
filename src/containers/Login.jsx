import React, { useState } from 'react';
import '../assets/styles/Login.scss';

const Login = () => {
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
    const { email, password } = form;

    window.fetch('http://localhost:3000/api/auth/sign-in', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${email}:${password}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'apiKeyToken': 'admin-api-key',
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
      });
  };

  return (
    <div className='container mt-5'>
      <div className='card auth-card'>
        <div className='card-body'>
          <h1 className='text-center'>Inicia Sesión</h1>

          <button type='button' className='btn btn-twitter btn-block'>
            <img src='../src/assets/twitter-button.png' alt='twitter icon' />
            Inicia sesión con Twitter
          </button>

          <button type='button' className='btn btn-facebook btn-block'>
            <img src='../src/assets/facebook-button.png' alt='facebook icon' />
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
                laceholder='Contraseña'
              />
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
