/* --------------------------------Imports--------------------------------*/

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import services from '../services/index.js';


/* --------------------------------Context--------------------------------*/

const AuthContext = createContext(null);

/* --------------------------------Component--------------------------------*/


const AuthProvider = () => {
  return (
    <div>AuthProvider</div>
  )
}


const useAuth = () => {
    try {
        return useContext(AuthContext)
    } catch {
        return null
    }
}

/* --------------------------------Export--------------------------------*/

export default AuthProvider
export { useAuth }