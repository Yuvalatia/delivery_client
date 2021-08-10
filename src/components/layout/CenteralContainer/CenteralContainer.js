import React from 'react';
import './CenteralContainer.scss';

const CenteralContainer = ({children}) => {
    return(
        <div className="centeral-container">
            {children}
        </div>
    );
};

export default CenteralContainer;