import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {InputText} from '../../components/inputtext/InputText';
import {Dropdown} from '../../components/dropdown/Dropdown';
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
        this.requiredValidator = this.requiredValidator.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }
    
    onEditorValueChange(props, value) {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        this.setState({cars: updatedCars});
    }
    
    inputTextEditor(props, field) {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
    }
    
    vinEditor(props) {
        return this.inputTextEditor(props, 'vin');
    }
    
    yearEditor(props) {
        return this.inputTextEditor(props, 'year');
    }
    
    brandEditor(props) {
        let brands = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];
        
        return (
            <Dropdown value={props.value[props.rowIndex].brand} options={brands} 
                    onChange={(e) => this.onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select a City"/>
        );
    }
    
    colorEditor(props) {
        return this.inputTextEditor(props, 'color');
    }
        
    requiredValidator(props) {
        let value = props.rowData[props.field];
        return value && value.length > 0;
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Edit</h1>
                        <p>Incell editing is enabled defining editor property on columns.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars}>
                        <Column field="vin" header="Vin" editor={this.vinEditor} editorValidator={this.requiredValidator} />
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
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {DataTable} from 'primereactcomponents/datatable/DataTable';
import {Column} from 'primereactcomponents/column/Column';
import {InputText} from 'primereactcomponents/inputtext/InputText';
import {Dropdown} from 'primereactcomponents/dropdown/Dropdown';
import {Calendar} from 'primereactcomponents/calendar/Calendar';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';

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
        this.requiredValidator = this.requiredValidator.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }
    
    onEditorValueChange(props, value) {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        this.setState({cars: updatedCars});
    }
    
    inputTextEditor(props, field) {
        return <InputText type="text" value={props.rowData.year} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
    }
    
    vinEditor(props) {
        return this.inputTextEditor(props, 'vin');
    }
    
    yearEditor(props) {
        return this.inputTextEditor(props, 'year');
    }
    
    brandEditor(props) {
        let brands = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];
        
        return (
            <Dropdown value={props.value[props.rowIndex].brand} options={brands} 
                    onChange={(e) => this.onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select a City"/>
        );
    }
    
    colorEditor(props) {
        return this.inputTextEditor(props, 'color');
    }
        
    requiredValidator(props) {
        let value = props.rowData[props.field];
        return value && value.length > 0;
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
                        <Column field="vin" header="Vin" editor={this.vinEditor} editorValidator={this.requiredValidator} />
                        <Column field="year" header="Year" editor={this.yearEditor}/>
                        <Column field="brand" header="Brand" editor={this.brandEditor}/>
                        <Column field="color" header="Color" editor={this.colorEditor}/>
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
