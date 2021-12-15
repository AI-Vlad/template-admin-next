import { createContext, useState } from "react";

type Tema = 'dark' | 'light'

interface AppContextProps {
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: 'light',
    alternarTema: null
})

export function AppProvider(props) {

    const [tema, setTema] = useState<Tema>('light')

    function alternarTema() {
        const temaDefinido = () => {
            if (tema === "dark") {
                return 'light'
            }else{
                return 'dark'
            }
        }
        setTema(temaDefinido)
        console.log('ativando funçaõ')
        console.log(tema)
    }

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
