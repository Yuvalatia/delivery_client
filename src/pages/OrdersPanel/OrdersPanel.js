import React from 'react';
import { Card } from 'semantic-ui-react';
import './OrdersPanel.scss';

import { PanelNav, PanelBody } from './components'
import { CenteralContainer } from '../../components/layout';

const OrdersPanel = () => {
    return(
       <CenteralContainer>
           <Card className="orders-panel">
                <PanelNav />
                <PanelBody />
           </Card>
       </CenteralContainer>
    )
}

export default OrdersPanel;