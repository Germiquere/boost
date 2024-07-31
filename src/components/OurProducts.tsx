import whiteDots from "../assets/white-dots.png"
import coffeBG from "../assets/coffeebackground.jpg"
import { ProductFacts } from "./ProductFacts"
export const OurProducts = () => {
  return (
    <div className="relative flex flex-col justify-between w-full py-20 sm:py-32 px-5 items-center gap-5 bg-cover bg-center text-white md:h-screen" style={{backgroundImage:`url(${coffeBG})`}}>
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div> 
        <div className="relative flex flex-col gap-5 items-center text-center">
            <h3 className="font-semibold text-lg font-NotoSants">INGREDIENTES ORGÁNICOS Y NATURALES CON POCOS CONSERVANTES</h3>
            <h2 className="font-semibold text-4xl">Hacer feliz a la gente</h2>
            <img src={whiteDots} alt="" className="w-[50px] h-[5px]"/>
            <p className="max-w-[40rem] font-NotoSants">No queremos ofrecer nada que no serviríamos a nuestra propia familia. Por esta razón, nuestra cafetería obtiene granos de una tostadora local y sirve solo café orgánico y de comercio justo. También ofrecemos productos caseros hechos con ingredientes naturales y con pocos, si es que hay, conservantes</p>
        </div>
        <ProductFacts/>
    </div>
  )
}
