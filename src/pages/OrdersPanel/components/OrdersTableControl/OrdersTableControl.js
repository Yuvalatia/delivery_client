import React,{useState, useContext, useEffect} from 'react';
import { Button } from 'semantic-ui-react';
import AuthContext from '../../../../context/AuthContext';
import './OrdersTableControl.scss';

import { getUserOrders } from '../../../../api/orders.api';
import { DividerHeader } from '../../../../components/shared';
import { OrdersTable, NewOrderForm } from './components';

import useModal from '../../../../hooks/modal.hook';

const OrdersTableControl = () => {
    const { userAuthToken } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [modal, setModalContent] = useModal();
    
    useEffect(() => {
        const getOrders = async () => {
            try{
                const response = await getUserOrders(userAuthToken);
                setOrders(response.data);
            }catch(err){
                console.error(err.response.data.message);
            }
        }
        if(userAuthToken){
            getOrders();
        }
    },[userAuthToken]);

    return(
        <div className="orders-table-control">
            <DividerHeader title='Orders' iconName='ordered list'/>
            <div className="control-bar">
                <Button color='black' size='mini' onClick={() => setModalContent('New Order', <NewOrderForm setOrders={setOrders}/>)}>New Order</Button>
                {modal}
            </div>
            <OrdersTable orders={orders} />
        </div>
    )
}
export default OrdersTableControl;