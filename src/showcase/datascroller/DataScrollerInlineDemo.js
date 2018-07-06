import React, {Component} from 'react';
import {DataScroller} from '../../components/datascroller/DataScroller';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import {DataScrollerSubmenu} from '../../showcase/datascroller/DataScrollerSubmenu';

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
        return (
            <div className="datascroll-demo">
                <DataScrollerSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller - Inline</h1>
                        <p>DataScroller can listen scroll event of itself rather than document in inline mode.</p>
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
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
                    <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datascroller" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                        <span>View on GitHub</span>
                    </a>

<CodeHighlight className="language-javascript">
{`
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
        return (
            <div className="datascroll-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller - Inline</h1>
                        <p>DataScroller can listen scroll event of itself rather than document in inline mode.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <DataScroller value={this.state.cars} itemTemplate={this.carTemplate} rows={10} inline={true} scrollHeight="500px" header="Scroll Down to Load More" />
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