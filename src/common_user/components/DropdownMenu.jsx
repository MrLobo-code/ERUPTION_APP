import '/src/common_user/components/styles.css';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {

    return (
        <>
            <ul className="dropdown_1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                    <Link to={`/jewelry`}>
                        <p className="text-gray-900 dark:text-white hover:underline">Joyas</p>
                    </Link>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
            </ul>
        </>
    );
}

export default DropdownMenu;