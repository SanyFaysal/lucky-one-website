import React from 'react';

const Product = (props) => {
    const { image, price, name } = props.product
    console.log(image);
    return (
        <div class="col">
            <div class="card h-75">
                <img src={image} class="card-img-top img-fluid max-width: 100%  height: auto" style={{ height: '150px', width: '150px' }} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>



    );
};

export default Product;