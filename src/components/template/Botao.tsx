interface botaoProps {
    texto: string
    alternarTema: () => void
}

export default function Botao(props: botaoProps) {
    return (
        <button onClick={props.alternarTema}>{props.texto}</button>
    )
}