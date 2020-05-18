import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {Button} from '../../components/button/Button';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableTemplatingDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.brandTemplate = this.brandTemplate.bind(this);
        this.colorTemplate = this.colorTemplate.bind(this);
        this.actionTemplate = this.actionTemplate.bind(this);
    }

    colorTemplate(rowData, column) {
        return <span style={{color: rowData['color']}}>{rowData['color']}</span>;
    }

    brandTemplate(rowData, column) {
        var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
        return <img src={src} alt={rowData.brand} width="48px" />;
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        const carCount = this.state.cars ? this.state.cars.length: 0;
        const header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
        const footer = "There are " + carCount + ' cars';

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Templating</h1>
                        <p>Custom content at header, body and footer sections are supported via templating.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header} footer={footer}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" body={this.brandTemplate} style={{textAlign:'center'}}/>
                        <Column field="color" header="Color" body={this.colorTemplate} />
                        <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                    </DataTable>
                </div>

                <DataTableTemplatingDemoDoc></DataTableTemplatingDemoDoc>
            </div>
        );
    }
}

export class DataTableTemplatingDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';
import {Button} from 'primereact/button';

export class DataTableTemplatingDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.brandTemplate = this.brandTemplate.bind(this);
        this.colorTemplate = this.colorTemplate.bind(this);
        this.actionTemplate = this.actionTemplate.bind(this);
    }

    colorTemplate(rowData, column) {
        return <span style={{color: rowData['color']}}>{rowData['color']}</span>;
    }

    brandTemplate(rowData, column) {
        var src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
        return <img src={src} alt={rowData.brand} width="48px" />;
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {
        const carCount = this.state.cars ? this.state.cars.length: 0;
        const header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
        const footer = "There are " + carCount + ' cars';

        return (
            <div>
                <DataTable value={this.state.cars} header={header} footer={footer}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" body={this.brandTemplate} style={{textAlign:'center'}}/>
                    <Column field="color" header="Color" body={this.colorTemplate} />
                    <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                </DataTable>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';
import {Button} from 'primereact/button';

const DataTableTemplatingDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    const colorTemplate = (rowData, column) => {
        return <span style={{color: rowData['color']}}>{rowData['color']}</span>;
    };

    const brandTemplate = (rowData, column) => {
        let src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
        return <img src={src} alt={rowData.brand} width="48px" />;
    };

    const actionTemplate = (rowData, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    };

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carCount = cars ? cars.length : 0;
    const header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
    const footer = "There are " + carCount + ' cars';

    return (
        <div>
            <DataTable value={cars} header={header} footer={footer}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" body={brandTemplate} style={{textAlign:'center'}}/>
                <Column field="color" header="Color" body={colorTemplate} />
                <Column body={actionTemplate} style={{textAlign:'center', width: '8em'}}/>
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';
import {Button} from 'primereact/button';

const DataTableTemplatingDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    const colorTemplate = (rowData: any, column: any) => {
        return <span style={{color: rowData['color']}}>{rowData['color']}</span>;
    };

    const brandTemplate = (rowData: any, column: any) => {
        let src = "showcase/resources/demo/images/car/" + rowData.brand + ".png";
        return <img src={src} alt={rowData.brand} width="48px" />;
    };

    const actionTemplate = (rowData: any, column: any) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    };

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carCount = cars ? cars.length : 0;
    const header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
    const footer = "There are " + carCount + ' cars';

    return (
        <div>
            <DataTable value={cars} header={header} footer={footer}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" body={brandTemplate} style={{textAlign:'center'}}/>
                <Column field="color" header="Color" body={colorTemplate} />
                <Column body={actionTemplate} style={{textAlign:'center', width: '8em'}}/>
            </DataTable>
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

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datatable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="DataTableTemplatingDemo" sources={this.sources} service="CarService" data="cars-small" />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
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
