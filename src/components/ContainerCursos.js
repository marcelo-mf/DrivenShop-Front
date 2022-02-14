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

        h2:hover{
            cursor: pointer;
        }

        h2{
            font-family: 'Roboto';
            font-size: 18px;
            font-weight: 800;
            color: #E5E5E5;
        }
    }

    .selected{
        h2{
            font-family: 'Roboto';
            font-size: 18px;
            font-weight: 800;
            color: #FF4791;

            margin-top: 1px;
        }

        border-bottom: 2px solid #FF4791;
    }


`

export default ContainerCursos