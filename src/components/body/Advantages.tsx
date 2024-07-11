import {AdvantageStyle, AdvantageCard, AdvantageSubItem} from "../../styled-components/body/AdvantagesStyle"
import ButtonStyle from "../../styled-components/general/Button"

const Advantages = ()=>{

    return(
        <AdvantageStyle>
            <AdvantageCard>
                <AdvantageSubItem bg="/img/doggo_bath.jpg">
                </AdvantageSubItem>
                <AdvantageSubItem bg="/img/Layout_1.png">
                    <h1>Higiene Excepcional para seu Pet</h1>
                    <p>Garantimos uma experiência relaxante e cuidadosa, contribuindo para o bem-estar geral do seu amigo de quatro patas.</p>
                    <ButtonStyle>
                        <a href="/">AGENDAR AGORA</a>
                    </ButtonStyle>
                </AdvantageSubItem>
            </AdvantageCard>
            <AdvantageCard>
                <AdvantageSubItem bg="/img/Layout_2.png">
                    <h1>Cuidados Dedicados e Carinhosos</h1>
                    <p>Criamos um ambiente seguro e acolhedor para que seu pet se sinta amado e tranquilo, recebendo um atendimento excepcional.</p>
                </AdvantageSubItem>
                <AdvantageSubItem bg="/img/doggo_care.gif">
                </AdvantageSubItem>
            </AdvantageCard>
            <AdvantageCard>
                <AdvantageSubItem bg="/img/premium_food.jpg">
                </AdvantageSubItem>
                <AdvantageSubItem bg="/img/Layout_3.png">
                    <h1>Qualidade e Excelência em Cada Detalhe</h1>
                    <p>Utilizamos produtos premium para cuidar do seu pet. Nossa equipe experiente oferece um atendimento personalizado, refletindo nosso compromisso com a excelência em cada detalhe.</p>
                </AdvantageSubItem>
            </AdvantageCard>
            
        </AdvantageStyle>
    )
}

export default Advantages