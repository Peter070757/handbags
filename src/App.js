import React from 'react';
import './App.css';
import Button from './components/Button';
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';
import Product from "./components/Product";

//Handbags & Purses Stappenplan Buttons-2 & Stappenplan Producten-2

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

            <main>
                <Product
                    label="Best seller"
                    image={bag_one}
                    title="The handy bag"
                    price={400}
                />
                <Product
                    label="Best seller"
                    image={bag_two}
                    title="The stylish bag"
                    price={250}
                />
                <Product
                    label="New collection"
                    image={bag_three}
                    title="The simple bag"
                    price={300}
                />
                <Product
                    label="New collection"
                    image={bag_four}
                    title="The trendy bag"
                    price={150}
                />
            </main>

        </>

    );
}

export default App;



