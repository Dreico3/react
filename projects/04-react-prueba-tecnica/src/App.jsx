import React from "react";
import useCatImage from "./hooks/useCatImage";
import useFact from "./hooks/useFact";


export default function App() {
    const { fact, refreshFact } = useFact()
    const { urlImage } = useCatImage(fact)
    return (
        <>
            <h1>App de gatitios</h1>
            {fact && <h1>{fact}</h1>}
            {urlImage && <img src={urlImage} alt="cat"/>}
            <p>{urlImage}</p>
            <button onClick={refreshFact}>Refresh... !</button>
        </>
    )
}