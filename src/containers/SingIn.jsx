import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/Login.scss';

const SignIn = (props) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
        if (resp.statusCode !== 201 && !resp.ok) {
          setLoading(false);
          setError('Credenciales incorrectas');
          return;
        }

        props.loginRequest(resp);
        props.history.push('/');
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError('Ocurrio un error :(');
      });
  };

  return (
    <div className='container mt-5'>
      <div className='card auth-card'>
        <div className='card-body'>
          <h1 className='text-center pb-3'>Inicia Sesión</h1>

          {/* <button type='button' className='btn btn-twitter btn-block'>
            <FaTwitter size={20} className='mr-2' />
            Inicia sesión con Twitter
          </button>

          <button type='button' className='btn btn-facebook btn-block'>
            <FaFacebookF size={20} className='mr-2' />
            Inicia sesión con Facebook
          </button> */}

          <form onSubmit={handleSumbit}>
            {/* <p className='text-center mt-3'>o</p> */}

            <div className='form-group'>
              <input
                disabled={loading}
                name='email'
                onChange={handleInput}
                type='email'
                className='form-control'
                aria-describedby='correo'
                placeholder='Correo electrónico'
                required
              />
            </div>
            <div className='form-group'>
              <input
                disabled={loading}
                name='password'
                onChange={handleInput}
                type='password'
                className='form-control'
                placeholder='Contraseña'
                required
              />
            </div>

            {
              error && (
                <div className='alert alert-danger' role='alert'>
                  {error}
                </div>
              )
            }

            <div className='text-center'>
              <button disabled={loading} type='submit' className='btn btn-success btn-block'>
                {
                  loading ? (
                    <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true' />
                  ) :
                    'Inicia sesión'
                }
              </button>
            </div>
            <div className='text-center mt-3'>
              <span>¿Aún no tienes cuenta? </span>
              <Link to='/signup'>Regístrate</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDistpatchToProps = {
  loginRequest,
};

export default connect(null, mapDistpatchToProps)(withRouter(SignIn));
