import React from 'react'
import Header from "../Components/Header"
import LeftSide from "../Components/LeftSide"
import RihgtSide from "../Components/RihgtSide"
import MiddleSide from "../Components/MiddleSide"

const Home = () => {
    return (
        <>
            <main>
                <LeftSide/>
                <MiddleSide/>
                <RihgtSide/>
            </main>
        </>
    )
}

export default Home
