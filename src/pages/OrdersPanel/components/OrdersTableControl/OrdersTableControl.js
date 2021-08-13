import React,{useState, useContext, useEffect} from 'react';
import { Table, Header } from 'semantic-ui-react';
import AuthContext from '../../../../context/AuthContext';
import './OrdersTableControl.scss';

import { getUserOrders } from '../../../../api/orders.api';

const OrdersTableControl = () => {
    const { userAuthToken } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    /*const [isLoading, setIsLoading] = useState(false);*/
    
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
    },[userAuthToken])

    const renderOrdersTable = () => {
        return orders.map((order) => (
            <Table.Row key={order.id}>
            <Table.Cell>{order.id}</Table.Cell>
            <Table.Cell>{order.date}</Table.Cell>
            <Table.Cell>{order.status}</Table.Cell>
          </Table.Row>
        ))
    }

    return(
        <div className="orders-table">
            <Header as='h3' icon='ordered list' content='Orders' />
            <Table compact celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Order Number</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                   {renderOrdersTable()}
                </Table.Body>
            </Table>
        </div>
    )
}
export default OrdersTableControl;