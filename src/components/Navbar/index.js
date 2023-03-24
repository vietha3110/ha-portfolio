import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import avocado from "../../assets/kawanimals-avocado.gif"

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'technologies'
        },
        {
            id: 5,
            link: 'contact'
        }
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <img
                    src={avocado}
                    alt="avocado"
                    className="w-10"
                />
            </div>
            <ul className="hidden md:flex">
                {
                    links.map(({id, link}) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 capitalize" 
                            style={{cursor:"pointer"}}
                        >
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))
                }
            </ul>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" style={{cursor:"pointer"}}>
                {
                    nav ? <FaTimes size={30}/> : <FaBars size={30}/>
                }
            </div>
            {nav &&
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 py-6 cursor-pointer text-4xl capitalize"
                            style={{cursor:"pointer"}}
                        >
                            <Link
                                to={link}
                                smooth
                                duration={500}
                                onClick={()=>setNav(!nav)}
                            >
                                {link}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            }
        </div>
    )
}

export default NavBar
