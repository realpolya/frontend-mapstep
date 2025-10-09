/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';

import ProjectContext from './AuthContext.jsx';

/* --------------------------------Component--------------------------------*/

const useProject = () => {
    try {
       return useContext(ProjectContext)
    } catch {
        return null
    }
}

/* --------------------------------Export--------------------------------*/

export default useProject