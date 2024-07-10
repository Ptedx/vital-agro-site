import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 0 15px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    & > div{
        margin-bottom: 20px;
    }
`

export default Container