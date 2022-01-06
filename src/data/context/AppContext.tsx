import { createContext, useEffect, useState } from "react";

type Tema = 'dark' | 'light'

interface AppContextProps {
    tema?: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: 'light',
    alternarTema: null
})

export function AppProvider(props) {

    
    const [tema, setTema] = useState('light')
    const [temaAtual, setTemaAtual] = useState('light')
    

   

    useEffect(() => {
        const temaObserver = localStorage.getItem('tema')  
        setTema(temaObserver)
        }
    , [])

    function alternarTema() {
      

        const temaDefinido = () => {
            if (tema === "dark") {
                setTemaAtual('dark')
                return 'light'
            }else{
                setTemaAtual('light')
                return 'dark'
            }
        }
        
        setTema(temaDefinido)
        localStorage.setItem('tema', temaAtual)
        console.log('ativando funçaõ')
        
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
