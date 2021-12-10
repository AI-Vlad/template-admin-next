interface botaoProps {
    texto: string
    alternarTema: () => void
}

export default function Botao(props: botaoProps) {
    return (
        <button className={`
                w-40
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
        `} onClick={props.alternarTema}>{props.texto}</button>
    )
}