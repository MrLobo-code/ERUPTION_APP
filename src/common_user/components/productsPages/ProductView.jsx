import React, { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AutocloseAlert } from "../../../Utils/Functions";
import { apiAuth } from "../../../api/api";

// const ProductView = ({ id, title, description, price }) => {
const ProductView = () => {
    const { status, username } = useCheckAuth();
    const [resData, setResData] = useState([]);
    const [total, setTotal] = useState();
    const envio = 99.9;
    const navigate = useNavigate();

    const location = useLocation();

    const { id, img, title, description, price } = location.state;

    // const [currentImage, SetCurrentImage] = useState("/src/assets/testImages/pr3/1.jpg");
    const [currentImage, SetCurrentImage] = useState(`https://eruptionbucket.s3.us-east-2.amazonaws.com/${title}/1.jpg`);
    const dataToPass = { amount: 7191.00, currency: 'usd' };

    console.log(currentImage);
    console.log(title);

    useEffect(() => {
    }, []);

    const handleCurrentImage = (val) => {
        switch (val) {
            case 1:
                updateImage(`https://eruptionbucket.s3.us-east-2.amazonaws.com/${title}/1.jpg`, val);
                break;
            case 2:
                updateImage(`https://eruptionbucket.s3.us-east-2.amazonaws.com/${title}/2.jpg`, val);
                break;
            case 3:
                updateImage(`https://eruptionbucket.s3.us-east-2.amazonaws.com/${title}/3.jpg`, val);
                break;
            case 4:
                updateImage(`https://eruptionbucket.s3.us-east-2.amazonaws.com/${title}/4.jpg`, val);
                break;
            case 5:
                updateImage(`https://eruptionbucket.s3.us-east-2.amazonaws.com/${title}/5.jpg`, val);
                break;
            default:
                console.log(`Error`);
        }
    }

    const updateImage = (imagePath, val) => {
        SetCurrentImage(imagePath);
    }

    const handleAddToCart = async () => {
        try {
            const response = await apiAuth({
                method: 'post', url: '/addToCart', data: {
                    username: username,
                    ProductName: title,
                    productDescription: description,
                    Price: price,
                    imgPath: img
                    // imgPath: username,
                }
            })
            setResData(response);
            AutocloseAlert(title + " añadido al carrito");
            // navigate("/home");
            navigate("/message");
            navigate(0);
        } catch (e) {
            console.log(e);
        }
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
                </div>
                <div className="m-4 mb-4 flex justify-center">
                    {
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
                                    <div className="flex flex-col">
                                        <div className="mt-6 grow sm:mt-8 lg:mt-0 mb-4">
                                            <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                                                <div className="space-y-2">
                                                    <dl className="flex items-center justify-between gap-4">
                                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Precio Original</dt>
                                                        {/* <dd className="text-base font-medium text-gray-900 dark:text-white">$6,592.00</dd> */}
                                                        <dd className="text-base font-medium text-gray-900 dark:text-white">${(Number(price) + (Number(price) / 2)).toFixed(2)}</dd>
                                                    </dl>

                                                    <dl className="flex items-center justify-between gap-4">
                                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Descuento</dt>
                                                        {/* <dd className="text-base font-medium text-green-500">-$299.00</dd> */}
                                                        <dd className="text-base font-medium text-green-500">-${(Number(price) / 2).toFixed(2)}</dd>
                                                    </dl>

                                                    <dl className="flex items-center justify-between gap-4">
                                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Envío</dt>
                                                        {/* <dd className="text-base font-medium text-green-500">-$299.00</dd> */}
                                                        <dd className="text-base font-medium text-green-500">${envio}</dd>
                                                    </dl>
                                                    {/* <dl className="flex items-center justify-between gap-4">
                                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Envío</dt>
                                                        <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                                                    </dl> */}
                                                    {/* 
                                                    <dl className="flex items-center justify-between gap-4">
                                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                                                        <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                                                    </dl> */}
                                                </div>

                                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                                    {/* <dd className="text-base font-bold text-gray-900 dark:text-white">$7,191.00</dd> */}
                                                    <dd className="text-base font-bold text-gray-900 dark:text-white">${setTotal((Number(price) + Number(envio)).toFixed(2))}</dd>
                                                </dl>
                                            </div>
                                            <div className="mt-6 flex items-center justify-center gap-8">
                                                <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
                                                <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg" alt="" />
                                                <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                                                <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
                                                <img className="h-8 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
                                                <img className="hidden h-8 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg" alt="" />
                                            </div>
                                        </div>
                                        <Link to={'/checkout'} state={dataToPass} id="RouterNavLink" className="mb-2 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <button >
                                                Pagar
                                            </button>
                                        </Link>

                                        {/* <Link to={'/checkout'} state={dataToPass} id="RouterNavLink" className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> */}
                                        <button onClick={handleAddToCart} className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Agregar al carrito
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </>
                            )
                    }
                </div>
            </div>
        </>
    );
}

export default ProductView;