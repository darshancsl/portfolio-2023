import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  let formDetails = {
    name: "",
    password: "",
  };

  const navigate = useNavigate();

  const [adminDetails, setAdminDetails] = useState(formDetails);

  const handleChange = (e) => {
    setAdminDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let userData = {};
    if (!adminDetails.name || !adminDetails.password) {
      console.log(`Please enter username or password`);
    }

    if (adminDetails.name === "Darshan157" && adminDetails.password === "123") {
      userData = adminDetails;
      console.log(userData);
      navigate("/dashboard");
    }
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleLogin}>
        <div className='form-content'>
          <h3 className='form-title'>LogIn</h3>
          <div className='form-group'>
            <label htmlFor='name'>UserName: </label>
            <input
              name='name'
              type='text'
              className='form-control'
              placeholder='Enter Name...'
              value={adminDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              className='form-control'
              value={adminDetails.password}
              placeholder='Enter password...'
              onChange={handleChange}
            />
          </div>
          <div className='submitBtn'>
            <button type='submit' className='primary-Btn'>
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
