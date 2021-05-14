import React from 'react';
import Api from '../utils/Api';
import Citation from './Citation'

// Composant Material Design
import Button from '@material-ui/core/Button';

class RandomCitation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            citation: '',
            auteur: '',
        }
        
        this.getRandomQuote = this.getRandomQuote.bind(this);
    }

    componentDidMount(){
        // Point #2 - Tu pourrais juste appelé la fonction getRandomQuote ici
        // Elle fait la même chose.
        // Api({
        //     method: 'get',
        //     url: '/citations/random',
        // })
        // .then((res) => {
        //     const citations = res.data;
        //     this.setState({ citations });
        // });
        this.getRandomQuote();
    }

    getRandomQuote() {
        Api({
            method: 'get',
            url: '/citations/random',
            // Point #2 - Pas besoin d'ajouter de paramètres dans le body
            // data: {
            //     citation: citation.citation,
            //     auteur: citation.auteur,
            // }
        })
            .then((resultat) => {
                // citation.id = resultat.data.id;
                // const citations = [...this.state.citations, citation];
                // Point #2 - Tu n'as pas d'objet citations dans le state, tu ne peux pas faire ça ici
                // this.setState({citations: citations});
                this.setState({citation: resultat.data.citation, auteur: resultat.data.auteur});
            });
    }

    render() {
        return (
            <div>
                <Citation citation={this.state.citation} auteur={this.state.auteur}/>

                <Button 
                    variant="contained" 
                    onClick={this.getRandomQuote}
                >
                    Rafraichir
                </Button>
            </div>
        );
    }
}

export default RandomCitation;