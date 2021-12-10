import useAppData from "../../data/context/hook/useAppData";
import Botao from "./Botao";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {

    const { tema, alternarTema } = useAppData()

    return (
        <div className={`
        ${tema}
        flex
        h-screen
        w-screen
               `}>
            <MenuLateral></MenuLateral>
            <div className={`
            flex
            flex-col
            w-full
            p-7
            bg-gray-300 dark:bg-gray-800
            `}>
                <div className={`flex justify-center`}>
                    <Botao texto={"Alternar Tema"} alternarTema={alternarTema}></Botao>
                </div>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}></Cabecalho>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}