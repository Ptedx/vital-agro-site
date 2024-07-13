import styled from "styled-components";

export const AdvantageStyle = styled.div`
    padding: 10px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const AdvantageCard = styled.div`
    width: calc(100% - 30px);
    display: flex;
    height: 500px;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.7);
    @media (max-width:992px){
        height: 400px;
    }
    @media (max-width: 768px){
        flex-direction:column;
        height: 700px;
        margin-bottom: 20px;
        
        &:nth-child(2){
            flex-direction: column-reverse;
        }
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
    border-radius: 5px 0 0 5px;
    background: url(${(props)=> props? props.bg : ''}) center;
    background-size: cover;
    flex-direction: column;
    text-align: center;
    font-weight: bold;
    color: #3e3e3e;
    position: relative;
    overflow: hidden;
    h1{
        margin-bottom: 15px;
        font-size: 3em;
    }
    p{
        font-size: 22px;
        margin-bottom: 5px;
    }
    &:nth-child(2){
        border-radius: 0 5px 5px 0;
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
    @media (max-width: 768px) {
        width: 100%;
        border-radius: 5px;
    }
`