import React, { memo } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';

const StyleClassDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { StyleClass } from 'primereact/styleclass/';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './StyleClassDemo.css';

export class StyleClassDemo extends Component {

    constructor(props) {
        super(props);

        this.toggleBtnRef = React.createRef();
        this.openBtnRef = React.createRef();
        this.closeBtnRef = React.createRef();
    }

    render() {
        return (
            <div className="card">
                <h5>Toggle Class</h5>
                <StyleClass nodeRef={this.toggleBtnRef} selector="@next" toggleClassName="p-disabled">
                    <Button ref={this.toggleBtnRef} label="Toggle p-disabled" />
                </StyleClass>
                <InputText className="block mt-3" />

                <h5>Animations</h5>
                <StyleClass nodeRef={this.openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
                    <Button ref={this.openBtnRef} label="Show" className="mr-2" />
                </StyleClass>

                <StyleClass nodeRef={this.closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
                    <Button ref={this.closeBtnRef} label="Hide" />
                </StyleClass>

                <div className="box hidden">Content</div>
            </div>
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass/';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './StyleClassDemo.css';

const StyleClassDemo = () => {

    const toggleBtnRef = useRef(null);
    const openBtnRef = useRef(null);
    const closeBtnRef = useRef(null);

    return (
        <div className="card">
            <h5>Toggle Class</h5>
            <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
                <Button ref={toggleBtnRef} label="Toggle p-disabled" />
            </StyleClass>
            <InputText className="block mt-3" />

            <h5>Animations</h5>
            <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
                <Button ref={openBtnRef} label="Show" className="mr-2" />
            </StyleClass>

            <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
                <Button ref={closeBtnRef} label="Hide" />
            </StyleClass>

            <div className="box hidden">Content</div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass/';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './StyleClassDemo.css';

const StyleClassDemo = () => {

    const toggleBtnRef = useRef<any>(null);
    const openBtnRef = useRef<any>(null);
    const closeBtnRef = useRef<any>(null);

    return (
        <div className="card">
            <h5>Toggle Class</h5>
            <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
                <Button ref={toggleBtnRef} label="Toggle p-disabled" />
            </StyleClass>
            <InputText className="block mt-3" />

            <h5>Animations</h5>
            <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
                <Button ref={openBtnRef} label="Show" className="mr-2" />
            </StyleClass>

            <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
                <Button ref={closeBtnRef} label="Hide" />
            </StyleClass>

            <div className="box hidden">Content</div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./StyleClassDemo.css" />

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/styleclass/styleclass.min.js"></script>`,
            content: `
const { useRef } = React;
const { StyleClass } = primereact.styleclass;
const { Button } = primereact.button;
const { InputText } = primereact.inputtext;

const StyleClassDemo = () => {

    const toggleBtnRef = useRef(null);
    const openBtnRef = useRef(null);
    const closeBtnRef = useRef(null);

    return (
        <div className="card">
            <h5>Toggle Class</h5>
            <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
                <Button ref={toggleBtnRef} label="Toggle p-disabled" />
            </StyleClass>
            <InputText className="block mt-3" />

            <h5>Animations</h5>
            <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
                <Button ref={openBtnRef} label="Show" className="mr-2" />
            </StyleClass>

            <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
                <Button ref={closeBtnRef} label="Hide" />
            </StyleClass>

            <div className="box hidden">Content</div>
        </div>
    )
}
                `
        }
    }

    const extFiles = {
        'demo/StyleClassDemo.css': {
            content: `
.box {
    background-color: var(--green-500);
    color: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}

@keyframes my-fadein {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes my-fadeout {
    0%   { opacity: 1; }
    100% { opacity: 0; }
}

.my-fadein {
    animation: my-fadein 150ms linear;
}

.my-fadeout {
    animation: my-fadeout 150ms linear;
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { StyleClass } from 'primereact/styleclass';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/styleclass/styleclass.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Required prop <i>nodeRef</i> needs to be bind to target's ref which is DOM element. StyleClass has two modes, <i>toggleClassName</i> to simply add-remove a class and enter/leave animations.</p>

                    <p><b>ToggleClass</b></p>
<CodeHighlight>
{`
<StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
    <Button ref={toggleBtnRef} label="Toggle p-disabled" />
</StyleClass>
<InputText className="block mt-3" />
`}
</CodeHighlight>
                    <p><b>Enter/Leave Animation</b></p>
<CodeHighlight>
{`
<StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
    <Button ref={openBtnRef} label="Show" className="mr-2" />
</StyleClass>

<StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
    <Button ref={closeBtnRef} label="Hide" />
</StyleClass>

<div className="box hidden">Content</div>
`}
</CodeHighlight>
                    <h5>Target</h5>
                    <p>Target element is defined with the <i>selector</i> prop that can either be a valid css query or one of the keywords below.</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>@next</td>
                                    <td>Next element.</td>
                                </tr>
                                <tr>
                                    <td>@prev</td>
                                    <td>Previous element.</td>
                                </tr>
                                <tr>
                                    <td>@parent</td>
                                    <td>Parent element.</td>
                                </tr>
                                <tr>
                                    <td>@grandparent</td>
                                    <td>Parent element of the parent.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5>Properties</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>selector</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Selector to define the target element.</td>
                                </tr>
                                <tr>
                                    <td>nodeRef</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>A React reference to DOM element that need to specify. Required</td>
                                </tr>
                                <tr>
                                    <td>enterClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class to add when item begins to get displayed.</td>
                                </tr>
                                <tr>
                                    <td>enterActiveClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class to add during enter animation.</td>
                                </tr>
                                <tr>
                                    <td>enterToClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class to add when enter animation is completed.</td>
                                </tr>
                                <tr>
                                    <td>leaveClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class to add when item begins to get hidden.</td>
                                </tr>
                                <tr>
                                    <td>leaveActiveClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class to add during leave animation</td>
                                </tr>
                                <tr>
                                    <td>leaveToClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class to add when leave animation is completed.</td>
                                </tr>
                                <tr>
                                    <td>hideOnOutsideClick</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to trigger leave animation when outside of the element is clicked.</td>
                                </tr>
                                <tr>
                                    <td>toggleClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Adds or removes a class when no enter-leave animation is required.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <p>Component has no events.</p>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'StyleClassDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})

export default StyleClassDoc;
