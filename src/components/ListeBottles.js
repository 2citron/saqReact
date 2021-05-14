import React from 'react';
import Api from '../utils/Api';
import Citation from './Citation';

// Composant Material Design
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class ListeBottles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citations:[]
        }

    }


    render() {
        // Point #3 - Tu devais utiliser le tableau citations que tu passes en paramètre et non ton 
        // objet state
        const ListeCitations = this.props.citations.map( citation => (
        // const ListeCitations = this.state.citations.map( citation => (
            <tr key={citation.id}>
                <td>
                    <Citation citation={citation.citation} auteur={citation.auteur}/>
                </td>
                
                <td style={{'verticalAlign': 'middle'}}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<DeleteIcon />}
                    >
                        Supprimer
                    </Button>
                </td>
            </tr>
            )
        )

        return (
            <div>
                <table>
                        <thead>
                            <tr>
                                <th><h3>Liste de mes citations</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {ListeCitations}
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default ListeBottles;