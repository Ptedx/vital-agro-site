import {MainScreenStyle, MainItem} from "../../styled-components/body/mainScreen"
import ButtonStyle from "../../styled-components/general/Button"

const MainScreen = ()=>{

    return(
        <MainScreenStyle>
            <MainItem>
                <h1>O melhor suporte no cuidado para seu <br/><span>melhor amigo</span></h1>
                <p>Na Vital Agro, cuidamos do seu amigo peludo como um verdadeiro membro da família.
                Agende agora e veja seu pet mais feliz e charmoso!</p>
                <ButtonStyle>
                    <a href="/">AGENDAR AGORA</a>
                </ButtonStyle>
            </MainItem>
            <MainItem>
                <img src="/img/Cat & dog heart.png" alt="Cat & dog" width="100%"></img>
            </MainItem>
        </MainScreenStyle>
    )
}

export default MainScreen