import React, { useState } from 'react';
import '../assets/styles/Login.scss';
import { Link, withRouter } from 'react-router-dom';

const SignUp = (props) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [form, setValues] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    organization: '',
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

    if (form.password !== form.passwordConfirm) {
      setLoading(false);
      setError('Las contraseñas no coinciden.');
      return;
    }

    window.fetch('http://localhost:3000/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        organization: form.organization,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        if (resp.statusCode !== 200 && !resp.ok) {
          setLoading(false);
          setError('Verifica que los datos sean correctos.');
          return;
        }

        setLoading(false);
        setSuccess(true);
        props.history.push('/signin');
      })
      .catch((error) => {
        setError('ocurrió un error');
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className='container mt-5'>
      <div className='card auth-card'>
        <div className='card-body'>
          <h1 className='text-center pb-3'>Regístrate</h1>

          {/* <button type='button' className='btn btn-twitter btn-block'>
            <FaTwitter className='mr-2' />
          Inicia sesión con Twitter
          </button>

          <button type='button' className='btn btn-facebook btn-block'>
            <FaFacebookF className='mr-2' />
          Inicia sesión con Facebook
          </button> */}

          <form onSubmit={handleSumbit}>
            {/* <p className='text-center mt-3'>o</p> */}
            <div className='form-group'>
              <input
                name='email'
                onChange={handleInput}
                type='email'
                className='form-control'
                aria-describedby='correo'
                placeholder='Correo electrónico'
                disabled={loading}
                required
              />
            </div>
            <div className='form-group'>
              <input
                name='password'
                onChange={handleInput}
                type='password'
                className='form-control'
                placeholder='Contraseña'
                disabled={loading}
                required
              />
            </div>
            <div className='form-group'>
              <input
                name='passwordConfirm'
                onChange={handleInput}
                type='password'
                className='form-control'
                placeholder='Confirma tu contraseña'
                disabled={loading}
                required
              />
            </div>
            <div className='form-group'>
              <input
                name='organization'
                onChange={handleInput}
                type='text'
                className='form-control'
                aria-describedby='organization'
                placeholder='Nombre de tu negocio'
                disabled={loading}
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

            {
              success && (
                <div className='alert alert-success' role='alert'>
                  Se ha creado tu cuenta!
                </div>
              )
            }

            <div className='text-center'>
              <button disabled={loading} type='submit' className='btn btn-success btn-block'>
                {
                  loading ? (
                    <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true' />
                  ) :
                    'Registrate'
                }
              </button>
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

export default withRouter(SignUp);
