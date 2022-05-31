import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import logo from '../image/logo.jpg'
import '../css/logo.css'


export default class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Link to="/">
                        <img className="cropped1"
                            src={logo}
                            alt="fakeYoutube logo"
                        />
                    </Link>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Router>
            </>
        )
    }
}