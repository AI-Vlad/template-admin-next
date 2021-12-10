import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(props) {
    return (
        <aside className={`flex flex-col 
        bg-gray-200 text-gray-700
        dark:bg-gray-900 
        `}>
            <div className={`
            flex
            flex-col
            items-center
            justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-40
            `}>
                <Logo />
            </div>
            <ul className={`flex flex-col flex-grow`}>
                <MenuItem url="/" texto="Inicio" icon={HomeIcon} />
                <MenuItem url="/ajustes" texto="Configurações" icon={SettingsIcon} />
                <MenuItem url="/notificacoes" texto="Novidades" icon={BellIcon} />
            </ul>
            <ul className={`flex flex-col`}>
                <MenuItem onClick={() => console.log("logout")}
                    url="/" texto="Sair"
                    icon={LogoutIcon}
                    className={`
                text-red-600 dark:text-red-400
                hover:bg-red-400 hover:text-white
                dark:hover-text-red-400
                `}
                />
            </ul>
        </aside>
    )
}