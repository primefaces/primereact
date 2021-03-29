import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class RippleDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import PrimeReact from 'primereact/api';
import { Ripple } from 'primereact/ripple';
import './RippleDemo.css';

export class RippleDemo extends Component {

    constructor(props) {
        super(props);

        PrimeReact.ripple = true;
    }

    render() {
        return (
            <div className="ripple-demo">
                <div className="card-container p-d-flex">
                    <div className="card primary-box p-ripple">
                        Default
                        <Ripple />
                    </div>
                    <div className="card styled-box-green p-ripple">
                        Green
                        <Ripple />
                    </div>
                    <div className="card styled-box-orange p-ripple">
                        Orange
                        <Ripple />
                    </div>
                    <div className="card styled-box-purple p-ripple">
                        Purple
                        <Ripple />
                    </div>
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import PrimeReact from 'primereact/api';
import { Ripple } from 'primereact/ripple';
import './RippleDemo.css';

const RippleDemo = () => {
    PrimeReact.ripple = true;

    return (
        <div className="ripple-demo">
            <div className="card-container p-d-flex">
                <div className="card primary-box p-ripple">
                    Default
                    <Ripple />
                </div>
                <div className="card styled-box-green p-ripple">
                    Green
                    <Ripple />
                </div>
                <div className="card styled-box-orange p-ripple">
                    Orange
                    <Ripple />
                </div>
                <div className="card styled-box-purple p-ripple">
                    Purple
                    <Ripple />
                </div>
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import PrimeReact from 'primereact/api';
import { Ripple } from 'primereact/ripple';
import './RippleDemo.css';

const RippleDemo = () => {
    PrimeReact.ripple = true;

    return (
        <div className="ripple-demo">
            <div className="card-container p-d-flex">
                <div className="card primary-box p-ripple">
                    Default
                    <Ripple />
                </div>
                <div className="card styled-box-green p-ripple">
                    Green
                    <Ripple />
                </div>
                <div className="card styled-box-orange p-ripple">
                    Orange
                    <Ripple />
                </div>
                <div className="card styled-box-purple p-ripple">
                    Purple
                    <Ripple />
                </div>
            </div>
        </div>
    );
}
                `
            }
        };

        this.extFiles = {
            'src/demo/RippleDemo.css': {
                content: `
.ripple-demo .card-container .card {
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    user-select: none;
    padding: 0;
}

.ripple-demo .card-container .card.primary-box {
    background-color: var(--primary-color);
    padding: 0;
    color: var(--primary-color-text);
}

.ripple-demo .card-container .card.styled-box-green .p-ink {
    background: rgba(75, 175, 80, 0.3);
}

.ripple-demo .card-container .card.styled-box-orange .p-ink {
    background: rgba(255, 193, 6, 0.3);
}

.ripple-demo .card-container .card.styled-box-purple .p-ink {
    background: rgba(156, 39, 176, 0.3);
}

.ripple-demo .card-container .card:last-child {
    margin-right: 0;
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import PrimeReact from 'primereact/api';
import { Ripple } from 'primereact/ripple';
`}
</CodeHighlight>
                        <h5>Getting Started</h5>
                        <p>Ripple effect is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at
                            your app's main container (e.g. App.js) using the <i>PrimeReact</i> class.</p>
<CodeHighlight lang="js">
{`
PrimeReact.ripple = true;
`}
</CodeHighlight>

                        <p><span className="p-text-bold">Note</span>: That would be it to enable ripple on PrimeReact components, next section describes how to use it with your own components and standard elements.</p>

                        <h5>Usage</h5>
				        <p>Ripple is a component that needs to be imported and activated using <i>PrimeReact.ripple = true</i></p>
<CodeHighlight lang="js">
{`
import { Ripple } from 'primereact/ripple';

<div className="p-ripple">
    <Ripple />
</div>
`}
</CodeHighlight>

                        <h5>Styling</h5>
                        <p>Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of <i>.p-ink</i> element.</p>
<CodeHighlight>
{`
<div className="p-ripple purple">
    <Ripple />
</div>
`}
</CodeHighlight>

<CodeHighlight lang="css">
{`
.p-ripple.purple .p-ink {
    background: rgba(256,39,176,.3);
}
`}
</CodeHighlight>


                        <h5>Styling</h5>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-ripple</td>
                                        <td>Host element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-ink</td>
                                        <td>Ripple element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-ink-active</td>
                                        <td>Ripple element during animating.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'RippleDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        );
    }
}
