/* --------------------------------Imports--------------------------------*/

import { useContext } from "react";

import { AppContext } from "../../App.jsx";

/* --------------------------------Component--------------------------------*/

const AccountInfo = () => {

    const { user } = useContext(AppContext)

    return (
        <div>
            AccountInfo
        </div>
    )

}

/* --------------------------------Export--------------------------------*/

export default AccountInfo