import React from 'react';
import './App.css';

//Handbags & Purses Stappenplan Buttons-1

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <button type='button' onClick={() => console.log("to the collection")}>
                    to the collection
                </button>
                <button type='button' onClick={() => console.log("shop all bags")}>
                    shop all bags
                </button>
                <button type='button' onClick = {() => console.log("pre-orders")} disabled>
                    pre-orders
                </button>
            </nav>
        </>

    );
}

export default App;



