import React, { Component } from 'react';
import {DataTable} from '../../components/datatable/DataTable';
import {Column} from '../../components/column/Column';
import {CarService} from '../service/CarService';
import {DataTableSubmenu} from '../../showcase/datatable/DataTableSubmenu';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';
import {Button} from "../../components/button/Button";
import {Dialog, Footer} from "../../components/dialog/Dialog";
import {InputText} from "../../components/inputtext/InputText";

export class DataTableCrudDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            displayDialog:false,
            selectedCar:{brand:'',year:'',vin:'',color:''},
            newCar:false
        };
        this.carservice = new CarService();
        this.car=null;
        this.save=this.save.bind(this);
        this.delete=this.delete.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    save() {
        let cars = [...this.state.cars];
        if(this.state.newCar)
            cars.push(this.state.selectedCar);
        else{
            cars[this.findSelectedCarIndex()] = this.state.selectedCar;
        }
        this.setState({cars:cars,selectedCar:{brand:'',year:'',vin:'',color:''},displayDialog:false,newCar:false});
        this.car=null;
    }

    delete() {
        let index = this.findSelectedCarIndex();
        this.setState({cars:this.state.cars.filter((val,i) => i!==index),selectedCar:{brand:'',year:'',vin:'',color:''},displayDialog:false,newCar:false})
        this.car=null;
    }

    findSelectedCarIndex() {
        return this.state.cars.indexOf(this.car);
    }
    render() {
        var header = <div className="ui-helper-clearfix" style={{lineHeight:'1.87em'}}>CRUD for Cars </div>;
        var footer = <div className="ui-helper-clearfix" style={{width:'100%'}}>
            <Button style={{float:'left'}} icon="fa-plus" label="Add" onClick={()=>this.setState({selectedCar:{brand:'',year:'',vin:'',color:''},newCar:true,displayDialog:true})}/>
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
                               selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e)=>{this.setState({displayDialog:true,selectedCar:e.data});this.car=e.data}}>
                        <Column field="vin" header="Vin" sortable={true} />
                        <Column field="year" header="Year" sortable={true} />
                        <Column field="brand" header="Brand" sortable={true} />
                        <Column field="color" header="Color" sortable={true} />
                    </DataTable>
                </div>
                <Dialog visible={this.state.displayDialog} header="Car Details" modal={true} >
                    <div className="ui-grid ui-grid-responsive ui-fluid">
                        <div className="ui-grid-row">
                            <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="vin">Vin</label></div>
                            <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                <InputText id="vin" onChange={e=>this.setState({selectedCar:{vin:e.target.value,year:this.state.selectedCar.year ,brand:this.state.selectedCar.brand ,color:this.state.selectedCar.color }})}
                                           value={this.state.selectedCar.vin}/>
                            </div>
                        </div>
                        <div className="ui-grid-row">
                            <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="year">Year</label></div>
                            <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                <InputText id="year" onChange={e=>this.setState({selectedCar:{year:e.target.value,vin:this.state.selectedCar.vin ,brand:this.state.selectedCar.brand ,color:this.state.selectedCar.color }})}
                                           value={this.state.selectedCar.year}/>
                            </div>
                        </div>
                        <div className="ui-grid-row">
                            <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="brand">Brand</label></div>
                            <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                <InputText id="brand" onChange={e=>this.setState({selectedCar:{brand:e.target.value,year:this.state.selectedCar.year ,vin:this.state.selectedCar.vin ,color:this.state.selectedCar.color }})}
                                           value={this.state.selectedCar.brand}/>
                            </div>
                        </div>
                        <div className="ui-grid-row">
                            <div className="ui-grid-col-4" style={{padding:'4px 10px'}}><label htmlFor="color" >Color</label></div>
                            <div className="ui-grid-col-8" style={{padding:'4px 10px'}}>
                                <InputText id="color" onChange={e=>this.setState({selectedCar:{color:e.target.value,year:this.state.selectedCar.year ,brand:this.state.selectedCar.brand ,vin:this.state.selectedCar.vin }})}
                                           value={this.state.selectedCar.color}/>
                            </div>
                        </div>
                    </div>
                    <Footer>
                        <div className="ui-dialog-buttonpane ui-helper-clearfix">
                            <Button icon="fa-close" label="Delete" onClick={this.delete}/><Button label="Save" icon="fa-check" onClick={this.save}/>
                        </div></Footer>
                </Dialog>

                <DataTableCrudDoc/>

            </div>
        );
    }
}

