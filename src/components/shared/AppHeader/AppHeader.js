import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './AppHeader.scss';

const AppHeader = ({size='large'}) => {

    const setHeaderSize = () => {
        switch(size){
            case 'medium':
                return 'h2';
            case 'small':
                return 'h3';
            default:
                return 'h1';
        }
    }
    return(
        <Header className="app-header" as={setHeaderSize()}>
            <Icon name='paper plane' className="app-header-icon"/>
            <Header.Content>
            Delivery App
            </Header.Content>
         </Header>
    );
};

export default AppHeader;