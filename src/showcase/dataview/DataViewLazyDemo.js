import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from '../../components/dataview/DataView';
import { Panel } from '../../components/panel/Panel';
import { CarService } from '../service/CarService';
import { DataViewSubmenu } from '../../showcase/dataview/DataViewSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class DataViewLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            layout: 'list',
            loading: true,
            first: 0,
            rows: 6,
            totalRecords: 0
        };
        this.carservice = new CarService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.carservice.getCarsLarge().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    cars: this.datasource.slice(0, this.state.rows),
                    loading: false
                });
            });
        }, 1000);
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + this.state.rows;

            this.setState({
                first: startIndex,
                cars: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 1000);
    }

    renderListItem(car) {
        return (
            <div className="p-col-12">
                <div className="car-details">
                    <div>
                        <img src={`showcase/resources/demo/images/car/${car.brand}.png`} alt={car.brand} />
                        <div className="p-grid">
                            <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                            <div className="p-col-12">Year: <b>{car.year}</b></div>
                            <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                            <div className="p-col-12">Color: <b>{car.color}</b></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderGridItem(car) {
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-4">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={`showcase/resources/demo/images/car/${car.brand}.png`} alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                </Panel>
            </div>
        );
    }

    itemTemplate(car, layout) {
        if (!car) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(car);
        else if (layout === 'grid')
            return this.renderGridItem(car);
    }

    renderHeader() {
        let onOptionChange = (e) => {
            this.setState({ loading: true }, () => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        layout: e.value
                    });
                }, 1000);
            });
        };

        return (
            <div style={{textAlign: 'left'}}>
                <DataViewLayoutOptions layout={this.state.layout} onChange={onOptionChange} />
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div>
                <DataViewSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataView - Lazy</h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates
                        lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("dataView")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation dataview-demo">
                    <DataView value={this.state.cars} layout={this.state.layout} header={header} itemTemplate={this.itemTemplate}
                        lazy paginator paginatorPosition={'both'} rows={this.state.rows} totalRecords={this.state.totalRecords}
                        first={this.state.first} onPage={this.onPage} loading={this.state.loading} />
                </div>

                <DataViewLazyDemoDoc></DataViewLazyDemoDoc>
            </div>
        );
    }
}

export class DataViewLazyDemoDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
{`

import React, { Component } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Panel } from 'primereact/panel';
import { CarService } from '../service/CarService';

export class DataViewLazyDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: [],
            layout: 'list',
            loading: true,
            first: 0,
            rows: 6,
            totalRecords: 0
        };
        this.carservice = new CarService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onPage = this.onPage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.carservice.getCarsLarge().then(data => {
                this.datasource = data;
                this.setState({
                    totalRecords: data.length,
                    cars: this.datasource.slice(0, this.state.rows),
                    loading: false
                });
            });
        }, 1000);
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = event.first + this.state.rows;

            this.setState({
                first: startIndex,
                cars: this.datasource.slice(startIndex, endIndex),
                loading: false
            });
        }, 1000);
    }

    renderListItem(car) {
        return (
            <div className="p-col-12">
                <div className="car-details">
                    <div>
                        <img src={\`showcase/resources/demo/images/car/\${car.brand}.png\`} alt={car.brand} />
                        <div className="p-grid">
                            <div className="p-col-12">Vin: <b>{car.vin}</b></div>
                            <div className="p-col-12">Year: <b>{car.year}</b></div>
                            <div className="p-col-12">Brand: <b>{car.brand}</b></div>
                            <div className="p-col-12">Color: <b>{car.color}</b></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderGridItem(car) {
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-4">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={\`showcase/resources/demo/images/car/\${car.brand}.png\`} alt={car.brand} />
                    <div className="car-detail">{car.year} - {car.color}</div>
                </Panel>
            </div>
        );
    }

    itemTemplate(car, layout) {
        if (!car) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(car);
        else if (layout === 'grid')
            return this.renderGridItem(car);
    }

    renderHeader() {
        let onOptionChange = (e) => {
            this.setState({ loading: true }, () => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        layout: e.value
                    });
                }, 1000);
            });
        };

        return (
            <div style={{textAlign: 'left'}}>
                <DataViewLayoutOptions layout={this.state.layout} onChange={onOptionChange} />
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataView - Lazy</h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging, sorting and filtering happens. Sample belows imitates
                        lazy paging by using an in memory list. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator displays the UI assuming
                            there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>
                    </div>
                </div>

                <div className="content-section implementation dataview-demo">
                    <DataView value={this.state.cars} layout={this.state.layout} header={header} itemTemplate={this.itemTemplate}
                        lazy paginator paginatorPosition={'both'} rows={this.state.rows} totalRecords={this.state.totalRecords}
                        first={this.state.first} onPage={this.onPage} loading={this.state.loading} />
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
        )
    }
}
