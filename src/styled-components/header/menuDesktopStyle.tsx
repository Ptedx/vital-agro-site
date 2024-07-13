import styled from "styled-components"

export const MenuLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuDesktopStyle = styled.div`
    width: 100%;
    height: 80px;
    background-image: url('/img/Main Colors.png');
    background-size: cover;
    font-weight: bold;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 3;
    div a {
        padding: 0 20px;
        text-decoration: none;
        color: white;
    }
    img{
        margin-top: 15px;
    }
    @media (min-width: 1200px) {
        max-width: 1400px;
        border-radius: 0 0 10px 10px;
}
`