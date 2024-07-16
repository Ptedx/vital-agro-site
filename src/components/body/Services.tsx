import { useState } from "react";
import { ServiceItem, ServiceItems, ServicesStyle, ServiceCard, HiddenDivGeneral, ServiceCards, } from "../../styled-components/body/ServicesStyle";

const Services = () => {
  const [isVisible, setisVisible] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      bg: "/img/estetica.jpg",
      p: ["Estética animal", "Banho e tosa"],
    },
    {
      id: 2,
      bg: "/img/taxi_dog.jpg",
      p: ["Serviços de", "Taxi Shop"],
    },
    {
      id: 3,
      bg: "/img/pet-dia-a-dia.jpg",
      p: ["Produtos para o", "dia-a-dia"],
    },
  ];

  const handleShow = (id: number) => {
    setisVisible(id === isVisible ? null : id);
  };

  return (
    <ServicesStyle>
      <h1>
        Confira os serviços que oferecemos para garantir o bem-estar e
        felicidade do seu pet:
      </h1>
      <ServiceItems>
        <ServiceItem>
          {services.map((service) => (
            <ServiceCards>
              <ServiceCard
                key={service.id}
                bg={service.bg}
                onClick={() => handleShow(service.id)}
              >
                {service.p.map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
              </ServiceCard>
            </ServiceCards>
          ))}
        </ServiceItem>
        {services.map((service) => (
          <HiddenDivGeneral key={service.id}>
          </HiddenDivGeneral>
        ))}
      </ServiceItems>
    </ServicesStyle>
  );
};

export default Services;
