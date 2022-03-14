import { createContext, useState } from "react";

export const CarrinhoContext = createContext()

export default function CarrinhoProvider({ children }) {

    const [qtdItem, setQtdItem] = useState(0)

    const [open, setOpen] = useState(false);

    return (
        <CarrinhoContext.Provider value={{qtdItem, setQtdItem, open, setOpen}}>
            {children}
        </CarrinhoContext.Provider>
    )
}