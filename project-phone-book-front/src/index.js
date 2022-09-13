import React from "react";
import reactDom from "react-dom";
import App from './routes/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

reactDom.render(
    <App/>,
    document.getElementById('app')
);