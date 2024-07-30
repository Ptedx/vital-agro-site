import ButtonStyle from "../../styled-components/general/Button"
import {MenuDesktopStyle, MenuLayout} from "../../styled-components/header/menuDesktopStyle"

const MenuDesktop = ()=>{
    return(
        <MenuLayout>
            <MenuDesktopStyle>
                <a href="#main"><img src="/img/Vital Agro Logo.png" alt="vital agro logo" height="112px"></img></a>
                <div>
                    <a href="#advantages">Vantagens</a>
                    <a href="#loc">Localização</a>
                    <a href="#doubts">Dúvidas</a>
                </div>
                <ButtonStyle main={true}>
                    <a target="_blank" rel="noopener noreferrer" href="/">AGENDAR AGORA</a>
                </ButtonStyle>
            </MenuDesktopStyle>
        </MenuLayout>
    )
}

export default MenuDesktop