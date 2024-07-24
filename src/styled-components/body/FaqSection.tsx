import styled from "styled-components";

export const FAQStyle = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   padding: 10px 0 20px 0;
   h1{
    padding: 10px;
   }
`
export const Question = styled.button`
    width: 100%;
    background-color: rgba(0,0,0,0);
    text-align: left;
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: 0 4px 4px rgba(0,0,0,0.3);
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px 5px;
    cursor: pointer;
    
    & > p{
        cursor: pointer;
        font-size: 16px;
        color: black;
        font-weight: bold;
    }

    &:hover{
        transform: translateY(5px);
        transition: 0.1s;
        box-shadow: 0 1px 1px rgba(0,0,0,0.3);
    }
    &:active{
        background-color: #3677b7;
        color: white;
    }
    @media (min-width: 993px) {
        margin-top: 10px;
    }
`
interface AnswerProp {
    show?: boolean
}

export const Answer = styled.div<AnswerProp>`
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: opacity 0.3s ease, max-height 0.3s ease;

    &.show{
        max-height:200px;
        opacity: 1;
    }
    p{
        padding-left: 15px;
        margin-bottom: 15px;
        font-size: 16px;
    }
`

export const QuestionSectionStyle = styled.div`
    width: 100%;
`