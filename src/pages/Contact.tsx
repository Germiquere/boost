import { ContactForm } from "../components/ContactForm"
import blackDots from "../assets/black-dots.png"
export const Contact = () => {
    return (
        <section className="mx-auto max-w-7xl w-full py-10 px-3">
            <div className="flex flex-col items-center gap-5">
            <h3 className="font-semibold text-xl font-NotoSants">VISITANOS UNA VEZ</h3>
            <p className="w-9/12 text-gray-600 font-NotoSants">Por favor, no dudes en contactarnos a través de nuestro formulario a continuación si tienes alguna pregunta o inquietud. Es nuestro objetivo y placer hacer que nuestros clientes, tanto nuevos como existentes, se sientan como en casa. Para obtener respuestas más rápidas, te invitamos a llamarnos directamente. ¡Estamos ansiosos por verte!</p>
            <img src={blackDots} alt="" className="w-[50px] h-[5px] mb-5"/>
            </div>

            <ContactForm/>
        </section>
    )
}
