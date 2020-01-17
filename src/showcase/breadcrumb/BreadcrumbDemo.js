import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {BreadCrumb} from '../../components/breadcrumb/BreadCrumb';

export class BreadcrumbDemo extends Component {

    render() {
        const items = [
            {label:'Categories'},
            {label:'Sports'},
            {label:'Football'},
            {label:'Countries'},
            {label:'Spain'},
            {label:'F.C. Barcelona'},
            {label:'Squad'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ];

        const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Breadcrumb</h1>
                        <p>Breadcrumb provides contextual information about page hierarchy.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("breadcrumb")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <BreadCrumb model={items} home={home} />
                </div>

                <BreadCrumbDoc/>

            </div>
        );
    }
}

class BreadCrumbDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Breadcrumb} from 'primereact/breadcrumb';

`}</CodeHighlight>

                        <h3>MenuModel API</h3>
                        <p>BreadCrumb uses the common menumodel api to define its items, visit <Link to="/menumodel"> MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>BreadCrumb requires a collection of menuitems as its model.</p>

                        <CodeHighlight className="language-javascript">
                            {`
const items = [
    {label:'Categories'},
    {label:'Sports'},
    {label:'Football'},
    {label:'Countries'},
    {label:'Spain'},
    {label:'F.C. Barcelona'},
    {label:'Squad'},
    {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
];

const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}

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

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/breadcrumb" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';

export class BreadcrumbDemo extends Component {

    render() {
        const items = [
            {label:'Categories'},
            {label:'Sports'},
            {label:'Football'},
            {label:'Countries'},
            {label:'Spain'},
            {label:'F.C. Barcelona'},
            {label:'Squad'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ];

        const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Breadcrumb</h1>
                        <p>Breadcrumb provides contextual information about page hierarchy.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <BreadCrumb model={items} home={home} />
                </div>
            </div>
        );
    }
}
                        `}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }

}
