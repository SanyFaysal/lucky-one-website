import React from 'react';
import DisplaySelected from '../DisplaySelected/DisplaySelected';
const Cart = ({ selectedWatches }) => {
    // console.log(selectedWatches);

    // const { image, name } = selectedWatches;
    return (
        <div className='mt-5 shadow  sticky-top p-3'>
            <h3 className='text-center'>Selected Products</h3>
            <div>
                {
                    selectedWatches.map(watches => <DisplaySelected watches={watches}></DisplaySelected>)
                }
            </div>

            <button className='btn bg-success text-white bg-opacity-75  fs-5   w-100' >
                Select 1 for me
            </button>
            <button className='btn bg-danger text-white bg-opacity-75 fs-5 mt-2  w-100'>
                Select Again
            </button>
        </div>
    );
};

export default Cart;