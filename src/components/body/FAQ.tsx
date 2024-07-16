import {  useState } from "react";
import {Answer, FAQStyle, Question, QuestionSectionStyle} from "../../styled-components/body/FaqSection";
import SpecText from "../../styled-components/general/SpecialText";

interface QuestSectionProps {
    quest: string,
    answer: string[]
}

const QuestionSection= ({quest, answer}: QuestSectionProps)=>{
    const [show, setShow]= useState(false)

    
    const handleShow = ()=>{
        setShow(!show)
    }

    return(
        <QuestionSectionStyle>
            <Question onClick={handleShow}>
                <p>{quest}</p>
            </Question>
            <Answer className={show? 'show': ''}>
                {answer.map((actualAnswer)=>{
                    return(
                        <p>{actualAnswer}</p>
                    )
                })}
            </Answer>
        </QuestionSectionStyle>
    )
}

export const FAQ = ()=>{
    return(
        <FAQStyle id="doubts">
            <h1>Ficou alguma <SpecText>dúvida</SpecText>?</h1>
            <QuestionSection
                quest="+ Quais serviços estão inclusos no banho?"
                answer={["O banho inclui corte de unha e limpeza de orelhas. Esses serviços são realizados de acordo com a aceitação do seu pet."]}
            />
            <QuestionSection
                quest="+ Não vou conseguir comparecer na data e horário agendados. O que eu faço?"
                answer={["É possível reagendar ou cancelar o seu horário direto pelo nosso whatsapp ou ligando no número (61) 98236-0999, de forma rápida e fácil. Basta mandar-nos uma mensagem dizendo seu nome, o horário previamente agendado e o próximo horário que você vai agendar. Verificaremos se o horário está disponível e logo em seguida lhe retornamos.",
                        "Pedimos que altere ou cancele o seu atendimento o mais breve possível para dar a oportunidade de outro pet ser atendido naquele horário."]}
            />
            <QuestionSection 
                quest="+ Qual é o horário de funcionamento da Vital Agro?"
                answer={["Estamos abertos de segunda a sábado, das 8h às 20h, e aos domingos, das 08h às 12h."]}
            />
            <QuestionSection
                quest="+ Quais são os valores dos serviços?"
                answer={["Os valores variam conforme o serviço e o tamanho do pet. Para obter uma estimativa precisa, por favor, entre em contato conosco pelo WhatsApp, e teremos prazer em fornecer um orçamento detalhado."]}
            />
            <QuestionSection 
                quest="+ Preciso levar algo específico para a consulta do meu pet?"
                answer={["Recomendamos trazer a carteira de vacinação do seu pet e qualquer histórico médico relevante. Se for a primeira vez que visitam nosso pet shop, uma lista de perguntas ou preocupações também pode ser útil."]}
            />
            <QuestionSection 
                quest="+ Meu pet é idoso/tem necessidades especiais, vocês têm experiência com esses casos?"
                answer={["Sim, temos experiência no cuidado de pets idosos e com necessidades especiais. Nossa equipe está preparada para oferecer o cuidado adicional e a atenção específica que esses pets precisam."]}
            />
            <QuestionSection 
                quest="+ Vocês vendem produtos para pets?"
                answer={["Sim, oferecemos uma seleção de produtos de alta qualidade, incluindo alimentos, brinquedos, produtos de higiene e acessórios. Nossa equipe pode ajudá-lo a escolher os melhores produtos para seu pet."]}
            />
        </FAQStyle>
    )
}