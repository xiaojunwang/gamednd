import { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

export default props => {
  const setUser = useStoreActions(actions => actions.user.setUser);
  const setHideModal = useStoreActions(actions => actions.modals.setHideModal);

  return (
    <>
      <h2>Log In</h2>
      <div>
        <form
          onSubmit={event => {
            alert('Log in!');
            event.preventDefault();
          }}>
          <input id='email' type='email' placeholder='Email address' />
          <input id='password' type='password' placeholder='Password' />
          <button>Log in</button>
        </form>
        <p>
          Don't have an account yet?{' '}
          <a href='#' onClick={() => props.showSignup()}>
            Sign up
          </a>
        </p>
      </div>
    </>
  );
};
