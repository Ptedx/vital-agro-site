import styled from "styled-components";

interface ButtonStyleProps {
    main?: boolean
}

const ButtonStyle = styled.div<ButtonStyleProps>`
    background-color: #c5d937;
    border-radius: 12px;
    width: ${({main = false}) => main ? '200px' : '70%'};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8px 0;
    font-size: ${({main = false})=> main ? '1em': '24px'};
    box-shadow: 0 4px 4px rgba(0,0,0,0.3);

    a{
        width:100%;
        height: 100%;
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    &:hover{
        transform: translateY(5px);
        transition: 0.1s;
        box-shadow: 0 1px 1px rgba(0,0,0,0.3);
    }
    &:active{
        background-color: #b2c331;
    }

    @media (max-width:768px) {
        color: 'white';
    }
`

export default ButtonStyle