import React from "react";

const ButtonContext = React.createContext()

function PaginationContext ({children}) {
    const {buttonStatus, setButtonStates} = React.useState(false)

    return (
        <ButtonContext.Provider value={{buttonStatus, setButtonStates}}>
            {children}
        </ButtonContext.Provider>
    )
}
export {
    PaginationContext,
    ButtonContext
}
