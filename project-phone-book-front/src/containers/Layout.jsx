import React from 'react';
import Basic from '../components/basic';
import Header from "../components/header";
import AddContact from "../components/addContact";
import ListContact from "../components/listContact";

const Layout = () => {
    return (
        <div id="phoneBook" className="mx-auto">

            <Header/>
            <AddContact/>
            <ListContact/>
        </div>
    );
}

export default Layout;