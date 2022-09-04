import React from 'react';
import './App.css';
import Button from './components/Button';
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';

//Handbags & Purses Stappenplan Buttons-2 & Stappenplan Producten-1

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
                <article>
                    <span>Best seller</span>
                    <img src={bag_one} alt="bag_1"/>
                    <p>The handy bag</p>
                    <h4>€400,-</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={bag_two} alt="bag_2"/>
                    <p>The stylish bag</p>
                    <h4>€250,-</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={bag_three} alt="bag_3"/>
                    <p>The simple bag</p>
                    <h4>€300,-</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={bag_four} alt="bag_4"/>
                    <p>The trendy bag</p>
                    <h4>€150,-</h4>
                </article>
            </main>

        </>

    );
}

export default App;



