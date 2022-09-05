import React from "react";

function Tile({title, img, imgDescription, children}) {
    return (
        <section>
            <h2>{title}</h2>
            {img && <img src={img} alt={imgDescription}/>}
            {children}
        </section>

    );
}

export default Tile;
