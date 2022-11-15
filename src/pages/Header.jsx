import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider';
import { AiOutlineUser } from 'react-icons/ai'

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? <AiOutlineUser /> : <span>Não esta conectado</span>}
    </div>
  );
}

export default Header;