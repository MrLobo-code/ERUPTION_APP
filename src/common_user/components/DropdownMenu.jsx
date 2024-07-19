import '/src/common_user/components/styles.css';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {

    return (
        <>
            <ul className="text-sm text-gray-700 dark:text-gray-200">
                <Link to={`/jewelry`} id="RouterNavLink">
                    <li>
                        <a href="#" className="block px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Joyas</a>
                    </li>
                </Link>
                <Link to={`/jewelry`} id="RouterNavLink">
                    <li>
                        <a href="#" className="block px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                </Link>
                <Link to={`/jewelry`} id="RouterNavLink">
                    <li>
                        <a href="#" className="block px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                </Link>
                <Link to={`/jewelry`} id="RouterNavLink">
                    <li>
                        <a href="#" className="block px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </Link>
            </ul>
        </>
    );
}

export default DropdownMenu;