import React from 'react';
import './PanelBody.scss';

import { OrdersTable } from '..';

const PanelBody = () => {

    return(
        <div className="panel-body">
            <OrdersTable />
        </div>
    )
};

export default PanelBody;