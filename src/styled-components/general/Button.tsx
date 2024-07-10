import styled from "styled-components";

interface ButtonStyleProps {
    main?: boolean
}

const ButtonStyle = styled.div<ButtonStyleProps>`
    background-color: #c5d937;
    border-radius: 12px;
    width: ${({main = false}) => main ? '200px' : '70%'};
    text-align: center;
    padding: 10px 0;
    font-size: ${({main = false})=> main ? '1em': '24px'};

    a{
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
`

export default ButtonStyle