import React, { useState } from 'react';
import { AutocloseAlert } from '../../Utils/Functions';
import { apiAuth } from '../../api/api';
import { Navigate } from 'react-router-dom';
import LoadingView from '../LoadingView';

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [passwordInput1, setPasswordInput1] = useState("");
    const [passwordInput2, setPasswordInput2] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);


    const handleCreateUser = async (event) => {
        try {
            event.preventDefault();
            if (passwordInput1 === passwordInput2 && email != "" && passwordInput1 != "" && passwordInput2 != "" && username != "") {
                console.log(); ("Attempting to create user...");
                setLoading(true);
                const response = await apiAuth({
                    method: 'post', url: '/signup', data: {

                        email,
                        username,
                        password: passwordInput2
                    }
                })
                if (response) {
                    AutocloseAlert('Usuario creado con éxito!');
                    setRedirect(true);
                }
                else {
                    AutocloseAlert("ERROR AL CREAR USUARIO")
                }
            }
            else {
                AutocloseAlert("Error!!! valide los campos")
            }
        } catch (error) {
            AutocloseAlert("Error!!!")
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            {loading ? (
                <LoadingView />
            )
                : (
                    <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                                Erutpion shop
                            </a >
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Crea tus credenciales de acceso</h1>
                                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleCreateUser}>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                                            <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Somebody..." required="" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de usuario</label>
                                            <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Somebody..." required="" value={username} onChange={e => setUsername(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={passwordInput1} onChange={e => setPasswordInput1(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repite tu contraseña</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={passwordInput2} onChange={e => setPasswordInput2(e.target.value)} />
                                        </div>
                                        <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear cuenta</button>
                                    </form>
                                </div>
                            </div>
                        </div >
                    </section >
                )
            }
        </>
    );
}

export default SignUp;