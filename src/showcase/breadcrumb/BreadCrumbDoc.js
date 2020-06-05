import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class BreadCrumbDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export class BreadcrumbDemo extends Component {

    render() {
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

        return (
            <div>
                <BreadCrumb model={items} home={home} />
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

const BreadcrumbDemo = () => {

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

    return (
        <div>
            <BreadCrumb model={items} home={home} />
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

const BreadcrumbDemo = () => {

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

    return (
        <div>
            <BreadCrumb model={items} home={home} />
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
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
import { Breadcrumb } from 'primereact/breadcrumb';

`}</CodeHighlight>

                        <h3>MenuModel API</h3>
                        <p>BreadCrumb uses the common menumodel api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>BreadCrumb requires a collection of menuitems as its model.</p>

                        <CodeHighlight className="language-javascript">
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

                        <CodeHighlight className="language-jsx">
                            {`
<BreadCrumb model={items} home="home"/>

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

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="BreadcrumbDemo" sources={[key, value]} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
