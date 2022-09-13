import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout';
import Page from '../pages/page';
import '../styles/styles.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
					<Route exact path="/" element={<Page/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
