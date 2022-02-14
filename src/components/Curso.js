import styled from "styled-components";


const Curso = styled.button`

    height: 161px;
    width: 336px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    padding: 10px;

    background-color: white;

    border: none;
    border-radius: 10px;

    gap: 15px;

    filter: drop-shadow(0 0 0.7em #F1F1F1);

    img{
        height: 135px;
        width: 122px;

        border-radius: 10px;
    }

    .curso-rigth{

        height: 141px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        gap: 10px;

        padding-top: 3px;
    }

    .text-curso{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        gap: 5px;

        h1{
            font-size: 14px;
            font-weight: bold;
            font-family: 'Roboto';
            color: black;
            text-align: start;
        }

    }

    .preco-tempo{
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 5px;

        h2{
            font-size: 17px;
            font-weight: bold;
            font-family: 'Roboto';
            color: #7c7c7c;
        }

        p{
            font-size: 10px;
            font-weight: bold;
            font-family: 'Roboto';
            color: #7c7c7c;
        }

    }
`

export default Curso;