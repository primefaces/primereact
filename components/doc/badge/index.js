import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const BadgeDoc = memo(() => {

    const sources = {
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
                    <Badge value="2" className="mr-2"></Badge>
                    <Badge value="8" severity="success" className="mr-2"></Badge>
                    <Badge value="4" severity="info" className="mr-2"></Badge >
                    <Badge value="12" severity="warning" className="mr-2"></Badge>
                    <Badge value="3" severity="danger"></Badge>

                    <h5 className="mb-4">Positioned Badge</h5>
                    <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
                    <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
                    <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>

                    <h5>Button Badge</h5>
                    <Button type="button" label="Emails" className="mr-2"><Badge value="8" ></Badge></Button>
                    <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>

                    <h5>Sizes</h5>
                    <Badge value="2" className="mr-2"></Badge>
                    <Badge value="4" className="mr-2" size="large" severity="warning"></Badge>
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
                <Badge value="2" className="mr-2"></Badge>
                <Badge value="8" severity="success" className="mr-2"></Badge>
                <Badge value="4" severity="info" className="mr-2"></Badge >
                <Badge value="12" severity="warning" className="mr-2"></Badge>
                <Badge value="3" severity="danger"></Badge>

                <h5 className="mb-4">Positioned Badge</h5>
                <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
                <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
                <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>

                <h5>Button Badge</h5>
                <Button type="button" label="Emails" className="mr-2"><Badge value="8" ></Badge></Button>
                <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>

                <h5>Sizes</h5>
                <Badge value="2" className="mr-2"></Badge>
                <Badge value="4" className="mr-2" size="large" severity="warning"></Badge>
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
                <Badge value="2" className="mr-2"></Badge>
                <Badge value="8" severity="success" className="mr-2"></Badge>
                <Badge value="4" severity="info" className="mr-2"></Badge >
                <Badge value="12" severity="warning" className="mr-2"></Badge>
                <Badge value="3" severity="danger"></Badge>

                <h5 className="mb-4">Positioned Badge</h5>
                <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
                <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
                <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>

                <h5>Button Badge</h5>
                <Button type="button" label="Emails" className="mr-2"><Badge value="8" ></Badge></Button>
                <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>

                <h5>Sizes</h5>
                <Badge value="2" className="mr-2"></Badge>
                <Badge value="4" className="mr-2" size="large" severity="warning"></Badge>
                <Badge value="6" size="xlarge" severity="success"></Badge>
            </div>
        </div>
    );
}
`
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/button/button.min.js"></script>
        <script src="https://unpkg.com/primereact/badge/badge.min.js"></script>`,
            content: `
const { Button } = primereact.button;
const { Badge } = primereact.badge;

const BadgeDemo = () => {

    return (
        <div>
            <div className="card">
                <h5>Numbers</h5>
                <Badge value="2" className="mr-2"></Badge>
                <Badge value="8" severity="success" className="mr-2"></Badge>
                <Badge value="4" severity="info" className="mr-2"></Badge >
                <Badge value="12" severity="warning" className="mr-2"></Badge>
                <Badge value="3" severity="danger"></Badge>

                <h5 className="mb-4">Positioned Badge</h5>
                <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
                <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="10+" severity="danger" ></Badge></i>
                <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge severity="danger"></Badge></i>

                <h5>Button Badge</h5>
                <Button type="button" label="Emails" className="mr-2"><Badge value="8" ></Badge></Button>
                <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button>

                <h5>Sizes</h5>
                <Badge value="2" className="mr-2"></Badge>
                <Badge value="4" className="mr-2" size="large" severity="warning"></Badge>
                <Badge value="6" size="xlarge" severity="success"></Badge>
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
                    <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.</p>
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

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                        <h6>Screen Reader</h6>
                        <p>Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic,
                        <i>aria-live</i> may be utilized as well. In case badges need to be tabbable, <i>tabIndex</i> can be added to implement custom key handlers.</p>

                        <h5>Keyboard Support</h5>
                        <p>Component does not include any interactive elements.</p>
                    </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'BadgeDemo', sources: sources })
                }
            </TabView>
        </div>
    );
})

export default BadgeDoc;
