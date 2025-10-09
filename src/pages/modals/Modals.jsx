/* --------------------------------Imports--------------------------------*/

import Modal from 'react-modal';

import LogIn from '../../components/auth/LogIn.jsx';
import SignUp from '../../components/auth/SignUp.jsx';

import './Modals.css'

import useModals from '../../providers/Modals/useModals.jsx';

/* --------------------------------Component--------------------------------*/

const Modals = () => {

    const { logInOpen, closeLogIn, signUpOpen, closeSignUp } = useModals()

    return (
        <>
            <Modal
                isOpen={logInOpen}
                onRequestClose={closeLogIn}
                className="auth-modal auth-modal-login"
                overlayClassName="auth-modal-back"
            >
                <LogIn />
            </Modal>

            <Modal
                isOpen={signUpOpen}
                onRequestClose={closeSignUp}
                className="auth-modal"
                overlayClassName="auth-modal-back"
            >
                <SignUp />
            </Modal>
        </>
    )

}

/* --------------------------------Export--------------------------------*/

export default Modals