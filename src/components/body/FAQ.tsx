import {Answer, FAQStyle, Question} from "../../styled-components/body/FaqSection";

const FAQ = ()=>{

    return(
        <FAQStyle>
            <h1>Ficou alguma dúvida?</h1>
            <Question>
                <p>+ Quais serviços estão inclusos no banho?</p>
            </Question>
            <Answer show={false}>
                    <p>O banho inclui corte de unha e limpeza de orelhas. Esses serviços são realizados de acordo com a aceitação do seu pet.</p>
                </Answer>
            <Question>
                <p>+ Não vou conseguir comparecer na data e horário agendados. O que eu faço?</p>
            </Question>
            <Answer show={false}>
                <p>É possível reagendar ou cancelar o seu horário direto pelo nosso whatsapp ou ligando no número (61) 98236-0999, de forma rápida e fácil. Basta mandar-nos uma mensagem dizendo seu nome, o horário previamente agendado e o próximo horário que você vai agendar. Verificaremos se o horário está disponível e logo em seguida lhe retornamos.</p>
                <p>Pedimos que altere ou cancele o seu atendimento o mais breve possível para dar a oportunidade de outro pet ser atendido naquele horário.
                </p>
            </Answer>
            <Question>
                <p>+ Qual é o horário de funcionamento da Vital Agro?</p>
            </Question>
            <Answer show={false}>
                <p>Estamos abertos de segunda a sábado, das 8h às 20h, e aos domingos, das 08h às 12h.</p>
            </Answer>
            <Question>
                <p>+ Quais são os valores dos serviços?</p>
            </Question>
            <Answer show={false}>
                <p>Os valores variam conforme o serviço e o tamanho do pet. Para obter uma estimativa precisa, por favor, entre em contato conosco pelo WhatsApp, e teremos prazer em fornecer um orçamento detalhado.</p>
            </Answer>
            <Question>
                <p>+ Preciso levar algo específico para a consulta do meu pet?</p>
            </Question>
            <Answer show={false}>
                <p>Recomendamos trazer a carteira de vacinação do seu pet e qualquer histórico médico relevante. Se for a primeira vez que visitam nosso pet shop, uma lista de perguntas ou preocupações também pode ser útil.</p>
            </Answer>
            <Question>
                <p>+ Meu pet é idoso/tem necessidades especiais, vocês têm experiência com esses casos?</p>
            </Question>
            <Answer show={false}>
                <p>Sim, temos experiência no cuidado de pets idosos e com necessidades especiais. Nossa equipe está preparada para oferecer o cuidado adicional e a atenção específica que esses pets precisam.</p>
            </Answer>
            <Question>
                <p>+ Vocês vendem produtos para pets?</p>
            </Question>
            <Answer show={false}>
                <p>Sim, oferecemos uma seleção de produtos de alta qualidade, incluindo alimentos, brinquedos, produtos de higiene e acessórios. Nossa equipe pode ajudá-lo a escolher os melhores produtos para seu pet.</p>
            </Answer>
        </FAQStyle>
    )
}

export default FAQ