import { DarkIcon, LightIcon } from "../icons";

interface botaoProps {
    texto: string
    alternarTema: () => void
}

export default function Botao(props: botaoProps) {
    return props.texto === "dark" ? (
        <div onClick={props.alternarTema} className={`
        hidden
        sm:flex
        cursor-pointer
        bg-gradient-to-r
        from-yellow-300
        to-yellow-600
        w-14
        lg:w-24
        h-8
        p-1
        rounded-full
        `}>
            <div className={`
               flex  items-center justify-center
                bg-white text-yellow-300 h-6 w-6 rounded-full
            `}>
                {LightIcon(4)}
            </div>
            <div className={`
                hidden
                lg:flex
                ml-4
                text-white
            `}>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={`
        hidden
        sm:flex
        cursor-pointer
        bg-gradient-to-r
        from-gray-500
        to-gray-900
        w-14
        lg:w-24
        h-8
        p-1
        rounded-full
        `}>
            <div className={`
                hidden
                lg:flex
                text-gray-300
                mr-2
                ml-2
            `}>
                <span>Escuro</span>
            </div>
            <div className={`
               flex  items-center justify-center
                bg-black text-yellow-300 h-6 w-6 rounded-full
                ml-2
            `}>
                {DarkIcon(4)}
            </div>
        </div>
    )
}