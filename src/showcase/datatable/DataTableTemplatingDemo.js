import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {Button} from '../../components/button/Button';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

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
        var carCount = this.state.cars ? this.state.cars.length: 0;
        var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
        var footer = "There are " + carCount + ' cars';

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

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {CarService} from '../service/CarService';

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
        var carCount = this.state.cars ? this.state.cars.length: 0;
        var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>List of Cars <Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
        var footer = "There are " + carCount + ' cars';

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Templating</h1>
                        <p>Custom content at header, body and footer sections are supported via templating.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header} footer={footer}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" body={this.brandTemplate} style={{textAlign:'center'}/>
                        <Column field="color" header="Color" body={this.colorTemplate} />
                        <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                    </DataTable>
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
