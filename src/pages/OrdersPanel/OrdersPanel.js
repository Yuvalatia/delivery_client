import React, {useState, useContext, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { Card, Loader } from 'semantic-ui-react';
import './OrdersPanel.scss';

import { getUserDetails } from '../../api/user.api';
import { PanelNav, PanelBody } from './components'
import { CenteralContainer } from '../../components/layout';


const OrdersPanel = () => {
    const {userAuthToken} = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState(null);
    // loading state

    useEffect(() => {
        const getUserDetailsWithToken = async () => {
            try{
                const response = await getUserDetails(userAuthToken);
                setUserDetails(response.data);
            }catch(err){
                console.error(err.response.data.message); // handle err not completed
            }
        }
        if(userAuthToken){
            getUserDetailsWithToken();   
        }
    },[userAuthToken]);

    const renderOrdersPanel = () => {
        if(!userAuthToken){
            return <Redirect to='/' />
        }
        if(!userDetails){
            return <Loader active inline />;
        }
        return (
            <Card className="orders-panel">
                <PanelNav userDetails={userDetails} />
                <PanelBody />
            </Card>
        )
    }
    return(
       <CenteralContainer>
           {renderOrdersPanel()}
       </CenteralContainer>
    )
}

export default OrdersPanel;