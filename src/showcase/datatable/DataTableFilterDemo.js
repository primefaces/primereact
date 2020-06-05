import React, {Component} from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {InputText} from '../../components/inputtext/InputText';
import {CarService} from '../service/CarService';
import {Dropdown} from '../../components/dropdown/Dropdown';
import {MultiSelect} from '../../components/multiselect/MultiSelect';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataTableFilterDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            globalFilter: null,
            selectedBrand: null,
            selectedColors: null
        };

        this.brands = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        this.colors = [
            {label: 'White', value: 'White'},
            {label: 'Green', value: 'Green'},
            {label: 'Silver', value: 'Silver'},
            {label: 'Black', value: 'Black'},
            {label: 'Red', value: 'Red'},
            {label: 'Maroon', value: 'Maroon'},
            {label: 'Brown', value: 'Brown'},
            {label: 'Orange', value: 'Orange'},
            {label: 'Blue', value: 'Blue'}
        ];

        this.carservice = new CarService();
        this.onBrandChange = this.onBrandChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    onBrandChange(event) {
        this.dt.filter(event.value, 'brand', 'equals');
        this.setState({selectedBrand: event.value});
    }

    onColorChange(event) {
        this.dt.filter(event.value, 'color', 'in');
        this.setState({selectedColors: event.value});
    }

    render() {
        const header = (
            <div style={{'textAlign':'left'}}>
                <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
            </div>
        );

        const brandFilter = <Dropdown style={{width: '100%'}} placeholder="Select a Brand" value={this.state.selectedBrand} options={this.state.brands} onChange={this.onBrandChange} showClear />;
        const colorFilter = <MultiSelect style={{width:'100%'}} placeholder="Select Colors" value={this.state.selectedColors} options={this.state.colors} onChange={this.onColorChange} />;

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable - Filter</h1>
                        <p>Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode
                            property of column object that also accepts "contains", "endsWith", "equals", "in" and "custom". An optional global filter feature is available to search all fields with a keyword.
                            By default input fields are generated as filter elements and using templating any component can be used as a filter.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable ref={(el) => this.dt = el} value={this.state.cars} paginator={true} rows={10} header={header}
                        globalFilter={this.state.globalFilter} emptyMessage="No records found">
                        <Column field="vin" header="Vin" filter={true} filterPlaceholder="Vin starts with"/>
                        <Column field="year" header="Year" filter={true} filterPlaceholder="Year contains" filterMatchMode="contains" />
                        <Column field="brand" header="Brand" filter={true} filterElement={brandFilter} />
                        <Column field="color" header="Color" filter={true} filterElement={colorFilter} />
                    </DataTable>
                </div>

                <DataTableFilterDemoDoc></DataTableFilterDemoDoc>
            </div>
        );
    }
}

export class DataTableFilterDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {CarService} from '../service/CarService';
import {Dropdown} from 'primereact/dropdown';
import {MultiSelect} from 'primereact/multiselect';

