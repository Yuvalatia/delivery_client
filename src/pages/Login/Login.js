import React,{useState, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Login.scss';

import { CenteralContainer } from '../../components/layout';
import { AppHeader } from '../../components/shared';
import { LoginForm, RegisterForm } from './components'

const Login = () => {
    const {userAuthToken} = useContext(AuthContext);
    const [formDisplayed, setFormDisplayed] = useState(true);

    const toggleFormDisplayed = () => {
        setFormDisplayed(!formDisplayed);
    }


    const rednerDisplayForm = () => {
        return (
            formDisplayed ? 
            <LoginForm toggleFormDisplayed={toggleFormDisplayed} /> : 
            <RegisterForm toggleFormDisplayed={toggleFormDisplayed} />
        );
    }

    if(userAuthToken){
        return <Redirect to='/panel'/>;
    }
    
    return (
        <CenteralContainer>
            <AppHeader />
            {rednerDisplayForm()}
        </CenteralContainer>
    );
}

export default Login;