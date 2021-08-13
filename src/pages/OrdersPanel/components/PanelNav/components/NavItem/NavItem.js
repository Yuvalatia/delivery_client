import React from 'react';
import {List} from 'semantic-ui-react';

const NavItem = ({onClick=() => null, iconName, title, visable=true}) => {
    if(!visable){
        return null;
    }
    return(
        <List.Item onClick={onClick}>
            <List.Icon name={iconName}/>
            <List.Content>
                <List.Header>{title}</List.Header>
            </List.Content>
        </List.Item>
    );
}
export default NavItem;