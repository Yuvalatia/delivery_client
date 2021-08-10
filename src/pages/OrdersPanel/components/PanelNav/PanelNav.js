import React from 'react';
import './PanelNav.scss';

import { AppHeader } from '../../../../components/shared';

const PanelNav = () => {
    return(
        <div className="panel-nav">
            <AppHeader size="medium" />
            <div>
                actions
            </div>
        </div>
    );
};

export default PanelNav;