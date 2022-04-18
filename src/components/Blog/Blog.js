import React from 'react';

export const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center container mb-14 pt-16 mx-auto">
      <h4 className="text-2xl">Blog Page:</h4>
      <h4><span className="text-red-500 pr-5">Question 1:</span> Difference between authorization and authentication</h4>
    
      <li><span className="text-red-500 pr-5 ">Answer:</span>
      Authentication is what verifies the user, who actually intendent to access data. Through authenticatoin, any unwanted attemps by outsiders is blocked.
      On the other hand autorization is a process which is used to provide authenticated users access to data and set classification which data can be accessed by which authenticatied users. 
      </li>

      <h4><span className="text-red-500 pr-5 pt-5">Question 2:</span> Why are you using firebase? What other options do you have to implement authentication?

      </h4>
    
      <li><span className="text-red-500 pr-5">Answer:</span>
       Firebase is authentication system introduced by google corporation. we can use firebase for storage and realtime database facilities besides authentication.
       Other authentication options are Auth0, Stytch, Ory, Supabase, Okta etc.
      </li>

      <h4><span className="text-red-500 pr-5 pt-5">Question 3:</span> What other services does firebase provide other than authentication?

      </h4>
    
      <li><span className="text-red-500 pr-5">Answer:</span>
       Beside authentication, firebase gives other services like firebase databasee, realtime database, storage, hosting and machine learning facilities etc.
      </li>
    </div>
  );
}
