import React from 'react';
import DisplaySelected from '../DisplaySelected/DisplaySelected';


const Cart = ({ selectedWatches }) => {
    let selectedProducts = [...selectedWatches];
    const randomSelection = (allSelect) => {
        const random = Math.floor(Math.random() * 5);
        const selection = allSelect[random];
        const watches = selectedProducts.find(product => product.name === selection.name);

        return (
            alert(watches.name)
        )
    }
    const removeSelected = (
        document.getElementById('displaySelect').textContent = ''
    )


    return (
        <div className='mt-5 shadow  sticky-top p-3'>
            <h3 className='text-center mb-3'>Selected Products</h3>
            <div id='displaySelect'>
                {
                    selectedProducts.map(watches => <DisplaySelected watches={watches}></DisplaySelected>)
                }

            </div>

            <button onClick={() => randomSelection(selectedProducts)} className='btn bg-success text-white bg-opacity-75  fs-5   w-100' >
                Select 1 for me
            </button>
            <button onClick={() => removeSelected()} className='btn bg-danger text-white bg-opacity-75 fs-5 mt-2  mb-5 w-100'>
                Select Again
            </button>
        </div>
    );
};

export default Cart;