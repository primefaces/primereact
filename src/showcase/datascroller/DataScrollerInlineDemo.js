import React, { Component } from 'react';
import { DataScroller } from '../../components/datascroller/DataScroller';
import { CarService } from '../service/CarService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { DataScrollerSubmenu } from '../../showcase/datascroller/DataScrollerSubmenu';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class DataScrollerInlineDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({ cars: data }));
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div className="car-details">
                <div>
                    <img src={`showcase/demo/images/car/${car.brand}.png`} alt={car.brand} />
                    <div className="p-grid">
                        <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                        <div className="p-col-12">Year: <b>{car.year}</b></div>
                        <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                        <div className="p-col-12">Color: <b>{car.color}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="dataview-demo">
                <DataScrollerSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller - Inline</h1>
                        <p>DataScroller can listen scroll event of itself rather than document in inline mode.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("dataScroller")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate} rows={10} inline={true} scrollHeight="500px" header="Scroll Down to Load More" />
                </div>

                <DataScrollerInlineDoc></DataScrollerInlineDoc>
            </div>
        );
    }
}

export class DataScrollerInlineDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, {Component} from 'react';
import {DataScroller} from 'primereact/datascroller';
import {CarService} from '../service/CarService';

export class DataScrollerInlineDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div className="car-details">
                <div>
                    <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand}/>
                    <div className="p-grid">
                        <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                        <div className="p-col-12">Year: <b>{car.year}</b></div>
                        <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                        <div className="p-col-12">Color: <b>{car.color}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="dataview-demo">
                <DataScroller value={this.state.cars} itemTemplate={this.carTemplate} rows={10} inline={true} scrollHeight="500px" header="Scroll Down to Load More" />
            </div>
        );
    }
}

                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataScroller} from 'primereact/datascroller';
import {CarService} from '../service/CarService';

const DataScrollerInlineDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carTemplate = (car) => {
        if (!car) {
            return;
        }

        return (
            <div className="car-details">
                <div>
                    <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand}/>
                    <div className="p-grid">
                        <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                        <div className="p-col-12">Year: <b>{car.year}</b></div>
                        <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                        <div className="p-col-12">Color: <b>{car.color}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dataview-demo">
            <DataScroller value={cars} itemTemplate={carTemplate} rows={10} inline={true} scrollHeight="500px" header="Scroll Down to Load More" />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataScroller} from 'primereact/datascroller';
import {CarService} from '../service/CarService';

const DataScrollerInlineDemo = () => {
    const [cars, setCars] = useState([]);
    const carservice = new CarService();

    useEffect(() => {
        carservice.getCarsLarge().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const carTemplate = (car: any) => {
        if (!car) {
            return;
        }

        return (
            <div className="car-details">
                <div>
                    <img src={\`showcase/demo/images/car/\${car.brand}.png\`} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={car.brand}/>
                    <div className="p-grid">
                        <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                        <div className="p-col-12">Year: <b>{car.year}</b></div>
                        <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                        <div className="p-col-12">Color: <b>{car.color}</b></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dataview-demo">
            <DataScroller value={cars} itemTemplate={carTemplate} rows={10} inline={true} scrollHeight="500px" header="Scroll Down to Load More" />
        </div>
    );
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.dataview-demo .car-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    border-bottom: 1px solid #d9dad9;
}
.dataview-demo .car-details > div {
    display: flex;
    align-items: center;
}
.dataview-demo .car-details > div img {
    margin-right: 14px;
}
.dataview-demo .car-detail {
    padding: 0 1em 1em 1em;
    border-bottom: 1px solid #d9dad9;
    margin: 1em;
}
.dataview-demo .p-panel-content {
    padding: 1em;
}
@media screen and (max-width: 1024px) {
    .dataview-demo .p-dataview .car-details img {
        width: 75px;
    }
}
@media screen and (max-width: 640px) {
    .dataview-demo .car-details, .dataview-demo .search-icon {
        text-align: center;
        margin-top: 0;
    }

    .dataview-demo .filter-container {
        text-align: left;
    }

    .datascroll-demo .car-item {
        text-align: center;
    }
}
            `
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
                                    <LiveEditor name="DataScrollerInlineDemo" sources={[key, value]} service="CarService" data="cars-large" extFiles={this.extFiles} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
