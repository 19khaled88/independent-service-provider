import React from 'react'
import { useLocation } from 'react-router-dom'
export const Checkout = () => {
  return (
    <div className="flex flex-row justify-center items-center pt-20">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="/images/Visa-Processing.jpg"
          alt="Sunset in the mountains"
        />
        <div className="">
          <div className="font-bold text-xl mb-2">Visa Processing</div>
          <p className="text-gray-700 text-base text-justify desc">
            We have the biggest international logistics and service delivery
            partner's network ot process your visa from any visa office around
            the world. Our partner are the top notch organizatios in their field
            of services.
          </p>
        </div>
        <div className="flex flex-row justify-between mt-3 mb-3">
          <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 price">
            $6000
          </span>
        </div>
      </div>
    </div>
  )
}
