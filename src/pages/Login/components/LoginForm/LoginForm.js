import React,{ useState, useContext } from 'react';
import AuthContext from '../../../../context/AuthContext';
import { Button, Form } from 'semantic-ui-react';
import './LoginForm.scss';


import { userLogin } from '../../../../api/user.api';
import { LoginCard } from '..';

const LoginForm = ({toggleFormDisplayed}) => {
    const {setUserAuthToken} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    // controlled inputs
    const loginInputChangeHandler = (e) => {
        setLoginForm({
          ...loginForm,
          [e.target.name]: e.target.value
        });
      };

    const submitLoginForm = async () => {
        setIsLoading(true);
        // validation
        try{
            const response = await userLogin(loginForm);
            // success
            localStorage.setItem('token', response.data.token);
            setUserAuthToken(response.data.token); 
        }catch(err){
            console.error(err.response.data.message);
            setIsLoading(false);
        }
    }

    return(
        <LoginCard title="Login">
            <div className="login-form">
                <Form className="login-form">
                    <Form.Input
                        icon='mail'
                        iconPosition='left'
                        label='Email'
                        placeholder='Email'
                        name='email'
                        onChange={loginInputChangeHandler}
                        disabled={isLoading}
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Password'
                        type='password'
                        placeholder='Password'
                        name='password'
                        onChange={loginInputChangeHandler}
                        disabled={isLoading}
                    />

                    <Button content='Login' secondary fluid onClick={() => submitLoginForm()} loading={isLoading}/>
                    <p>Dont have an account? <span onClick={() => toggleFormDisplayed()}>Register</span></p>
                </Form> 
            </div>
        </LoginCard>
    );
}

export default LoginForm;