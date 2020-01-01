export default props => (
  <React.Fragment>
    <h2>Log In</h2>
    <div>
      <form
        onSubmit={event => {
          alert('Log in!');
          event.preventDefault();
        }}>
        <input id='email' type='email' placeholder='Email Address' />
        <input id='password' type='password' placeholder='Password' />
        <button>Log In</button>
      </form>
      <p>
        Don't have an account yet?{' '}
        <a href='javascript:;' onClick={() => props.showSignup()}>
          Sign up
        </a>
      </p>
    </div>
  </React.Fragment>
);
