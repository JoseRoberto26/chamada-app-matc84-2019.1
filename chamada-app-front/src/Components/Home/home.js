import React from "react";
import Header from "../Commons/Header";
import AppNavBar from "../Commons/AppNavBar";
import connect from "react-redux/es/connect/connect";
import { Button, Card } from "react-bootstrap";

export class Home extends React.Component {
    render() {
// item -> objeto json com todas propriedades
//         const disciplinas = this.props.disciplinas.map((item) => {
//             return (
//                 <Card>
//                      <Card.Header as="h5">MATC84</Card.Header>
//                      <Card.Body>
//                          <Card.Title>Laboratório de Programação Web</Card.Title>
//                          <Card.Text>
//                              32/02/2019 - Segunda
//                          </Card.Text>
//                          <Card.Text>
//                              Horário: 20:20-22:10
//                          </Card.Text>
//                          <Button variant="primary">Chamada</Button>
//                      </Card.Body>
//                 </Card>
//             )
//         })

        return(
            <div>
                <Header/>
                <AppNavBar/>

                {/*{disciplinas}*/}

                <Card>
                     <Card.Header as="h5">MATC84</Card.Header>
                     <Card.Body>
                         <Card.Title>Laboratório de Programação Web</Card.Title>
                         <Card.Text>
                             32/02/2019 - Segunda
                         </Card.Text>
                         <Card.Text>
                             Horário: 20:20-22:10
                         </Card.Text>
                         <Button variant="primary">Chamada</Button>
                     </Card.Body>
                </Card>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    disciplinas: state.home.disciplinas
});

export default connect(mapStateToProps,{})(Home);