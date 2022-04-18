import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Auth/firebase.init';
const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    let loadingSate;
    let errorState;
    let currentUser;
    if (loading) {
        loadingSate = 'Loading.....'
      }
      if (error) {
        errorState = error;
      }
      if (user) {
       
         currentUser =  user.email;
          
      }

  return (
    <div className="flex flex-col justify-center items-center container mb-14 pt-16 mx-auto">
      <h4 className="">User Profile:</h4>
      {
          loading ? 'Loading...': '' || user ? user.email : ''
      }
    </div>
  );
}

export default Profile;
