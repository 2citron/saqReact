import React from 'react';
import Api from '../utils/Api';

// Composant Material Design
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

class FormAjouterBottle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auteur: '',
            citation:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            [name]: value
        });
    }


    handleSubmit(event) {
        const citation = {
            citation: this.state.citation,
            auteur: this.state.auteur,
        };
        this.props.ajouterCitation(citation);


        event.preventDefault();
        this.clearInput();
    }

    clearInput() {
        this.setState({
            citation: '',
            auteur: '',
        });
    }


    render(){

        return (
            <div>

                <form>

                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2"><h3>Ajouter une citation</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><label>Citation</label></td>
                                <td>
                                    <textarea 
                                        rows="4" 
                                        cols="50" 
                                        name="citation"
                                        value={this.state.citation}
                                        onChange={this.handleChange}
                                    >
                                    </textarea>
                                </td>
                            </tr>

                            <tr>
                                <td><label>Auteur</label></td>
                                <td style={{'textAlign':'right'}}>
                                    <input
                                        type="text"
                                        id="auteur"
                                        name="auteur"
                                        size="50"
                                        value={this.state.auteur}
                                        onChange={this.handleChange}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td></td>
                                <td style={{'textAlign':'right'}}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        startIcon={<CancelIcon />}
                                        style={{'marginRight':'10px'}}
                                        onClick={this.clearInput}
                                    >
                                        Annuler
                                    </Button>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        startIcon={<SaveIcon />}
                                        onClick={this.handleSubmit}
                                    >
                                        Sauvegarder
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                </form>
            </div>
        );
    }
}

export default (FormAjouterBottle);