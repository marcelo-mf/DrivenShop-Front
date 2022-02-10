import styled from "styled-components"

const ContainerCursos = styled.div`
    
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 20px;

    margin-top: 30px;

    h1{
        font-family: 'Roboto';
        font-size: 24px;
        font-weight: 900;
        color: black;

        padding-left: 20px;
    }

    .categorias{
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 15px;

        padding-left: 20px;

        h2{
            font-family: 'Roboto';
            font-size: 18px;
            font-weight: 800;
            color: #E5E5E5;
        }
    }
`

export default ContainerCursos