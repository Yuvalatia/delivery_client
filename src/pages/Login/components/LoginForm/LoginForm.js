import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import './LoginForm.scss';

import { LoginCard } from '..';

const LoginForm = ({toggleFormDisplayed}) => {
    return(
        <LoginCard title="Login">
            <div className="login-form">
                <Form className="login-form">
                    <Form.Input
                        icon='mail'
                        iconPosition='left'
                        label='Email'
                        placeholder='Email'
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Password'
                        type='password'
                        placeholder='Password'
                    />

                    <Button content='Login' secondary fluid/>
                    <p>Dont have an account? <span onClick={() => toggleFormDisplayed()}>Register</span></p>
                </Form> 
            </div>
        </LoginCard>
    );
}

export default LoginForm;