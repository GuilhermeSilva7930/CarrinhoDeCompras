import { createContext, useState } from "react";

export const CarrinhoContext = createContext()

export default function CarrinhoProvider({ children }) {

    const [qtdItem, setQtdItem] = useState(0)

    return (
        <CarrinhoContext.Provider value={{qtdItem, setQtdItem}}>
            {children}
        </CarrinhoContext.Provider>
    )
}