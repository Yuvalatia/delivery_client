import React,{useContext} from 'react';
import AuthContext from '../../../../context/AuthContext';
import { List } from 'semantic-ui-react';
import './PanelNav.scss';

import { AppHeader } from '../../../../components/shared';
import { UserDetailsLabel } from '..';

const PanelNav = ({userDetails}) => {
    const { setUserAuthToken } = useContext(AuthContext);

    const logoutUser = () => {
        localStorage.removeItem('token');
        setUserAuthToken('');
    }
    return(
        <div className="panel-nav">
            <AppHeader size="medium" />
            <UserDetailsLabel role={userDetails.role} full_name={userDetails.full_name} />
            <List selection verticalAlign='middle'>
                <List.Item onClick={() => logoutUser()}>
                    <List.Icon name='log out' />
                    <List.Content>
                        <List.Header>Logout</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    );
};

export default PanelNav;