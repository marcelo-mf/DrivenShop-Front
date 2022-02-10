import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 28px;
    color: #000000;
    margin-top: 34px;
    width: 320px;

    p {
        font-size: 15px;
        font-weight: normal;
        margin-top: 10px;
        margin-bottom: 26px;
    }
`

const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    height: 381px;
    overflow: auto;
    width: 320px;

    p {
        color: #a7a7a7;
    }
`

const Subtotal = styled.div`
    width: 318px;
    display: flex;
    padding-top: 10px;
    border-top: 2px solid #000000;
    justify-content: space-between;
    
    font-weight: bold;
    font-size: 18px;
    color: #000000;
    margin-bottom: 21px;
`

const StyledLink2 = styled(Link)`
    width: 322px;
    height: 43px;
    background: #EA498F;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 800;
    font-size: 18px;
    color: #FFFFFF;
`


export {
    Header,
    Container2,
    Subtotal,
    StyledLink2
}