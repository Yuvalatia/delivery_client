import React from 'react';
import { Form } from 'semantic-ui-react';
import './RegisterForm.scss';

import { LoginCard } from '..';

const RegisterForm = ({toggleFormDisplayed}) => {

    const roles = [
        {key: 'customer', value: 0, text: 'Customer'},
        {key: 'admin', value: 1, text: 'Admin'}
    ];

    return(
        <LoginCard title="Register">
            <Form className="register-form">
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Full Name'
                        placeholder='Full Name'
        
                    />
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
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Confirm Password'
                        type='password'
                        placeholder='Password'
                    />
                    <Form.Select placeholder='Select your country' options={roles}  label='Role'/>
                    <Form.Button content='Register' secondary fluid/>
                    <Form.Button content='Back' onClick={() => toggleFormDisplayed()} fluid />
                </Form> 
        </LoginCard>
    );
}

export default RegisterForm;