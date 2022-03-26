import React from 'react';
import { fakeDb } from '../../Utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const products = fakeDb();
    return (
        <div className='row mb-4 mx-auto d-flex justify-content-between'>
            <div className='col-8 ms-2 row row-cols-1 row-cols-md-3 g-4'>
                {products.map(product =>
                    <Product product={product}
                        key={product.id}></Product>
                )}
            </div>
            <div className=' col-4'>
                <Cart></Cart>
            </div>
        </div>

    );
};

export default Products;