import React from "react";
import { HomeWrapper } from "./styles";
import Issues from "../../components/Issues";

const Home: React.FC = () => {
    return(
        <HomeWrapper>
            <Issues></Issues>
        </HomeWrapper>
    )
};

export default Home;