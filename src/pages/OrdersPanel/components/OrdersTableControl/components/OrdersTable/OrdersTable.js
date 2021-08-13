import React from 'react';
import { Table } from 'semantic-ui-react';

const OrdersTable = ({orders}) => {

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
    );
};

export default OrdersTable;