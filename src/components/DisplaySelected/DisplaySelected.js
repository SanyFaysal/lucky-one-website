import React from 'react';

const DisplaySelected = (props) => {
    // console.log(props.watches.name);

    const { image, name } = props.watches
    return (
        <div className='d-flex row  mb-2 py-2  align-items-center shadow border rounded'>
            <div className='col-lg-4 col-md-4 col-4 mx-auto d-flex justify-content-center'>
                <img src={image} alt="" className='circle' />
            </div>
            <div className='col-lg-8 col-md-8 col-8'>
                <p className='ms-3'>{name}</p>
            </div>
        </div>
    );
};

export default DisplaySelected;