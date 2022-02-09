import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    input{
        all:unset;
    }
    select{
        background-color:white;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        color:RGB(24,24,24);
        -webkit-tap-highlight-color : rgba(255,255,255,0);
        @media (max-width: 520px) {
            overflow:scroll;
        }
        font-family: 'Nanum Pen Script', cursive;
        font-family: 'Noto Sans KR', sans-serif;
        -ms-overflow-style: none; /* IE, Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }
        -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;


type Props = {
    children: JSX.Element,
}

const Container = styled.div`
    width:100%;
`;

const Layout = ({children}:Props) => {
    return (
        <>
            <GlobalStyle />
            <Container>
                {children}
            </Container>
        </>

    )
};

export default Layout;