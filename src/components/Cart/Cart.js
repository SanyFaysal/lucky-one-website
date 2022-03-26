import React, { useState } from 'react';
import DisplaySelected from '../DisplaySelected/DisplaySelected';
import RandomSelect, { show } from '../RandomlySelected/RandomSelect';


const Cart = ({ selectedWatches }) => {
    let selectedProducts = [...selectedWatches];
    const [select, setSelect] = useState([]);
    const randomSelection = (allSelect) => {
        let random = Math.floor(Math.random() * 5);
        const selection = allSelect[random];
        if (random <= 4) {
            if (selectedProducts.length <= 4) {
                const watches = selectedProducts.find(product => product.name === selection.name);
                setSelect(watches)
            }
            else {
                alert('Insert 4 Products')
                document.getElementById('displaySelect').textContent = ''
            }
        }
        else {
            random = 4;
            const watches = selectedProducts.find(product => product.name === selection.name);
            setSelect(watches)
        }


    }
    const clearDisplay = () => {
        selectedProducts = [];
        setSelect(selectedProducts)
    }

    return (
        <div className='mt-5 shadow  sticky-top p-3'>
            <h3 className='text-center mb-3'>Selected Products</h3>
            <div id='displaySelect' className='w-100'>
                {
                    selectedProducts.map(watches => <DisplaySelected watches={watches}></DisplaySelected>)
                }
                <div className='w-100 mx-auto'>
                    <RandomSelect select={select}></RandomSelect>
                </div>
            </div>

            <button onClick={() => randomSelection(selectedProducts)} className='btn bg-success text-white bg-opacity-75  fs-5   w-100' >
                Select 1 for me
            </button>
            <button onClick={() => clearDisplay()} className='btn bg-danger text-white bg-opacity-75 fs-5 mt-2  mb-5 w-100'>
                Select Again
            </button>
        </div>
    );
};

export default Cart;