import { MockCommands } from "@/assets/mock/commands";
import { create } from "zustand";
import { Command } from "./types";
import { GlobalStore } from "./types";

export const useGlobalStore = create<GlobalStore>((set) => ({
    navSelectedItem: "",
    filterName: "",
    filter: (filterName: string) => {
        const tempArray: Command[] = [];
        const addedCategories = new Set();

        for (let i = 0; i < MockCommands.length; i++) {
            MockCommands[i].komendy.flatMap((command) => {
                if (command.nazwa.toLowerCase().includes(filterName.toLowerCase()) 
                    || command.komenda.toLowerCase().includes(filterName.toLowerCase())
                    || MockCommands[i].kategoria.toLowerCase().includes(filterName.toLowerCase())
                ) {
                    if (!addedCategories.has(MockCommands[i].kategoria)) {
                        tempArray.push(...MockCommands[i].komendy);
                        addedCategories.add(MockCommands[i].kategoria);
                    }
                }
            });
        }

        const sortedArray = tempArray.sort((a, b) => a.nazwa.localeCompare(b.nazwa));

        set({ filteredCommands: sortedArray });
    },
    changeFilterName: (filterName: string) => set({ filterName }),
    filterMode: false,
    changeFilterMode: (filterMode: boolean) => set({ filterMode }),
    filteredCommands: []
}))