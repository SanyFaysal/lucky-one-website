import React from 'react';

const SelectedProduct = ({ image, name }) => {
    return (
        <div>
            <img src={image} alt="" />
            <p> {name}</p>
        </div>
    );
};

export default SelectedProduct;