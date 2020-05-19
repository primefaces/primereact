import React, { Component } from 'react';
import { Button } from '../../components/button/Button';
import AppContentContext from '../../AppContentContext';
import { ButtonDoc } from './ButtonDoc';

export class ButtonDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Button</h1>
                        <p>Button is an extension to standard input element with icons and theming.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("button")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Button label="Click" />
                    <Button label="Click" icon="pi pi-check" />
                    <Button label="Click" icon="pi pi-check" iconPos="right" />
                    <Button icon="pi pi-check" />
                    <Button label="Click" disabled="disabled" />

                    <h3>Severities</h3>
                    <Button label="Primary" />
                    <Button label="Secondary" className="p-button-secondary" />
                    <Button label="Success" className="p-button-success" />
                    <Button label="Info" className="p-button-info" />
                    <Button label="Warning" className="p-button-warning" />
                    <Button label="Danger" className="p-button-danger" />

                    <h3>Raised Buttons</h3>
                    <Button label="Primary" className="p-button-raised" />
                    <Button label="Secondary" className="p-button-raised p-button-secondary" />
                    <Button label="Success" className="p-button-raised p-button-success" />
                    <Button label="Info" className="p-button-raised p-button-info" />
                    <Button label="Warning" className="p-button-raised p-button-warning" />
                    <Button label="Danger" className="p-button-raised p-button-danger" />

                    <h3>Rounded Buttons</h3>
                    <Button label="Primary" className="p-button-rounded" />
                    <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                    <Button label="Success" className="p-button-rounded p-button-success" />
                    <Button label="Info" className="p-button-rounded p-button-info" />
                    <Button label="Warning" className="p-button-rounded p-button-warning" />
                    <Button label="Danger" className="p-button-rounded p-button-danger" />
                </div>

                <ButtonDoc></ButtonDoc>
            </div>
        )
    }
}
