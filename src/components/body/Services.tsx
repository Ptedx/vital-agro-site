import { useState } from "react"
import {ServiceItem, ServiceItems, ServicesStyle, ServiceCard, 
    HiddenDivGeneral,HiddenDiv, HiddenDiv2, HiddenDiv3, ServiceCards} from "../../styled-components/body/ServicesStyle"
import MobileSize from "../general/WidthChecker"

const Services = ()=>{
    const [isVisible, setisVisible] = useState<number | null>(null)

    const services = [
        {id:1, bg:"/img/estetica.jpg",p:['Estética animal', 'Banho e tosa'],div:<HiddenDiv hide={isVisible !== 1} />},
        {id:2,bg:"/img/taxi_dog.jpg",p:['Serviços de', 'Taxi Shop'],div:<HiddenDiv2 hide={isVisible !== 2}/>},
        {id:3, bg:"/img/pet-dia-a-dia.jpg",p:['Produtos para o', 'dia-a-dia'],div:<HiddenDiv3 hide={isVisible !== 3}/>}
    ]

    const handleShow = (id: number)=>{
        setisVisible(id === isVisible? null: id)
    }

    return(
        <ServicesStyle>
            <h1>Confira os serviços que oferecemos para garantir o bem-estar e felicidade do seu pet:</h1>
            <ServiceItems>
                <ServiceItem>
                    {services.map((service)=>(   
                        <ServiceCards>
                            <ServiceCard key={service.id} bg={service.bg} onClick={()=>handleShow(service.id)}>
                                {service.p.map((paragraph)=>(
                                    <p>{paragraph}</p>
                                ))}
                            </ServiceCard>
                            {MobileSize(768) && service.div}
                        </ServiceCards> 
                    ))}
                </ServiceItem>
               {services.map((service)=>(
                    <HiddenDivGeneral key={service.id}>
                        {MobileSize(768)? '':service.div}
                    </HiddenDivGeneral> 
                ))}
            </ServiceItems>
        </ServicesStyle>
    )
}

export default Services