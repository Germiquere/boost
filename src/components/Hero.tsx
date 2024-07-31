import { Link, useLocation } from "react-router-dom"

import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
import logoWhite from "../assets/home-headdecor-coffee.png"

export const Hero = () => {
    const {pathname} = useLocation();

    // Function to get the background image,title and subtitle based on the pathname
    const getData = (path : string) => {
        switch (path) {
            case '/':
                return {
                    image: hero1,
                    title: "Boost’s Casa de Café",
                    subTitle: "TOSTADO LOCALMENTE. ORGANICO."
                }
            case '/contacto':
                return {
                    image: hero2,
                    title: "Esperamos poder atenderte",
                    subTitle: ""
                }
            case '/catalogo':
                return {
                    image: hero3,
                    title: "Variedad de gran ciudad, precios de pueblo pequeño",
                    subTitle: ""
                }
            default:
                return {
                    image: hero1,
                    title: "Boost’s Casa de Café",
                    subTitle: "TOSTADO LOCALMENTE. ORGANICO."
                }
        }
    }
    const data = getData(pathname);
    return (
        <div className={`relative h-[70vh]  bg-cover bg-center`} style={{ backgroundImage: `url(${data.image})`}}>
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white gap-5 sm:gap-10 text-center">
            <img src={logoWhite} alt="logo" />
            {data.subTitle && (
                <h3 className="text-base sm:text-xl font-semibold font-NotoSants">{data.subTitle}</h3>
            )}
            <h1 className="text-3xl sm:text-7xl font-semibold">{data.title}</h1>
            {pathname === "/" &&(
                <Link to="/catalogo" className="p-3 bg-white text-black rounded-md font-NotoSants font-semibold text-sm hover:text-white hover:bg-green-600 ">VER CATALOGO</Link>
            )}
        </div>
    </div>
    )
}
