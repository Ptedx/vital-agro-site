import styled from "styled-components";

export const ServicesStyle = styled.div`
    background-color: #f9f9f9;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 40px 0;
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
    flex-wrap: wrap;
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
    margin-bottom: 5px;
    p{
        opacity: 70%;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.895);
    }

    @media (max-width: 768px){
        margin-bottom: 10px;
        flex-direction: column;
    }
`
export const ServiceCard = styled.button<ServiceItemProps>`
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
        flex-direction: column;
        border: none;
        color: white;
        font-size: 24px;
   
    @media (min-width:769px) {
        &:hover{
        transform: translateY(-5px);
        transition: 0.5s;
        cursor: pointer;
        p{
            cursor: pointer;
        }
    }
    }
    @media (max-width:768px) {
        width: 90%;
        margin-top: 15px;
        & > p{
            font-size: 30px;
        }
    }
`
export const ServiceCards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:768px) {
        &> div{
            width: 90%;
        }
        flex-direction: column;
        flex-wrap:wrap;
    }
`

interface HiddenProps {
    hide: boolean
}

export const HiddenDivGeneral = styled.div`
    width: 100%;
`

export const HiddenDivStyle = styled.div<HiddenProps>`
    display: ${({hide = true})=>hide ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 80px 25px;
    border-radius: 10px;
    width: 100%;
    color: white;
`;
export const HiddenDiv1Style = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HiddenDiv2Style = styled.div`
    width: 100%;
`;

export const HiddenDiv3Style = styled.div`
    width: 100%;
`;