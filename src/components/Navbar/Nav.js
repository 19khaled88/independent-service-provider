import { signOut } from '@firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import auth from '../../Auth/firebase.init'
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [user, loading, error] = useAuthState(auth)

  const navigate = useNavigate()
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log('sign out:', error)
      })
  }
  return (
    <>
      <nav className="fixed inset-x-0 flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <ToastContainer />
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Travel-Tour-Solution
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/profile"
                >
                  <span className="ml-2">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/checkout"
                >
                  <span className="ml-2">Checkout</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/blog"
                >
                  <span className="ml-2">Blog</span>
                </Link>
              </li>
              <li className="nav-item">
                {user !== null ? (
                  <button
                    onClick={signOutHandler}
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Logout</span>
                  </button>
                ) : (
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/register"
                  >
                    <span className="ml-2">Register</span>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
