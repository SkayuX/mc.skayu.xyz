import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Category, Command } from "@/lib/types"
import { CopyBlock, dracula } from "react-code-blocks"
import { MockCommands } from "@/assets/mock/commands"
import { useGlobalStore } from "@/lib/store"
import React from "react"


const Commands = () => {
    const { filterMode, changeFilterName, changeFilterMode, filter, filteredCommands } = useGlobalStore();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const submit = () => {
        const filterName = (inputRef.current as HTMLInputElement).value
        changeFilterName(filterName);
        changeFilterMode(true)
        filter(filterName)
    }

    const clear = () => changeFilterMode(false);

    return (
        <section id="commands" className="w-full min-h-screen flex flex-col pt-20 justify-center items-center">
                <h1 className="text-6xl font-bold text-gray-900">
                    Komendy
                </h1>

                <div className="w-full h-auto flex flex-col items-center xl:px-32 lg:px-8 md:px-4 px-2 mt-8">
                    <section className="max-sm:flex-col w-[576px] h-auto max-sm:space-y-3 max-sm:w-4/5 sm:space-x-4 lg:mt-4 justify-between flex">
                        <div className="lg:w-96 max-sm:w-full max-lg:w-[calc(100%-12rem)] h-auto relative flex items-center justify-end">
                            <input ref={inputRef} className="border-[2px] w-full rounded-sm px-4 py-2 outline-none text-gray-700 border-gray-700 border-opacity-50" placeholder="Filtruj" />
                            {filterMode ? <AiOutlineClose onClick={clear} className="absolute opacity-70 cursor-pointer mr-4" size={24} /> : <AiOutlineSearch className="absolute opacity-30 mr-4" size={24} />}
                        </div>

                        <button onClick={submit} className="rounded-md bg-emerald-400 hover:bg-emerald-600 transition-all ease-in-out duration-400 h-auto text-white px-6 py-2">Szukaj Komend</button>
                    </section>

                    <section className="flex-col w-[576px] h-auto max-sm:space-y-3 max-sm:w-4/5 mt-4 flex">
                        <Accordion type="multiple">
                        {!filterMode && MockCommands.map((category: Category) => {
                            return (
                                <AccordionItem value={`item-${category.kategoria}`}>
                                    <AccordionTrigger>
                                        <p id={`${category.kategoria}`}>{category.kategoria}</p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {category.komendy.map((command: Command, j: number) => {
                                            return (
                                                <Accordion type="multiple" key={j}>
                                                    <AccordionItem value={`item-${command.komenda}`}>
                                                        <AccordionTrigger>
                                                            {command.nazwa}
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <CopyBlock
                                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                                // @ts-ignore
                                                                text={command.komenda}
                                                                theme={dracula}
                                                                codeBlock
                                                                wrapLongLines={true}
                                                            />
                                                            <p className="text-gray-500 my-4 text-sm">
                                                                Parametry
                                                            </p>
                                                            {command.parametry ? 
                                                                (
                                                                    Object.keys(command.parametry).map((param: string, k: number) => {
                                                                        return (
                                                                            <p className="text-gray-500 my-4 text-sm" key={k}>
                                                                                <strong>{param}: </strong> {command.parametry![param]}
                                                                            </p>
                                                                        )
                                                                    })
                                                                ) : (
                                                                  <p className="text-gray-500 my-4 text-sm">
                                                                    Brak parametrów
                                                                  </p>
                                                                )
                                                            }
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            )
                                        })}
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}

                        {filterMode && filteredCommands.map((command: Command) => {
                                return (
                                    <AccordionItem value={`item-${command.komenda}`}>
                                        <AccordionTrigger>
                                            {command.nazwa}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <CopyBlock
                                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                                // @ts-ignore
                                                text={command.komenda}
                                                theme={dracula}
                                                codeBlock
                                                wrapLongLines={true}
                                            />
                                            <p className="text-gray-500 my-4 text-sm">
                                                Parametry
                                            </p>
                                            {command.parametry ? 
                                                (
                                                    Object.keys(command.parametry).map((param: string, k: number) => {
                                                        return (
                                                            <p className="text-gray-500 my-4 text-sm" key={k}>
                                                                <strong>{param}: </strong> {command.parametry![param]}
                                                            </p>
                                                        )
                                                    })
                                                ) : (
                                                  <p className="text-gray-500 my-4 text-sm">
                                                    Brak parametrów
                                                  </p>
                                                )
                                            }
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })
                        }
                        </Accordion>
                    </section>
                </div>
            </section>
    )
}

export default Commands;