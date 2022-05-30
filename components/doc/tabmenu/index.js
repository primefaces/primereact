import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const TabMenuDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';

export class TabMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 3
        }

        this.items =  [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Default</h5>
                    <TabMenu model={this.items} />
                </div>

                <div className="card">
                    <h5>Programmatic</h5>
                    <div className="pt-2 pb-4">
                        <Button onClick={() => this.setState({ activeIndex: 0 })} className="p-button-text" label="Activate 1st" />
                        <Button onClick={() => this.setState({ activeIndex: 1 })} className="p-button-text" label="Activate 2nd" />
                        <Button onClick={() => this.setState({ activeIndex: 2 })} className="p-button-text" label="Activate 3rd" />
                    </div>

                    <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
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
import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';

const TabMenuDemo = () => {

    const [activeIndex, setActiveIndex] = useState(3);

    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <div className="card">
                <h5>Default</h5>
                <TabMenu model={items} />
            </div>

            <div className="card">
                <h5>Programmatic</h5>
                <div className="pt-2 pb-4">
                    <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Activate 1st" />
                    <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Activate 2nd" />
                    <Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Activate 3rd" />
                </div>

                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';

const TabMenuDemo = () => {

    const [activeIndex, setActiveIndex] = useState(3);

    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <div className="card">
                <h5>Default</h5>
                <TabMenu model={items} />
            </div>

            <div className="card">
                <h5>Programmatic</h5>
                <div className="pt-2 pb-4">
                    <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Activate 1st" />
                    <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Activate 2nd" />
                    <Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Activate 3rd" />
                </div>

                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
        </div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/tabmenu/tabmenu.min.js"></script>`,
            content: `
const { useState } = React;
const { TabMenu } = primereact.tabmenu;
const { Button } = primereact.button;

const TabMenuDemo = () => {

    const [activeIndex, setActiveIndex] = useState(3);

    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <div className="card">
                <h5>Default</h5>
                <TabMenu model={items} />
            </div>

            <div className="card">
                <h5>Programmatic</h5>
                <div className="pt-2 pb-4">
                    <Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Activate 1st" />
                    <Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Activate 2nd" />
                    <Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Activate 3rd" />
                </div>

                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
        </div>
    );
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
import { TabMenu } from 'primereact/tabmenu';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/tabmenu/tabmenu.min.js"></script>
`}
</CodeHighlight>

                    <h5>MenuModel API</h5>
                    <p>TabMenu uses the common menumodel api to define its items, visit <Link href="/menumodel"> MenuModel </Link> for details.</p>

                    <h5>Getting Started</h5>
                    <p>TabMenu requires a collection of menuitems as its model and can either be used as a Controlled or Uncontrolled component.</p>

<CodeHighlight lang="js">
{`
const items = [
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
];
`}
</CodeHighlight>

                    <h5>Controlled Component</h5>
                    <p>In controlled mode, <i>activeIndex</i> and <i>onTabChange</i> properties must be defined along with the model.</p>

<CodeHighlight>
{`
<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.value)}/>
`}
</CodeHighlight>

                    <h5>Uncontrolled</h5>
                    <p>In uncontrolled mode, only <i>model</i> is required. Initial active item can be provided using the activeIndex property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically
                        need to update the active item, prefer to use the component as controlled.</p>

<CodeHighlight>
{`
<TabMenu model={items} />
`}
</CodeHighlight>

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
                                    <td>activeIndex</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Active index of menuitem.</td>
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
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
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
                                    <td>onTabChange</td>
                                    <td>event.originalEvent: Browser event <br />
                                        event.value: Selected menuitem <br />
                                        event.index: Index of the selected tab </td>
                                    <td>Callback to invoke when active tab changes.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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
                                <td>p-tabmenu</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-tabmenu-nav</td>
                                <td>List element of headers.</td>
                            </tr>
                            <tr>
                                <td>p-tabmenuitem</td>
                                <td>Menuitem element.</td>
                            </tr>
                            <tr>
                                <td>p-menuitem-link</td>
                                <td>Link inside a menuitem.</td>
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

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>TabMenu component uses the <i>menubar</i> role and the value to describe the menu can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Each list item has a <i>presentation</i> role
                    whereas anchor elements have a <i>menuitem</i> role with <i>aria-label</i> referring to the label of the item and <i>aria-disabled</i> defined if the item is disabled.</p>

                    <h6>Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>tab</i></td>
                                    <td>Adds focus to the active tab header when focus moves in to the component, if there is already a focused tab header moves the focus out of the component based on the page tab sequence.</td>
                                </tr>
                                <tr>
                                    <td><i>enter</i></td>
                                    <td>Activates the focused tab header.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Activates the focused tab header.</td>
                                </tr>
                                <tr>
                                    <td><i>right arrow</i></td>
                                    <td>Moves focus to the next header.</td>
                                </tr>
                                <tr>
                                    <td><i>left arrow</i></td>
                                    <td>Moves focus to the previous header.</td>
                                </tr>
                                <tr>
                                    <td><i>home</i></td>
                                    <td>Moves focus to the first header.</td>
                                </tr>
                                <tr>
                                    <td><i>end</i></td>
                                    <td>Moves focus to the last header.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'TabMenuDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default TabMenuDoc;
