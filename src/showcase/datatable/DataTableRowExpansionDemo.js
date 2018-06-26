import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class DataTableRowExpansionDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    rowExpansionTemplate(data) {
        var src = "showcase/resources/demo/images/car/" + data.brand + ".png";

        return  <div className="ui-g ui-fluid">
                    <div className="ui-g-12 ui-md-3" style={{textAlign:'center', borderRight: '1px solid #cccccc'}}>
                        <img src={src} alt={data.brand}/>
                    </div>
                     <div className="ui-g-12 ui-md-9">
                       <div className="ui-g">
                          <div className="ui-md-2">Vin: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                          <div className="ui-md-2">Year: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                          <div className="ui-md-2">Brand: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                          <div className="ui-md-2">Color: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                       </div>
                    </div>
                </div>;
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Row Expansion</h1>
                        <p>A row can be expanded to display extra content by enabling expandableRows property and providing a row ng-template..</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})}     
                            rowExpansionTemplate={this.rowExpansionTemplate}>
                        <Column expander={true} style={{width: '2em'}} />
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

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';

export class DataTableRowExpansionDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.rowExpansionTemplate = this.rowExpansionTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    rowExpansionTemplate(data) {
        var src = "showcase/resources/demo/images/car/" + data.brand + ".png";

        return  <div className="ui-g ui-fluid">
                    <div className="ui-g-12 ui-md-3" style={{textAlign:'center', borderRight: '1px solid #cccccc'}}>
                        <img src={src} alt={data.brand}/>
                    </div>
                     <div className="ui-g-12 ui-md-9">
                       <div className="ui-g">
                          <div className="ui-md-2">Vin: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.vin}</div>

                          <div className="ui-md-2">Year: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.year}</div>

                          <div className="ui-md-2">Brand: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.brand}</div>

                          <div className="ui-md-2">Color: </div>
                          <div className="ui-md-10" style={{fontWeight:'bold'}}>{data.color}</div>
                       </div>
                    </div>
                </div>;
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Row Expansion</h1>
                        <p>A row can be expanded to display extra content by enabling expandableRows property and providing a row ng-template..</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})}     
                            rowExpansionTemplate={this.rowExpansionTemplate}>
                        <Column expander={true} style={{width: '2em'}} />
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
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
