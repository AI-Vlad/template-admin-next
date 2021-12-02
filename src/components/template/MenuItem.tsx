import Link from 'next/link'

interface MenuItemProps {
    url: string
    texto: string
    icon: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li className={`
        cursor:pointer
        hover:bg-gray-100
        p-4
                      `}>
            <Link href={props.url}>
                <a className={`
                 flex
                 flex-row
                 
                `}>
                    {props.icon}
                    <span className={`
                        font-light text-gray-600 ml-3
                    `}>
                        {props.texto}
                    </span>
                </a>
            </Link>

        </li>
    )
}