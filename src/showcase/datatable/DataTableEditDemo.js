import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {InputText} from '../../components/inputtext/InputText';
import {Dropdown} from '../../components/dropdown/Dropdown';
import {Growl} from '../../components/growl/Growl';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableEditDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: []
        };
        this.clonedCars = {};
        this.carservice = new CarService();

        this.vinEditor = this.vinEditor.bind(this);
        this.yearEditor = this.yearEditor.bind(this);
        this.brandEditor = this.brandEditor.bind(this);
        this.colorEditor = this.colorEditor.bind(this);
        this.requiredValidator = this.requiredValidator.bind(this);

        this.editorForRowEditing = this.editorForRowEditing.bind(this);
        this.onRowEditorValidator = this.onRowEditorValidator.bind(this);
        this.onRowEditInit = this.onRowEditInit.bind(this);
        this.onRowEditSave = this.onRowEditSave.bind(this);
        this.onRowEditCancel = this.onRowEditCancel.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars1: data, cars2: data}));
    }

    /* Cell Editing */
    onEditorValueChange(props, value) {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        this.setState({cars1: updatedCars});
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

    /* Row Editing */
    onEditorValueChangeForRowEditing(props, value) {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        this.setState({cars2: updatedCars});
    }

    editorForRowEditing(props, field) {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChangeForRowEditing(props, e.target.value)} />;
    }

    onRowEditorValidator(rowData) {
        let value = rowData['brand'];
        return value.length > 0;
    }

    onRowEditInit(event) {
        this.clonedCars[event.data.vin] = {...event.data};
    }

    onRowEditSave(event) {
        if (this.onRowEditorValidator(event.data)) {
            delete this.clonedCars[event.data.vin];
            this.growl.show({severity: 'success', summary: 'Success', detail: 'Car is updated'});
        }
        else {
            this.growl.show({severity: 'error', summary: 'Error', detail: 'Brand is required'});
        }
    }

    onRowEditCancel(event) {
        let cars = [...this.state.cars2];
        cars[event.index] = this.clonedCars[event.data.vin];
        delete this.clonedCars[event.data.vin];
        this.setState({
            cars2: cars
        })
    }

    render() {
        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Edit</h1>
                        <p>Cell and Row editing provides a rapid and user friendly way to manipulate data.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <h3>Cell Editing</h3>
                    <DataTable value={this.state.cars1}>
                        <Column field="vin" header="Vin" editor={this.vinEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}/>
                        <Column field="year" header="Year" editor={this.yearEditor} style={{height: '3.5em'}}/>
                        <Column field="brand" header="Brand" editor={this.brandEditor} style={{height: '3.5em'}}/>
                        <Column field="color" header="Color" editor={this.colorEditor} style={{height: '3.5em'}}/>
                    </DataTable>

                    <h3>Row Editing</h3>
                    <DataTable value={this.state.cars2} editMode="row" rowEditorValidator={this.onRowEditorValidator} onRowEditInit={this.onRowEditInit} onRowEditSave={this.onRowEditSave} onRowEditCancel={this.onRowEditCancel}>
                        <Column field="vin" header="Vin" style={{height: '3.5em'}}/>
                        <Column field="year" header="Year" editor={(props) => this.editorForRowEditing(props, 'year')} style={{height: '3.5em'}}/>
                        <Column field="brand" header="Brand" editor={(props) => this.editorForRowEditing(props, 'brand')} style={{height: '3.5em'}}/>
                        <Column field="color" header="Color" editor={(props) => this.editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                        <Column rowEditor={true} style={{'width': '70px', 'textAlign': 'center'}}></Column>
                    </DataTable>
                </div>

                <DataTableEditDemoDoc></DataTableEditDemoDoc>
            </div>
        );
    }
}

export class DataTableEditDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Growl} from 'primereact/growl';
import {CarService} from '../service/CarService';

