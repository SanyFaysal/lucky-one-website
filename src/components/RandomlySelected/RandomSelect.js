
import React from 'react';


const RandomSelect = (props) => {
    const { name, image, price } = props.select
    return (
        <div className='w-100 mx-auto text-center pb-3'>
            <img src={image} className="img-fluid max-width:100%" alt="" srcset="" />
            <h4 className='text-dark fw-bold'>{name}</h4>

        </div>
    );
};

export default RandomSelect;
