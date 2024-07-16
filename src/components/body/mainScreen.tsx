import {MainScreenStyle, MainItem} from "../../styled-components/body/mainScreen"
import ButtonStyle from "../../styled-components/general/Button"
import SpecText from "../../styled-components/general/SpecialText"

const MainScreen = ()=>{

    return(
        <MainScreenStyle id="main">
            <MainItem>
                <h1>O melhor suporte no cuidado para seu <br/><SpecText>melhor amigo</SpecText></h1>
                <p>Na Vital Agro, cuidamos do seu amigo peludo como um verdadeiro membro da família.
                Agende agora e veja seu pet mais feliz e charmoso!</p>
                <ButtonStyle>
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5561982360999&text=Ol%C3%A1!%20Vim%20aqui%20atrav%C3%A9s%20do%20site%20agendar%20uma%20consulta%20na%20Vital%20Agro%20%20%20:)">AGENDAR AGORA</a>
                </ButtonStyle>
            </MainItem>
            <MainItem>
                <img src="/img/Cat & dog heart.png" alt="Cat & dog" width="100%"></img>
            </MainItem>
        </MainScreenStyle>
    )
}

export default MainScreen