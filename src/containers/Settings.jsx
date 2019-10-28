/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';

const Settings = ({ user }) => {
  const [form, setValues] = useState({
    email: user.user.email,
    organization: user.user.organization,
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h2 className='pb-2'>Configuración</h2>
      <form>
        <div className='form-group'>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            value={form.email}
            onChange={handleInput}
            name='email'
            type='email'
            className='form-control'
            id='email'
            aria-describedby='email'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Organizacíon</label>
          <input
            value={form.organization}
            onChange={handleInput}
            name='organization'
            type='text'
            className='form-control'
            id='organization'
            aria-describedby='organizationName'
          />
        </div>

        <button type='submit' className='btn btn-success'>Actualizar</button>
      </form>
    </>
  );
};

const mapSateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapSateToProps, null)(Settings);
