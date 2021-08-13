import React from 'react';
import './PanelBody.scss';

import { OrdersTableControl } from '..';

const PanelBody = () => {
    return(
        <div className="panel-body">
            <OrdersTableControl />
        </div>
    )
};

export default PanelBody;