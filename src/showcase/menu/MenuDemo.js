import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from '../../components/menu/Menu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {Button} from "../../components/button/Button";

export class MenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Options',
                    items: [{label: 'Upload', icon: 'pi pi-fw pi-upload', command:()=>{ window.location.hash="/fileupload"; }},
                            {label: 'Home', icon: 'pi pi-fw pi-home', url: 'http://primetek.com.tr'}]
                },
                {
                    label: 'Account',
                    items: [{label: 'Components', icon: 'pi pi-fw pi-cog', command:()=>{ window.location.hash="/"; }},
                            {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Menu</h1>
                        <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("menu")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Menu model={this.state.items}/>

                    <h3>Popup</h3>
                    <Menu model={this.state.items} popup={true} ref={el => this.menu = el} id="popup_menu"/>
                    <Button label="Show" icon="pi pi-bars" onClick={(event) => this.menu.toggle(event)} aria-controls="popup_menu" aria-haspopup={true}/>
                </div>

                <MenuDoc/>

            </div>
        )
    }
}

class MenuDoc extends Component {

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
import {Menu} from 'primereact/menu';

`}
                        </CodeHighlight>

                        <h3>MenuModel API</h3>
                        <p>Menu uses the common menumodel api to define its items, visit <Link to="/menumodel"> MenuModel API</Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>Menu requires a collection of menuitems as its model.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Menu model={items} />

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-javascript">
                            {`
let items = [
    {label: 'New', icon: 'pi pi-fw pi-plus'},
    {label: 'Delete', icon: 'pi pi-fw pi-trash'}
];

`}
                        </CodeHighlight>

                        <h3>SubMenus</h3>
                        <p>Menu supports one level of nesting via subitems of an item.</p>
                        <CodeHighlight className="language-javascript">
                            {`
let items: [
    {
        label: 'Options',
        items: [{label: 'New', icon: 'pi pi-fw pi-plus',command:()=>{ window.location.hash="/fileupload"; }},
                {label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'http://primetek.com.tr'}]
    },
    {
        label: 'Account',
        items: [{label: 'Options', icon: 'pi pi-fw pi-cog',command:()=>{ window.location.hash="/"; }},
                {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
    }
]

`}
                        </CodeHighlight>

                        <h3>Popup Mode</h3>
                        <p>Menu is inline by default whereas popup mode is supported by enabling popup property and calling toggle method with an event of the target.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<Menu model={items} popup={true} ref={el => this.menu=el} />
<Button label="Show" icon="pi pi-bars" onClick={(event)=>this.menu.toggle(event)}/>

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
                                        <td>model</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of menuitems.</td>
                                    </tr>
                                    <tr>
                                        <td>popup</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Defines if menu would displayed as a popup.</td>
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
                                        <td>baseZIndex</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Base zIndex value to use in layering.</td>
                                    </tr>
                                    <tr>
                                        <td>autoZIndex</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to automatically manage layering.</td>
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
                                        <td>Toggles the visibility of the popup menu.</td>
                                    </tr>
                                    <tr>
                                        <td>show</td>
                                        <td>event: Browser event</td>
                                        <td>Displays the popup menu.</td>
                                    </tr>
                                    <tr>
                                        <td>hide</td>
                                        <td>event: Browser event</td>
                                        <td>Hides the popup menu.</td>
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
                                        <td>onShow</td>
                                        <td>event: Browser event </td>
                                        <td>Callback to invoke when a popup menu is shown.</td>
                                    </tr>
                                    <tr>
                                        <td>onHide</td>
                                        <td>event: Browser event </td>
                                        <td>Callback to invoke when a popup menu is hidden.</td>
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
                                        <td>p-menu</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menu-list</td>
                                        <td>List element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menuitem</td>
                                        <td>Menuitem element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menuitem-text</td>
                                        <td>Label of a menuitem.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menuitem-icon</td>
                                        <td>Icon of a menuitem.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/menu" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {Menu} from 'primereact/menu';

export class MenuDemo extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'Options',
                    items: [{label: 'Upload', icon: 'pi pi-fw pi-upload', command:()=>{ window.location.hash="/fileupload"; }},
                            {label: 'Home', icon: 'pi pi-fw pi-home', url: 'http://primetek.com.tr'}]
                },
                {
                    label: 'Account',
                    items: [{label: 'Components', icon: 'pi pi-fw pi-cog', command:()=>{ window.location.hash="/"; }},
                            {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Menu</h1>
                        <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Menu model={this.state.items}/>

                    <h3>Popup</h3>
                    <Menu model={this.state.items} popup={true} ref={el => this.menu = el} id="popup_menu"/>
                    <Button label="Show" icon="pi pi-bars" onClick={(event) => this.menu.toggle(event)} aria-controls="popup_menu" aria-haspopup={true}/>
                </div>

                <MenuDoc/>

            </div>
        )
    }
}
`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView >
            </div>
        )
    }
}
