import styled from "styled-components";

export const IssuesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
`;

export const IssueForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IssueTextInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
`;

export const IssueSubmitInput = styled.input`
    width: 80%;
`;