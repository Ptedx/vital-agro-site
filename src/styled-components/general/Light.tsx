import styled from "styled-components";

const Light = styled.div`
    @keyframes moveLight {
        0%, 33%{
            left: -75%;
            transform: translateX(-100px) rotate(45deg); 
        }
        100%,66%{
            left: 150%;
            transform: translateX(100%) rotate(45deg);
        }
    }
    @media  (max-width: 768px){
        @keyframes moveLight {
            0%, 33%{
                left: -50%;
                transform: translateX(-100px) rotate(45deg); 
            }
            100%,66%{
                left: 150%;
                transform: translateX(100%) rotate(45deg);
            }
    }
    }

    height: 150% !important;
    width: 40px;
    background-color: #ffffff54;
    position: absolute;
    animation: moveLight 3s infinite;
`

export default Light