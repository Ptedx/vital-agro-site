import { useState } from "react";
import {MobileMenuStyle, MenuButton, MenuContent, MobileRow} from "../../styled-components/header/menuMobileStyle";
import ButtonStyle from "../../styled-components/general/Button";

const MobileMenu = ()=>{
    const [show, setShow] = useState(false)

    const handleShow=()=>{
        setShow(!show)
    }
    return(
        <MobileMenuStyle>
            <MobileRow>
                <a href="#main"><img src="/img/Vital Agro Logo.png" alt="vital agro logo" height="112px"></img></a>
                
                <MenuButton onClick={handleShow}>
                    <img src={show? "/img/Icon_Selected.png": "/img/Menu_Icon.png"} alt="Icons" height="60px"/>
                </MenuButton>
            </MobileRow>
            <MobileRow>
                <MenuContent className={show ? 'clicked second': ''}>
                    <div>
                        <a href="#advantages">Vantagens</a>
                    </div>
                    <div>
                        <a href="#loc">Localização</a>
                    </div>
                    <div>
                        <a href="#doubts">Dúvidas</a>
                    </div>
                    <ButtonStyle main={true}>
                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5561982360999&text=Ol%C3%A1!%20Vim%20aqui%20atrav%C3%A9s%20do%20site%20agendar%20uma%20consulta%20na%20Vital%20Agro%20%20%20:)">AGENDAR AGORA</a>
                    </ButtonStyle>  
                    
                </MenuContent>
            </MobileRow>
        </MobileMenuStyle>
    )
}

export default MobileMenu