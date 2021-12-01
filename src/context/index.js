import React from 'react'

export const Context = React.createContext()

export const MainProvider = ({ children }) => {
    const [openSideBar, setOpenSideBar] = React.useState(false)
    const [update, setUpdate] = React.useState(null)

    let state = {
        openSideBar,
        setOpenSideBar,
        update,
        setUpdate
    }

    return <Context.Provider value={state}>{children}</Context.Provider>
}

export default Context

