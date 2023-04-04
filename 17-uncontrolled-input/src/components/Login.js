function Login() {
  function handleFromSubmit(evt) {
    evt.preventDefault();

    // console.log(evt.target.username.value);
    // console.log(evt.target.password.value);

    const userData = {
      username: evt.target.username.value,
      password: evt.target.password.value,
    };

    console.log(userData);
    alert(JSON.stringify(userData));
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFromSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
