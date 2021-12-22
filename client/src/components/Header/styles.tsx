import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const HeaderMenu = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
`;

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;
`;
