import React,{useState} from 'react';
import './Login.scss';

import { CenteralContainer } from '../../components/layout';
import { AppHeader } from '../../components/shared';
import { LoginForm, RegisterForm } from './components'

const Login = () => {
    const [formDisplayed, setFormDisplayed] = useState(true);
    
    const rednerDisplayForm = () => {
        return (
            formDisplayed ? 
            <LoginForm toggleFormDisplayed={toggleFormDisplayed} /> : 
            <RegisterForm toggleFormDisplayed={toggleFormDisplayed} />
        );
    }

    const toggleFormDisplayed = () => {
        setFormDisplayed(!formDisplayed);
    }
    
    return(
        <CenteralContainer>
            <AppHeader />
            {rednerDisplayForm()}
        </CenteralContainer>
    );
}

export default Login;