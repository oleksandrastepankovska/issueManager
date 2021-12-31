import Loading from "../../common/Loader";
import IssueItem from "../IssueItem";
import { IssuesListWrapper } from './styles'

export interface IRenderedItem {
    node: {
        id: string;
        url: string;
        state: string;
        title: string;
        repository: {
            name: string;
        }
        author: {
            login: string;
        }
    }
}

interface IIssueProps {
    issues?: Array<IRenderedItem>;
    loading: boolean;
    called: boolean;
}

const IssuesList = ({issues, loading, called} : IIssueProps) => {
    if(!loading && !called){
        return <p>No Issues Yet</p>
    } else if (called && issues){
        return(
            <IssuesListWrapper>
                <p>Repository: {issues[0].node.repository.name}</p>
                <p>Repository Owner: {issues[0].node.author.login}</p>
                {issues.map((item: IRenderedItem) => 
                    <IssueItem 
                        key={item.node.id}
                        url={item.node.url} 
                        state={item.node.state} 
                        title={item.node.title}
                />)}
            </IssuesListWrapper>)
    } else {
        return <Loading />
    }
        
}

export default IssuesList;