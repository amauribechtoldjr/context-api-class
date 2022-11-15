import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider';

const Footer = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLoginClick = () => {
    setIsAuthenticated(!isAuthenticated)
  }

  return (
    <button onClick={handleLoginClick}>
      Fazer login!!!!
    </button>
  );
}

export default Footer;