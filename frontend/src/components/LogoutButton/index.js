import React from 'react';
import axios from 'axios';

function LogoutButton() {
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/logout');
      console.log('User logged out successfully');
      
      localStorage.clear();
     
      window.location.href = '/login';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={handleLogout} />


  );
}

export default LogoutButton;
