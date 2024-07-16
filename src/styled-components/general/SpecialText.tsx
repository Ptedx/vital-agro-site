import styled from "styled-components";

interface SpectTextProps{
    bg?: boolean;
}

const SpecText = styled.div<SpectTextProps>`
    display: inline;
    border-radius: 45px;
    padding: ${({bg = false})=> bg? '0 10px': '0'};
    background-color: ${({bg = false})=>bg ? "#3677b7":''} ;
    color:#c5d937;
`

export default SpecText