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

const Container3 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
`

const Container4 = styled.div`
    img {
        width: 133px;
        height: 121px;
        border-radius: 12px;
    }
`

const Container5 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 172px;
    height: 121px;
    justify-content: space-between;
`

const Container6 = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 60px;

    p {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #9B9B9B;
    }
`

const Name = styled.p`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
`

const Button2 = styled.button`
    width: 90px;
    height: 23px;
    background: #FF6D6D;
    border-radius: 8px;
    border: none;

    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`

export {
    Header,
    Container2,
    Subtotal,
    StyledLink2,
    Container3,
    Container4,
    Container5,
    Container6,
    Name,
    Button2
}