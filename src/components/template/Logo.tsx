import horizonLogo from '../../../public/logo-horizon.jpeg'
export default function Logo() {
    return (
        <div className={`
        flex
        flex-col
        justify-center
        items-center
          bg-white
          h-20 w-20
          rounded-full
        `}>
            <div className={`mb-2   flex
        flex-col   justify-center
        items-center`}>
                {/* <img src={horizonLogo.src} alt="" /> */}
                <div className={`triangulo-para-cima`}></div>
                <div className={`flex`}>

                    <div className={`triangulo-para-cima`}></div>
                    <div className={`triangulo-para-cima`}></div>

                </div>
            </div>



        </div>
    )
}