import React, {Component} from 'react';
import {Link} from 'react-router';
import {Dialog} from '../../components/dialog/Dialog';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class DialogDemo extends Component {
        
    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(event) {
        this.setState({visible: true});
    }

    onHide(event) {
        this.setState({visible: false});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Dialog</h1>
                        <p>Dialog is a container to display content in an overlay window.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Dialog header="Godfather I" visible={this.state.visible} width="350px" modal={true}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Dialog>

                    <Button label="Show" icon="fa-external-link-square" onClick={this.onClick} />
                </div>
                <DialogDoc></DialogDoc>
            </div>
        )
    }
}

export class DialogDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Dialog} from 'primereact/components/dialog/Dialog';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Dialog is used as a container and visibility is controlled with visible property.</p>
<CodeHighlight className="language-markup">
{`
<Dialog header="Godfather I" visible={this.state.visible} width="350px" modal={true}>
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Dialog>

<Button label="Show" icon="fa-external-link-square" onClick={this.onClick} />

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = {visible: false};
    this.onClick = this.onClick.bind(this);
}

onClick(event) {
    this.setState({visible: true});
}
`}
</CodeHighlight>

            <h3>Attributes</h3>
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
                            <td>header</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Title text of the dialog.</td>
                        </tr>
                        <tr>
                            <td>visible</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Specifies the visibility of the dialog.</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>int</td>
                            <td>300</td>
                            <td>Width of the dialog.</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>int</td>
                            <td>auto</td>
                            <td>Height of the dialog.</td>
                        </tr>
                        <tr>
                            <td>modal</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if background should be blocked when dialog is displayed.</td>
                        </tr>
                         <tr>
                            <td>draggable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Enables dragging to change the position using header.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
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
                            <td>onHide</td>
                            <td>event: Event object</td>
                            <td>Callback to invoke when dialog is hidden.</td>
                        </tr>
                        <tr>
                            <td>onShow</td>
                            <td>event: Event object</td>
                            <td>Callback to invoke when dialog is showed.</td>
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
                            <td>ui-dialog</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-dialog-titlebar</td>
                            <td>Container of header.</td>
                        </tr>
                        <tr>
                            <td>ui-dialog-title</td>
                            <td>Header element.</td>
                        </tr>
                        <tr>
                            <td>ui-dialog-titlebar-icon</td>
                            <td>Icon container inside header.</td>
                        </tr>
                        <tr>
                            <td>ui-dialog-titlebar-close</td>
                            <td>Close icon element.</td>
                        </tr>
                        <tr>
                            <td>ui-dialog-content</td>
                            <td>Content element</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/dialog" className="btn-viewsource" target="_blank">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
export class DialogDemo extends Component {
        
    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(event) {
        this.setState({visible: true});
    }

    onHide(event) {
        this.setState({visible: false});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Dialog</h1>
                        <p>Dialog is a container to display content in an overlay window.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Dialog header="Godfather I" visible={this.state.visible} width="350px" modal={true}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Dialog>

                    <Button label="Show" icon="fa-external-link-square" onClick={this.onClick} />
                </div>
                <DialogDoc></DialogDoc>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}