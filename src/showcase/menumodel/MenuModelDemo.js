import React, { Component } from 'react';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { AppInlineHeader } from '../../AppInlineHeader';

export class MenuModelDemo extends Component {
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="menu">
                        <h1>MenuModel API</h1>
                        <p>PrimeReact menus components share a common api to specify the menuitems and submenus.</p>
                    </AppInlineHeader>
                </div>

                <MenuModelDoc/>

            </div>
        )
    }
}

class MenuModelDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <h3 style={{marginTop: 0}}>MenuItem</h3>
                <p>Core of the API is the MenuItem class that defines various options such as the label, icon and children of an item in a menu.</p>
                <CodeHighlight lang="js">
                    {`
const items = [
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

                <p>MenuItem provides the following properties. Note that not all of them may be utilized by the corresponding menu component.</p>

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
                                <td>label</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Text of the item.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon of the item.</td>
                            </tr>
                            <tr>
                                <td>command</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Callback to execute when item is clicked.</td>
                            </tr>
                            <tr>
                                <td>url</td>
                                <td>string</td>
                                <td>null</td>
                                <td>External link to navigate when item is clicked.</td>
                            </tr>
                            <tr>
                                <td>items</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of children menuitems.</td>
                            </tr>
                            <tr>
                                <td>expanded</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Visibility of submenu.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When set as true, disables the menuitem.</td>
                            </tr>
                            <tr>
                                <td>target</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Specifies where to open the linked document.</td>
                            </tr>
                            <tr>
                                <td>separator</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines the item as a separator.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the menuitem.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the menuitem.</td>
                            </tr>
                            <tr>
                                <td>template</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of the menuitem.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Template</h3>
                <p>Used to create custom menuitem elements.</p>
<CodeHighlight lang="js">
    {`
const items =
[
    {
        label: 'New',
        template: (item, options) => {
            return (
                /* custom element */
                <a className={options.className} target={item.target} onClick={options.onClick}>
                    <span className={classNames(options.iconClassName, 'pi pi-home')}></span>;
                    <span className={options.labelClassName}>{item.label}</span>;
                </a>
            );
        }
    }
];

`}
</CodeHighlight>

<CodeHighlight lang="js">
    {`
template: (item, options) => {
    // item: Current item object.
    // options.onClick: Click event for the default element.
    // options.className: Style class of the default element.
    // options.labelClassName: Style class of the default label element.
    // options.iconClassName: Style class of the default icon element.
    // options.element: Default element created by the component.
    // options.props: component props.

    // Note: Extra options may come according to the components.
}
`}
</CodeHighlight>

                <h3>Command</h3>
                <p>The function to invoke when an item is clicked is defined using the command property.</p>
<CodeHighlight lang="js">
    {`
const items =
[
    {
        label: 'New',
        icon: 'pi pi-plus',
        command: (event) => {
            // event.originalEvent: Browser event
            // event.item: MenuItem instance
        }
    }
];

`}
</CodeHighlight>

                <h3>Navigation</h3>
                <p>Navigation is specified using url property for external links or using command function for internal router.</p>
                <CodeHighlight lang="js">
                    {`
const items =
[
    {
        label: 'New',
        icon: 'pi pi-plus',
        command: (event) => {
            window.location.hash = "/fileupload";
        }
    },
    {
        label: 'Link',
        icon: 'pi pi-check',
        url: 'https://www.primefaces.org/primereact'
    }
];

`}
                </CodeHighlight>
            </div>
        )
    }
}
