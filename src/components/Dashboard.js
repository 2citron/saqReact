import React from 'react';
import Api from '../utils/Api';
import FormAjouterBottle from './FormAjouterBottle';
import ListeBottles from './ListeBottles';
import './Dashboard.css';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottles: [],
        }

        this.ajouterBottle = this.ajouterBottle.bind(this);
        this.supprimerBottle = this.supprimerBottle.bind(this);
    }

    componentDidMount(){
        Api({
            method: 'get',
            url: '/bottles',
        })
            .then((res) => {
                const bottles = res.data;
                this.setState({ bottles });
            });
    }

    ajouterBottle(bottle) {
        Api({
            method: 'POST',
            url: '/bottle',
            data: {
                name: bottle.name,
                type_id: bottle.type_id,
                cost: bottle.cost,
                producer: bottle.producer,
                degree: bottle.degree,
                format: bottle.format,
            }
        })
            .then((resultat) => {
                bottle.id = resultat.data.id;
                const bottles = [...this.state.bottles, bottle];
                this.setState({bottles: bottles});
            });
    }

    supprimerBottle() {

    }

    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                
                <table className="dashboardTable">
                    <tbody>
                        <tr>
                            <td><FormAjouterBottle ajouterBottle={this.ajouterBottle}/></td>
                            <td><ListeBottles bottles={this.state.bottles}/></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Dashboard;