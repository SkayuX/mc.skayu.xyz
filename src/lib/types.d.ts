

export type Category = {
    kategoria: string;
    komendy: Array<Command>;
}

export type Command = {
    nazwa: string;
    komenda: string;
    parametry?: {
        [key: string]: string;
    };
}

export type GlobalStore = {
    navSelectedItem: string;
    filterName: string;
    filter: (filterName: string) => void;
    filterMode: boolean;
    changeFilterName: (filterName: string) => void;
    changeFilterMode: (filterMode: boolean) => void;
    filteredCommands: Command[];
}

export type FilteredCommands = Command[];