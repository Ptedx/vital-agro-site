import styled from "styled-components";

export const AdvantageStyle = styled.div`
    padding: 10px 0;
    background: linear-gradient(#3677b7, #17265e);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const AdvantageCard = styled.div`
    width: calc(100% - 30px);
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 5px;
    @media (max-width:992px){
        height: 400px;
    }
`

interface SubItemProps{
    bg?: string
}

export const AdvantageSubItem = styled.div<SubItemProps>`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: url(${(props)=> props? props.bg : ''}) center;
    background-size: cover;
    flex-direction: column;
    text-align: center;
    font-weight: bold;
    color: #3e3e3e;
    h1{
        margin-bottom: 15px;
        font-size: 3em;
    }
    p{
        font-size: 22px;
        margin-bottom: 5px;
    }

    @media (max-width: 992px) {
        h1{
            font-size: 2em;
        }
        p{
            font-size: 18px;
            margin-bottom: 15px;
        }
    }
`