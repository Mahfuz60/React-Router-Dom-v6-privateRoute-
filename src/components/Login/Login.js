import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(null);

  const handleForm = (e) => {
   
    e.preventDefault();
  };

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    let newUser = { ...login };
    newUser[field] = value;
    console.log(newUser);

    e.preventDefault();
  };
  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleForm}>
        <input type="email" name="email" onBlur={handleBlur} placeholder=" Email:" />
        <input type="password" name="password" onBlur={handleBlur} placeholder=" Password:" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
