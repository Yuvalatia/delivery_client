import React from 'react';
import {Card} from 'semantic-ui-react';
import './LoginCard.scss';

const LoginCard = ({title, children}) => {
    return(
        <Card className="login-card">
             <Card.Content>
                    <Card.Header textAlign='center'>{title}</Card.Header>
                    <Card.Description>
                        {children}
                    </Card.Description>
                </Card.Content>
        </Card>
    );
}
export default LoginCard;