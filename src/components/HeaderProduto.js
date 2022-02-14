import styled from "styled-components"

const HeaderProduto = styled.div`
    height: 60px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow-back{
        margin-left: 15px;
    }


    .carrinho{
        height: 31px;
        width: 31px;

        margin-right: 20px;

        background-color: #F0F0F0;

        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        .ion-icon{
            padding-top: 3px;

        }

    }

   
`

export default HeaderProduto