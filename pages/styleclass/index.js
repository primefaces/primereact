import React, { Component } from 'react';
import { StyleClass } from '../../components/lib/styleclass/StyleClass';
import { Button } from '../../components/lib/button/Button';
import { InputText } from '../../components/lib/inputtext/InputText';
import { StyleClassDoc } from '../../components/doc/styleclass';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class StyleClassDemo extends Component {

    constructor(props) {
        super(props);

        this.toggleBtnRef = React.createRef();
        this.openBtnRef = React.createRef();
        this.closeBtnRef = React.createRef();
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React StyleClass Component</title>
                    <meta name="description" content="StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>StyleClass</h1>
                        <p>StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.</p>
                    </div>

                    <DocActions github="styleclass/index.js" />
                </div>

                <div className="content-section implementation styleclass-demo">
                    <div className="card">
                        <h5>Toggle Class</h5>
                        <StyleClass nodeRef={this.toggleBtnRef} selector="@next" toggleClassName="p-disabled">
                            <Button ref={this.toggleBtnRef} label="Toggle p-disabled" />
                        </StyleClass>
                        <InputText className="p-d-block p-mt-3" />

                        <h5>Animations</h5>
                        <StyleClass nodeRef={this.openBtnRef} selector=".box" enterClassName="p-d-none" enterActiveClassName="my-fadein">
                            <Button ref={this.openBtnRef} label="Show" className="p-mr-2" />
                        </StyleClass>

                        <StyleClass nodeRef={this.closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="p-d-none">
                            <Button ref={this.closeBtnRef} label="Hide" />
                        </StyleClass>

                        <div className="box p-d-none">Content</div>
                    </div>
                </div>

                <StyleClassDoc />
            </div>
        )
    }
}
