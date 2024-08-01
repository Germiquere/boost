import { FooterCards } from "./FooterCards"

export const Footer = () => {
    return (
        <footer className=" bg-black">
            <div className="mx-auto max-w-7xl w-full flex flex-col">
                <FooterCards/>
                <p className=" text-gray-500 font-NotoSants text-center py-10">Copyright © 2024 Boost’s Casa de Cafe</p>
            </div>
        </footer>
    )
}
