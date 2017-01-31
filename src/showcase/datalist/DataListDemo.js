import React, { Component } from 'react';
import { DataList, Header } from '../../components/datalist/DataList';
import { Dialog } from '../../components/dialog/Dialog';
import { CarService } from '../service/CarService';

export class DataListDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsLarge(this) });
    }

    carTemplate(car) {
        if(!car) {
            return;
        }

        var src = "showcase/resources/demo/images/car/" + car.brand + "-big.gif";

        return (
            <div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', padding: '20px', borderBottom: '1px solid #D5D5D5' }}>
                <div className="ui-grid-row">
                    <div className="ui-grid-col-3" style={{ textAlign: 'center' }}><i className="fa fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })} style={{ cursor: 'pointer', float: 'left', marginTop: '40px' }}></i><img src={src} alt={car.brand} /></div>
                    <div className="ui-grid-col-9">
                        <div className="ui-grid ui-grid-responsive ui-fluid">
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Vin: </div>
                                <div className="ui-grid-col-10">{car.vin}</div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Year: </div>
                                <div className="ui-grid-col-10">{car.year}</div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Brand: </div>
                                <div className="ui-grid-col-10">{car.brand}</div>
                            </div>
                            <div className="ui-grid-row">
                                <div className="ui-grid-col-2">Color: </div>
                                <div className="ui-grid-col-10">{car.color}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataList</h1>
                        <p>DataList displays data in list layout.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>

                    <DataList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={5}>
                        <Header>
                            List of Cars
                        </Header>
                    </DataList>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{fontSize: '16px', textAlign: 'center', padding:'20px'}}>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-12" style={{textAlign: 'center'}}><img src={`showcase/resources/demo/images/car/${this.state.selectedCar.brand}-big.gif`} alt={this.state.selectedCar.brand}/></div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Vin: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.vin }</div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Year: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.year }</div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Brand: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.brand }</div>
                                    </div>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-4">Color: </div>
                                        <div className="ui-grid-col-8">{ this.state.selectedCar.color }</div>
                                    </div>
                            </div>)
                        }
                    </Dialog>
                </div>
            </div>
        );
    }
}