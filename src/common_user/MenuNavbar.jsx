import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./components/DropdownMenu";
import { useAuth } from "./hooks/useAuth";
import { useCheckAuth } from "./hooks/useCheckAuth";

// const MenuNavbar = ({ children, status }) => {
const MenuNavbar = ({ children }) => {

    const [open_dropdown, set_open_dropdown] = useState(false);

    const { logOut } = useAuth();

    const { status } = useCheckAuth();

    console.log("ahhhh" + status);

    return (
        <>
        <button onClick={() => console.log(status)}>
            test
        </button>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eruption</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                        {
                            status !== "authenticated"
                                ? (
                                    <>
                                        <Link to={`/login`}>
                                            <p href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</p>
                                        </Link>
                                        <Link to={`/sign_up`}>
                                            <p href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Sign in</p>
                                        </Link>
                                    </>
                                )
                                : (
                                    <div className='text-center'>
                                        <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded' onClick={() => logOut()}>Cerrar sesión</button>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link to={`/home`} id="RouterNavLink">
                                    <p href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</p>
                                </Link>
                            </li>
                            <button onClick={() => set_open_dropdown((prev) => !prev)} className="text-gray-900 dark:text-white hover:underline">
                                Categorías
                            </button>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                            </li>
                            <li>
                                <Link to={`/jewelry`} id="RouterNavLink">
                                    <p className="text-gray-900 dark:text-white hover:underline">Joyas</p>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <button onClick={make_payment} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-2 rounded mr-1 w-16"> */}


            {/* <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-2 rounded mr-1 w-16">
                <Link to={`/checkout`} id="RouterNavLink">
                    TEST
                </Link>
            </button> */}


            {open_dropdown && <DropdownMenu />}
            {children} {/* Porqué funciona??  */}
        </>
    );
}

export default MenuNavbar;