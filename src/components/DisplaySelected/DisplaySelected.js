import React from 'react';

const DisplaySelected = (props) => {
    console.log(props.watches.name);
    const { image, name } = props.watches
    return (
        <div className='d-flex  align-items-center my-2'>
            <img src={image} alt="" className='circle' style={{ height: '50px', width: '50px' }} />
            <p className='ms-3 text-center'>{name}</p>

        </div>
    );
};

export default DisplaySelected;