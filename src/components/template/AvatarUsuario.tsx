import Link from "next/link";
import useAuth from "../../data/context/hook/useAuth";


interface AvatarUsuarioProps{
    className?: string
    imagemUrl?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const {usuario} = useAuth() 
    console.log(usuario)

    return(
        <Link href='/perfil'>
            <img className={`
            rounded-full
            w-8
            h-8
            cursor-pointer
            ml-2
            ${props.className}
            `} src={usuario.imagemUrl ?? ""} alt="Avatar do Usuário" />
        </Link>
    )
}