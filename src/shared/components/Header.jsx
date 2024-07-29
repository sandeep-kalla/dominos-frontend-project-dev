/* eslint-disable react/prop-types */
import Logo from '../widgets/Logo'
import { Menu, CircleUserRound } from 'lucide-react'
import './styles/header.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Header = ({ setShowLogin }) => {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    checkSessions()
  }, [])

  const checkSessions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users/check-session', { withCredentials: true })
      if (response.data.username) {
        setUsername(response.data.username)
        setIsLoggedIn(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users/logout', { withCredentials: true })
      if (response.data.message === 'Logged out successfully') {
        setUsername('')
        setIsLoggedIn(false)
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while logging out.')
    }
  }

  return (
    <>
      <div className="header">
        <div className="left-side">
          <div className="logo">
            <Menu size={28} color="#ffffff" />
            <Logo />
          </div>
        </div>
        <div className="right-side">
          {isLoggedIn ? (
            <>
              <div className='user-info'>
              <CircleUserRound size={30} color="#ffffff"/>
              <span className='username'>{username.toUpperCase()}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
              </div>
            </>
          ) : (
            <button className="signup-btn" onClick={() => setShowLogin(true)}>
              Sign Up
            </button>
          )}
        </div>
      </div>
      <ToastContainer autoClose={1500}/>
    </>
  )
}

export default Header
