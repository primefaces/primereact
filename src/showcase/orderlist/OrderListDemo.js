import React, { Component } from 'react';
import { OrderList } from '../../components/orderlist/OrderList';
import { CarService } from '../service/CarService';

export class OrderListDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [] };
        this.carservice = new CarService();
    }

    onReorderCars(e) {
        this.setState({ cars: e.value });
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
                        <h1>OrderList</h1>
                        <p>OrderList is used to sort a collection. When the position of an item changes, the backend array is updated as well.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6">
                            <OrderList value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} responsive={true} header="Responsive Cars" listStyle={{ height: '250px' }} onReorder={this.onReorderCars.bind(this)}></OrderList>
                        </div>
                        <div className="ui-g-12 ui-md-6">
                            <ul>
                                {
                                    this.state.cars && this.state.cars.map((car, i) => {
                                        return (
                                            <li key={i + '_item'} style={{ listStyleType: 'none' }}>{car.brand} - {car.year} - {car.color}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}