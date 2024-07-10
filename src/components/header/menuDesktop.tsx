import ButtonStyle from "../../styled-components/general/Button"
import {MenuDesktopStyle} from "../../styled-components/header/menuDesktop"

const MenuDesktop = ()=>{
    return(
        <MenuDesktopStyle>
            <img src="/img/Vital Agro Logo.png" alt="vital agro logo" height="112px"></img>
            <div>
                <a href="/">Vantagens</a>
                <a href="/">Dúvidas</a>
                <a href="/">Fale conosco</a>
            </div>
            <ButtonStyle main={true}>
                <a href="/">AGENDAR AGORA </a>
            </ButtonStyle>
        </MenuDesktopStyle>
    )
}

export default MenuDesktop