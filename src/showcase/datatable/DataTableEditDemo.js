import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {InputText} from '../../components/inputtext/InputText';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class DataTableEditDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: null
        };
        this.carservice = new CarService();
        this.vinEditor = this.vinEditor.bind(this);
        this.yearEditor = this.yearEditor.bind(this);
        this.brandEditor = this.brandEditor.bind(this);
        this.colorEditor = this.colorEditor.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }
    
    onEditorValueChange(props, value) {
        let updatedCars = [...this.state.cars];
        updatedCars[props.rowIndex][props.field] = value;
        this.setState({cars: updatedCars});
    }
    
    vinEditor(props) {
        return <InputText type="text" value={this.state.cars[props.rowIndex].vin} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
    }
    
    yearEditor(props) {
        return <InputText type="text" value={this.state.cars[props.rowIndex].year} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
    }
    
    brandEditor(props) {
        return <InputText type="text" value={this.state.cars[props.rowIndex].brand} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
    }
    
    colorEditor(props) {
        return <InputText type="text" value={this.state.cars[props.rowIndex].color} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Edit</h1>
                        <p>Incell editing is enabled by setting editable property true both on datatable and columns, 
                        when a cell is clicked edit mode is activated, clicking outside of cell or hitting the enter 
                        key switches back to view mode after updating the value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} editable={true}>
                        <Column field="vin" header="Vin" editor={this.vinEditor}/>
                        <Column field="year" header="Year" editor={this.yearEditor}/>
                        <Column field="brand" header="Brand" editor={this.brandEditor}/>
                        <Column field="color" header="Color" editor={this.colorEditor}/>
                    </DataTable>
                </div>

                <DataTableEditDemoDoc></DataTableEditDemoDoc>
            </div>
        );
    }
}

export class DataTableEditDemoDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {Button} from 'primereact/components/button/Button';
import {CarService} from '../service/CarService';

export class DataTableExportDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
        this.export = this.export.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    export() {
        this.dt.exportCSV();
    }

    render() {
        var header = <div style={{textAlign:'left'}}><Button type="button" icon="fa-file-o" iconPos="left" label="CSV" onClick={this.export}></Button></div>;

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataTable - Export</h1>
                        <p>DataTable can export its data to CSV format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} header={header} ref={(el) => { this.dt = el; }}>
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
