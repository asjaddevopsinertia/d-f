export const ItemsContainer = ({children , style}) => {
    return(
        <div className={`m-auto ${style}`}>
            {children}
        </div>
    )
}