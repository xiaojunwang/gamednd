export default props => (
  <React.Fragment>
    <h2>Sign Up</h2>
    <div>
      <form
        onSubmit={event => {
          alert('Sign up!');
          event.preventDefault();
        }}>
        <input id='email' type='email' placeholder='Email Address' />
        <input id='password' type='password' placeholder='Password' />
        <input
          id='passwordconfirmation'
          type='password'
          placeholder='Enter Password Again'
        />
        <button>Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <a href='javascript:;' onClick={() => props.showLogin()}>
          Log in
        </a>
      </p>
    </div>
  </React.Fragment>
);
