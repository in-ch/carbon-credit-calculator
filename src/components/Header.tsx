import styled from "styled-components";

const Container = styled.div`
    height:400px;
    width:100%;
    border:1px solid #000;
`;

const Header = () => {
    return (
        <Container>
            <img src={require("../assets/imgs/industry1223saaa--153345676.png").default} />
        </Container>
    );
};

export default Header;