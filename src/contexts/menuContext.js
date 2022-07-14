import React, { createContext, useState, useContext } from "react";
const MenuContext = createContext()

export const useMenuContext = () => {
    return useContext(MenuContext);
}
export const AppMenuContext = ({ children }) => {
    const [isMenuToggled, setToggleMenu] = useState(true)
    const toggleMenu = () => {
        isMenuToggled ? setToggleMenu(false) : setToggleMenu(true)
    }
    return (
        <MenuContext.Provider value={{ isMenuToggled, toggleMenu }}>
            <div style={{ position: "relative", width: "100%" }}>
                {children}
            </div>

        </MenuContext.Provider>
    )
}
