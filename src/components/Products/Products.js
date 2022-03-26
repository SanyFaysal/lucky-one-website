import React from 'react';
import { fakeDb } from '../../Utilities/fakeDb';
import Product from '../Product/Product';

const Products = () => {
    const products = fakeDb();
    return (
        <div className='row container mx-auto'>
            <div className='col-9 row row-cols-1 row-cols-md-3 g-4'>
                {products.map(product =>
                    <Product product={product}
                        key={product.id}></Product>
                )}
            </div>
            <div className='col-3'>
                <h1>cart container</h1>
            </div>
        </div>

    );
};

export default Products;