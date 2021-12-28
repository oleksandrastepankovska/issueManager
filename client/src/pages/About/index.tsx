import React from "react";

import { AboutText, AboutWrapper } from "./styles";

const About: React.FC = () => {
    return(
        <AboutWrapper>
            <AboutText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquam minima voluptas totam 
                reprehenderit suscipit harum eos mollitia ea ut fuga consectetur repellendus deleniti, ducimus 
                nesciunt, tempora tenetur sequi aliquid.
            </AboutText>
        </AboutWrapper>
    )
};

export default About;