import React, { Component } from 'react';
import { Editor } from '../../components/editor/Editor';
import { EditorDoc } from './EditorDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class EditorDemo extends Component {

    constructor(props) {
        super(props);
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
                    <AppInlineHeader changelogText="editor" showInputStyle>
                        <h1>Editor</h1>
                        <p>Editor is rich text editor component based on Quill.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Default</h5>
                        <Editor style={{ height: '320px' }} value={this.state.text1} onTextChange={(e) => this.setState({ text1: e.htmlValue })} />

                        <h5>Customized</h5>
                        <Editor headerTemplate={header} style={{ height: '320px' }} value={this.state.text2} onTextChange={(e) => this.setState({ text2: e.htmlValue })} />
                    </div>
                </div>

                <EditorDoc />

            </div>
        );
    }
}
