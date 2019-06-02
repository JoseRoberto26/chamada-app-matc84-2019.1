import React from "react"
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";

export class Disciplinas extends React.Component {
    render() {
        return(
            <div>
                <Button>uhavenothingleft</Button>
            </div>
        )
    }
}

Disciplinas.propTypes = {

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps,{})(Disciplinas);