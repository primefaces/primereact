import React, {Component} from 'react';
import {Carousel} from '../../components/carousel/Carousel';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import {Button} from '../../components/button/Button';

export class CarouselDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div className="p-col-12">
                        <img src={`showcase/resources/demo/images/car/${car.brand}.png`} alt={car.brand} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{car.brand}</div>
                        <div className="car-subtitle">{car.year} | {car.color}</div>

                        <div className="car-buttons">
                            <Button icon="pi pi-search" className="p-button-secondary" />
                            <Button icon="pi pi-star" className="p-button-secondary" />
                            <Button icon="pi pi-cog" className="p-button-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const basicHeader = <h2>Basic</h2>;
        const customHeader = <h2>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h2>
        const verticalHeader = <h2>Vertical</h2>

        return (
            <div className="carousel-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Carousel</h1>
                        <p>Carousel is a content slider featuring various customization options.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("carousel")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={4} numScroll={3}
                        header={basicHeader} responsiveOptions={this.responsiveOptions}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1} className="custom-carousel"
                        responsiveOptions={this.responsiveOptions} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} orientation="vertical" style={{maxWidth: '400px', marginTop: '2em'}}
                        numVisible={1} numScroll={1} verticalViewPortHeight="330px" header={verticalHeader}></Carousel>
                </div>

                <CarouselDoc />
            </div>
        );
    }
}

export class CarouselDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Carousel} from 'primereact/carousel';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Carousel requires a collection of items as its value along with a template to render each item.</p>

<CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate}></Carousel>

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
constructor() {
    super();
    this.state = {
        cars: []
    };
    this.carservice = new CarService();
    this.carTemplate = this.carTemplate.bind(this);
}

componentDidMount() {
    this.carservice.getCars().then(data => this.setState({cars: data}));
}

carTemplate(car) {
    // return content;
}

`}
</CodeHighlight>

            <h3>Items per page and Scroll Items</h3>
            <p>Number of items per page is defined using the <i>numVisible</i> property whereas number of items to scroll is defined with the <i>numScroll</i> property.</p>
            <CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1}></Carousel>

`}
</CodeHighlight>

            <h3>Responsive</h3>
            <p>For responsive design, <i>numVisible</i> and <i>numScroll</i> can be defined using the <i>responsiveOptions</i> property that should be an array of
            objects whose breakpoint defines the max-width to apply the settings.</p>
            <CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions}></Carousel>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

`}
</CodeHighlight>

            <h3>Header and Footer</h3>
            <p>Custom content projection is available using the <i>header</i> and <i>footer</i> properties.</p>
            <CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate} header={<h1>Header</h1>}></Carousel>

`}
</CodeHighlight>

            <h3>Orientation</h3>
            <p>Default layout of the Carousel is horizontal, other possible option is the vertical mode that is configured with the <i>orientation</i> property.</p>
            <CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate} orientation="vertical"></Carousel>

`}
</CodeHighlight>

            <h3>AutoPlay and Circular</h3>
            <p>When <i>autoplayInterval</i> is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling <i>circular</i> property needs to be enabled. Note that in autoplay mode, circular is enabled by default.</p>

            <h3>Controlled vs Uncontrolled</h3>
            <p>In controlled mode, <i>page</i> and <i>onPageChange</i> properties need to be defined to control the first visible item.</p>

<CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate} page={this.state.page} onPageChange={(e) => this.setState({page: e.page})}></Carousel>

`}
</CodeHighlight>

            <h3>Uncontrolled</h3>
            <p>In uncontrolled mode, no additional properties are required. Initial page can be provided using the <i>page</i> property in uncontrolled mode however it is evaluated at initial rendering and ignored in further updates. If you programmatically
                need to update the first visible item index, prefer to use the component as controlled.</p>

<CodeHighlight className="language-jsx">
{`
<Carousel value={this.state.cars} itemTemplate={this.carTemplate}></Carousel>

`}
</CodeHighlight>

            <h3>Properties</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects to display.</td>
                        </tr>
                        <tr>
                            <td>page</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the first item.</td>
                        </tr>
                        <tr>
                            <td>header</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Label of header.</td>
                        </tr>
                        <tr>
                            <td>footer</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Label of footer.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Function that gets an item in the value and returns the content for it.</td>
                        </tr>
                        <tr>
                            <td>circular</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Defines if scrolling would be infinite.</td>
                        </tr>
                        <tr>
                            <td>autoplayInterval</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Time in milliseconds to scroll items automatically.</td>
                        </tr>
                        <tr>
                            <td>numVisible</td>
                            <td>number</td>
                            <td>1</td>
                            <td>Number of items per page.</td>
                        </tr>
                        <tr>
                            <td>numScroll</td>
                            <td>number</td>
                            <td>1</td>
                            <td>Number of items to scroll.</td>
                        </tr>
                        <tr>
                            <td>responsiveOptions</td>
                            <td>any</td>
                            <td>null</td>
                            <td>An array of options for responsive design.</td>
                        </tr>
                        <tr>
                            <td>orientation</td>
                            <td>string</td>
                            <td>horizontal</td>
                            <td>Specifies the layout of the component, valid values are "horizontal" and "vertical".</td>
                        </tr>
                        <tr>
                            <td>verticalViewPortHeight</td>
                            <td>string</td>
                            <td>300px</td>
                            <td>Height of the viewport in vertical layout.</td>
                        </tr>
                        <tr>
                            <td>contentClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of main content.</td>
                        </tr>
                        <tr>
                            <td>containerClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the viewport container.</td>
                        </tr>
                        <tr>
                            <td>dotsContainerClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the paginator items.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onPageChange</td>
                            <td>event.page = Value of the new page.</td>
                            <td>Callback to invoke after scroll.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-carousel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-content</td>
                            <td>Main content element. It contains the container of the viewport.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-container</td>
                            <td>Container of the viewport. It contains navigation buttons and viewport.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-items-content</td>
                            <td>Viewport.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-dots-container</td>
                            <td>Container of the paginator.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-dot-item</td>
                            <td>Paginator element.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-dot-icon</td>
                            <td>Paginator element icon.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/carousel" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Carousel} from 'primereact/carousel';
import {Button} from 'primereact/button';
import {CarService} from '../service/CarService';

export class CarouselDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);

        this.responsiveSettings = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    carTemplate(car) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div className="p-col-12">
                        <img src={\`showcase/resources/demo/images/car/\${car.brand}.png\`} alt={car.brand} />
                    </div>
                    <div className="p-col-12 car-data">
                        <div className="car-title">{car.brand}</div>
                        <div className="car-subtitle">{car.year} | {car.color}</div>

                        <div className="car-buttons">
                            <Button icon="pi pi-search" className="p-button-secondary" />
                            <Button icon="pi pi-star" className="p-button-secondary" />
                            <Button icon="pi pi-cog" className="p-button-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const basicHeader = <h2>Basic</h2>;
        const customHeader = <h2>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h2>
        const verticalHeader = <h2>Vertical</h2>

        return (
            <div className="carousel-demo">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Carousel</h1>
                        <p>Carousel is a content slider featuring various customization options.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={4} numScroll={3}
                        header={basicHeader} responsive={this.responsiveSettings}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1} className="custom-carousel"
                        responsive={this.responsiveSettings} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} orientation="vertical" style={{width: '400px', marginTop: '2em'}}
                        numVisible={1} numScroll={1} responsive={this.responsiveSettings} verticalViewPortHeight="330px" header={verticalHeader}></Carousel>
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
