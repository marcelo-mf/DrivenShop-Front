import styled from "styled-components"

const ContainerDescricao = styled.div`
    
    width: 336px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin-top: 20px;

    gap: 5px;

    h1{
        font-size: 20px;
        font-weight: bolder;
        font-family: 'Roboto';
        color: black;
    }

    h2{
        font-size: 20px;
        font-weight: bolder;
        font-family: 'Roboto';
        color: #FF4791;
        margin-bottom: 15px;
    }

    h3{
        font-size: 24px;
        font-weight: bolder;
        font-family: 'Roboto';
        color: black;
        margin-top: 10px;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        font-family: 'Roboto';
        color: black;

        margin-top: 5px;
    }


`

export default ContainerDescricao