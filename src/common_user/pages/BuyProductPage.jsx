import React, { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";

const BuyProductPage = () => {

    const [currentImage, SetCurrentImage] = useState("/src/assets/testImages/console1.jpg");

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/buy-button.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Clean up on unmount
        };
    }, []);

    const handleCurrentImage = (val) => {
        switch (val) {
            case 1:
                updateImage("/src/assets/testImages/console1.jpg", val);
                break;
            case 2:
                updateImage("/src/assets/testImages/console2.jpg", val);
                break;
            case 3:
                updateImage("/src/assets/testImages/console3.jpg", val);
                break;
            case 4:
                updateImage("/src/assets/testImages/console4.jpg", val);
                break;
            default:
                console.log(`Error`);
        }
    }

    const updateImage = (imagePath, val) => {
        SetCurrentImage(imagePath);
    }

    return (
        <>
            <div className="grid grid-cols-2">
                <div className=" m-4 grid grid-cols-2">
                    <div className="grid place-content-center">
                        <button onClick={() => handleCurrentImage(1)}><FaRegDotCircle className="m-2" /></button>
                        <button onClick={() => handleCurrentImage(2)}><FaRegDotCircle className="m-2" /></button>
                        <button onClick={() => handleCurrentImage(3)}><FaRegDotCircle className="m-2" /></button>
                        <button onClick={() => handleCurrentImage(4)}><FaRegDotCircle className="m-2" /></button>
                    </div>
                    <div className="grid place-content-center">
                        <figure className="max-w-lg">
                            <img className="h-auto max-w-full rounded-lg" src={currentImage} alt="image description" />
                            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="m-4 mb-4 flex justify-center">
                    <stripe-buy-button
                        buy-button-id="buy_btn_1PKTx7P3BkSI1DXnoQXYRGtu"
                        publishable-key={import.meta.env.VITE_STRIPE_PK}
                    >
                    </stripe-buy-button>
                </div>
            </div>
        </>
    );
}

export default BuyProductPage;