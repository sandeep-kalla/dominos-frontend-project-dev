/* eslint-disable react/prop-types */
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './styles/loginpopup.css'
import { CircleX } from 'lucide-react'
import axios from 'axios';
const LoginPopup = ({setShowLogin, onLogin}) => {
  const [currState, setCurrState] = useState("Login")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin =  async (email, password) => {
    try {
      const response =  await axios.post('http://localhost:5000/api/users/login',{ email, password }, { withCredentials: true });
      console.log(response.data.message)
      if (response.data.message === 'Logged in successfully') {
        setLoggedIn(true);
        toast.success(response.data.message); 
        
        setTimeout(() => {
          setShowLogin(false); 
          onLogin()
        }, 3000)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Invalid email or password');
    }
  };

  const handleSignup = async (email, password, username) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup',{ email, password, username }, { withCredentials: true }); 
      if (response.data.message === 'User created successfully') {
        setLoggedIn(true);
        toast.success(response.data.message); 
        
        setTimeout(() => {
          setShowLogin(false); 
          onLogin()
        }, 3000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while signing up.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (currState === "Login") {
      handleLogin(email, password);
    } else {
      handleSignup(email, password, username);
    }
  };
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <CircleX className='pointer' onClick={() => setShowLogin(false)}/>
        </div>
        <div className="login-popup-inputs">
          {
            currState === "Login"? <></> : 
            <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
          }
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={handleSubmit}>{currState === "Sign Up"? "Create account": "Login" }</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {
          currState === "Login"? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>:
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        }
      </form>
      <ToastContainer autoClose={2000} position='top-center'/>
    </div>
  )
}

export default LoginPopup
