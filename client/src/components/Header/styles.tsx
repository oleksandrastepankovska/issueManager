import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 70px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
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

export const UserInfo = styled.div`
    display: flex;
    width: 30%;
    justify-content: flex-start;
    align-items: center;
`;

export const UserImage = styled.img`
    height: 50px;
    width: 50px;
`;

export const UserName = styled.p`
    color: white;
    font-size: 20px;
    margin-left: 20px;
`;
