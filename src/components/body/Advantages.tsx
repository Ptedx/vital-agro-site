import {AdvantageStyle, AdvantageCard, AdvantageSubItem} from "../../styled-components/body/AdvantagesStyle"
import ButtonStyle from "../../styled-components/general/Button"
import Light from "../../styled-components/general/Light"

const Advantages = ()=>{

    return(
        <AdvantageStyle id="advantages">
            <AdvantageCard>
                <AdvantageSubItem bg="/img/doggo_bath.jpg">
                </AdvantageSubItem>
                <AdvantageSubItem bg="/img/Layout_1.png">
                    <h1>Higiene Excepcional para seu Pet</h1>
                    <p>Garantimos uma experiência relaxante e cuidadosa, contribuindo para o bem-estar geral do seu amigo de quatro patas.</p>
                    <ButtonStyle>
                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5561982360999&text=Ol%C3%A1!%20Vim%20aqui%20atrav%C3%A9s%20do%20site%20agendar%20uma%20consulta%20na%20Vital%20Agro%20%20%20:)">AGENDAR AGORA</a>
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
                    <Light />
                    <h1>Qualidade e Excelência em Cada Detalhe</h1>
                    <p>Utilizamos produtos premium para cuidar do seu pet. Nossa equipe experiente oferece um atendimento personalizado, refletindo nosso compromisso com a excelência em cada detalhe.</p>
                </AdvantageSubItem>
            </AdvantageCard>
            
        </AdvantageStyle>
    )
}

export default Advantages