import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const images = [
    '/images/tourism-1.png',
    '/images/tourism-2.png',
    '/images/tourism-3.png',
    '/images/tourism-4.png',
  ]
  const navigate = useNavigate()
  let imgIndex = 0

  setInterval(() => {
    if (imgIndex >= images.length) {
      imgIndex = 0
    }
    const imgUrl = images[imgIndex]
    document.getElementById('slider-img').setAttribute('src', imgUrl)
    imgIndex++
  }, 3000)
  const checkoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-5 py-6 mt-10">
        <img
          id="slider-img"
          className="h-100 w-full"
          src="/images/tourism-1.png"
          alt=""
        />
      </div>
      <div className="mt-10">
        <h3 className="text-center text-3xl mb-6">Services</h3>

        <div className="container mx-auto justify-around flex flex-col  lg:flex-row md:flex-col sm:flex-col sm:items-center md:items-center sm:justify-center md:justify-center sm:space-y-3 md:space-y-3 lg:space-y-0 lg:space-x-3 sm:space-x-0 md:space-x-0 sm:mx-auto md:mx-auto sm:w-full md:w-full mb-6">
          <div className="flex flex-col px-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/images/Visa-Processing.jpg"
              alt="Sunset in the mountains"
            />
            <div className="">
              <div className="font-bold text-xl mb-2">Visa Processing</div>
              <p className="text-gray-700 text-base text-justify desc">
                We have the biggest international logistics and service delivery
                partner's network ot process your visa from any visa office
                around the world. Our partner are the top notch organizatios in
                their field of services.
              </p>
            </div>
            <div className="flex flex-row justify-between mt-3 mb-3">
              <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 price">
                $6000
              </span>

              <button
                onClick={checkoutHandler}
                className="inline-block bg-pink-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                Checkout
              </button>
            </div>
          </div>
          <div className="flex flex-col px-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/images/5-start-Hotel-room.jpg"
              alt="Sunset in the mountains"
            />
            <div className="">
              <div className="font-bold text-xl mb-2">5 Start Hotel room</div>
              <ul className="text-gray-700 text-base list-disc px-5">
                <li>Spacious room with cozy decorations</li>
                <li>Welcoming receptionist for your lovely entrence</li>
                <li>Healthy stay and healthy food items</li>
                <li>Within your affordability</li>
              </ul>
            </div>
            <div className="flex flex-row justify-between mt-3 mb-3">
              <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                $5000
              </span>

              <button
                onClick={checkoutHandler}
                className="inline-block bg-pink-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                Checkout
              </button>
            </div>
          </div>
          <div className="px-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/images/home-drop-car.jpg"
              alt="Sunset in the mountains"
            />
            <div className="">
              <div className="font-bold text-xl mb-2">Home drop Car</div>
              <p className="text-gray-700 text-base">
                We are the town-hero in arrainging your safe and comfortable
                journey towards destination. We are not ready to compromise with
                customer's travel satisfaction as we give customer priority
                other than the revenue.
              </p>
            </div>
            <div className="flex flex-row justify-between mt-3 mb-3">
              <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                $8000
              </span>

              <button
                onClick={checkoutHandler}
                className="inline-block bg-pink-400 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <h3 className="text-center text-3xl mb-6">Up Comming Serices</h3>

        <div className="container mx-auto justify-around flex flex-col  lg:flex-row md:flex-col sm:flex-col sm:items-center md:items-center sm:justify-center md:justify-center sm:space-y-3 md:space-y-3 lg:space-y-0 lg:space-x-3 sm:space-x-0 md:space-x-0 sm:mx-auto md:mx-auto sm:w-full md:w-full mb-6">
          <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/images/online-talking.jpg"
              alt="Sunset in the mountains"
            />
            <div className="">
              <div className="font-bold text-xl mb-2">Online conversation</div>
              <p className="text-gray-700 text-base">
                The Speaking Club Online is the best way to practice speaking in
                English and other languages online in a real life setting.
                Structured conversation groups with a native English host.
              </p>
            </div>
            <div className=""></div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/images/one_to_one.jpeg"
              alt="Sunset in the mountains"
            />
            <div className="">
              <div className="font-bold text-xl mb-2">
                One to One travel consultation
              </div>
              <p className="text-gray-700 text-base">
                It’s no secret that communication is key to good management. But
                good communication isn’t always easy. One-on-one conversations
                are a simple but effective way to improve communication with
                your employees and increase engagement.
              </p>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  )
}
