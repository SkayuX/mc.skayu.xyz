import Navbar from "./components/Navbar";
import MCIcon from '@/assets/images/goofyahhcatnetherite.png'
import { GiClick } from "react-icons/gi";
import Commands from "./components/Commands";

const Home = () => {
    return (
        <main className="w-full min-h-screen flex flex-col" id="main">
            <Navbar />

            <section id="main" className="w-full h-screen flex flex-col justify-center items-center">
                <img src={MCIcon} className="w-64 h-64 rounded-full" />

                <h1 className="text-6xl px-4 text-center font-bold text-gray-900">
                    Strona z komendami
                </h1>

                <p className="text-gray-500 text-3xl">
                    dla serwera Minecraft
                </p>

                <a href="#commands" className="mb-8 rounded-md flex items-center bg-emerald-400 hover:bg-emerald-600 transition-all ease-in-out duration-400 px-6 py-2 text-white font-semibold mt-4">
                    Szukaj komend 
                    <GiClick className="ml-1" />
                </a>
            </section>
            <Commands />
        </main>
    )
}

export default Home;