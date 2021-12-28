import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


const link = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    }
});

const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
