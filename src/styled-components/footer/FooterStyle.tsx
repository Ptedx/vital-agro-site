import styled from "styled-components";

const FooterStyle = styled.div`
    width: 100%;
    background-color: #203685;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-radius: 10px 10px 0 0;
    p{
        font-size: 14px;
    }

    @media (max-width: 992px) {
        p{
            font-size: 12px;
        }
    }
    @media (max-width: 768px) {
        p{
            font-size: 10px;
        }
    }
    @media (max-width: 570px) {
        p{
            font-size: 8px;
        }
    }
`

export default FooterStyle