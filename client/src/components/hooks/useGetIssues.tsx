import { gql, useQuery } from "@apollo/client";

interface IGetIssuesProps {
    owner: string;
    name: string;
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

export const useGetIssues = ({ owner, name }: IGetIssuesProps) => {
    const {loading, data} = useQuery(GET_ISSUES, {
        variables: { owner, name }
    })
    if(!loading){
        return data?.repository.issues.edges
    }
}