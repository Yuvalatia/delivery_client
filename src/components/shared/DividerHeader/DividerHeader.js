import React from 'react';
import { Header, Divider, Icon } from 'semantic-ui-react';

const DividerHeader = ({iconName, title}) => {
    return(
        <Divider horizontal>
            <Header as='h4'>
                <Icon name={iconName} />
                {title}
            </Header>
        </Divider>
    );
};

export default DividerHeader;