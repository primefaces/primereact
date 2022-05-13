import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const BreadCrumbDoc = memo(() => {

        const sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export class BreadCrumbDemo extends Component {

    render() {
        const items = [
            {label: 'Computer'},
            {label: 'Notebook'},
            {label: 'Accessories'},
            {label: 'Backpacks'},
            {label: 'Item'}
        ];

        const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' }

        return (
            <div>
                <div className="card">
                    <BreadCrumb model={items} home={home} />
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
import { BreadCrumb } from 'primereact/breadcrumb';

const BreadCrumbDemo = () => {
    const items = [
        {label: 'Computer'},
        {label: 'Notebook'},
        {label: 'Accessories'},
        {label: 'Backpacks'},
        {label: 'Item'}
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' }

    return (
        <div>
            <div className="card">
                <BreadCrumb model={items} home={home} />
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
import { BreadCrumb } from 'primereact/breadcrumb';

const BreadCrumbDemo = () => {
    const items = [
        {label: 'Computer'},
        {label: 'Notebook'},
        {label: 'Accessories'},
        {label: 'Backpacks'},
        {label: 'Item'}
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' }

    return (
        <div>
            <div className="card">
                <BreadCrumb model={items} home={home} />
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
        <script src="https://unpkg.com/primereact/breadcrumb/breadcrumb.min.js"></script>`,
            content: `
const { useState, useRef } = React;
const { BreadCrumb } = primereact.breadcrumb;

const BreadCrumbDemo = () => {
    const items = [
        {label: 'Computer'},
        {label: 'Notebook'},
        {label: 'Accessories'},
        {label: 'Backpacks'},
        {label: 'Item'}
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' }

    return (
        <div>
            <div className="card">
                <BreadCrumb model={items} home={home} />
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
import { BreadCrumb } from 'primereact/breadcrumb';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/breadcrumb/breadcrumb.min.js"></script>
`}
</CodeHighlight>

                    <h5>MenuModel API</h5>
                    <p>BreadCrumb uses the common menumodel api to define its items, visit <Link href="/menumodel"> MenuModel </Link> for details.</p>

                    <h5>Getting Started</h5>
                    <p>BreadCrumb requires a collection of menuitems as its model.</p>

<CodeHighlight lang="js">
{`
const items = [
    { label: 'Categories' },
    { label: 'Sports' },
    { label: 'Football' },
    { label: 'Countries' },
    { label: 'Spain' },
    { label: 'F.C. Barcelona' },
    { label: 'Squad' },
    { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
];

const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }
`}
</CodeHighlight>

<CodeHighlight>
{`
<BreadCrumb model={items} home={home}/>
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
                                    <td>MenuItem[]</td>
                                    <td>null</td>
                                    <td>An array of menuitems.</td>
                                </tr>
                                <tr>
                                    <td>home</td>
                                    <td>MenuItem</td>
                                    <td>null</td>
                                    <td>MenuItem configuration for the home icon.</td>
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
                                    <td>p-breadcrumb</td>
                                    <td>Container element.</td>
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
                                    <td>p-breadcrumb-chevron</td>
                                    <td>Chevron element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Breadcrumb uses the <i>nav</i> element and since any attribute is passed to the root implicitly <i>aria-labelledby</i> or <i>aria-label</i> can be used to describe the component. Inside an ordered list is used
                    where the list item separators have <i>aria-hidden</i> to be able to ignored by the screen readers. If the last link represents the current route, <i>aria-current</i> is added with "page" as the value.</p>

                    <h6>Keyboard Support</h6>
                    <p>No special keyboard interaction is needed, all menuitems are focusable based on the page tab sequence.</p>
                </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'BreadCrumbDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default BreadCrumbDoc;
