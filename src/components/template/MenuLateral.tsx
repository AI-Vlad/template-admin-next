import { BellIcon, HomeIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(props) {
    return (
        <aside>
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
            <ul>
                <MenuItem url="/" texto="Inicio" icon={HomeIcon} />
                <MenuItem url="/ajustes" texto="Configurações" icon={SettingsIcon} />
                <MenuItem url="/notificacoes" texto="Novidades" icon={BellIcon} />
            </ul>
        </aside>
    )
}