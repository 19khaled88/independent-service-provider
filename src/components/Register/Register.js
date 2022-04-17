import React, { useState } from 'react'

export const Register = () => {
  const [register, setRegister] = useState(true)
  const registrationPageHandler = () => {
    setRegister(!register)
  }
  console.log(register)
  return (
    <div class="container absolute inset-0 top-16 w-2/6 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      {register === true ? (
        <div className="">
          <p className="text-2xl mb-4 text-center text-teal-600">Login Page</p>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
      ) : (
        <div className="">
          <p className="text-2xl mb-2 text-center text-teal-600">
            Sign Up Page
          </p>
          <div class="mb-2">
            <label
              class="block text-grey-darker text-sm font-bold mb-1"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-2">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="mb-3">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="confirm_password"
            >
              Confirm Password
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-2"
              id="confirm_password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
      )}
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
          <button class="pl-2 inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
            Forgot Password?
          </button>
        </div>
      </div>
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
        <button className="bg-white-200  px-4 w-full text-1xl text-base flex flex-row justify-center space-x-7 font-bold text-gray-500 rounded-md border border-green focus:outline-none focus:border-green-dark">
          <img className="w-7 h-7 my-0" src="/images/google.png" alt="" />
          <span>Sign In with google</span>
        </button>
      </div>
    </div>
  )
}