export class DataTableCrudDoc extends Component {

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
                            {`
export class DataTableCrudDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            displayDialog:false,
            selectedCar:{brand:'',year:'',vin:'',color:''},
            newCar:false
        };
        this.carservice = new CarService();
        this.car=null;
        this.save=this.save.bind(this);
        this.delete=this.delete.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    save() {
        let cars = [...this.state.cars];
        if(this.state.newCar)
            cars.push(this.state.selectedCar);
        else{
            cars[this.findSelectedCarIndex()] = this.state.selectedCar;
        }
        this.setState({cars:cars,selectedCar:{brand:'',year:'',vin:'',color:''},displayDialog:false,newCar:false});
        this.car=null;
    }

    delete() {
        let index = this.findSelectedCarIndex();
        this.setState({cars:this.state.cars.filter((val,i) => i!=index),selectedCar:{brand:'',year:'',vin:'',color:''},displayDialog:false,newCar:false})
        this.car=null;
    }
    findSelectedCarIndex() {
        return this.state.cars.indexOf(this.car);
    }
    render() {
        var header = <div className="ui-helper-clearfix" style={{lineHeight:'1.87em'}}>CRUD for Cars </div>;
        var footer = <div className="ui-helper-clearfix" style={{width:'100%'}}>
            <Button style={{float:'left'}} icon="fa-plus" label="Add" onClick={()=>this.setState({selectedCar:{brand:'',year:'',vin:'',color:''},newCar:true,displayDialog:true})}/>
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
                               selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e)=>{this.setState({displayDialog:true,selectedCar:e.data});this.car=e.data}}>
                        <Column field="vin" header="Vin" sortable={true} />
                        <Column field="year" header="Year" sortable={true} />
                        <Column field="brand" header="Brand" sortable={true} />
                        <Column field="color" header="Color" sortable={true} />
                    </DataTable>
                </div>
                <Dialog visible={this.state.displayDialog} header="Car Details" modal={true}>
                    <div className="ui-grid ui-grid-responsive ui-fluid">
                        <div className="ui-grid-row">
                            <div className="ui-grid-col-4"><label htmlFor="vin">Vin</label></div>
                            <div className="ui-grid-col-8">
                                <InputText id="vin" onChange={e=>this.setState({selectedCar:{vin:e.target.value,year:this.state.selectedCar.year ,brand:this.state.selectedCar.brand ,color:this.state.selectedCar.color }})} value={this.state.selectedCar.vin}/>
                            </div>
                        </div>
                        <div className="ui-grid-row">
                            <div className="ui-grid-col-4"><label htmlFor="year">Year</label></div>
                            <div className="ui-grid-col-8">
                                <InputText id="year" onChange={e=>this.setState({selectedCar:{year:e.target.value,vin:this.state.selectedCar.vin ,brand:this.state.selectedCar.brand ,color:this.state.selectedCar.color }})} value={this.state.selectedCar.year}/>
                            </div>
                        </div>
                        <div className="ui-grid-row">
                            <div className="ui-grid-col-4"><label htmlFor="brand">Brand</label></div>
                            <div className="ui-grid-col-8">
                                <InputText id="brand" onChange={e=>this.setState({selectedCar:{brand:e.target.value,year:this.state.selectedCar.year ,vin:this.state.selectedCar.vin ,color:this.state.selectedCar.color }})} value={this.state.selectedCar.brand}/>
                            </div>
                        </div>
                        <div className="ui-grid-row">
                            <div className="ui-grid-col-4"><label htmlFor="color" >Color</label></div>
                            <div className="ui-grid-col-8">
                                <InputText id="color" onChange={e=>this.setState({selectedCar:{color:e.target.value,year:this.state.selectedCar.year ,brand:this.state.selectedCar.brand ,vin:this.state.selectedCar.vin }})} value={this.state.selectedCar.color}/>
                            </div>
                        </div>
                    </div>
                    <Footer>
                        <div className="ui-dialog-buttonpane ui-helper-clearfix">
                            <Button icon="fa-close" label="Delete" onClick={this.delete}/><Button label="Save" icon="fa-check" onClick={this.save}/>
                        </div></Footer>
                </Dialog>

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