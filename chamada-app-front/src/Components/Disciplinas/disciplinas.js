import React from "react"
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Commons/Header";

export class Disciplinas extends React.Component {
    render() {
        return(
            <div>
                <Header/>

                <div>
                    <Button>
                        <Link to={"/"}>VOLTAR</Link>
                    </Button>
                </div>
            </div>

        )
    }
}

Disciplinas.propTypes = {

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps,{})(Disciplinas);