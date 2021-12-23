import React from "react";

import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

import Home from "../../pages/Home";
import Header from '../Header';
import About from "../../pages/About";
import { GITHUB_DATA } from '../../GIT';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


const link = new HttpLink({
    uri: GITHUB_DATA.GITHUB_BASE_URL,
    headers: {
        authorisation: `Bearer ${GITHUB_DATA.token}`,

    }
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
    return(
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </ApolloProvider>
    )
};

export default App;
