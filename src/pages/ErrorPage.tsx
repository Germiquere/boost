import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () =>{
  const error : any = useRouteError();

    return (
        <div id="error-page" className="flex flex-col gap-8 justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p>Lo sentimos, ha sucedido un error inesperado.</p>
            <p className="text-slate-400">
                <i>{error.statusText || error.message}. </i>
                <Link to="/" className="underline">Volver al inicio</Link>
            </p>
        </div>
    );
}