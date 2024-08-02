import { useForm } from "../hooks/useForm";
import { errorIcon } from "../assets/svgs/svgs";
import { useState } from "react";
interface IContactFormState {
    name: string;
    surname: string;
    email: string;
    message: string;
}

const initialFormState: IContactFormState = {
    name: '',
    surname: '',
    email: '',
    message: '',
};
const validationRules = {
    name: (value: string) => !value ? 'Debes completar el nombre' : undefined,
    surname: (value: string) => !value ? 'Debes completar el apellido' : undefined,
    email: (value: string) => !value ? 'Debes completar el email' : (!/\S+@\S+\.\S+/.test(value) ? 'El email es invalido' : undefined),
    message: (value: string) => !value ? 'Debes completar el mensaje' : undefined,
};
export const ContactForm = () => {
    const {
        formState,
        errors,
        onInputChange,
        onResetForm,
        validate,
        
    } = useForm<IContactFormState>(initialFormState,validationRules);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [progress, setProgress] = useState(100);
    const { name, surname, email, message } = formState;

    // funciton to handle the form's submit
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(validate()) {
            setIsSubmitting(true);
            onResetForm();
            // interval to decrease the length of the toast
            const intervalId = setInterval(() => {
                setProgress(prev => {
                    if (prev <= -5) {
                        clearInterval(intervalId);
                        setIsSubmitting(false);
                        setProgress(100);
                        return 0;
                    }
                    return prev - 1;
              });
            }, 30);
            return () => clearInterval(intervalId);
        }
    };

    return (
        <form onSubmit={onSubmit} className="py-10 flex flex-col gap-5">
            {/* NAME AND SURNAME INPUTS */}
            <div className="flex flex-col sm:flex-row gap-5">
                {/* NAME INPUT */}
                <div className="w-full">
                    <div className="relative h-11 w-full min-w-[200px] mb-3">
                        <input placeholder="John"
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={onInputChange}
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-green-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                        />
                        <label
                        htmlFor="name"
                        className="font-NotoSants after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-green-600 peer-focus:after:scale-x-100 peer-focus:after:border-green-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        NOMBRE*
                        </label>
                    </div>
                    {errors.name && 
                        <p className="bg-red-100 mt-3 p-2 flex gap-2 items-center rounded-md">
                            <span className="text-red-500">{errorIcon}</span> 
                            <span className="text-red-800">{errors.name}</span>
                        </p>
                    }
                </div>
                {/* SURNAME INPUT */}
                <div className="w-full">
                    <div className="relative h-11 w-full min-w-[200px] mb-3">
                    <input 
                    placeholder="Doe"
                    id="surname"
                    type="text"
                    name="surname"
                    value={surname}
                    onChange={onInputChange}
                    className=" peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-green-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                    htmlFor="name"
                    className=" font-NotoSants after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-green-600 peer-focus:after:scale-x-100 peer-focus:after:border-green-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    APELLIDO*
                    </label>
                    </div>
                    {errors.surname && 
                        <p className="bg-red-100 mt-3 p-2 flex gap-2 items-center rounded-md">
                            <span className="text-red-500">{errorIcon}</span> 
                            <span className="text-red-800">{errors.surname}</span>
                        </p>
                    }
                </div>
                
            </div>

            {/* EMAIL INPUT */}
            <div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input 
                    placeholder="johndoe@gmail.com"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-green-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                    htmlFor="name"
                    className="font-NotoSants after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-green-600 peer-focus:after:scale-x-100 peer-focus:after:border-green-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    EMAIL*
                    </label>
                </div>
                {errors.email && 
                    <p className="bg-red-100 mt-3 p-2 flex gap-2 items-center rounded-md">
                        <span className="text-red-500">{errorIcon}</span> 
                        <span className="text-red-800">{errors.email}</span>
                    </p>
                }
            </div>

            {/* MESSAGE TEXTAREA */}
            <div>
                <div className="relative w-full min-w-[200px]">
                    <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={onInputChange}
                    placeholder="Envianos un mensaje"
                    className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-green-600 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"></textarea>
                    <label
                    className="font-NotoSants after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green-600 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-green-600 peer-focus:after:scale-x-100 peer-focus:after:border-green-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    MENSAJE*
                    </label>
                </div>
                {errors.message && 
                <p className="bg-red-100 mt-1 p-2 flex gap-2 items-center rounded-md">
                    <span className="text-red-500">{errorIcon}</span> 
                    <span className="text-red-800">{errors.message}</span>
                </p>
                }
            </div>

            <div className="flex flex-col gap-5 items-center sm:flex-row">
                <button type="submit" className="p-3 bg-black text-white rounded-md font-NotoSants font-semibold text-sm hover:text-white hover:bg-green-600 w-full sm:w-56 transition-all">ENVIAR</button>
                <div className={`relative rounded-md ${isSubmitting ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>
                    <div
                    className=" absolute top-0 h-1 bg-green-900 rounded-r-md transition-all"
                    style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                    ></div>
                    <p className={`p-3 bg-green-600 text-white rounded-md`}>
                    El mensaje fue enviado correctamente
                    </p>
                </div>
            </div>
            
        </form>
    )
}
