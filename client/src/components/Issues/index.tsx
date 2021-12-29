import React from "react";
import { useGetIssues } from "../hooks/useGetIssues";

const Issues = () => {
    const info = useGetIssues()
    console.log(info)
    return(
        <div>
            issues
        </div>
    )
}

export default Issues;
