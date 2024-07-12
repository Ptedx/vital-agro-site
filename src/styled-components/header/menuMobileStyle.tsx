import styled from "styled-components";

export const MobileMenuStyle = styled.div`
    width: 100%;
    max-height: 80px;
    background-image: url('/img/Main Colors.png');
    background-size: cover;
    font-weight: bold;
    flex-direction: column;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    position: fixed;
    top: 0;
    z-index: 3;
    a {
        padding: 0 20px;
        text-decoration: none;
        color: black;
    }
    img{
        margin-top: 15px;
    }
`

export const MobileRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-child(1){
        height: 80px;
    }
    &:nth-of-type(2){
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        border-radius: 10px;
        div{
            width: 100%;
            padding: 15px;
            border-bottom: 1px solid black;
            margin-bottom: 5px;
        }
    }
`

export const MenuButton = styled.button`
    padding: 20px;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    border-color: rgba(0,0,0,0);
`

export const MenuContent = styled.div`
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: opacity 0.2s ease, max-height 0.5s ease;
    border-radius: 15px;

    &.clicked{
        background-color: #F7F4F4;
        opacity: 1;
        max-height: 500px;
    }
`