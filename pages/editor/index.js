import React, { useState } from 'react';
import { Editor } from '../../components/lib/editor/Editor';
import EditorDoc from '../../components/doc/editor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const EditorDemo = () => {

    const [text1, setText1] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');
    const [text2, setText2] = useState('');

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    }

    const header = renderHeader();

    return (
        <div>
            <Head>
                <title>React Editor Component</title>
                <meta name="description" content="Editor is rich text editor component based on Quill." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Editor</h1>
                    <p>Editor is rich text editor component based on Quill.</p>
                </div>
                <DocActions github="editor/index.js" />
            </div>
            <div className="content-section implementation">
                <div className="card">
                    <h5>Default</h5>
                    <Editor style={{ height: '320px' }} value={text1} onTextChange={(e) => setText1(e.htmlValue)} />

                    <h5>Customized</h5>
                    <Editor headerTemplate={header} style={{ height: '320px' }} value={text2} onTextChange={(e) => setText2(e.htmlValue)} />
                </div>
            </div>
            <EditorDoc />
        </div>
    );
}

export default EditorDemo;
