import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom
import PasswordInput from '../../components/Input/PasswordInput'; // Ensure PasswordInput is correctly imported
import { validateEmail } from '../../utils/helper';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Add your sign-up logic here, e.g., form validation and API call

    if (!name) {
      setError("Please Enter Your Name!")
      return;
    }
    if (!password) {
      setError("Please Enter The Password")
      return;
    }
    if(!validateEmail(email)) {
      setError("Please Enter a Carrect Email")
      return;
    }

    setError("")
  };

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleSignUp}>
            <h4 className='text-2xl mb-7'>SignUp</h4>

            <input
              type="text"
              placeholder='Name'
              className='input-box'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder='Email'
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

            <button className='btn-primary' type='submit'>Create Account</button>

            <p className='text-sm text-center mt-4'>
              Already Have Account? <Link to='/login' className='font-medium text-primary underline'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
