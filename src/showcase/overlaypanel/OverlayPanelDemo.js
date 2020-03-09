import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {OverlayPanel} from '../../components/overlaypanel/OverlayPanel';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class OverlayPanelDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>OverlayPanel</h1>
                        <p>OverlayPanel is a container component that can overlay other components on page.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("overlayPanel")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation" aria-controls="overlay_panel" aria-haspopup={true}>
                    <Button type="button" label="Toggle" onClick={(e) => this.op.toggle(e)}/>

                    <OverlayPanel ref={(el) => this.op = el} id="overlay_panel" showCloseIcon={true} >
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
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {OverlayPanel} from 'primereact/overlaypanel';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.</p>
<CodeHighlight className="language-jsx">
{`
<Button type="button" label="Basic" onClick={(e) => this.op.toggle(e)} />

<OverlayPanel ref={(el) => this.op = el}>
    <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
</OverlayPanel>

`}
</CodeHighlight>

            <h3>Dismissable and CloseIcon</h3>
            <p>Clicking outside the overlay hides the panel, setting dismissable to false disables this behavior.
               Additionally enablign showCloseIcon property displays a close icon at the top right corner to close the panel.</p>

<CodeHighlight className="language-jsx">
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
                        <tr>
                            <td>ariaCloseLabel</td>
                            <td>string</td>
                            <td>close</td>
                            <td>Aria label of the close icon.</td>
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
                            <td>-</td>
                            <td>Callback to invoke when overlay gets hidden.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Methods</h3>
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
                            <td>toggle</td>
                            <td>event: Browser event</td>
                            <td>Toggles the visiblity of the overlay.</td>
                        </tr>
                        <tr>
                            <td>show</td>
                            <td>event: Browser event <br />
                                target: Optional target if event.target should not be used</td>
                            <td>Shows the overlay.</td>
                        </tr>
                        <tr>
                            <td>hide</td>
                            <td>-</td>
                            <td>Hides the overlay.</td>
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
                            <td>p-overlaypanel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-overlaypanel-content</td>
                            <td>Content of the panel.</td>
                        </tr>
                        <tr>
                            <td>p-overlaypanel-close</td>
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
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {OverlayPanel} from 'primereact/overlaypanel';

export class OverlayPanelDemo extends Component {

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
                    <Button type="button" label="Toggle" onClick={(e) => this.op.toggle(e)} aria-controls="overlay_panel" aria-haspopup={true}/>

                    <OverlayPanel ref={(el) => this.op = el} id="overlay_panel" showCloseIcon={true} >
                        <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
                    </OverlayPanel>
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
