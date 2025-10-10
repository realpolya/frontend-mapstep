/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';

import ModalsContext from "./ModalsContext";

/* --------------------------------Component--------------------------------*/

const useModals = () => {
    try {
       return useContext(ModalsContext)
    } catch {
        return null
    }
}

/* --------------------------------Export--------------------------------*/

export default useModals