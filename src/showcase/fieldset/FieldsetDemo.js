import React, { Component } from 'react';
import { Fieldset } from '../../components/fieldset/Fieldset';
import AppContentContext from '../../AppContentContext';
import { FieldsetDoc } from './FieldsetDoc';

export class FieldsetDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Fieldset</h1>
                        <p>Fieldset is a grouping component with a content toggle feature.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("fieldset")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Fieldset legend="Godfather I">
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Fieldset>

                    <br />

                    <Fieldset legend="Godfather I" toggleable={true}>
                        <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>
                    </Fieldset>
                </div>

                <FieldsetDoc />
            </div>
        )
    }
}
