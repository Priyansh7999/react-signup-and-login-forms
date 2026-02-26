import { Link } from "react-router-dom";

type NavbarProps = {
    username: string | undefined;
}

const Navbar = ({ username }: NavbarProps) => {
    return (
        <nav className="w-full p-4 sm:px-20 sm:py-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-sky-800">REACT</h1>

            <ul className="flex items-center gap-6">
                {
                    username ?
                    <li className="sm:text-lg font-medium">{username}</li>
                    :
                    <>
                        <li>
                            <Link
                                to="/signup"
                                className="sm:text-lg font-medium hover:text-sky-800 transition duration-300 ease-in-out"
                            >
                                Signup
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="sm:text-lg font-medium hover:text-sky-800 transition duration-300 ease-in-out"
                            >
                                Login
                            </Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default Navbar;