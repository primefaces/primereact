import React, { Component } from 'react';
import { DataGrid, Header } from '../../components/datagrid/DataGrid';
import { Dialog } from '../../components/dialog/Dialog';
import { Panel } from '../../components/panel/Panel';
import { CarService } from '../service/CarService';

export class DataGridDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsLarge(this) });
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div style={{ padding: '3px' }} className="ui-g-12 ui-md-3">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={`showcase/resources/demo/images/car/${car.brand}.gif`} alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    <i className="fa fa-search" onClick={(e) => this.setState({ selectedCar: car, visible: true })} style={{ cursor: 'pointer' }}></i>
                </Panel>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataGrid</h1>
                        <p>DataGrid displays data in grid format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>

                    <DataGrid value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} paginator={true} rows={20}>
                        <Header>
                            List of Cars
                        </Header>
                    </DataGrid>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', textAlign: 'center', padding: '20px' }}>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-12" style={{ textAlign: 'center' }}><img src={`showcase/resources/demo/images/car/${this.state.selectedCar.brand}-big.gif`} alt={this.state.selectedCar.brand} /></div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Vin: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.vin}</div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Year: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.year}</div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Brand: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.brand}</div>
                                </div>
                                <div className="ui-grid-row">
                                    <div className="ui-grid-col-4">Color: </div>
                                    <div className="ui-grid-col-8">{this.state.selectedCar.color}</div>
                                </div>
                            </div>)
                        }
                    </Dialog>
                </div>
            </div>
        );
    }
}