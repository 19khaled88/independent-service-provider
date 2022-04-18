import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth'
import { useNavigate, useLocation } from 'react-router-dom'
import auth from '../../Auth/firebase.init'

export const Register = () => {
  const [register, setRegister] = useState(true)
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [loading] = useAuthState(auth)
  const [
    createUserWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth)
  const [
    signInWithEmailAndPassword,
    user2,
    loading2,
    error2,
  ] = useSignInWithEmailAndPassword(auth)
  const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(
    auth,
  )
  const [sendEmailVerification, sending1, error4] = useSendEmailVerification(
    auth,
  )
  const [user, setUser] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || '/'
  const provider = new GoogleAuthProvider()

  const registrationPageHandler = () => {
    setRegister(!register)
  }

  const googleAuthHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const currentUser = result.user
        setUser(currentUser)
        navigate('/profile')
      })
      .catch((error) => {
        const currenterror = error.message
        setError(currenterror)
        setTimeout(() => {
          setError('')
        }, 3000)
      })
  }

  const emailRef = useRef('')
  const passwordRef = useRef('')
  const confPasswordRef = useRef('')
  let errorState
  let loadingState
  let currUser

  if (error1 || error2) {
    errorState = error.message
  }
  if (loading1 || loading2) {
    loadingState = 'Loading...'
  }
  if (user1 || user2) {
    //  navigate('/profile');
    navigate(from, { replace: true })
  }

  const submiLogintHandler = (event) => {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (password.length < 6) {
      setError('Password must be al least 6 characters')
      const timer = setTimeout(() => {
        setError('')
      }, 3000)
      return timer
    }

    signInWithEmailAndPassword(email, password)
  }
  let sendsEmailVerification
  let sendEmailVerificationError
  const submitSignupHandler = (event) => {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const confPass = confPasswordRef.current.value

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      const timer = setTimeout(() => {
        setError('')
      }, 3000)
      return timer
    }
    if (password !== confPass) {
      setError('Password not match')
      const timer = setTimeout(() => {
        setError('')
      }, 3000)
      return timer
    }
    if (error4) {
      sendEmailVerificationError = error4.message
    }
    if (sending) {
      sendsEmailVerification = 'Email verification Sending...'
    }
    createUserWithEmailAndPassword(email, password)
    emailVerified(email)
  }
  const emailVerified = async (email) => {
    await sendEmailVerification(email)
    alert('Sent Email')
  }
  let sendEmailError
  let emailSending
  const resetEmailHandler = async () => {
    if (error3) {
      sendEmailError = error3.message
    }
    if (sending) {
      emailSending = 'Sending....'
    }
    await sendPasswordResetEmail(email)

    setShowModal(false)
    alert('Sent Email')
  }

  return (
    <div class="container absolute inset-0 top-16 w-2/6 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      {register === true ? (
        <div className="">
          <p className="text-2xl mb-4 text-center text-teal-600">Login Page</p>
          <form onSubmit={submiLogintHandler}>
            <div class="mb-1">
              <label
                class="block text-grey-darker text-sm font-bold mb-1"
                for="Email"
              >
                Email
              </label>
              <input
                ref={emailRef}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="Email"
                type="text"
                placeholder="Email address"
                required
              />
            </div>
            <div class="mb-1">
              <label
                class="block text-grey-darker text-sm font-bold mb-1"
                for="password"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-2"
                id="password"
                type="password"
                placeholder="******************"
                required
              />
            </div>
            <p className="text-red-600">{error ? error : ''}</p>

            <div className="flex justify-center items-center mt-2">
              {register === true ? (
                <button className="bg-fuchsia-600 py-1 px-4 w-full text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark">
                  Sign In
                </button>
              ) : (
                <button className="bg-fuchsia-600 py-1 px-4 w-full text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark">
                  Sign Up
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div className="">
          <p className="text-2xl mb-2 text-center text-teal-600">
            {' '}
            Sign Up Page
          </p>
          <form onSubmit={submitSignupHandler}>
            <div class="mb-1">
              <label
                class="block text-grey-darker text-sm font-bold mb-1"
                for="Email"
              >
                Email
              </label>
              <input
                ref={emailRef}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="Email"
                type="text"
                placeholder="Email address"
                required
              />
            </div>
            <div class="mb-1">
              <label
                class="block text-grey-darker text-sm font-bold mb-1"
                for="password"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker"
                id="password"
                type="password"
                placeholder="******************"
                required
              />
            </div>
            <div class="mb-1">
              <label
                class="block text-grey-darker text-sm font-bold mb-1"
                for="confirm_password"
              >
                Confirm Password
              </label>
              <input
                ref={confPasswordRef}
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-2"
                id="confirm_password"
                type="password"
                placeholder="******************"
                required
              />
            </div>

            <p className="text-red-600">{error ? error : ''}</p>
            <div className="flex justify-center items-center mt-2">
              {register === true ? (
                <button className="bg-fuchsia-600 py-1 px-4 w-full text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark">
                  Sign In
                </button>
              ) : (
                <button className="bg-fuchsia-600 py-1 px-4 w-full text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark">
                  Sign Up
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      <div className="flex flex-row justify-between items-center ">
        <hr
          style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: 0.5,
            width: '45%',
            borderColor: '#000000',
          }}
        />{' '}
        or{' '}
        <hr
          style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: 0.5,
            width: '45%',
            borderColor: '#000000',
          }}
        />
      </div>
      <div>
        <button
          onClick={googleAuthHandler}
          className="bg-white-200  px-4 w-full text-1xl text-base flex flex-row justify-center space-x-7 font-bold text-gray-500 rounded-md border border-green focus:outline-none focus:border-green-dark"
        >
          <img className="w-7 h-7 my-0" src="/images/google.png" alt="" />
          <span>Sign In with google</span>
        </button>
      </div>

      <div className="flex flex-row justify-between">
        <div>
          <input
            onClick={registrationPageHandler}
            type="checkbox"
            id=""
            name=""
            value=""
          />
          {register === true ? (
            <label className="text-rose-500" for="vehicle1">
              {' '}
              Don't have Account?
            </label>
          ) : (
            <label className="text-blue-500" for="vehicle1">
              {' '}
              Already have Account?
            </label>
          )}
        </div>
        <div>
          <button
            onClick={() => setShowModal(true)}
            class="pl-2 inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          >
            Forgot Password?
          </button>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Reset Password</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto border-solid  ">
                  <input
                    className="border-2 border-indigo-600"
                    placeholder="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={resetEmailHandler}
                    // onClick={() => setShowModal(false)}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
