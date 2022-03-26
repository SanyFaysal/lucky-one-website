import React from 'react';

const Product = (props) => {
    const { image, price, name, id } = props.product
    const addToSelectProduct = props.addToSelect;
    return (
        <div class="col  ">
            <div class="card h-100 mx-auto border-0 shadow  rounded">
                <div className='mx-auto p-2 mb-0'>
                    <img src={image} class="card-img-top img-fluid max-width: 100%  height: auto" alt="..." />
                </div>
                <div class="card-body ms-2">
                    <h6 class="card-title">{name}</h6>
                    <p className='cart-text'> Price : ${price}</p>
                </div>
                <button onClick={() => addToSelectProduct(id)} className='btn border-success border-2 w-50 mb-3 mx-auto shadow'>Add to cart</button>
            </div>
        </div>



    );
};

export default Product;