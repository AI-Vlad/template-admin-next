import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import HorizonLogo from '../../public/logo-horizon.jpeg'
import { WarningIcon } from "../components/icons";
import useAuth from "../data/context/hook/useAuth";

export default function Autenticacao(props) {

    const { cadastrar, login, loginGoogle } = useAuth()

    const [modo, setModo] = useState<"login" | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    function exibirErro(msg, tempoEmSegundos = 5) {
        setError(msg)
        setTimeout(() => setError(null), tempoEmSegundos * 1000)
    }


    async function submeter() {

        try {
            if (modo === 'login') {
               await login(email, senha)
            } else {
               await cadastrar(email, senha)
            }
        } catch (error) {
           await exibirErro(error.message)
        }

    }



    return (

        <div className={`flex h-screen items-center justify-center`}>
            <div className="md:w-1/2 hidden md:block shadow-2xl shadow-indigo-500/50">
                <img className="h-screen h-full w-full object-fill" src={HorizonLogo.src} alt="imagem da tela de autenticação" />
                {/* <Image src="/logo-horizon.jpeg"  alt="Picture of the author" layout='fill' className={'image'}></Image> */}
            </div>
            <div className="md:w-1/2 w-full m-10">
                <h1 className={`
            text-3xl font-bold mb-5
            `}>
                    {modo === "login" ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>
                {error ? (
                    <div className={`
                bg-red-400 
                text-white 
                flex 
                items-center 
                justify-center 
                flex-col 
                py-3 
                rounded-lg
                `}>
                        {WarningIcon(10)}
                        <span>{error}</span>
                    </div>
                ) : (
                    false
                )}

                <AuthInput obrigatorio tipo='email' label="Email" valor={email} valorMudou={setEmail}></AuthInput>
                <AuthInput obrigatorio tipo='password' label="Senha" valor={senha} valorMudou={setSenha}></AuthInput>
                <AuthInput obrigatorio tipo='password' label="Confirmação de Senha" valor={senha} valorMudou={setSenha}></AuthInput>
                <button onClick={submeter} className={`
            w-1/2 bg-indigo-500 hover:bg-indigo-400 
            text-white
            font-bold
            rounded-lg px-4 py-3 mt-6
            w-full
            `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`
            w-1/2 bg-red-500 hover:bg-red-400 
            text-white
            font-bold
            rounded-lg px-4 py-3 
            w-full
            `}>
                    Entrar com Google
                </button>
                {modo === "login" ? (
                    <p className={`mt-8 text-center`}>
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Crie uma conta gratuitamente</a>
                    </p>
                ) : (
                    <p className={`mt-8 text-center`}>
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Entre com as suas credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}