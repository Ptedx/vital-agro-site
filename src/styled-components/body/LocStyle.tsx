import styled from "styled-components";

const LocStyle = styled.div`
    background-color:rgb(240, 240, 240);
    padding: 20px 0;
    text-align: center;
    border-radius: 10px;
    width: 100%;
    h1{
        padding: 10px;
    }
    img{
        cursor: pointer;
        border-radius: 10px;
    }
    iframe{
        width: 100%;
        height: 700px;
        border: none !important;
    
        &:focus, &:active, &:hover{
            border: none;
            outline: none;
        }
    }
`

export default LocStyle