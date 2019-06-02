import React from "react"
import { connect } from 'react-redux';
import Header from "../Commons/Header";
import AppNavBar from "../Commons/AppNavBar"

export class Disciplinas extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <AppNavBar/>

            </div>

        )
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps,{})(Disciplinas);