import Image from 'next/image'
import route from 'next/router'
import loading from '../../public/loading.gif'
import useAuth from '../data/context/hook/useAuth'
import Head from 'next/head'

export default function ForcarAutenticacao(jsx) {

    const { usuario, carregando } = useAuth()


    function renderizarConteudo() {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie?.includes("admin-template-cod3r-auth")){
                                window.location.href = "/autenticacao"
                            }
                        `
                    }} ></script>
                </Head>
                {jsx}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex
                justify-center
                items-center
                h-screen
            `}>
                <Image src={loading} />
            </div>
        )
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        route.push('/autenticacao')
        return null
    }

}