import React, { Component } from 'react';
import { DataScroller } from '../../components/datascroller/DataScroller';
import { Dialog } from '../../components/dialog/Dialog';
import { CarService } from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {DataScrollerSubmenu} from '../../showcase/datascroller/DataScrollerSubmenu';

export class DataScrollerInlineDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        if(!car) {
            return;
        }

        var src = "showcase/resources/demo/images/car/" + car.brand + ".png";

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
                <DataScrollerSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller - Inline</h1>
                        <p>DataScroller can listen scroll event of itself rather than document in inline mode.</p>
                    </div>
                </div>

                <div className="content-section implementation">

                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={10} inline={true} scrollHeight="500px" header="Scroll Down to Load More"/>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({visible: false})}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{fontSize: '16px', textAlign: 'center', padding:'20px'}}>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-12" style={{textAlign: 'center'}}><img src={`showcase/resources/demo/images/car/${this.state.selectedCar.brand}.png`} alt={this.state.selectedCar.brand}/></div>
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
                <DataScrollerInlineDoc></DataScrollerInlineDoc>
            </div>
        );
    }
}

export class DataScrollerInlineDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="javascript">
{`
export class DataScrollerInlineDemo extends Component {

    constructor() {
        super();
        this.state = { cars: [], selectedCar: null, visible: false };
        this.carservice = new CarService();
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        if(!car) {
            return;
        }

        var src = "showcase/resources/demo/images/car/" + car.brand + ".png";

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
                <DataScrollerSubmenu />

                <div className="content-section">
                    <div className="feature-intro">
                        <h1>DataScroller - Inline</h1>
                        <p>DataScroller can listen scroll event of itself rather than document in inline mode.</p>
                    </div>
                </div>

                <div className="content-section implementation">

                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate.bind(this)} rows={10} inline={true} scrollHeight="500px" header="Scroll Down to Load More"/>

                    <Dialog header="Car Details" visible={this.state.visible} width="225px" modal={true} onHide={() => this.setState({visible: false})}>
                        {
                            this.state.selectedCar && (<div className="ui-grid ui-grid-responsive ui-fluid" style={{fontSize: '16px', textAlign: 'center', padding:'20px'}}>
                                    <div className="ui-grid-row">
                                        <div className="ui-grid-col-12" style={{textAlign: 'center'}}><img src={\`showcase/resources/demo/images/car/\${this.state.selectedCar.brand}.png\`} alt={this.state.selectedCar.brand}/></div>
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

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}