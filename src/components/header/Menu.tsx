import MobileSize from "../general/WidthChecker"
import MenuDesktop from "./menuDesktop"
import MobileMenu from "./menuMobile"

const Menu = ()=>{

    return(
        <>
            {MobileSize(768)? <MobileMenu />: <MenuDesktop />}    
        </>
    )
}

export default Menu