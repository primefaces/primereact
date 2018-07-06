import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Dialog} from '../../components/dialog/Dialog';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class DialogDemo extends Component {
        
    constructor() {
        super();
        this.state = {visible: false};
        this.show = this.show.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    show(event) {
        this.setState({visible: true});
    }

    onHide(event) {
        this.setState({visible: false});
    }

    render() {
        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
                <Button label="No" icon="pi pi-times" onClick={this.onHide} />
            </div>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Dialog</h1>
                        <p>Dialog is a container to display content in an overlay window.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Dialog header="Godfather I" visible={this.state.visible} width="350px" modal={true} footer={footer} minY={70} onHide={this.onHide} maximizable={true}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Dialog>

                    <Button label="Show" icon="pi pi-info-circle" onClick={this.show} />
                </div>

                <DialogDoc></DialogDoc>
            </div>
        )
    }
}

export class DialogDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Dialog} from 'primereact/dialog';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Dialog is used as a container and visibility is managed with <i>visible</i> property where <i>onHide</i> event is required to update the visibility state.</p>
<CodeHighlight className="language-jsx">
{`
<Dialog header="Godfather I" visible={this.state.visible} width="350px" modal={true} onHide={(e) => this.setState({visible: false})}>
    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
</Dialog>

<Button label="Show" icon="pi pi-info-circle" onClick={(e) => this.setState({visible: true})} />

`}
</CodeHighlight>

            <h3>Header and Footer</h3>
            <p>Header and Footer sections are defined using properties with the same name that accept simple strings or JSX for custom content.</p>
<CodeHighlight className="language-jsx">
{`
const footer = (
    <div>
        <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
        <Button label="No" icon="pi pi-times" onClick={this.onHide} />
    </div>
);

<Dialog header="Header Text" footer={footer} visible={this.state.visible} width="350px" modal={true} onHide={this.onHide}>
    Content
</Dialog>

`}
</CodeHighlight>

            <h3>Dynamic Content</h3>
            <p>Dynamic content may move the dialog boundaries outside of the viewport. Common solution is defining max-height via contentStyle so longer content displays a scrollbar.</p>

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
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Title content of the dialog.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Footer content of the dialog.</td>
                        </tr>
                        <tr>
                            <td>visible</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Specifies the visibility of the dialog.</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>string</td>
                            <td>auto</td>
                            <td>Width of the dialog.</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>string</td>
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
                            <td>resizable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Enables resizing of the content.</td>
                        </tr>
                        <tr>
                            <td>minWidth</td>
                            <td>number</td>
                            <td>150</td>
                            <td>Minimum width of a resizable dialog.</td>
                        </tr>
                        <tr>
                            <td>minHeight</td>
                            <td>number</td>
                            <td>150</td>
                            <td>Minimum width of a resizable dialog.</td>
                        </tr>
                        <tr>
                            <td>contentStyle</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Style of the content section.</td>
                        </tr>
                        <tr>
                            <td>closeOnEscape</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Specifices if pressing escape key should hide the dialog.</td>
                        </tr>
                        <tr>
                            <td>dismissableMask</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Specifices if clicking the modal background should hide the dialog.</td>
                        </tr>
                        <tr>
                            <td>rtl</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled dialog is displayed in RTL direction.</td>
                        </tr>
                        <tr>
                            <td>closable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Adds a close icon to the header to hide the dialog.</td>
                        </tr>
                        <tr>
                            <td>responsive</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>In responsive mode, dialog adjusts itself to screen width.</td>
                        </tr>
                        <tr>
                            <td>breakpoint</td>
                            <td>number</td>
                            <td>640</td>
                            <td>Maximum screen width to display the dialog with 100% width in responsive mode.</td>
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
                            <td>Style class of the component.</td>
                        </tr>
                        <tr>
                            <td>showHeader</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to show the header or not.</td>
                        </tr>
                        <tr>
                            <td>positionLeft</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Left coordinate value of the dialog.</td>
                        </tr>
                        <tr>
                            <td>positionTop</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Top coordinate value of the dialog.</td>
                        </tr>
                        <tr>
                            <td>appendTo</td>
                            <td>DOM element</td>
                            <td>null</td>
                            <td>DOM element instance where the dialog should be mounted.</td>
                        </tr>
                        <tr>
                            <td>baseZIndex</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Base zIndex value to use in layering.</td>
                        </tr>
                        <tr>
                            <td>minX</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Minimum value for the left coordinate of dialog in dragging.</td>
                        </tr>
                        <tr>
                            <td>minY</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Minimum value for the top coordinate of dialog in dragging.</td>
                        </tr>
                        <tr>
                            <td>maximizable</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the dialog can be displayed full screen.</td>
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
                            <td>Callback to invoke when dialog is hidden (Required).</td>
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/dialog" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

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
        const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
                <Button label="No" icon="pi pi-times" onClick={this.onHide} />
            </div>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Dialog</h1>
                        <p>Dialog is a container to display content in an overlay window.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Dialog header="Godfather I" visible={this.state.visible} width="350px" modal={true} footer={footer} minY={70} onHide={this.onHide} maximizable={true}>
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. 
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. 
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, 
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Dialog>

                    <Button label="Show" icon="pi pi-info-circle" onClick={this.onClick} />
                </div>
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