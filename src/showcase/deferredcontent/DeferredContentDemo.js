import React, {Component} from 'react';
import {DeferredContent} from '../../components/deferredcontent/DeferredContent';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {CarService} from "../service/CarService";
import {DataTable} from "../../components/datatable/DataTable";
import {Column} from "../../components/column/Column";
import {Growl} from "../../components/growl/Growl";

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
                        <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="prime"/>
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

    shouldComponentUpdate(){
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

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/DeferredContent" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
import React, {Component} from 'react';
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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DeferredContent</h1>
                        <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll. </p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />
                    <div style={{height:'800px'}}>
                        Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                    </div>
                    <DeferredContent onLoad={this.onImageLoad}>
                        <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="prime"/>
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
            </div>
        )
    }
}
`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
