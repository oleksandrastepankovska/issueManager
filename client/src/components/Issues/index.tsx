import React from "react";
import { useGetIssues } from "../hooks/useGetIssues";
import IssueItem from './IssueItem'
import { IssuesWrapper } from './styles'

interface IRenderedItem {
    node: {
        id: string;
        url: string;
        state: string;
        title: string;
    }
}

const Issues = () => {
    const info = useGetIssues({owner: "oleksandrastepankovska", name: "issueManager"})
    if(info === undefined){
        return(<div>Loading...</div>)
    } else {
        return(
            <IssuesWrapper>
                {info.map((item: IRenderedItem) => 
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
