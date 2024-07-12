import styled from "styled-components";

export const ServicesStyle = styled.div`
    background-color: #F7F4F4;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 60px;
    border-radius: 10px 10px 0 0;
    h1{
        padding-bottom:20px;
    }
`

export const ServiceItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

interface ServiceItemProps {
    bg: string;
}

export const ServiceItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    p{
        opacity: 70%;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.895);
    }

    @media (max-width: 768px){
        margin-bottom: 10px;
    }
`
export const ServiceCard = styled.div<ServiceItemProps>`
        height:200px;        
        width:80%;
        padding: 50px;
        border-radius: 12px;
        background: url(${props => props.bg}) center;
        background-size: cover;
        box-shadow: 5px 5px 20px #000000c4;
        display:flex;
        justify-content:center;
        align-items:center;

    &:hover{
        transform: translateY(-5px);
        transition: 0.5s;
        cursor: pointer;
    }

    @media (max-width:768px) {
        width: 100%;
        margin-top: 10px;
        & > p{
            font-size: 30px;
        }
    }
`