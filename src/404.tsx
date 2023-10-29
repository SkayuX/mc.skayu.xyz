import { NavLink } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <main className="h-screen w-full flex flex-col items-center justify-center space-y-2">
            <h1 className="text-4xl font-bold text-black">404</h1>
            <h2 className="text-2xl font-semibold text-black">Strona nie znaleziona</h2>
            <NavLink to="/" className="px-4 py-2 text-white rounded-md bg-emerald-400 hover:bg-emerald-600 transition-all ease-in-out duration-400">
                Wróć do strony głównej
            </NavLink>
        </main>
    )
}

export default NotFoundPage;