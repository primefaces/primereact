import React, {Component} from 'react';
import {Dialog} from '../../components/dialog/Dialog';
import {Button} from '../../components/button/Button';

export class DialogDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({visible: true});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Dialog</h1>
                        <p>Dialog is a container to display content in an overlay window.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Dialog header="Godfather I" visible={this.state.visible} width="350px">
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Dialog>

                    <Button label="Show" icon="fa-external-link-square" onClick={this.onClick}/>
                </div>
            </div>
        )
    }
}