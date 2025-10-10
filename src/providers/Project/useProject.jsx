/* --------------------------------Imports--------------------------------*/

import { useContext } from 'react';

import ProjectContext from './ProjectContext.jsx';

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