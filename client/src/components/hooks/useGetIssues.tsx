import { gql, useQuery } from "@apollo/client";

const GET_ISSUES = gql`
    query { 
        repository(owner: "rwieruch", name: "react-graphql-github-apollo") {
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

export const useGetIssues = () => {
    const data = useQuery(GET_ISSUES)
    if(!data.loading){
        return data.data.repository.issues.edges
    }
}