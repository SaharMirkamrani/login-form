import React from "react";
const App = () => {
  return (
    <>
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <form className="login100-form validate-form">
            <LoginTitle name="Login" />
            <Input
              placeholder="Type your username"
              name="username"
              value="username"
              type="text"
            />
            <Input
              placeholder="Type your password"
              name="pass"
              value="password"
              type="password"
            />
            <ForgetPassword />
            <Button text="Login" />
            <br />
            <Button text="Register" />
          </form>
        </div>
      </div>
    </>
  );
};

const LoginTitle = ({ name }) => {
  return <span className="login100-form-title p-b-49">{name}</span>;
};

const Input = ({ placeholder, name, type, value }) => {
  return (
    <>
      <div className="wrap-input100 validate-input">
        <span className="label-input100">{value}</span>
        <input
          className="input100"
          type={type}
          name={name}
          placeholder={placeholder}
        />
        <span className="focus-input100"></span>
      </div>
    </>
  );
};

const ForgetPassword = () => {
  return (
    <>
      <div className="text-right p-t-8 p-b-31">
        <a href="#">Forgot password?</a>
      </div>
    </>
  );
};

const Button = ({ text}) => {
  return (
    <>
      <div className="container-login100-form-btn">
        <div className="wrap-login100-form-btn">
          {text === "Login" ? (
            <div className="login100-form-bgbtn"></div>
          ) : (
            <div className="register-form-bgbtn"></div>
          )}
          <button className="login100-form-btn">{text}</button>
        </div>
      </div>
    </>
  );
};

export default App;
