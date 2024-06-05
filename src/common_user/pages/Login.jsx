import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { AutocloseAlert } from '../../Utils/Functions';
import { Navigate } from 'react-router-dom';
import { useCheckAuth } from '../hooks/useCheckAuth';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassw0rd] = useState("");

    const { logIn } = useAuth();

    const { status } = useCheckAuth();
    // const handleAuth = (event) => {
    //     if (!logIn(event, { username, password }))
    //         AutocloseAlert(event.value)
    //     else
    //         AutocloseAlert(event.value)
    // }


    // return status !== "not-authenticated"
    return status !== "authenticated"
        ? (
            <>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                            Erutpion shop
                        </a>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Credenciales de acceso</h1>
                                <form className="space-y-4 md:space-y-6" action="#" onSubmit={(event) => logIn(event, { username, password })}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de usuario</label>
                                        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Somebody..." required="" value={username} onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={e => setPassw0rd(e.target.value)} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
        : (<Navigate to="/home" />)
}

export default Login;