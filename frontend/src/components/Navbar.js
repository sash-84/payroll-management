import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }

    return (
        <header className="text-gray-600 body-font bg-white">
          <div className="container mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
            <NavLink to="/">
            <h1 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">PayMan</span>
            </h1>
            </NavLink>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <NavLink to="/"><li className="mr-5 hover:text-indigo-500">Home</li></NavLink>
                <NavLink to="/about"><li className="mr-5 hover:text-indigo-500">About</li></NavLink>
                <NavLink to="/features"><li className="mr-5 hover:text-indigo-500">Features</li></NavLink>
              </ul>   
            </nav>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0" onClick={handleClick}>Log In</button>
          </div>
        </header>
    );
}
