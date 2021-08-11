import React,{useState} from 'react';
import { Form } from 'semantic-ui-react';
import './RegisterForm.scss';

import { userRegister } from '../../../../api/user.api';
import { LoginCard } from '..';

const RegisterForm = ({toggleFormDisplayed}) => {
    // hardcoded for now
    const roles = [
        {key: 'customer', value: 0, text: 'Customer'},
        {key: 'admin', value: 1, text: 'Admin'}
    ];

    // states
    const [isLoading, setIsLoading] = useState(false);
    const [registerForm, setRegisterForm] = useState({
        full_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 0
    });
    // controlled inputs
    const registerInputChangeHandler = (e) => {
        setRegisterForm({
          ...registerForm,
          [e.target.name]: e.target.value
        });
      };
    
    const submitRegisterForm =  async () => {
        // Set loading
        setIsLoading(true);
        // validation need to add here
        const {full_name, email, password, role} = registerForm;
        try{
            const response = await userRegister({full_name, email, password, role});
            console.log(response.data); // handle success - message from server
            setIsLoading(false);
            toggleFormDisplayed();
        }catch(err){
            console.error(err.response.data.message); // handle error - message from server
            setIsLoading(false);
        }
    }

    return(
        <LoginCard title="Register">
            <Form className="register-form">
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Full Name'
                        placeholder='Full Name'
                        value={registerForm.full_name}
                        name='full_name'
                        onChange={registerInputChangeHandler}
                        disabled={isLoading}
                    />
                    <Form.Input
                        icon='mail'
                        iconPosition='left'
                        label='Email'
                        placeholder='Email'
                        value={registerForm.email}
                        name='email'
                        onChange={registerInputChangeHandler}
                        disabled={isLoading}
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Password'
                        type='password'
                        placeholder='Password'
                        value={registerForm.password}
                        name='password'
                        onChange={registerInputChangeHandler}
                        disabled={isLoading}
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Confirm Password'
                        type='password'
                        placeholder='Password'
                        value={registerForm.confirmPassword}
                        name='confirmPassword'
                        onChange={registerInputChangeHandler}
                        disabled={isLoading}
                    />
                    <Form.Select 
                        options={roles}  
                        label='Role' 
                        value={registerForm.role} 
                        name='role'
                        onChange={(e,{value}) => setRegisterForm({...registerForm, role: value})}
                        disabled={isLoading}
                    />
                    <Form.Button content='Register' secondary fluid onClick={() => submitRegisterForm()} loading={isLoading}/>
                    <Form.Button content='Back' onClick={() => toggleFormDisplayed()} fluid/>
                </Form> 
        </LoginCard>
    );
}

export default RegisterForm;