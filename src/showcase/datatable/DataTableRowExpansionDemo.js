import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableRowExpansionDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            expandedRows: null
        };
        this.carservice = new CarService();
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    rowExpansionTemplate(data) {
        const src = "showcase/resources/demo/images/car/" + data.brand + ".png";

        return  (
            <div className="p-grid p-fluid" style={{padding: '2em 1em 1em 1em'}}>
                <div className="p-col-12 p-md-3" style={{textAlign:'center'}}>
                    <img src={src} alt={data.brand}/>
                </div>
                    <div className="p-col-12 p-md-9">
                    <div className="p-grid">
                        <div className="p-md-2">Vin: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                        <div className="p-md-2">Year: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                        <div className="p-md-2">Brand: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                        <div className="p-md-2">Color: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Row Expansion</h1>
                        <p>A row can be expanded to display extra content by enabling expandableRows property and providing a row ng-template.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})}
                            rowExpansionTemplate={this.rowExpansionTemplate} dataKey="vin">
                        <Column expander={true} style={{width: '3em'}} />
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>
                </div>

                <DataTableRowExpansionDemoDoc></DataTableRowExpansionDemoDoc>
            </div>
        );
    }
}

export class DataTableRowExpansionDemoDoc extends Component {

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
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class DataTableRowExpansionDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            expandedRows: null
        };
        this.carservice = new CarService();
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    rowExpansionTemplate(data) {
        const src = "showcase/resources/demo/images/car/" + data.brand + ".png";

        return  (
            <div className="p-grid p-fluid" style={{padding: '2em 1em 1em 1em'}}>
                <div className="p-col-12 p-md-3" style={{textAlign:'center'}}>
                    <img src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={data.brand}/>
                </div>
                    <div className="p-col-12 p-md-9">
                    <div className="p-grid">
                        <div className="p-md-2">Vin: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                        <div className="p-md-2">Year: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                        <div className="p-md-2">Brand: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                        <div className="p-md-2">Color: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <DataTable value={this.state.cars} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})}
                        rowExpansionTemplate={this.rowExpansionTemplate} dataKey="vin">
                    <Column expander={true} style={{width: '3em'}} />
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableRowExpansionDemo = () => {
    const [cars, setCars] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowExpansionTemplate = (data) => {
        const src = "showcase/resources/demo/images/car/" + data.brand + ".png";

        return  (
            <div className="p-grid p-fluid" style={{padding: '2em 1em 1em 1em'}}>
                <div className="p-col-12 p-md-3" style={{textAlign:'center'}}>
                    <img src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={data.brand}/>
                </div>
                    <div className="p-col-12 p-md-9">
                    <div className="p-grid">
                        <div className="p-md-2">Vin: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                        <div className="p-md-2">Year: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                        <div className="p-md-2">Brand: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                        <div className="p-md-2">Color: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <DataTable value={cars} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    rowExpansionTemplate={rowExpansionTemplate} dataKey="vin">
                <Column expander={true} style={{width: '3em'}} />
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

const DataTableRowExpansionDemo = () => {
    const [cars, setCars] = useState([]);
    const [expandedRows, setExpandedRows] = useState<any>(null);

    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowExpansionTemplate = (data: any) => {
        const src = "showcase/resources/demo/images/car/" + data.brand + ".png";

        return  (
            <div className="p-grid p-fluid" style={{padding: '2em 1em 1em 1em'}}>
                <div className="p-col-12 p-md-3" style={{textAlign:'center'}}>
                    <img src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={data.brand}/>
                </div>
                    <div className="p-col-12 p-md-9">
                    <div className="p-grid">
                        <div className="p-md-2">Vin: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                        <div className="p-md-2">Year: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                        <div className="p-md-2">Brand: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                        <div className="p-md-2">Color: </div>
                        <div className="p-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <DataTable value={cars} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    rowExpansionTemplate={rowExpansionTemplate} dataKey="vin">
                <Column expander={true} style={{width: '3em'}} />
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>
        </div>
    );
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datatable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="DataTableRowExpansionDemo" sources={this.sources} service="CarService" data="cars-small" activeButtonIndex={this.state.activeIndex} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
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
        )
    }
}
