import { Issue, IssueLink } from './styles'

interface IIssueItemProps {
    state: string;
    title: string;
    url: string;
}

const IssueItem: React.FC<IIssueItemProps> = ({state, title, url}) => {
    return(
        <Issue>
            <IssueLink href={url} target="_blank">{title}</IssueLink>
            <p>Status: {state}</p>
        </Issue>
    )
};

export default IssueItem;
