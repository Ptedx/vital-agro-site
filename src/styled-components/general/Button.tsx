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
    padding: 8px 0;
    font-size: ${({main = false})=> main ? '1em': '24px'};

    a{
        width:100%;
        height: 100%;
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    &:hover{
        transform: translateY(-5px);
        transition: 0.5s;
    }
`

export default ButtonStyle