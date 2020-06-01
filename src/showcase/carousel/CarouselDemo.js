import React, { Component } from 'react';
import { Carousel } from '../../components/carousel/Carousel';
import { CarService } from '../service/CarService';
import AppContentContext from '../../AppContentContext';
import { Button } from '../../components/button/Button';
import { CarouselDoc } from './CarouselDoc';

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
        this.carservice.getCarsSmall().then(data => this.setState({ cars: data }));
    }

    carTemplate(car) {
        return (
            <div className="car-details">
                <div className="p-grid p-nogutter">
                    <div className="p-col-12">
                        <img src={`showcase/demo/images/car/${car.brand}.png`} alt={car.brand} />
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
                            {context => <button onClick={() => context.onChangelogBtnClick("carousel")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={4} numScroll={3}
                        header={basicHeader} responsiveOptions={this.responsiveOptions}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} numVisible={3} numScroll={1} className="custom-carousel"
                        responsiveOptions={this.responsiveOptions} header={customHeader} circular={true} autoplayInterval={3000}></Carousel>

                    <Carousel value={this.state.cars} itemTemplate={this.carTemplate} orientation="vertical" style={{ maxWidth: '400px', marginTop: '2em' }}
                        numVisible={1} numScroll={1} verticalViewPortHeight="330px" header={verticalHeader}></Carousel>
                </div>

                <CarouselDoc />
            </div>
        );
    }
}
