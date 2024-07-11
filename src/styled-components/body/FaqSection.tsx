import styled from "styled-components";

export const FAQStyle = styled.div`
   display: flex;
   justify-content: center;
   align-items: start;
   flex-direction: column;
   width: 100%;
   padding: 10px 0 20px 0;
   h1{
    padding: 10px;
   }
`
export const Question = styled.div`
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: 0 4px 4px rgba(0,0,0,0.3);
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px 5px;

    &:hover{
        transform: translateY(5px);
        transition: 0.2s;
        box-shadow: 0 1px 1px rgba(0,0,0,0.3);
    }
    &:active{
        background-color: #3677b7;
        color: white;
    }
`
interface AnswerProp {
    show?: boolean
}

export const Answer = styled.div<AnswerProp>`
    display: ${({show = false})=> show ? 'block': 'none'};  
    p{
        margin-bottom: 15px;
    }
`