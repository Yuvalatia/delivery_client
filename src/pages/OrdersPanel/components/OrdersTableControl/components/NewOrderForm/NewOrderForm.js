import React,{useState, useEffect, useContext} from 'react';
import { Table, Button } from 'semantic-ui-react';

import { getProducts } from '../../../../../../api/products.api';
//import { setNewOrders } from '../../../../../../api/orders.api';
import AuthContext from '../../../../../../context/AuthContext';

const NewOrderForm = () => {
    const { userAuthToken } = useContext(AuthContext);
    const [allProducts, setAllProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const getProductsFromAPI = async () => {
            try{
                const response = await getProducts(userAuthToken);
                setAllProducts(response.data);
            }catch(error){
                console.log(error); // handling error
            }
        }
        getProductsFromAPI();
    },[userAuthToken])

    const productSelectHandler = (event) => {
        if(event.target.checked){
            setSelectedProducts([...selectedProducts, event.target.value])
        }else{
            setSelectedProducts(selectedProducts.filter(productId => productId !== event.target.value));
        }
    }

    const renderProductList = () => {
        return allProducts.map(product => (
            <Table.Row key={product.id}>
                <Table.Cell collapsing>
                    <input type='checkbox' value={product.id} onChange={productSelectHandler}/>
                </Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
            </Table.Row>
        ))
    }

        return (
            <div>  
                <Table compact celled definition>
                <Table.Body>
                        {renderProductList()}
                </Table.Body>
                </Table>
                <Button>Send Order</Button>
                {JSON.stringify(selectedProducts)}
            </div>
        )

};

export default NewOrderForm;