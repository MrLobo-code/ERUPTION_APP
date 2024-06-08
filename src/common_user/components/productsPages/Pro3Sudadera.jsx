import React, { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { Link } from "react-router-dom";

const Pro3Sudadera = () => {

    const { status } = useCheckAuth();

    const [currentImage, SetCurrentImage] = useState("/src/assets/testImages/pr3/1.jpg");

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
                updateImage("/src/assets/testImages/pr3/1.jpg", val);
                break;
            case 2:
                updateImage("/src/assets/testImages/pr3/2.jpg", val);
                break;
            case 3:
                updateImage("/src/assets/testImages/pr3/3.jpg", val);
                break;
            case 4:
                updateImage("/src/assets/testImages/pr3/4.jpg", val);
                break;
            case 5:
                updateImage("/src/assets/testImages/pr3/5.jpg", val);
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
                        <button onClick={() => handleCurrentImage(5)}><FaRegDotCircle className="m-2" /></button>
                    </div>
                    <div className="grid place-content-center">
                        <figure className="max-w-lg">
                            <img className="max-w-full rounded-lg object-contain h-48 w-96" src={currentImage} alt="image description" />
                            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
                        </figure>
                    </div>
                    <button>
                        <Link to={`/checkout`} id="RouterNavLink">
                            TEST
                        </Link>
                    </button>
                </div>
                <div className="m-4 mb-4 flex justify-center">
                    {
                        // status !== "no-authenticated"
                        status != "authenticated"
                            ? (
                                <>
                                    <div className="blur-sm">
                                        <figure className="max-w-lg">
                                            <img className="h-auto max-w-full rounded-lg" src="/src/assets/productsImgs/Sudadera.jpg" alt="image description" />
                                            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
                                        </figure>
                                    </div>
                                </>
                            )
                            : (
                                <>
                                    <stripe-buy-button
                                        buy-button-id="buy_btn_1POptEP3BkSI1DXnutHTsaac"
                                        publishable-key="pk_test_51PDX3UP3BkSI1DXnRtIUS2pG5q2U6M4Bg6PEiO6iMZ6sump4oks8qvXPCTJcnlBUdH446So4ftVWbdLX8LAihf2I00vZBZw08F"
                                    >
                                    </stripe-buy-button>
                                </>
                            )
                    }
                </div>
            </div>
        </>
    );
}

export default Pro3Sudadera;