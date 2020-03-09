import React, {Component} from 'react';
import {DataScroller} from '../../components/datascroller/DataScroller';
import {Button} from '../../components/button/Button';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {DataScrollerSubmenu} from '../../showcase/datascroller/DataScrollerSubmenu';

export class DataScrollerLoaderDemo extends Component {

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
                    <img src={`showcase/resources/demo/images/car/${car.brand}.png`} alt={car.brand}/>
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
        const footer = <Button ref={(el) => this.loadButton = el} type="text" icon="pi pi-plus" label="Load" />;

        return (
            <div className="dataview-demo">
                <DataScrollerSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller - Loader</h1>
                        <p>Instead of scrolling, a custom element can be used to load data.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataScroller")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate} rows={5}
                        loader={this.loadButton} footer={footer} header="Click Load Button at Footer to Load More"/>
                </div>

                <DataScrollerLoaderDoc />
            </div>
        );
    }
}

export class DataScrollerLoaderDoc extends Component {

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {DataScroller} from 'primereact/datascroller';
import {Button} from 'primereact/button';
import {CarService} from '../service/CarService';

export class DataScrollerLoaderDemo extends Component {

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
                    <img src={'showcase/resources/demo/images/car/\${car.brand}.png'} alt={car.brand}/>
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
        const footer = <Button ref={(el) => this.loadButton = el} type="text" icon="pi pi-plus" label="Load" />;

        return (
            <div className="dataview-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller - Loader</h1>
                        <p>Instead of scrolling, a custom element can be used to load data.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate} rows={5}
                        loader={this.loadButton} footer={footer} header="Click Load Button at Footer to Load More"/>
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
