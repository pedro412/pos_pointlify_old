/* eslint-disable import/prefer-default-export */
export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const userLogin = (payload) => {
  const { email, password } = payload;
  return (dispatch) => {
    return window.fetch('http://localhost:3000/api/auth/sign-in', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKeyToken: 'admin-api-key',
      }),
    });
  };
};
