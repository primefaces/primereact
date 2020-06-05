import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DeferredContentDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {DeferredContent} from 'primereact/deferredcontent';
import {CarService} from "../service/CarService";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Growl} from 'primereact/growl';

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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Growl} from 'primereact/growl';

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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Growl} from 'primereact/growl';

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
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="DeferredContentDemo" sources={[key, value]} service="CarService" data="cars-small" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
