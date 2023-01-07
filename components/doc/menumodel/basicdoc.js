import React from 'react';
import { CodeHighlight } from '../common/codehighlight';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>Core of the API is the MenuItem class that defines various options such as the label, icon and children of an item in a menu.</p>
            </DocSectionText>
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

            <div className="doc-tablewrapper mb-3">
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
                            <td>any</td>
                            <td>null</td>
                            <td>Icon of the item. It can be a string, JSX.Element or method.</td>
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
                            <td>visible</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>When set as false, hides the menu item.</td>
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
        </>
    );
}
