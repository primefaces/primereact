import React, { Component } from 'react';
import { PickList } from '../../components/picklist/PickList';
import { CarService } from '../service/CarService';

export class PickListDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], targetCars: [] };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsSmall(this) });
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div className="ui-helper-clearfix">
                <img src={`showcase/resources/demo/images/car/${car.brand}.gif`} alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px' }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>PickList</h1>
                        <p>PickList is used to reorder items between differents lists.</p>
                    </div>
                </div>

                <div className="content-section implementation">

                    <PickList source={this.state.cars} target={this.state.targetCars} itemTemplate={this.carTemplate.bind(this)} sourceHeader="Available" targetHeader="Selected" responsive={true} sourceStyle={{ height: '300px' }} targetStyle={{ height: '300px' }}></PickList>

                </div>
            </div>
        );
    }
}