export class DataTableEditDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars1: [],
            cars2: []
        };
        this.clonedCars = {};
        this.carservice = new CarService();

        this.vinEditor = this.vinEditor.bind(this);
        this.yearEditor = this.yearEditor.bind(this);
        this.brandEditor = this.brandEditor.bind(this);
        this.colorEditor = this.colorEditor.bind(this);
        this.requiredValidator = this.requiredValidator.bind(this);

        this.editorForRowEditing = this.editorForRowEditing.bind(this);
        this.onRowEditorValidator = this.onRowEditorValidator.bind(this);
        this.onRowEditInit = this.onRowEditInit.bind(this);
        this.onRowEditSave = this.onRowEditSave.bind(this);
        this.onRowEditCancel = this.onRowEditCancel.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars1: data, cars2: data}));
    }

    /* Cell Editing */
    onEditorValueChange(props, value) {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        this.setState({cars1: updatedCars});
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

    /* Row Editing */
    onEditorValueChangeForRowEditing(props, value) {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        this.setState({cars2: updatedCars});
    }

    editorForRowEditing(props, field) {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChangeForRowEditing(props, e.target.value)} />;
    }

    onRowEditorValidator(rowData) {
        let value = rowData['brand'];
        return value.length > 0;
    }

    onRowEditInit(event) {
        this.clonedCars[event.data.vin] = {...event.data};
    }

    onRowEditSave(event) {
        if (this.onRowEditorValidator(event.data)) {
            delete this.clonedCars[event.data.vin];
            this.growl.show({severity: 'success', summary: 'Success', detail: 'Car is updated'});
        }
        else {
            this.growl.show({severity: 'error', summary: 'Error', detail: 'Brand is required'});
        }
    }

    onRowEditCancel(event) {
        let cars = [...this.state.cars2];
        cars[event.index] = this.clonedCars[event.data.vin];
        delete this.clonedCars[event.data.vin];
        this.setState({
            cars2: cars
        })
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />

                <h3>Cell Editing</h3>
                <DataTable value={this.state.cars1}>
                    <Column field="vin" header="Vin" editor={this.vinEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}/>
                    <Column field="year" header="Year" editor={this.yearEditor} style={{height: '3.5em'}}/>
                    <Column field="brand" header="Brand" editor={this.brandEditor} style={{height: '3.5em'}}/>
                    <Column field="color" header="Color" editor={this.colorEditor} style={{height: '3.5em'}}/>
                </DataTable>

                <h3>Row Editing</h3>
                <DataTable value={this.state.cars2} editMode="row" rowEditorValidator={this.onRowEditorValidator} onRowEditInit={this.onRowEditInit} onRowEditSave={this.onRowEditSave} onRowEditCancel={this.onRowEditCancel}>
                    <Column field="vin" header="Vin" style={{height: '3.5em'}}/>
                    <Column field="year" header="Year" editor={(props) => this.editorForRowEditing(props, 'year')} style={{height: '3.5em'}}/>
                    <Column field="brand" header="Brand" editor={(props) => this.editorForRowEditing(props, 'brand')} style={{height: '3.5em'}}/>
                    <Column field="color" header="Color" editor={(props) => this.editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                    <Column rowEditor={true} style={{'width': '70px', 'textAlign': 'center'}}></Column>
                </DataTable>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Growl} from 'primereact/growl';
import {CarService} from '../service/CarService';

const DataTableEditDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carservice = new CarService();
    let clonedCars = {};
    let growl = useRef(null);

    useEffect(() => {
        carservice.getCarsSmall().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    /* Cell Editing */
    const onEditorValueChange = (props, value) => {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        setCars1(updatedCars);
    };

    const inputTextEditor = (props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(props, e.target.value)} />;
    };

    const vinEditor = (props) => {
        return inputTextEditor(props, 'vin');
    };

    const yearEditor = (props) => {
        return inputTextEditor(props, 'year');
    };

    const brandEditor = (props) => {
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
                    onChange={(e) => onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select a City"/>
        );
    };

    const colorEditor = (props) => {
        return inputTextEditor(props, 'color');
    };

    const requiredValidator = (props) => {
        let value = props.rowData[props.field];
        return value && value.length > 0;
    };

    /* Row Editing */
    const onEditorValueChangeForRowEditing = (props, value) => {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        setCars2(updatedCars);
    };

    const editorForRowEditing = (props, field) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChangeForRowEditing(props, e.target.value)} />;
    };

    const onRowEditorValidator = (rowData) => {
        let value = rowData['brand'];
        return value.length > 0;
    };

    const onRowEditInit = (event) => {
        clonedCars[event.data.vin] = {...event.data};
    };

    const onRowEditSave = (event) => {
        if (onRowEditorValidator(event.data)) {
            delete clonedCars[event.data.vin];
            growl.current.show({severity: 'success', summary: 'Success', detail: 'Car is updated'});
        }
        else {
            growl.current.show({severity: 'error', summary: 'Error', detail: 'Brand is required'});
        }
    }

    const onRowEditCancel = (event) => {
        let cars = [...cars2];
        cars[event.index] = clonedCars[event.data.vin];
        delete clonedCars[event.data.vin];
        setCars2(cars);
    };

    return (
        <div>
            <Growl ref={growl} />

            <h3>Cell Editing</h3>
            <DataTable value={cars1}>
                <Column field="vin" header="Vin" editor={vinEditor} editorValidator={requiredValidator} style={{height: '3.5em'}}/>
                <Column field="year" header="Year" editor={yearEditor} style={{height: '3.5em'}}/>
                <Column field="brand" header="Brand" editor={brandEditor} style={{height: '3.5em'}}/>
                <Column field="color" header="Color" editor={colorEditor} style={{height: '3.5em'}}/>
            </DataTable>

            <h3>Row Editing</h3>
            <DataTable value={cars2} editMode="row" rowEditorValidator={onRowEditorValidator} onRowEditInit={onRowEditInit} onRowEditSave={onRowEditSave} onRowEditCancel={onRowEditCancel}>
                <Column field="vin" header="Vin" style={{height: '3.5em'}}/>
                <Column field="year" header="Year" editor={(props) => editorForRowEditing(props, 'year')} style={{height: '3.5em'}}/>
                <Column field="brand" header="Brand" editor={(props) => editorForRowEditing(props, 'brand')} style={{height: '3.5em'}}/>
                <Column field="color" header="Color" editor={(props) => editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                <Column rowEditor={true} style={{'width': '70px', 'textAlign': 'center'}}></Column>
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Growl} from 'primereact/growl';
import {CarService} from '../service/CarService';

const DataTableEditDemo = () => {
    const [cars1, setCars1] = useState([]);
    const [cars2, setCars2] = useState([]);

    const carservice = new CarService();
    let clonedCars: any = {};
    let growl = useRef<any>(null);

    useEffect(() => {
        carservice.getCarsSmall().then(data => {
            setCars1(data);
            setCars2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    /* Cell Editing */
    const onEditorValueChange = (props: any, value: any) => {
        let updatedCars: any = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        setCars1(updatedCars);
    };

    const inputTextEditor = (props: any, field: string) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChange(props, e.target.value)} />;
    };

    const vinEditor = (props: any) => {
        return inputTextEditor(props, 'vin');
    };

    const yearEditor = (props: any) => {
        return inputTextEditor(props, 'year');
    };

    const brandEditor = (props: any) => {
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
                    onChange={(e) => onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select a City"/>
        );
    };

    const colorEditor = (props: any) => {
        return inputTextEditor(props, 'color');
    };

    const requiredValidator = (props: any) => {
        let value: any = props.rowData[props.field];
        return value && value.length > 0;
    };

    /* Row Editing */
    const onEditorValueChangeForRowEditing = (props: any, value: any) => {
        let updatedCars: any = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        setCars2(updatedCars);
    };

    const editorForRowEditing = (props: any, field: string) => {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => onEditorValueChangeForRowEditing(props, e.target.value)} />;
    };

    const onRowEditorValidator = (rowData: any) => {
        let value = rowData['brand'];
        return value.length > 0;
    };

    const onRowEditInit = (event: any) => {
        clonedCars[event.data.vin] = {...event.data};
    };

    const onRowEditSave = (event: any) => {
        if (onRowEditorValidator(event.data)) {
            delete clonedCars[event.data.vin];
            growl.current.show({severity: 'success', summary: 'Success', detail: 'Car is updated'});
        }
        else {
            growl.current.show({severity: 'error', summary: 'Error', detail: 'Brand is required'});
        }
    }

    const onRowEditCancel = (event: any) => {
        let cars: any = [...cars2];
        cars[event.index] = clonedCars[event.data.vin];
        delete clonedCars[event.data.vin];
        setCars2(cars);
    };

    return (
        <div>
            <Growl ref={growl} />

            <h3>Cell Editing</h3>
            <DataTable value={cars1}>
                <Column field="vin" header="Vin" editor={vinEditor} editorValidator={requiredValidator} style={{height: '3.5em'}}/>
                <Column field="year" header="Year" editor={yearEditor} style={{height: '3.5em'}}/>
                <Column field="brand" header="Brand" editor={brandEditor} style={{height: '3.5em'}}/>
                <Column field="color" header="Color" editor={colorEditor} style={{height: '3.5em'}}/>
            </DataTable>

            <h3>Row Editing</h3>
            <DataTable value={cars2} editMode="row" rowEditorValidator={onRowEditorValidator} onRowEditInit={onRowEditInit} onRowEditSave={onRowEditSave} onRowEditCancel={onRowEditCancel}>
                <Column field="vin" header="Vin" style={{height: '3.5em'}}/>
                <Column field="year" header="Year" editor={(props) => editorForRowEditing(props, 'year')} style={{height: '3.5em'}}/>
                <Column field="brand" header="Brand" editor={(props) => editorForRowEditing(props, 'brand')} style={{height: '3.5em'}}/>
                <Column field="color" header="Color" editor={(props) => editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                <Column rowEditor={true} style={{'width': '70px', 'textAlign': 'center'}}></Column>
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
                <LiveEditor name="DataTableEditDemo" sources={this.sources} service="CarService" data="cars-small" />
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
