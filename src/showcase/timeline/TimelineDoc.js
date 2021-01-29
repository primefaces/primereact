import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class TimelineDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './TimelineDemo.css';

export class TimelineDemo extends Component {

    constructor(props) {
        super(props);

        this.events1 = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];

        this.events2 = [
            '2020', '2021', '2022', '2023'
        ];
    }

    render() {
        const customizedMarker = (item) => {
            return (
                <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                    <i className={item.icon}></i>
                </span>
            );
        };

        const customizedContent = (item) => {
            return (
                <Card title={item.status} subTitle={item.date}>
                    { item.image && <img src={\`showcase/demo/images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={200} className="p-shadow-2" />}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                    <Button label="Read more" className="p-button-text"></Button>
                </Card>
            );
        };

        return (
            <div className="timeline-demo">
                <div className="card">
                    <h5>Left Align</h5>
                    <Timeline value={this.events1} content={(item) => item.status} />
                </div>

                <div className="card">
                    <h5>Right Align</h5>
                    <Timeline value={this.events1} align="right" content={(item) => item.status} />
                </div>

                <div className="card">
                    <h5>Alternate Align</h5>
                    <Timeline value={this.events1} align="alternate" content={(item) => item.status} />
                </div>

                <div className="card">
                    <h5>Opposite Content</h5>
                    <Timeline value={this.events1} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
                </div>

                <div className="card">
                    <h5>Customized</h5>
                    <Timeline value={this.events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                </div>

                <div className="card">
                    <h5>Horizontal</h5>
                    <h6>Top Align</h6>
                    <Timeline value={this.events2} layout="horizontal" align="top" content={(item) => item} />

                    <h6>Bottom Align</h6>
                    <Timeline value={this.events2} layout="horizontal" align="bottom" content={(item) => item} />

                    <h6>Alternate Align</h6>
                    <Timeline value={this.events2} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
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
import React, { useRef } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './TimelineDemo.css';

const TimelineDemo = () => {
    const events1 = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const events2 = [
        '2020', '2021', '2022', '2023'
    ];

    const customizedMarker = (item) => {
        return (
            <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={\`showcase/demo/images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={200} className="p-shadow-2" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };

    return (
        <div className="timeline-demo">
            <div className="card">
                <h5>Left Align</h5>
                <Timeline value={events1} content={(item) => item.status} />
            </div>

            <div className="card">
                <h5>Right Align</h5>
                <Timeline value={events1} align="right" content={(item) => item.status} />
            </div>

            <div className="card">
                <h5>Alternate Align</h5>
                <Timeline value={events1} align="alternate" content={(item) => item.status} />
            </div>

            <div className="card">
                <h5>Opposite Content</h5>
                <Timeline value={events1} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
            </div>

            <div className="card">
                <h5>Customized</h5>
                <Timeline value={events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>

            <div className="card">
                <h5>Horizontal</h5>
                <h6>Top Align</h6>
                <Timeline value={events2} layout="horizontal" align="top" content={(item) => item} />

                <h6>Bottom Align</h6>
                <Timeline value={events2} layout="horizontal" align="bottom" content={(item) => item} />

                <h6>Alternate Align</h6>
                <Timeline value={events2} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './TimelineDemo.css';

const TieredMenuDemo = () => {

    const events1 = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const events2 = [
        '2020', '2021', '2022', '2023'
    ];

    const customizedMarker = (item) => {
        return (
            <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={\`showcase/demo/images/product/\${item.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={200} className="p-shadow-2" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };

    return (
        <div className="timeline-demo">
            <div className="card">
                <h5>Left Align</h5>
                <Timeline value={events1} content={(item) => item.status} />
            </div>

            <div className="card">
                <h5>Right Align</h5>
                <Timeline value={events1} align="right" content={(item) => item.status} />
            </div>

            <div className="card">
                <h5>Alternate Align</h5>
                <Timeline value={events1} align="alternate" content={(item) => item.status} />
            </div>

            <div className="card">
                <h5>Opposite Content</h5>
                <Timeline value={events1} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
            </div>

            <div className="card">
                <h5>Customized</h5>
                <Timeline value={events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>

            <div className="card">
                <h5>Horizontal</h5>
                <h6>Top Align</h6>
                <Timeline value={events2} layout="horizontal" align="top" content={(item) => item} />

                <h6>Bottom Align</h6>
                <Timeline value={events2} layout="horizontal" align="bottom" content={(item) => item} />

                <h6>Alternate Align</h6>
                <Timeline value={events2} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
            </div>
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'src/demo/TimelineDemo.css': {
                content: `
.timeline-demo .custom-marker {
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 50%;
    z-index: 1;
}

.timeline-demo .p-timeline-event-content,
.timeline-demo .p-timeline-event-opposite {
    line-height: 1;
}

@media screen and (max-width: 960px) {
    .timeline-demo .customized-timeline .p-timeline-event:nth-child(even) {
        flex-direction: row !important;
    }
    .timeline-demo .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: left !important;
    }
    .timeline-demo .customized-timeline .p-timeline-event-opposite {
        flex: 0;
    }
    .timeline-demo .customized-timeline .p-card {
        margin-top: 1rem;
    }
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
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Timeline } from 'primereact/timeline';
`}
</CodeHighlight>
                        <h5>Getting Started</h5>
                        <p>Timeline receives the events with the <i>value</i> property as a collection of arbitrary objects. In addition, <i>content</i> property is required to display the representation of an event.
                            Example below is a sample events array that is used throughout the documentation.</p>
<CodeHighlight lang="js">
{`
const events = [
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
];
`}
</CodeHighlight>

<CodeHighlight>
{`
<Timeline value={events} content={(item) => item.status} />
`}
</CodeHighlight>

                        <h5>Layout</h5>
                        <p>Default layout of the timeline is vertical, setting <i>layout</i> to "horizontal" displays the items horizontally.</p>
<CodeHighlight>
{`
<Timeline value={events} layout="horizontal" content={(item) => item.status} />
`}
</CodeHighlight>

                        <h5>Alignment</h5>
                        <p>Location of the timeline bar is defined using the <i>align</i> property.</p>
<CodeHighlight>
{`
<Timeline value={events} align="right" content={(item) => item.status} />
`}
</CodeHighlight>

                        <p>In addition, the "alternate" alignment option make the contents take turns around the timeline bar.</p>
<CodeHighlight>
{`
<Timeline value={events} align="alternate" content={(item) => item.status} />
`}
</CodeHighlight>

                        <h5>Opposite</h5>
                        <p>Content to be placed at the other side of the bar is defined with the <i>opposite</i> property.</p>
<CodeHighlight>
{`
<Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
`}
</CodeHighlight>

                        <h5>Custom Markers</h5>
                        <p><i>marker</i> property allows placing a custom event marker instead of the default one. Below is an example with custom markers and content.</p>
<CodeHighlight>
{`
<Timeline value={events} marker={(item) => <i className={item.icon}></i>} content={(item) => item.status}} />
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
                                        <td>value</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of events to display.</td>
                                    </tr>
                                    <tr>
                                        <td>align</td>
                                        <td>string</td>
                                        <td>left</td>
                                        <td>Position of the timeline bar relative to the content. Valid values are "left", "right for vertical layout and "top", "bottom" for horizontal layout.</td>
                                    </tr>
                                    <tr>
                                        <td>layout</td>
                                        <td>string</td>
                                        <td>vertical</td>
                                        <td>Orientation of the timeline, valid values are "vertical" and "horizontal".</td>
                                    </tr>
                                    <tr>
                                        <td>dataKey</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the field that uniquely identifies the a record in the data.</td>
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
                                        <td>p-timeline</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-left</td>
                                        <td>Container element when alignment is left.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-right</td>
                                        <td>Container element when alignment is right.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-top</td>
                                        <td>Container element when alignment is top.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-bottom</td>
                                        <td>Container element when alignment is bottom.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-alternate</td>
                                        <td>Container element when alignment is alternating.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-vertical</td>
                                        <td>Container element of a vertical timeline.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-horizontal</td>
                                        <td>Container element of a horizontal timeline.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-event</td>
                                        <td>Event element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-event-opposite</td>
                                        <td>Opposite of an event content.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-event-content</td>
                                        <td>Event content.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-event-separator</td>
                                        <td>Separator element of an event.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-event-marker</td>
                                        <td>Marker element of an event.</td>
                                    </tr>
                                    <tr>
                                        <td>p-timeline-event-connector</td>
                                        <td>Connector element of an event.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'TimelineDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        )
    }
}
