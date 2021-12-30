import React, { useState, useEffect, ReactEventHandler } from "react";
import IssueItem from './IssueItem'
import { gql, useLazyQuery } from "@apollo/client";
import { IssuesWrapper, IssueForm, IssueTextInput, IssueSubmitInput } from './styles'
import Loading from '../common/Loader'

interface IRenderedItem {
    node: {
        id: string;
        url: string;
        state: string;
        title: string;
    }
}

const GET_ISSUES = gql`
    query getIssues($owner: String!, $name: String!){ 
        repository(owner: $owner, name: $name) {
            issues(first: 5){
            edges{
                node{
                id
                state
                title
                url
                }
            }
            }
        }
    }
`

const Issues = () => {
    const [owner, setOwner] = useState('');
    const [name, setName ] = useState('');
    const [ issues, setIssues ] = useState<IRenderedItem[]>([]);  
    const [loadIssues, { data }] = useLazyQuery(GET_ISSUES, {
        variables: { owner, name }
    })

    const handleSubmit = (e: any) => {
        e.preventDefault();
        loadIssues({variables: {name, owner}})
        setName('')
        setOwner('')
    }

    useEffect(() => {
        setIssues(data?.repository?.issues?.edges)
    }, [data])

    return(
        <IssuesWrapper>
            <IssueForm onSubmit={handleSubmit}>
                <label>
                    Search for Issues:
                    <IssueTextInput type="text" placeholder="Owner Name" value={owner} name="owner" onChange={e => setOwner(e.target.value)}/>
                    <IssueTextInput type="text" placeholder="Repository Name" value={name} name="name" onChange={e => setName(e.target.value)} />
                </label>
                <IssueSubmitInput type="submit" value="Issues" />
            </IssueForm>
            {issues ? issues.map((item: IRenderedItem) => 
                        <IssueItem 
                            key={item.node.id}
                            url={item.node.url} 
                            state={item.node.state} 
                            title={item.node.title}
                        />) : <Loading />}
        </IssuesWrapper>
    )
}

export default Issues;