export class DataTableFilterDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            globalFilter: null,
            selectedBrand: null,
            selectedColors: null
        };

        this.brands = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        this.colors = [
            {label: 'White', value: 'White'},
            {label: 'Green', value: 'Green'},
            {label: 'Silver', value: 'Silver'},
            {label: 'Black', value: 'Black'},
            {label: 'Red', value: 'Red'},
            {label: 'Maroon', value: 'Maroon'},
            {label: 'Brown', value: 'Brown'},
            {label: 'Orange', value: 'Orange'},
            {label: 'Blue', value: 'Blue'}
        ];

        this.carservice = new CarService();
        this.onBrandChange = this.onBrandChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    onBrandChange(event) {
        this.dt.filter(event.value, 'brand', 'equals');
        this.setState({selectedBrand: event.value});
    }

    onColorChange(event) {
        this.dt.filter(event.value, 'color', 'in');
        this.setState({selectedColors: event.value});
    }

    render() {
        const header = (
            <div style={{'textAlign':'left'}}>
                <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
            </div>
        );

        const brandFilter = <Dropdown style={{width: '100%'}} placeholder="Select a Brand" value={this.state.selectedBrand} options={this.state.brands} onChange={this.onBrandChange} showClear />;
        const colorFilter = <MultiSelect style={{width:'100%'}} placeholder="Select Colors" value={this.state.selectedColors} options={this.state.colors} onChange={this.onColorChange} />;

        return (
            <div>
                <DataTable ref={(el) => this.dt = el} value={this.state.cars} paginator={true} rows={10} header={header}
                    globalFilter={this.state.globalFilter} emptyMessage="No records found">
                    <Column field="vin" header="Vin" filter={true} filterPlaceholder="Vin starts with"/>
                    <Column field="year" header="Year" filter={true} filterPlaceholder="Year contains" filterMatchMode="contains" />
                    <Column field="brand" header="Brand" filter={true} filterElement={brandFilter} />
                    <Column field="color" header="Color" filter={true} filterElement={colorFilter} />
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
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {CarService} from '../service/CarService';
import {Dropdown} from 'primereact/dropdown';
import {MultiSelect} from 'primereact/multiselect';

const DataTableFilterDemo = () => {
    const [cars, setCars] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedColors, setSelectedColors] = useState(null);

    const brands = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    const colors = [
        {label: 'White', value: 'White'},
        {label: 'Green', value: 'Green'},
        {label: 'Silver', value: 'Silver'},
        {label: 'Black', value: 'Black'},
        {label: 'Red', value: 'Red'},
        {label: 'Maroon', value: 'Maroon'},
        {label: 'Brown', value: 'Brown'},
        {label: 'Orange', value: 'Orange'},
        {label: 'Blue', value: 'Blue'}
    ];

    const carservice = new CarService();
    let dt = useRef(null);

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onBrandChange = (event) => {
        dt.current.filter(event.value, 'brand', 'equals');
        setSelectedBrand(event.value);
    };

    const onColorChange = (event) => {
        dt.current.filter(event.value, 'color', 'in');
        setSelectedColors(event.value);
    };

    const header = (
        <div style={{'textAlign':'left'}}>
            <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
            <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" size="50"/>
        </div>
    );

    const brandFilter = <Dropdown style={{width: '100%'}} placeholder="Select a Brand" value={selectedBrand} options={brands} onChange={onBrandChange} showClear />;
    const colorFilter = <MultiSelect style={{width:'100%'}} placeholder="Select Colors" value={selectedColors} options={colors} onChange={onColorChange} />;

    return (
        <div>
            <DataTable ref={dt} value={cars} paginator={true} rows={10} header={header}
                globalFilter={globalFilter} emptyMessage="No records found">
                <Column field="vin" header="Vin" filter={true} filterPlaceholder="Vin starts with"/>
                <Column field="year" header="Year" filter={true} filterPlaceholder="Year contains" filterMatchMode="contains" />
                <Column field="brand" header="Brand" filter={true} filterElement={brandFilter} />
                <Column field="color" header="Color" filter={true} filterElement={colorFilter} />
            </DataTable>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {CarService} from '../service/CarService';
import {Dropdown} from 'primereact/dropdown';
import {MultiSelect} from 'primereact/multiselect';

const DataTableFilterDemo = () => {
    const [cars, setCars] = useState([]);
    const [globalFilter, setGlobalFilter] = useState<any>(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedColors, setSelectedColors] = useState(null);

    const brands = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    const colors = [
        {label: 'White', value: 'White'},
        {label: 'Green', value: 'Green'},
        {label: 'Silver', value: 'Silver'},
        {label: 'Black', value: 'Black'},
        {label: 'Red', value: 'Red'},
        {label: 'Maroon', value: 'Maroon'},
        {label: 'Brown', value: 'Brown'},
        {label: 'Orange', value: 'Orange'},
        {label: 'Blue', value: 'Blue'}
    ];

    const carservice = new CarService();
    let dt = useRef<any>(null);

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onBrandChange = (event: any) => {
        dt.current.filter(event.value, 'brand', 'equals');
        setSelectedBrand(event.value);
    };

    const onColorChange = (event: any) => {
        dt.current.filter(event.value, 'color', 'in');
        setSelectedColors(event.value);
    };

    const header = (
        <div style={{'textAlign':'left'}}>
            <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
            <InputText type="search" onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)} placeholder="Global Search" size="50"/>
        </div>
    );

    const brandFilter = <Dropdown style={{width: '100%'}} placeholder="Select a Brand" value={selectedBrand} options={brands} onChange={onBrandChange} showClear />;
    const colorFilter = <MultiSelect style={{width:'100%'}} placeholder="Select Colors" value={selectedColors} options={colors} onChange={onColorChange} />;

    return (
        <div>
            <DataTable ref={dt} value={cars} paginator={true} rows={10} header={header}
                globalFilter={globalFilter} emptyMessage="No records found">
                <Column field="vin" header="Vin" filter={true} filterPlaceholder="Vin starts with"/>
                <Column field="year" header="Year" filter={true} filterPlaceholder="Year contains" filterMatchMode="contains" />
                <Column field="brand" header="Brand" filter={true} filterElement={brandFilter} />
                <Column field="color" header="Color" filter={true} filterElement={colorFilter} />
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

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="DataTableFilterDemo" sources={[key, value]} service="CarService" data="cars-large" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
