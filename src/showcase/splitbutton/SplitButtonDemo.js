import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SplitButton} from '../../components/splitbutton/SplitButton';
import {Growl} from '../../components/growl/Growl';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class SplitButtonDemo extends Component {

    constructor() {
        super();
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.growl.show({severity:'success', summary:'Updated', detail:'Data Updated'});
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.growl.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'React Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://facebook.github.io/react/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            }
        ];

        this.save = this.save.bind(this);
    }

    save() {
        this.growl.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>SplitButton</h1>
                        <p>SplitButton groups a set of commands in an overlay with a default command.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("splitButton")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation splitbutton-demo">
                    <Growl ref={(el) => this.growl = el}></Growl>

                    <h3 className="first">Basic</h3>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items}></SplitButton>

                    <h3>Severities</h3>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-secondary"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-success" style={{marginRight: '.25em'}}></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-info" style={{marginRight: '.25em'}}></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-warning" style={{marginRight: '.25em'}}></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-danger" style={{marginRight: '.25em'}}></SplitButton>
                </div>

                <SplitButtonDoc />
            </div>
        )
    }
}

class SplitButtonDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, {Component} from 'react';
import {SplitButton} from 'primereact/splitbutton';
import {Growl} from 'primereact/growl';

export class SplitButtonDemo extends Component {

    constructor() {
        super();
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.growl.show({severity:'success', summary:'Updated', detail:'Data Updated'});
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.growl.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'React Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://facebook.github.io/react/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            }
        ];

        this.save = this.save.bind(this);
    }

    save() {
        this.growl.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    render() {
        return (
            <div className="splitbutton-demo">
                <Growl ref={(el) => this.growl = el}></Growl>

                <h3 className="first">Basic</h3>
                <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items}></SplitButton>

                <h3>Severities</h3>
                <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-secondary"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-success" style={{marginRight: '.25em'}}></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-info" style={{marginRight: '.25em'}}></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-warning" style={{marginRight: '.25em'}}></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items} className="p-button-danger" style={{marginRight: '.25em'}}></SplitButton>
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
import {SplitButton} from 'primereact/splitbutton';
import {Growl} from 'primereact/growl';

const SplitButtonDemo = () => {
    let growl = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                growl.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                growl.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:() => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:() => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        growl.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div className="splitbutton-demo">
            <Growl ref={growl}></Growl>

            <h3 className="first">Basic</h3>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items}></SplitButton>

            <h3>Severities</h3>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-secondary"></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-success" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-info" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-warning" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-danger" style={{marginRight: '.25em'}}></SplitButton>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import {SplitButton} from 'primereact/splitbutton';
import {Growl} from 'primereact/growl';

const SplitButtonDemo = () => {
    let growl = useRef<any>(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                growl.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                growl.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:() => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:() => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        growl.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div className="splitbutton-demo">
            <Growl ref={growl}></Growl>

            <h3 className="first">Basic</h3>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items}></SplitButton>

            <h3>Severities</h3>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-secondary"></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-success" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-info" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-warning" style={{marginRight: '.25em'}}></SplitButton>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="p-button-danger" style={{marginRight: '.25em'}}></SplitButton>
        </div>
    )
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.splitbutton-demo p-splitbutton {
    margin-right: .5em;
}
            `
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/splitbutton" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="SplitButtonDemo" sources={this.sources} extFiles={this.extFiles} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {SplitButton} from 'primereact/splitbutton';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>SplitButton has a default command button and a collection of additional options defined by the <i>model</i> property.</p>
                        <CodeHighlight className="language-javascript">
{`
export class SplitButtonDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: (e) => {
                        this.growl.show({severity:'success', summary:'Updated', detail:'Data Updated'});
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: (e) => {
                        this.growl.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    command:(e) => {
                        window.location.href = 'https://facebook.github.io/react/'
                    }
                },
                {   label: 'Upload',
                    icon: 'pi pi-upload',
                    command:(e) => {
                        window.location.hash = "/fileupload"
                    }
                }
            ]
        }

        this.save = this.save.bind(this);
    }

    save() {
        this.growl.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    render() {
        return (
            <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.state.items}></SplitButton>
        )
    }
}

`}
</CodeHighlight>

                        <h3>MenuModel API</h3>
                        <p>SplitButton uses the common MenuModel API to define the items, visit <Link to="/menumodel">MenuModel API</Link> for details.</p>

                        <h3>Severity</h3>
                        <p>Different color options are available as severity levels.</p>

                        <ul>
                            <li>.p-button-secondary</li>
                            <li>.p-button-success</li>
                            <li>.p-button-info</li>
                            <li>.p-button-warning</li>
                            <li>.p-button-danger</li>
                        </ul>

<CodeHighlight className="language-jsx">
{`
<SplitButton label="Primary" />
<SplitButton label="Secondary" className="p-button-secondary" model={this.state.items} />
<SplitButton label="Success" className="p-button-success" model={this.state.items} />
<SplitButton label="Info" className="p-button-info" model={this.state.items} />
<SplitButton label="Warning" className="p-button-warning" model={this.state.items} />
<SplitButton label="Danger" className="p-button-danger" model={this.state.items} />

`}
</CodeHighlight>

                        <h3>Properties</h3>
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
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Identifier of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>label</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Text of the button.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the icon.</td>
                                    </tr>
                                    <tr>
                                        <td>model</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>MenuModel instance to define the overlay items.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the component should be disabled.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>ClassName of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>menuStyle</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the overlay menu.</td>
                                    </tr>
                                    <tr>
                                        <td>menuStyleClass</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>ClassName class of the overlay menu.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>DOM element</td>
                                        <td>null</td>
                                        <td>DOM element instance where the dialog should be mounted.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltip</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content of the tooltip.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltipOptions</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Events</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameters</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>onClick</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when main button is clicked.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                                        <td>p-splitbutton</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-splitbutton-button</td>
                                        <td>Dropdown button.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menu</td>
                                        <td>Overlay menu.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView >
            </div>
        )
    }
}
