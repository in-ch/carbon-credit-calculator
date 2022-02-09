import styled from "styled-components";

const Container = styled.div`
    height:200px;
    width:100%;
    border:1px solid #000;
    background-image:url(${require("../assets/imgs/powerIndustry12212.jpg")});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
`;

const Header = () => {
    return (
        <Container>
        </Container>
    );
};

export default Header;