import styled from "styled-components";

export const MainScreenStyle = styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - 80px);
    justify-content:center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 20px;
    padding: 15px;

    @media (min-width: 1200px) {
        max-width: 1400px;
        margin: 0 auto;
        margin-top: 80px;
    }
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`
export const MainItem = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1{
        font-size: clamp(1em, 3vw + 1em, 3em);
        margin-bottom: 40px;
    }
    span{
        color:#c5d937;
    }
    p{
        margin-bottom: 40px;
    }

    @media (max-width: 992px) {
        h1{
            margin-bottom: 20px;
        }
        p{
            margin-bottom: 10px;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`