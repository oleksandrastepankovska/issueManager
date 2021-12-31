import { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { IssuesWrapper, IssueForm, IssueTextInput, IssueSubmitInput } from './styles'
import IssuesList from "./IssueList";
import { IRenderedItem } from "./IssueList";

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
                author{
                    login
                }
                repository{
                    name
                }
                }
            }
            }
        }
    }
`

const Issues = () => {
    const [owner, setOwner] = useState('');
    const [name, setName ] = useState('');
    const [ issues, setIssues ] = useState<IRenderedItem[]>();  
    const [loadIssues, { data, loading, called }] = useLazyQuery(GET_ISSUES, {
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
                    <IssueTextInput type="text" placeholder="Owner Name" value={owner} name="owner" onChange={e => setOwner(e.target.value)}/>
                    <IssueTextInput type="text" placeholder="Repository Name" value={name} name="name" onChange={e => setName(e.target.value)} />
                </label>
                <IssueSubmitInput type="submit" value="Issues" />
            </IssueForm>
            <IssuesList issues={issues} loading={loading} called={called}/>
        </IssuesWrapper>
    )
}

export default Issues;
