import React from 'react'

export const Context = React.createContext()

export const MainProvider = ({ children }) => {
    const [openSideBar, setOpenSideBar] = React.useState(false)

    let state = {
        openSideBar,
        setOpenSideBar
    }

    return <Context.Provider value={state}>{children}</Context.Provider>
}

export default Context

