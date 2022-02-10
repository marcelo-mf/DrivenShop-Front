import styled from "styled-components"

const Header = styled.div`
    height: 82px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

   

    img{
        height: 23px;
        width: 114px;

        padding-left: 20px;
    }

    .rigth-container{
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 10px;

        padding-right: 20px;
    }

    .sign-in{
        height: 31px;
        width: 82px;

        background-color: #F0F0F0;

        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        p{
            font-family: 'Roboto';
            font-size: 16px;
            font-weight: 500;
            color: #FF4791;
        }
    }

    .carrinho{
        height: 31px;
        width: 31px;

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

export default Header