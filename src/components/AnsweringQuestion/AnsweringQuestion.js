import React from 'react';

const AnsweringQuestion = () => {
    return (
        <div className='bg-dark text-white ms-3 p-5'>
            <h1>How does React Work</h1>
            <p className='border-1'>
                There are two package- one is React and another is React DOM  , Where a component is written in a pure javascript code and need to transform into HTMl Code React  is used to covert it into HTML code then  need to show that  HTML in a browser . Here React DOM(Document Object Model) works to inject the html code into  a browser . And the total process works without loading the full page . And These the short process of working of react .
            </p>
            <h1>What are the Different between State Vs Props</h1>
            <p className='border-1'>
                Data can be passed from one component to another component via props but in state withing the component only the data can be passed. Props are read only means it can't modifie but in state data can be modified. Props can be used in a state or in a functional components but state can be only used in a component
            </p>
        </div>
    );
};

export default AnsweringQuestion;