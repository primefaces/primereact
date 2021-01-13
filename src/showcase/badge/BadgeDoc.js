import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class BadgeDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export class BadgeDemo extends Component {

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Numbers</h5>
                    <Badge value="2" className="p-mr-2"></Badge>
                    <Badge value="8" severity="success" className="p-mr-2"></Badge>
                    <Badge value="4" severity="info" className="p-mr-2"></Badge >
                    <Badge value="12" severity="warning" className="p-mr-2"></Badge>
                    <Badge value="3" severity="danger"></Badge>

                    <h5 className="p-mb-4">Positioned Badge</h5>
                    <i className="pi pi-bell p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
                    <i className="pi pi-calendar p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
                    <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>

                    <h5>Button Badge</h5>
                    <Button type="button" label="Emails" className="p-mr-2"><Badge value="8" ></Badge></Button>
                    <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>

                    <h5>Sizes</h5>
                    <Badge value="2" className="p-mr-2"></Badge>
                    <Badge value="4" className="p-mr-2" size="large" severity="warning"></Badge>
                    <Badge value="6" size="xlarge" severity="success"></Badge>
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
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export const BadgeDemo = () => {

    return (
        <div>
            <div className="card">
                <h5>Numbers</h5>
                <Badge value="2" className="p-mr-2"></Badge>
                <Badge value="8" severity="success" className="p-mr-2"></Badge>
                <Badge value="4" severity="info" className="p-mr-2"></Badge >
                <Badge value="12" severity="warning" className="p-mr-2"></Badge>
                <Badge value="3" severity="danger"></Badge>

                <h5 className="p-mb-4">Positioned Badge</h5>
                <i className="pi pi-bell p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
                <i className="pi pi-calendar p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
                <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>

                <h5>Button Badge</h5>
                <Button type="button" label="Emails" className="p-mr-2"><Badge value="8" ></Badge></Button>
                <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>

                <h5>Sizes</h5>
                <Badge value="2" className="p-mr-2"></Badge>
                <Badge value="4" className="p-mr-2" size="large" severity="warning"></Badge>
                <Badge value="6" size="xlarge" severity="success"></Badge>
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
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export const BadgeDemo = () => {

    return (
        <div>
            <div className="card">
                <h5>Numbers</h5>
                <Badge value="2" className="p-mr-2"></Badge>
                <Badge value="8" severity="success" className="p-mr-2"></Badge>
                <Badge value="4" severity="info" className="p-mr-2"></Badge >
                <Badge value="12" severity="warning" className="p-mr-2"></Badge>
                <Badge value="3" severity="danger"></Badge>

                <h5 className="p-mb-4">Positioned Badge</h5>
                <i className="pi pi-bell p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
                <i className="pi pi-calendar p-mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
                <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>

                <h5>Button Badge</h5>
                <Button type="button" label="Emails" className="p-mr-2"><Badge value="8" ></Badge></Button>
                <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>

                <h5>Sizes</h5>
                <Badge value="2" className="p-mr-2"></Badge>
                <Badge value="4" className="p-mr-2" size="large" severity="warning"></Badge>
                <Badge value="6" size="xlarge" severity="success"></Badge>
            </div>
        </div>
    );
}
`
            }
        };
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Getting Started</h5>
                        <p>Badge can be used as a component.</p>

                        <h6>Component</h6>
<CodeHighlight lang="js">
{`
import { Badge } from 'primereact/badge';
`}
</CodeHighlight>
                <p>Content of the badge is specified using the <i>value</i> property.</p>
<CodeHighlight>
{`
<Badge value="2"></Badge>
`}
</CodeHighlight>
                <h5>Severities</h5>
                <p>Different color options are available as severity levels. When used as a component use the <i>severity</i> property
                to apply a severity.</p>

				<ul>
					<li>success</li>
					<li>info</li>
					<li>warning</li>
					<li>danger</li>
				</ul>
<CodeHighlight>
{`
<Badge value="2" severity="success"></Badge>
`}
</CodeHighlight>

                <h5>Button Badges</h5>
                <p>Buttons provide integrated badge support with the <i>badge</i> and <i>badgeClass</i> properties.</p>

<CodeHighlight>
{`
<Button type="button" label="Emails">
    <Badge value="2"></Badge>
</Button>

<Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning">
    <Badge value="8" severity="danger">
</Button>
`}
</CodeHighlight>
                <h5>Sizes</h5>
                <p>Badge sizes are adjusted with the <i>size</i> property that accepts "large" and "xlarge" as the possible alternatives to the default size.</p>
<CodeHighlight>
{`
<Badge value="2"></Badge>
<Badge value="4" size="large" severity="warning"></Badge>
<Badge value="6" size="xlarge" severity="success"></Badge>
`}
</CodeHighlight>
                <p>In addition, when placed inside another element, badge sizes can also derive their size from their parent.</p>
<CodeHighlight>
{`
<h1>Heading 1 <Badge value="New"></Badge></h1>
<h2>Heading 2 <Badge value="New"></Badge></h2>
`}
</CodeHighlight>
<h5>Properties</h5>
				<p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
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
                                <td>value</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Value to display inside the badge.</td>
                            </tr>
							<tr>
                                <td>severity</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Severity type of the badge.</td>
                            </tr>
							<tr>
                                <td>size</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Size of the badge, valid options are "large" and "xlarge".</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Styling</h5>
				<p>Following is the list of structural style classes, for theming classes visit <NavLink to="/theming">theming</NavLink> page.</p>
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
                                <td>p-badge</td>
                                <td>Badge element</td>
                            </tr>
                            <tr>
                                <td>p-overlay-badge</td>
                                <td>Wrapper of a badge and its target.</td>
                            </tr>
                            <tr>
                                <td>p-badge-dot</td>
                                <td>Badge element with no value.</td>
                            </tr>
                            <tr>
                                <td>p-badge-success</td>
                                <td>Badge element with success severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-info</td>
                                <td>Badge element with info severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-warning</td>
                                <td>Badge element with warning severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-danger</td>
                                <td>Badge element with danger severity.</td>
                            </tr>
                            <tr>
                                <td>p-badge-lg</td>
                                <td>Large badge element</td>
                            </tr>
                            <tr>
                                <td>p-badge-xl</td>
                                <td>Extra large badge element</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'BadgeDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        );
    }
}
