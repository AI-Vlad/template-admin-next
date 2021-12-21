import Link from "next/link";
import useAuth from "../../data/context/hook/useAuth";


interface AvatarUsuarioProps{
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const {imagemUrl} = useAuth().usuario ? useAuth().usuario : ""

    console.log(imagemUrl)

    return(
        <Link href='/perfil'>
            <img className={`
            rounded-full
            w-8
            h-8
            cursor-pointer
            ml-2
            ${props.className}
            `} src={imagemUrl ?? ""} alt="Avatar do Usuário" />
        </Link>
    )
}