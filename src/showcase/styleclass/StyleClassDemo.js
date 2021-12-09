import React, { Component } from 'react';
import { StyleClass } from '../../components/styleclass/StyleClass';
import { Button } from '../../components/button/Button';
import { InputText } from '../../components/inputtext/InputText';
import { StyleClassDoc } from './StyleClassDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import AppDemoActions from '../../AppDemoActions';
import './StyleClassDemo.scss';

export class StyleClassDemo extends Component {

    constructor(props) {
        super(props);

        this.toggleBtnRef = React.createRef();
        this.openBtnRef = React.createRef();
        this.closeBtnRef = React.createRef();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="styleclass">
                        <h1>StyleClass</h1>
                        <p>StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="styleclass/StyleClassDemo.js" />
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
