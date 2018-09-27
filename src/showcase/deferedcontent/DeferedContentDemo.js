import React, {Component} from 'react';
import {DeferedContent} from '../../components/deferedcontent/DeferedContent';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {CarService} from "../service/CarService";
import {DataTable} from "../../components/datatable/DataTable";
import {Column} from "../../components/column/Column";
import {Growl} from "../../components/growl/Growl";

export class DeferedContentDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.initImage = this.initImage.bind(this);
        this.initData = this.initData.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    initImage() {
        this.growl.show({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to see datatable'});
    }

    initData() {
        this.growl.show({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DeferedContent</h1>
                        <p>DeferedContent postpones the loading the content that is initially not in viewport until it becomes visible on scroll. Scroll down to load the DataTable which initiates a query that is not executed on initial page load to speed up load performance.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />
                    <div style={{height:'800px'}}>
                        Image is not loaded, scroll down to initialize it.
                    </div>
                    <DeferedContent onLoad={this.initImage}>
                        <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="prime"/>
                    </DeferedContent>


                    <div style={{height:'500px'}}>
                    </div>
                    <DeferedContent onLoad={this.initData}>
                        <DataTable value={this.state.cars}>
                            <Column field="vin" header="Vin" />
                            <Column field="year" header="Year" />
                            <Column field="brand" header="Brand" />
                            <Column field="color" header="Color" />
                        </DataTable>
                    </DeferedContent>
                </div>

                <DeferedContentDoc/>

            </div>
        )
    }
}

export class DeferedContentDoc extends Component {

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
import {DeferedContent} from 'primereact/deferedcontent';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Defer is applied to a container element where content needs to be placed inside an child component.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<DeferedContent>
    <DataTable value={this.state.cars}>
        <Column field="vin" header="Vin" />
        <Column field="year" header="Year" />
        <Column field="brand" header="Brand" />
        <Column field="color" header="Color" />
    </DataTable>
</DeferedContent>

`}
                        </CodeHighlight>

                        <h3>Callback</h3>
                        <p>onLoad callback is useful to initialize the content when it becomes visible on scroll such as loading data.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<DeferedContent onLoad={this.initData}>
    <DataTable value={this.state.cars}>
        <Column field="vin" header="Vin" />
        <Column field="year" header="Year" />
        <Column field="brand" header="Brand" />
        <Column field="color" header="Color" />
    </DataTable>
</DeferedContent>

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
                            Componentdoes not apply any styling to host.
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>

                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/deferedcontent" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
export class DeferedContentDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.initImage = this.initImage.bind(this);
        this.initData = this.initData.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    initImage() {
        this.growl.show({severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to see datatable'});
    }

    initData() {
        this.growl.show({severity: 'success', summary: 'Data Initialized', detail: 'Render Completed'});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DeferedContent</h1>
                        <p></p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />
                    <div style={{height:'800px'}}>
                        Image is not loaded, scroll down to initialize it.
                    </div>
                    <DeferedContent onLoad={this.initImage}>
                        <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="prime"/>
                    </DeferedContent>


                    <div style={{height:'500px'}}>
                    </div>
                    <DeferedContent onLoad={this.initData}>
                        <DataTable value={this.state.cars}>
                            <Column field="vin" header="Vin" />
                            <Column field="year" header="Year" />
                            <Column field="brand" header="Brand" />
                            <Column field="color" header="Color" />
                        </DataTable>
                    </DeferedContent>
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