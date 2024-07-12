import ButtonStyle from "../../styled-components/general/Button"
import {MenuDesktopStyle} from "../../styled-components/header/menuDesktopStyle"

const MenuDesktop = ()=>{
    return(
        <MenuDesktopStyle>
            <a href="#main"><img src="/img/Vital Agro Logo.png" alt="vital agro logo" height="112px"></img></a>
            <div>
                <a href="#advantages">Vantagens</a>
                <a href="#loc">Localização</a>
                <a href="#doubts">Dúvidas</a>
            </div>
            <ButtonStyle main={true}>
                <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5561982360999&text=Ol%C3%A1!%20Vim%20aqui%20atrav%C3%A9s%20do%20site%20agendar%20uma%20consulta%20na%20Vital%20Agro%20%20%20:)">AGENDAR AGORA</a>
            </ButtonStyle>
        </MenuDesktopStyle>
    )
}

export default MenuDesktop