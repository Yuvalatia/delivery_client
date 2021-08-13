import React,{useContext} from 'react';
import AuthContext from '../../../../context/AuthContext';
import { List } from 'semantic-ui-react';
import './PanelNav.scss';

import { AppHeader } from '../../../../components/shared';
import { UserDetailsLabel } from '..';
import NavItem from './components/NavItem/NavItem';

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
                <NavItem iconName='add to cart' title='New product' visable={userDetails.role === 1}/>
                <NavItem onClick={() => logoutUser()} iconName='log out' title='Logout' />
            </List>
        </div>
    );
};

export default PanelNav;