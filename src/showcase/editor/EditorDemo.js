import React, { Component } from 'react';
import AppContentContext from '../../AppContentContext';
import { Editor } from "../../components/editor/Editor";
import { Button } from "../../components/button/Button";
import { EditorDoc } from './EditorDoc';

export class EditorDemo extends Component {

    constructor() {
        super();
        this.state = {
            text1: '<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>',
            text2: ''
        };
    }

    renderHeader() {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Editor</h1>
                        <p>Editor is rich text editor component based on Quill.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("editor")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Default</h3>
                    <Editor style={{ height: '320px' }} value={this.state.text1} onTextChange={(e) => this.setState({ text1: e.htmlValue })} />
                    <p>Value: {this.state.text1 || 'empty'}</p>
                    <Button label="Clear" icon="pi pi-times" onClick={() => this.setState({ text1: '' })} />

                    <hr />

                    <h3 className="first">Custom Toolbar</h3>
                    <Editor headerTemplate={header} style={{ height: '320px' }} value={this.state.text2} onTextChange={(e) => this.setState({ text2: e.htmlValue })} />
                    <p>Value: {this.state.text2 || 'empty'}</p>
                    <Button label="Clear" icon="pi pi-times" onClick={() => this.setState({ text2: '' })} />
                </div>

                <EditorDoc />

            </div>
        );
    }
}
