import { GiHamburgerMenu } from 'react-icons/gi'
import { MockCommands } from "@/assets/mock/commands";
import { Category } from "@/lib/types";
import { useState } from "react";
import { useGlobalStore } from '@/lib/store';

const Navbar = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const { changeFilterName, changeFilterMode, filter } = useGlobalStore();

    const toggleOpened = () => setIsOpened(prev => !prev);
    
    const toFocus = (name: string) => {
        changeFilterName(name);
        changeFilterMode(true);
        filter(name);
    }

    return (
        <header className="w-full min-h-[52px] z-[9999] bg-white lg:h-14 fixed max-lg:flex-col flex px-4 py-2 lg:items-center justify-start border-b border-gray-300">
            <div className="flex h-[52px] lg:h-full items-center max-lg:w-full max-lg:justify-between">
                <a href="#main" className="flex space-x-2 h-full max-lg:w-full items-center">
                    <h1 className="text-2xl font-bold text-black">
                        mc.skayu.xyz
                    </h1>
                </a>

                <GiHamburgerMenu onClick={toggleOpened} className="lg:hidden cursor-pointer" size={32} color="#374151" />
            </div>

            <nav className={`flex flex-1 h-full lg:items-center lg:justify-end max-lg:flex-col ${!isOpened && "max-lg:hidden"}`}>
                {MockCommands.map((command: Category, i: number) => {
                    return (
                        <a onClick={() => toFocus(command.kategoria)} href={`#commands`} key={i} className="flex items-center lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                            {command.kategoria}
                        </a>
                    )
                })}
            </nav>
        </header>
    )
}

export default Navbar;