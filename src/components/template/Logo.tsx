export default function Logo() {
    return (
        <div className={`
        flex
        flex-col
        justify-center
        items-center
          bg-white
          h-16 w-16
          rounded-full
        `}>
            <div className={`
               triangle-top h-3 w-3  bg-purple-600 mb-2
            `}>
            </div>
            <div className={`flex`}>
                <div className={`triangle h-3 w-3  bg-purple-600 mr-1 mb-3`}></div>
                <div className={`triangle h-3 w-3  bg-purple-600 ml-1 mb-3`}></div>
            </div>
        </div>
    )
}