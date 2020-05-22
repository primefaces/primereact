import React, {Component} from 'react';
import {DeferredContent} from '../../components/deferredcontent/DeferredContent';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {CarService} from "../service/CarService";
import {DataTable} from "../../components/datatable/DataTable";
import {Column} from "../../components/column/Column";
import {Growl} from "../../components/growl/Growl";
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DeferredContentDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.onImageLoad = this.onImageLoad.bind(this);
        this.onDataLoad = this.onDataLoad.bind(this);
    }

    onImageLoad() {
        this.growl.show({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
    }

    onDataLoad() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
        this.growl.show({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DeferredContent</h1>
                        <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll. </p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("deferredContent")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />
                    <div style={{height:'800px'}}>
                        Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                    </div>
                    <DeferredContent onLoad={this.onImageLoad}>
                        <img src="showcase/demo/images/galleria/galleria1.jpg" alt="prime"/>
                    </DeferredContent>

                    <div style={{height:'500px'}}>
                    </div>
                    <DeferredContent onLoad={this.onDataLoad}>
                        <DataTable value={this.state.cars}>
                            <Column field="vin" header="Vin" />
                            <Column field="year" header="Year" />
                            <Column field="brand" header="Brand" />
                            <Column field="color" header="Color" />
                        </DataTable>
                    </DeferredContent>
                </div>

                <DeferredContentDoc/>
            </div>
        )
    }
}

export class DeferredContentDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import {DeferredContent} from 'primereact/deferredcontent';
import {CarService} from "../service/CarService";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Growl} from "primereact/growl";

export class DeferredContentDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.onImageLoad = this.onImageLoad.bind(this);
        this.onDataLoad = this.onDataLoad.bind(this);
    }

    onImageLoad() {
        this.growl.show({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
    }

    onDataLoad() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
        this.growl.show({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />
                <div style={{height:'800px'}}>
                    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                </div>
                <DeferredContent onLoad={this.onImageLoad}>
                    <img src="showcase/demo/images/galleria/galleria1.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="prime"/>
                </DeferredContent>

                <div style={{height:'500px'}}>
                </div>
                <DeferredContent onLoad={this.onDataLoad}>
                    <DataTable value={this.state.cars}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </DeferredContent>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useRef } from 'react';
import {DeferredContent} from 'primereact/deferredcontent';
import {CarService} from "../service/CarService";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Growl} from "primereact/growl";

const DeferredContentDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();
    let growl = useRef(null);

    const onImageLoad = () => {
        growl.current.show({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
    }

    const onDataLoad = () => {
        carservice.getCarsSmall().then(data => setCars(data));
        growl.current.show({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
    }

    return (
        <div>
            <Growl ref={growl} />
            <div style={{height:'800px'}}>
                Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
            </div>
            <DeferredContent onLoad={onImageLoad}>
                <img src="showcase/demo/images/galleria/galleria1.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="prime"/>
            </DeferredContent>

            <div style={{height:'500px'}}>
            </div>
            <DeferredContent onLoad={onDataLoad}>
                <DataTable value={cars}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>
            </DeferredContent>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useRef } from 'react';
import {DeferredContent} from 'primereact/deferredcontent';
import {CarService} from "../service/CarService";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Growl} from "primereact/growl";

const DeferredContentDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();
    let growl = useRef<any>(null);

    const onImageLoad = () => {
        growl.current.show({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable'});
    }

    const onDataLoad = () => {
        carservice.getCarsSmall().then(data => setCars(data));
        growl.current.show({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
    }

    return (
        <div>
            <Growl ref={growl} />
            <div style={{height:'800px'}}>
                Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
            </div>
            <DeferredContent onLoad={onImageLoad}>
                <img src="showcase/demo/images/galleria/galleria1.jpg" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="prime"/>
            </DeferredContent>

            <div style={{height:'500px'}}>
            </div>
            <DeferredContent onLoad={onDataLoad}>
                <DataTable value={cars}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>
            </DeferredContent>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/deferredcontent" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="DeferredContentDemo" sources={this.sources} service="CarService" data="cars-small" activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
{`
import {DeferredContent} from 'primereact/DeferredContent';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>DeferredContent is used as a wrapper element of its content.</p>
                        <CodeHighlight className="language-jsx">
{`
<DeferredContent>
    <DataTable value={this.state.cars}>
        <Column field="vin" header="Vin" />
        <Column field="year" header="Year" />
        <Column field="brand" header="Brand" />
        <Column field="color" header="Color" />
    </DataTable>
</DeferredContent>

`}
                        </CodeHighlight>

                        <h3>Callback</h3>
                        <p><i>onLoad</i> callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>
                        <CodeHighlight className="language-jsx">
{`
<DeferredContent onLoad={this.initCars}>
    <DataTable value={this.state.cars}>
        <Column field="vin" header="Vin" />
        <Column field="year" header="Year" />
        <Column field="brand" header="Brand" />
        <Column field="color" header="Color" />
    </DataTable>
</DeferredContent>

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            Component has no attributes.
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
                                        <td>onLoad</td>
                                        <td>event: Event object</td>
                                        <td>Callback to invoke when deferred content is loaded.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <div className="doc-tablewrapper">
                            Component does not apply any styling.
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
