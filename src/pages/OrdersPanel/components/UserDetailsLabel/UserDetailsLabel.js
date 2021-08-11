import React from 'react';
import { Icon, Label } from 'semantic-ui-react'
import './UserDetailsLabel.scss';

const UserDetailsLabel = ({role=0, full_name='guest'}) => {
    return(
        <Label className="user-details-label">
            <Icon name='user' /> {full_name}
        </Label>
    );
}

export default UserDetailsLabel;