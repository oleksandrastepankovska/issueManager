import React from "react";
import { HomeWrapper } from "./styles";
import { gql, useQuery } from "@apollo/client";

const Home: React.FC = () => {
    const USER_DATA = gql`
        query { 
            viewer{
                login
            }
        }
    `;
    
    const data = useQuery(USER_DATA);
    return(
        <HomeWrapper>{data.loading ? <div>Loading...</div> : data.data.viewer.login}</HomeWrapper>
    )
};

export default Home;