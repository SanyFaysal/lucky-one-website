import React from 'react';

const DisplaySelected = (props) => {
    // console.log(props.watches.name);

    const { image, name } = props.watches
    return (
        <div className='d-flex  align-items-center my-2 p-2 shadow border rounded'>
            <img src={image} alt="" className='circle' style={{ height: '100px', width: '60px' }} />
            <p className='ms-3 text-center'>{name}</p>
        </div>
    );
};

export default DisplaySelected;