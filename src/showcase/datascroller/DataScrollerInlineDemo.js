import React, {Component} from 'react';
import {DataScroller} from '../../components/datascroller/DataScroller';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {DataScrollerSubmenu} from '../../showcase/datascroller/DataScrollerSubmenu';
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
        return (
            <div className="dataview-demo">
                <DataScrollerSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataScroller - Inline</h1>
                        <p>DataScroller can listen scroll event of itself rather than document in inline mode.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("dataScroller")} className="layout-changelog-button">{context.changelogText}</button> }
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
            'app': {
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
                    <img src={\`showcase/resources/demo/images/car/\${car.brand}.png\`} alt={car.brand}/>
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
                    <img src={\`showcase/resources/demo/images/car/\${car.brand}.png\`} alt={car.brand}/>
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
                    <img src={\`showcase/resources/demo/images/car/\${car.brand}.png\`} alt={car.brand}/>
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
    }

    shouldComponentUpdate() {
        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/datascroller" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="DataScrollerInlineDemo" sources={this.sources} service="CarService" data="cars-large" />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
