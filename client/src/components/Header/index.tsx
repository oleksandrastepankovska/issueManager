import React from "react";
import { HeaderWrapper, HeaderMenu, StyledLink, UserInfo, UserImage, UserName } from "./styles";
import { useGetUser } from "../hooks/useGetUser";



const Header: React.FC = () => {
    const userInfo = useGetUser();
    return(
        <HeaderWrapper>
                <UserInfo>
                    <UserImage src={userInfo?.avatarUrl}></UserImage>
                    <UserName>{userInfo?.login}</UserName>
                </UserInfo>
                <HeaderMenu>
                    <li>
                        <StyledLink to='/home'>Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/about'>About</StyledLink>
                    </li>
                </HeaderMenu>
        </HeaderWrapper>
    )
};

export default Header;
