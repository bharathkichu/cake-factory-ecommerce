import React, { useState } from 'react';

const Login = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async () => {
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://cake-factory-backend.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        setErrorMessage(responseData.errors || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  }

  const signup = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://cake-factory-backend.onrender.com/api/users/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        setErrorMessage(responseData.errors || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className='bg-primary max-padd-container flexCenter flex-col pt-32 '>
      <div className='w-full max-w-[666px] h-[600px] m-auto px-14 py-10 rounded-md'>
        <h3>{state}</h3>
        <div className='flex flex-col gap-3 mt-7'>
          {state === "Sign Up" && (
            <input name='username' type='text' value={formData.username} onChange={changeHandler} placeholder='Your Name'
              className='h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm' />
          )}
          <input name='email' type='email' value={formData.email} onChange={changeHandler} placeholder='Your Email'
            className='h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm' />
          <input name='password' type='password' value={formData.password} onChange={changeHandler} placeholder='Password'
            className='h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm' />
        </div>

        {/* Show error message if any */}
        {errorMessage && (
          <p className='text-red-600 font-bold mt-3'>{errorMessage}</p>
        )}

        <button onClick={() => { state === "Login" ? login() : signup() }} className='btn-dark rounded-xl my-5 !py-1'>
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className='text-black font-bold'>
            Already have an account? 
            <span onClick={() => { setState("Login") }} className='text-red-900 underline cursor-pointer'>Login</span> 
          </p>
        ) : (
          <p className='text-black font-bold'>
            Create an account? 
            <span onClick={() => { setState("Sign Up") }} className='text-red-900 underline cursor-pointer'>Click here</span> 
          </p>
        )}

        <div className='flexStart mt-5 gap-3'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default Login;
