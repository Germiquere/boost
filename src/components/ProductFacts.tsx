import { motion } from "framer-motion";
import {search,knifeFork,leaf} from "../assets/svgs/svgs"
import { ProductFact } from "./ProductFact";

export interface IFact {
    title: string;
    img: JSX.Element
    text: string;
}

export const ProductFacts = () => {
    const facts = [
        {
            title:"LIMPIO",
            img :search,
            text:"Nuestros clientes disfrutan pasar tiempo en nuestra tienda gracias a un ambiente acogedor y limpio."
        },
        {
            title:"DELICIOSO",
            img :knifeFork,
            text:"Nuestros productos siempre se sirven frescos y cuidadosamente elaborados con ingredientes de calidad."
        },
        {
            title:"ORGANICO",
            img :leaf,
            text:"Orgánico y de comercio justo siguen siendo principios fundamentales en nuestra cafetería."
        }
    ]
    return (
        <motion.div 
        className="flex flex-col gap-8 md:flex-row"
        initial={{translateY:"100%",opacity:0}}
        whileInView={{translateY:"0",opacity:1}}
        viewport={{ 
            once:true
        }}
        transition={{ ease: "easeOut", duration: 0.65 }}
        >
            {facts.map( fact => (
                <ProductFact key={fact.title} fact={fact}/>
            ))}
        </motion.div>
    )
}
