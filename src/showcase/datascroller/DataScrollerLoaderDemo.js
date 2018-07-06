import React, {Component} from 'react';
import {DataScroller} from '../../components/datascroller/DataScroller';
import {Button} from '../../components/button/Button';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
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

        const src = "showcase/resources/demo/images/car/" + car.brand + ".png";

        return (
            <div className="ui-g car-item">
                <div className="ui-g-12 ui-md-3">
                    <img src={src} alt="Car" />
                </div>
                <div className="ui-g-12 ui-md-9">
                    <div className="ui-g">
                        <div className="ui-g-2 ui-sm-6">Vin: </div>
                        <div className="ui-g-10 ui-sm-6">{car.vin}</div>
            
                        <div className="ui-g-2 ui-sm-6">Year: </div>
                        <div className="ui-g-10 ui-sm-6">{car.year}</div>
            
                        <div className="ui-g-2 ui-sm-6">Brand: </div>
                        <div className="ui-g-10 ui-sm-6">{car.brand}</div>
            
                        <div className="ui-g-2 ui-sm-6">Color: </div>
                        <div className="ui-g-10 ui-sm-6">{car.color}</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const footer = <Button ref={(el) => this.loadButton = el} type="text" icon="pi pi-plus" label="Load" />;

        return (
            <div className="datascroll-demo">
                <DataScrollerSubmenu />

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

                <DataScrollerLoaderDoc />
            </div>
        );
    }
}

export class DataScrollerLoaderDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
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

        const src = "showcase/resources/demo/images/car/" + car.brand + ".png";

        return (
            <div className="ui-g car-item">
                <div className="ui-g-12 ui-md-3">
                    <img src={src} alt="Car" />
                </div>
                <div className="ui-g-12 ui-md-9">
                    <div className="ui-g">
                        <div className="ui-g-2 ui-sm-6">Vin: </div>
                        <div className="ui-g-10 ui-sm-6">{car.vin}</div>
            
                        <div className="ui-g-2 ui-sm-6">Year: </div>
                        <div className="ui-g-10 ui-sm-6">{car.year}</div>
            
                        <div className="ui-g-2 ui-sm-6">Brand: </div>
                        <div className="ui-g-10 ui-sm-6">{car.brand}</div>
            
                        <div className="ui-g-2 ui-sm-6">Color: </div>
                        <div className="ui-g-10 ui-sm-6">{car.color}</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const footer = <Button ref={(el) => this.loadButton = el} type="text" icon="pi pi-plus" label="Load" />;

        return (
            <div className="datascroll-demo">
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