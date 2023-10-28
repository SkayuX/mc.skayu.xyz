

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

export type FilteredCommands = Command[];