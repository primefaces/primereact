import React, { Component } from 'react';
import { DataScroller, Header } from '../../components/datascroller/DataScroller';
import { Growl } from '../../components/growl/Growl';
import { CarService } from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';
import {DataScrollerSubmenu} from '../../showcase/datascroller/DataScrollerSubmenu';

export class DataScrollerInfiniteDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], messages: [] };
        this.carservice = new CarService();
    }

    loadData(event) {
        //in real application, newArray should be loaded from a remote datasource
        if(this.state.cars && this.state.cars.length) {
            var _cars = [...this.state.cars], 
            newArray = _cars.slice(0);
            for(var i = 0; i < newArray.length; i++) {
                _cars.push(newArray[i]);
            }
            this.setState({ cars: _cars, messages: [{severity:'info', summary:'Data Loaded', detail:'Between ' + event.first + ' and ' + (event.first + event.rows)}]});
        }
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsSmall(this) });
    }

    carTemplate(car) {
        if(!car) {
            return;
        }

        var src = "showcase/resources/demo/images/car/" + car.brand + "-big.gif";

        return (
            <div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', padding: '20px', borderBottom: '1px solid #D5D5D5' }}>
                <div className="ui-grid-row">
                    <div className="ui-grid-col-3" style={{ textAlign: 'center' }}><img src={src} alt={car.brand} /></div>
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
                <DataScrollerSubmenu />

                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataScroller - Infinite</h1>
                        <p>DataScroller supports lazy loading so that each scroll event fetches new chunk of data from a remote datasource. This example generates the new records on-the-fly and scrolling is infinite.
                        Scroll to the bottom of this page to see the demo.</p>
                    </div>
                </div>

                <DataScrollerInfiniteDoc></DataScrollerInfiniteDoc>

                <div className="content-section implementation">
                    <Growl value={this.state.messages}></Growl>

                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={10} lazy={true} onLazyLoad={this.loadData.bind(this)}>
                        <Header>
                            Scroll Down to to Load More
                        </Header>
                    </DataScroller>
                </div>
            </div>
        );
    }
}

export class DataScrollerInfiniteDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
export class DataScrollerInfiniteDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], messages: [] };
        this.carservice = new CarService();
    }

    loadData(event) {
        //in real application, newArray should be loaded from a remote datasource
        if(this.state.cars && this.state.cars.length) {
            var _cars = [...this.state.cars], 
            newArray = _cars.slice(0);
            for(var i = 0; i < newArray.length; i++) {
                _cars.push(newArray[i]);
            }
            this.setState({ cars: _cars, messages: [{severity:'info', summary:'Data Loaded', detail:'Between ' + event.first + ' and ' + (event.first + event.rows)}]});
        }
    }

    componentDidMount() {
        this.setState({ cars: this.carservice.getCarsSmall(this) });
    }

    carTemplate(car) {
        if(!car) {
            return;
        }

        var src = "showcase/resources/demo/images/car/" + car.brand + "-big.gif";

        return (
            <div className="ui-grid ui-grid-responsive ui-fluid" style={{ fontSize: '16px', padding: '20px', borderBottom: '1px solid #D5D5D5' }}>
                <div className="ui-grid-row">
                    <div className="ui-grid-col-3" style={{ textAlign: 'center' }}><img src={src} alt={car.brand} /></div>
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
                <DataScrollerSubmenu />

                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataScroller - Infinite</h1>
                        <p>DataScroller supports lazy loading so that each scroll event fetches new chunk of data from a remote datasource. 
                            This example generates the new records on-the-fly and scrolling is infinite.
                            Scroll to the bottom of this page to see the demo.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl value={this.state.messages}></Growl>

                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={10} lazy={true} onLazyLoad={this.loadData.bind(this)}>
                        <Header>
                            Scroll Down to to Load More
                        </Header>
                    </DataScroller>
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
        );
    }
}