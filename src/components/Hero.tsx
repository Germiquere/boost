import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import logoWhite from "../assets/home-headdecor-coffee.png";

export const Hero = () => {
    const { pathname } = useLocation();

    const getData = (path: string) => {
        switch (path) {
            case '/':
                return {
                    image: "https://res.cloudinary.com/djslo5b3u/image/upload/v1722568978/hero4webp_nusfge.webp",
                    title: "Boost’s Casa de Café",
                    subTitle: "TOSTADO LOCALMENTE. ORGANICO."
                }
            case '/contacto':
                return {
                    image: "https://res.cloudinary.com/djslo5b3u/image/upload/v1722568978/hero7_q4uoef.webp",
                    title: "Esperamos poder atenderte",
                    subTitle: ""
                }
            case '/catalogo':
                return {
                    image: "https://res.cloudinary.com/djslo5b3u/image/upload/v1722568978/hero5_llcy4r.webp",
                    title: "Conoce nuestras especialidades",
                    subTitle: ""
                }
            default:
                return {
                    image: "https://res.cloudinary.com/djslo5b3u/image/upload/v1722568978/hero4webp_nusfge.webp",
                    title: "Boost’s Casa de Café",
                    subTitle: "TOSTADO LOCALMENTE. ORGANICO."
                }
        }
    }

    const data = getData(pathname);

    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <div className="relative h-[70vh] overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 ease-out duration-200 w-screen h-screen"
                style={{ 
                    backgroundImage: `url(${data.image})`,
                    y: y,
                    backgroundPosition:"bottom",
                    backgroundSize: 'cover'
                }}
            >
            </motion.div>
            <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white gap-5 sm:gap-10 text-center">
                <img src={logoWhite} alt="logo" />
                {data.subTitle && (
                    <h3 className="text-base sm:text-xl font-semibold font-NotoSants">{data.subTitle}</h3>
                )}
                <motion.h1 
                className="text-3xl sm:text-7xl font-semibold"
                initial={{translateY:"100%"}}
                whileInView={{translateY:"0"}}
                viewport={{ 
                    once:true
                 }}
                transition={{ ease: "easeOut", duration: 0.65 }}
                >{data.title}</motion.h1>
                {pathname === "/" && (
                    <Link to="/catalogo" className="p-3 bg-white text-black rounded-md font-NotoSants font-semibold text-sm hover:text-white hover:bg-green-600">VER CATALOGO</Link>
                )}
            </div>
        </div>
    )
}
