import Image from "next/image";
import React, { useState } from "react";

const Navitem = ({ text }: { text: string }) => <li className="text-lg font-semibold flex items-center"><a href="#">{text}</a></li>

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toogleMenu = () => setMobileMenu(!mobileMenu)
    return (
        <nav className="top-0">
            <div className="flex items-baseline text-md font-normal justify-between">
                <Image
                    src="/img/logo.png"
                    height={30}
                    width={120}
                    alt="logo"
                    priority
                />
                <button data-collapse-toggle="navbar-default" type="button" onClick={toogleMenu} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <ul id="navbar-default" className={`${!mobileMenu && "hidden"} md:static md:flex md:flex-1 md:justify-between h-full`}>
                    <div className="md:hidden flex justify-end" onClick={() => setMobileMenu(false)}><p>Close</p></div>
                    <div className="flex h-full w-1/2 justify-around md:w-full">
                        <Navitem text="About us" />
                        <Navitem text="Projects" />
                        <Navitem text="Career" />
                        <Navitem text="Contacts" />
                    </div>
                    <Navitem text="En" />
                </ul>
            </div>
        </nav>
    );
};
export default React.memo(Navbar);
