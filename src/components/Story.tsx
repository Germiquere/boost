import blackDots from "../assets/black-dots.png";
import aboutUs from "../assets/aboutUs.jpg"

export const Story = () => {
    return (
        <div className="flex flex-col justify-between mx-auto max-w-7xl w-full py-20 sm:py-32 px-3 md:flex-row items-center gap-5">
            <div className="flex flex-col gap-5 items-center text-center">
                <h3 className="font-semibold text-lg font-NotoSants">NUESTRA HISTORIA</h3>
                <h2 className="font-semibold text-4xl">Acerca de Boost’s</h2>
                <img src={blackDots} alt="" className="w-[50px] h-[5px]"/>
                <p className="w-56 sm:w-96 text-gray-600 font-NotoSants">Boost’s es una nueva cafetería independiente fundada por un par de veteranos del café de Santa Fe con mucha experiencia.</p>
            </div>
            <div>
                <img src={aboutUs} alt="imagen del local" />
            </div>
        </div>
    )
}
