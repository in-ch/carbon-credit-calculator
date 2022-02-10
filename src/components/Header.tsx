import styled from "styled-components";

const Container = styled.div`
    height:200px;
    width:100%;
    background-image:url(${require("../assets/imgs/powerIndustry12212.jpg")});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        font-size:35px;
        color:white;
        font-weight:bold;
    }
`;

const Header = () => {
    return (
        <>
            <Container>
                <p>탄소 배출량 계산기</p>
            </Container>
        </>
    );
};

export default Header;