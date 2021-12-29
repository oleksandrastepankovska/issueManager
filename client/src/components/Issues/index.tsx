import React from "react";
import { useGetIssues } from "../hooks/useGetIssues";
import IssueItem from './IssueItem'
import { IssuesWrapper } from './styles'

const Issues = () => {
    const info = useGetIssues()
    if(info === undefined){
        return(<div>Loading...</div>)
    } else {
        return(
            <IssuesWrapper>
                {info.map((item: any) => 
                    <IssueItem 
                        key={item.node.id}
                        url={item.node.url} 
                        state={item.node.state} 
                        title={item.node.title}
                    />)
                }
            </IssuesWrapper>
        )
    }
}

export default Issues;
