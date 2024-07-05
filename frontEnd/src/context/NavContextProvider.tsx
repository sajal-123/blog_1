import {useState , ReactNode } from "react";
import NavContext from "./NavContext";

const NavContextProvider=({ children }: { children: ReactNode })=>{
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    return (
        <NavContext.Provider value={{isNavbarVisible,setIsNavbarVisible}}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider;