import React, { useState } from 'react';
import { fakeDb } from '../../Utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';



const products = fakeDb();

const Products = () => {
    const [watches, setWatches] = useState([])
    const selected = [...watches]
    const addToSelect = (id) => {

        const selectedProduct = products.find(product => product.id === id);
        if (watches) {
            selected.push(selectedProduct)
            setWatches(selected)
        }

    }

    return (
        <div className='row mb-4 mx-auto d-flex justify-content-between'>
            <div className='col-8 ms-2 row row-cols-1 row-cols-md-3 g-4'>
                {products.map(product =>
                    <Product
                        product={product}
                        addToSelect={addToSelect}
                        key={product.id}
                    ></Product>
                )}
            </div>
            <div className='col-4'>
                <Cart selectedWatches={watches}></Cart>
            </div>
        </div>

    );
};


export default Products;