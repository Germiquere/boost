import {Link, NavLink } from "react-router-dom"
import logoBlack from "../assets/home-headdecor-coffe1-black.png"
interface NavLinkClassProps {
    isActive: boolean;
    isPending: boolean;
}

export const Header = () => {
    // array with the links 
    const links =[
        {name:"Bienvenidos",href:"/"},
        {name:"Catalogo",href:"/catalogo"},
        {name:"Contacto",href:"/contacto"},
    ];

    // function to change the text color when the link is active based on the url
    const getNavLinkClass = ({ isActive, isPending} : NavLinkClassProps) => {
        if (isActive) {
            return "text-green-600";
        } else if (isPending) {
            return "text-gray-600";
        } else {
            return "";
        }
    };

    return (
        <header className="bg-white">
            <div className="mx-auto flex  justify-between items-center max-w-7xl w-full">
            <Link to="/">
            <img src={logoBlack} alt="logo"/>
            </Link>
            <nav className="flex items-center justify-center p-6 lg:px-8 gap-3 text-sm sm:text-base" aria-label="Global">
                {
                    links.map( link => (
                        <NavLink key={link.name} to={link.href} className={getNavLinkClass}>{link.name}</NavLink>
                    ))
                }
            </nav>
            </div>
            
        </header>
    )
}
