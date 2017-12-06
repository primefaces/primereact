import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {OverlayPanel} from '../../components/overlaypanel/OverlayPanel';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class OverlayPanelDemo extends Component {
        
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.op.toggle(event);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>OverlayPanel</h1>
                        <p>OverlayPanel is a container component that can overlay other components on page.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <p>Click the button to show the panel.</p>
                    <Button type="button" label="Basic" onClick={this.onClick} />

                    <OverlayPanel ref={(el) => {this.op = el;}}>
                        <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
                    </OverlayPanel>
                </div>
                
                <OverlayPanelDoc></OverlayPanelDoc>
            </div>
        )
    }
}

export class OverlayPanelDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {OverlayPanel} from 'primereact/components/overlaypanel/OverlayPanel';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>OverlayPanel is defined using OverlayPanel element and accessed via its reference.</p>
<CodeHighlight className="html">
{`
<Button type="button" label="Basic" onClick={this.onClick} />

<OverlayPanel ref={(el) => {this.op = el;}}>
    <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
</OverlayPanel>

`}
</CodeHighlight>
<CodeHighlight className="javascript">
{`
constructor() {
    super();
    this.onClick = this.onClick.bind(this);
}

onClick(event) {
    this.op.toggle(event);
}

`}
</CodeHighlight>

            <h3>Dismissable and CloseIcon</h3>
            <p>Clicking outside the overlay hides the panel, setting dismissable to false disables this behavior.
               Additionally enablign showCloseIcon property displays a close icon at the top right corner to close the panel.</p>
               
<CodeHighlight className="html">
{`
<OverlayPanel ref={(el) => {this.op = el;}} showCloseIcon={true} dismissable={true}>
    <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
</OverlayPanel>

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
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>dismissable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Enables to hide the overlay when outside is clicked.</td>
                        </tr>
                        <tr>
                            <td>showCloseIcon</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, displays a close icon at top right corner.</td>
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
                        <tr>
                            <td>appendTo</td>
                            <td>DOM element</td>
                            <td>null</td>
                            <td>DOM element instance where the dialog should be mounted.</td>
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
                            <td>ui-overlaypanel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-overlaypanel-content</td>
                            <td>Content of the panel.</td>
                        </tr>
                        <tr>
                            <td>ui-overlaypanel-close</td>
                            <td>Close icon.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/overlaypanel" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
export class OverlayPanelDemo extends Component {
        
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.op.toggle(event);
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>OverlayPanel</h1>
                        <p>OverlayPanel is a container component that can overlay other components on page.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <p>Click the button to show the panel.</p>
                    <Button type="button" label="Basic" onClick={this.onClick} />

                    <OverlayPanel ref={(el) => {this.op = el;}}>
                        <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
                    </OverlayPanel>
                </div>
                <OverlayPanelDoc></OverlayPanelDoc>
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