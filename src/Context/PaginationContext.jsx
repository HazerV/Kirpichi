import React from "react";

const ButtonContext = React.createContext()

function PaginationContext ({children}) {
    const {buttonStatus, setButtonStates} = React.useState(false)
    console.log('rrr', buttonStatus)
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
