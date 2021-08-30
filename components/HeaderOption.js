function HeaderOption({Icon,title,selected}) {
    return (
        <div className={`flex items-center pb-2 space-x-1 ${selected && `border-b-4 border-blue-500`}`}>
            <Icon className={`h-4 ${ selected && `text-blue-500`} hidden sm:inline-block`} />
            <p className={`cursor-pointer hover:text-blue-500 ${ selected && `text-blue-500`}`}>{title}</p>
        </div>
    )
}

export default HeaderOption
