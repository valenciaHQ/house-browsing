import Image from "next/image";
import React, { useState } from "react";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({
    weight: "600",
});

const Navitem = ({
    text,
    languajeItem,
}: {
    text: string | string[];
    languajeItem?: boolean;
}) => {
    const link = Array.isArray(text) ? text.join(" | ") : text
    return (
        <li
            className={`${openSans.style.fontFamily} ${openSans.style.fontWeight} p-4 md-p-0 text-lg font-semibold flex items-center hover:underline ${languajeItem && "absolute bottom-0 left-0 top-auto z-50 sm:static w-[6rem]"}`}
        >
            <a href="#">{link}</a>
        </li>
    );

}

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toogleMenu = () => setMobileMenu(!mobileMenu);
    return (
        <nav className="top-0">
            <div className="flex items-baseline text-md font-normal justify-between">
                <Image
                    className="sm:h-5"
                    src="/img/logo.png"
                    height={30}
                    width={120}
                    alt="logo"
                    priority
                />
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    onClick={toogleMenu}
                    className={`absolute m-2 right-0 md:hidden`}
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        aria-hidden="true"
                        width="20"
                        height="11"
                        viewBox="0 0 20 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="4" y1="0.5" x2="20" y2="0.500001" stroke="black" />
                        <line y1="5.5" x2="20" y2="5.5" stroke="black" />
                        <line x1="12" y1="10.5" x2="20" y2="10.5" stroke="black" />
                    </svg>
                </button>
                <ul
                    id="navbar-default"
                    className={`${!mobileMenu && "hidden"} md:static md:flex md:flex-1 md:justify-between md:h-full`}
                >
                    <div
                        className="md:hidden absolute right-0 top-0 p-2 cursor-pointer"
                        onClick={() => setMobileMenu(false)}
                    >
                        <p>X</p>
                    </div>
                    <div className="mobile-navbar md:common-navbar">
                        <Navitem text="About us" />
                        <Navitem text="Projects" />
                        <Navitem text="Career" />
                        <Navitem text="Contacts" />
                    </div>
                    <Navitem text={["En", "Fr"]} languajeItem />
                </ul>
            </div>
        </nav>
    );
};
export default React.memo(Navbar);
