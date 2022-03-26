import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { image, price, name, id } = props.product
    const addToSelectProduct = props.addToSelect;
    return (
        <div class="col  ">
            <div class="card h-100 mx-auto border-0 shadow  rounded">
                <div className='mx-auto p-2'>
                    <img src={image} class="card-img-top img-fluid max-width: 100%  height: auto" alt="..." />
                </div>
                <div class="card-body ms-2">
                    <h6 class="card-title">{name}</h6>
                    <h5> Price :<span className='text-danger fw-bold'> ${price}</span></h5>
                </div>
                <button onClick={() => addToSelectProduct(id)} className='btn border-success  d-flex justify-content-center mb-3 align-items-center mx-auto border-2 w-75 shadow'>

                    <p className='m-0 pe-2'>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>
        </div>



    );
};

export default Product;