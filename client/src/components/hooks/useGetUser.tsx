import { gql, useQuery } from "@apollo/client";
import {User} from '../interfaces/UserInterface'

const GET_USER = gql`
    query GetUser{
        viewer{
            login
            avatarUrl
        }
    }
`

export const useGetUser = ():User | undefined  => {
    const { data, loading } =  useQuery(GET_USER);
    if(!loading) {
        return data?.viewer
    }
}