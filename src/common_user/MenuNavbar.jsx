import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./components/DropdownMenu";
import { useAuth } from "./hooks/useAuth";
import { useCheckAuth } from "./hooks/useCheckAuth";
import { BsCart4 } from "react-icons/bs";
import { AutocloseAlert } from "../Utils/Functions";
import { apiAuth } from "../api/api";
import LoadingView from "./LoadingView";

const MenuNavbar = ({ children }) => {
    const [cartCounter, setCartCounter] = useState([]);

    const [open_dropdown, set_open_dropdown] = useState(false);
    const { logOut } = useAuth();
    const { status, username } = useCheckAuth();

    useEffect(() => {
        handleProductCartCounter()
    }, [username])

    const handleProductCartCounter = async () => {
        try {
            if (username != "") {
                const resposne = await apiAuth({ method: 'post', url: '/cartProductCounter', data: { username: username } });
                setCartCounter(resposne.data)
            }
        } catch (e) {
            console.log("ERROR: " + e);
        }
    }

    return (
        <>
            {
                cartCounter.length > 0
                    ? (
                        <>
                            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                                {/* <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900"> */}
                                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eruption</span>
                                    </a>
                                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                                        {
                                            status !== "authenticated"
                                                ? (
                                                    <>
                                                        {/* <a href="" className="text-xl text-gray-900 dark:text-white  hover:underline">Identifícate</a> */}
                                                        <Link to={`/login`}>
                                                            <p href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</p>
                                                        </Link>
                                                        <Link to={`/signUp`}>
                                                            <p href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Sign in</p>
                                                        </Link>
                                                    </>
                                                )
                                                : (
                                                    <>
                                                        <div>
                                                            <Link to={`/shoppingCart`} state={username}>
                                                                <p className="text-center font-bold">{cartCounter}</p>
                                                                <BsCart4 className="w-7 h-7" />
                                                            </Link>
                                                        </div>
                                                        <a href="" className="text-xl text-gray-900 dark:text-white  hover:underline">Bienvenid@: {username}</a>
                                                        <div className='text-center'>
                                                            <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded' onClick={() => logOut()}>Cerrar sesión</button>
                                                        </div>
                                                    </>
                                                )
                                        }
                                    </div>
                                </div>
                            </nav >
                            {/* <nav className="bg-gray-50 dark:bg-gray-700"> */}
                            < nav className="bg-gray-300 dark:bg-gray-700" >
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
                        </>
                    )
                    : (
                        <LoadingView />
                    )
            }
            {open_dropdown && <DropdownMenu />}
            {children} {/* Porqué funciona??  */}
        </>
    );
}

export default MenuNavbar;