import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {Button} from "../../components/button/Button";
import {Dialog} from "../../components/dialog/Dialog";
import {InputText} from "../../components/inputtext/InputText";

export class DataTableCrudDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.onCarSelect = this.onCarSelect.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    save() {
        let cars = [...this.state.cars];
        if(this.newCar)
            cars.push(this.state.car);
        else
            cars[this.findSelectedCarIndex()] = this.state.car;

        this.setState({cars:cars, selectedCar:null, car: null, displayDialog:false});
    }

    delete() {
        let index = this.findSelectedCarIndex();
        this.setState({
            cars: this.state.cars.filter((val,i) => i !== index),
            selectedCar: null,
            car: null,
            displayDialog: false});
    }

    findSelectedCarIndex() {
        return this.state.cars.indexOf(this.state.selectedCar);
    }

    updateProperty(property, value) {
        let car = this.state.car;
        car[property] = value;
        this.setState({car: car});
    }

    onCarSelect(e){
        this.newCar = false;
        this.setState({
            displayDialog:true,
            car: Object.assign({}, e.data)
        });
    }

    addNew() {
        this.newCar = true;
        this.setState({
            car: {vin:'', year: '', brand: '', color: ''},
            displayDialog: true
        });
    }

    render() {
        let header = <div className="p-clearfix" style={{lineHeight:'1.87em'}}>CRUD for Cars </div>;

        let footer = <div className="p-clearfix" style={{width:'100%'}}>
            <Button style={{float:'left'}} label="Add" icon="pi pi-plus" onClick={this.addNew}/>
        </div>;

        let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
                <Button label="Delete" icon="pi pi-times" onClick={this.delete}/>
                <Button label="Save" icon="pi pi-check" onClick={this.save}/>
            </div>;

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>This samples demonstrates a CRUD implementation using various PrimeReact components.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={15}  header={header} footer={footer}
                               selectionMode="single" selection={this.state.selectedCar} onSelectionChange={e => this.setState({selectedCar: e.value})}
                               onRowSelect={this.onCarSelect}>
                        <Column field="vin" header="Vin" sortable={true} />
                        <Column field="year" header="Year" sortable={true} />
                        <Column field="brand" header="Brand" sortable={true} />
                        <Column field="color" header="Color" sortable={true} />
                    </DataTable>

                    <Dialog visible={this.state.displayDialog} style={{width: '300px'}} header="Car Details" modal={true} footer={dialogFooter} onHide={() => this.setState({displayDialog: false})}
                        blockScroll={false}>
                        {
                            this.state.car &&

                            <div className="p-grid p-fluid">
                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="vin">Vin</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="vin" onChange={(e) => {this.updateProperty('vin', e.target.value)}} value={this.state.car.vin}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="year">Year</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="year" onChange={(e) => {this.updateProperty('year', e.target.value)}} value={this.state.car.year}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="brand">Brand</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="brand" onChange={(e) => {this.updateProperty('brand', e.target.value)}} value={this.state.car.brand}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="color">Color</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="color" onChange={(e) => {this.updateProperty('color', e.target.value)}} value={this.state.car.color}/>
                                </div>
                            </div>
                        }
                    </Dialog>
                </div>

                <DataTableCrudDoc/>

            </div>
        );
    }
}

export class DataTableCrudDoc extends Component {

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
export class DataTableCrudDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.carservice = new CarService();
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.onCarSelect = this.onCarSelect.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    save() {
        let cars = [...this.state.cars];
        if(this.newCar)
            cars.push(this.state.car);
        else
            cars[this.findSelectedCarIndex()] = this.state.car;

        this.setState({cars:cars, selectedCar:null, car: null, displayDialog:false});
    }

    delete() {
        let index = this.findSelectedCarIndex();
        this.setState({
            cars: this.state.cars.filter((val,i) => i !== index),
            selectedCar: null,
            car: null,
            displayDialog: false});
    }

    findSelectedCarIndex() {
        return this.state.cars.indexOf(this.state.selectedCar);
    }

    updateProperty(property, value) {
        let car = this.state.car;
        car[property] = value;
        this.setState({car: car});
    }

    onCarSelect(e){
        this.newCar = false;
        this.setState({
            displayDialog:true,
            car: Object.assign({}, e.data)
        });
    }

    addNew() {
        this.newCar = true;
        this.setState({
            car: {vin:'', year: '', brand: '', color: ''},
            displayDialog: true
        });
    }

    render() {
        let header = <div className="p-clearfix" style={{lineHeight:'1.87em'}}>CRUD for Cars </div>;

        let footer = <div className="p-clearfix" style={{width:'100%'}}>
            <Button style={{float:'left'}} label="Add" icon="pi pi-plus" onClick={this.addNew}/>
        </div>;

        let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
                <Button label="Delete" icon="pi pi-times" onClick={this.delete}/>
                <Button label="Save" icon="pi pi-check" onClick={this.save}/>
            </div>;

        return (
            <div>
                <DataTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>This samples demonstrates a CRUD implementation using various PrimeReact components.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataTable value={this.state.cars} paginator={true} rows={15}  header={header} footer={footer}
                               selectionMode="single" selection={this.state.selectedCar} onSelectionChange={e => this.setState({selectedCar: e.value})}
                               onRowSelect={this.onCarSelect}>
                        <Column field="vin" header="Vin" sortable={true} />
                        <Column field="year" header="Year" sortable={true} />
                        <Column field="brand" header="Brand" sortable={true} />
                        <Column field="color" header="Color" sortable={true} />
                    </DataTable>

                    <Dialog visible={this.state.displayDialog} width="300px" header="Car Details" modal={true} footer={dialogFooter} onHide={() => this.setState({displayDialog: false})}>
                        {
                            this.state.car &&

                            <div className="p-grid p-fluid">
                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="vin">Vin</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="vin" onChange={(e) => {this.updateProperty('vin', e.target.value)}} value={this.state.car.vin}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="year">Year</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="year" onChange={(e) => {this.updateProperty('year', e.target.value)}} value={this.state.car.year}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="brand">Brand</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="brand" onChange={(e) => {this.updateProperty('brand', e.target.value)}} value={this.state.car.brand}/>
                                </div>

                                <div className="p-col-4" style={{padding:'.75em'}}><label htmlFor="color">Color</label></div>
                                <div className="p-col-8" style={{padding:'.5em'}}>
                                    <InputText id="color" onChange={(e) => {this.updateProperty('color', e.target.value)}} value={this.state.car.color}/>
                                </div>
                            </div>
                        }
                    </Dialog>
                </div>

                <DataTableCrudDoc/>

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
