import React from "react";
import { HeaderWrapper, HeaderMenu, StyledLink } from "./styles";

const Header: React.FC = () => {
    return(
        <HeaderWrapper>
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
