import React from "react";
import logo from "./logo.svg";

export default class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img src={logo} alt="PresençaFácil" />
            </div>
        )
    }
}