import React from 'react';
import './App.css';
import Button from "./components/Button";

//Handbags & Purses Stappenplan Buttons-2

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button isDisabled={false} clickHandler={() => console.log("to the collection")}>
                    to the collection
                </Button>
                <Button isDisabled={false} clickHandler={() => console.log("shop all bags")}>
                    shop all bags
                </Button>
                <Button isDisabled={true} clickHandler={() => console.log("pre-orders")}>
                    pre-orders
                </Button>
            </nav>
        </>

    );
}

export default App;



