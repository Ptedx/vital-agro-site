import {ServiceItem, ServiceItems, ServicesStyle, ServiceCard} from "../../styled-components/body/ServicesStyle"

const Services = ()=>{

    return(
        <ServicesStyle>
            <h1>Confira os serviços que oferecemos para garantir o bem-estar e felicidade do seu pet:</h1>
            <ServiceItems>
                <ServiceItem>
                    <ServiceCard bg="/img/estetica.jpg">
                        <p>Estética Animal <br />(Banho e tosa)</p>
                    </ServiceCard>
                </ServiceItem>
                <ServiceItem>
                    <ServiceCard bg="/img/taxi_dog.jpg">
                        <p>Serviços de <br />Taxi Shop</p>
                    </ServiceCard>
                </ServiceItem>
                <ServiceItem>
                    <ServiceCard bg="/img/pet-dia-a-dia.jpg">
                        <p>Produtos para o <br />dia-a-dia</p>
                    </ServiceCard>
                </ServiceItem>
            </ServiceItems>
        </ServicesStyle>
    )
}

export default Services