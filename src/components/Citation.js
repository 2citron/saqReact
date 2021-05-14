import React from 'react';
import Api from '../utils/Api';

class Citation extends React.Component {

    render() {
        return (
            <div>
                <blockquote>
                    <p>{this.props.citation}</p>
                    <cite>{this.props.auteur}</cite>
                </blockquote>
            </div>
        );
    }
}

export default Citation;