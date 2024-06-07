import Card from "../Card";
import React, { useEffect } from 'react';
import RogAllyCard from "../components/Cards/RogAllyCard";
import SmartTVCard from "../components/Cards/SmartTVCard";
import SudaderaCard from "../components/Cards/SudaderaCard";

// import Carousel from "../Carousel";


const HomePage = () => {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = 'https://js.stripe.com/v3/buy-button.js';
    //     script.async = true;
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script); // Clean up on unmount
    //     };
    // }, []);

    return (
        <>
            {/* <Carousel /> */} {/**The Carousel component covers the DropdownMenu componente and doesn't allow it work well (fix) */}

            <div className="flex justify-center mb-8">
                <div className="p-4">
                    <RogAllyCard />
                    <RogAllyCard />
                    <RogAllyCard />
                    <RogAllyCard />
                    {/* <Card />
                    <Card />
                    <Card />
                    <Card /> */}
                </div>
                <div className="p-4">
                    <SmartTVCard />
                    <SmartTVCard />
                    <SmartTVCard />
                    <SmartTVCard />
                    {/* <Card />
                    <Card />
                    <Card />
                    <Card /> */}
                </div>
                <div className="p-4">
                    <SudaderaCard />
                    <SudaderaCard />
                    <SudaderaCard />
                    <SudaderaCard />
                    {/* <Card />
                    <Card />
                    <Card />
                    <Card /> */}
                </div>
            </div>
        </>
    );
}

export default HomePage;