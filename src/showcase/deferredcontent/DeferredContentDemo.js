import React, { Component } from 'react';
import { DeferredContent } from '../../components/deferredcontent/DeferredContent';
import AppContentContext from '../../AppContentContext';
import { CarService } from "../service/CarService";
import { DataTable } from "../../components/datatable/DataTable";
import { Column } from "../../components/column/Column";
import { Growl } from "../../components/growl/Growl";
import { DeferredContentDoc } from './DeferredContentDoc';

export class DeferredContentDemo extends Component {

    constructor() {
        super();
        this.state = {
            cars: []
        };
        this.carservice = new CarService();
        this.onImageLoad = this.onImageLoad.bind(this);
        this.onDataLoad = this.onDataLoad.bind(this);
    }

    onImageLoad() {
        this.growl.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    }

    onDataLoad() {
        this.carservice.getCarsSmall().then(data => this.setState({ cars: data }));
        this.growl.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DeferredContent</h1>
                        <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll. </p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("deferredContent")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />
                    <div style={{ height: '800px' }}>
                        Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                    </div>
                    <DeferredContent onLoad={this.onImageLoad}>
                        <img src="showcase/demo/images/galleria/galleria1.jpg" alt="prime" />
                    </DeferredContent>

                    <div style={{ height: '500px' }}>
                    </div>
                    <DeferredContent onLoad={this.onDataLoad}>
                        <DataTable value={this.state.cars}>
                            <Column field="vin" header="Vin" />
                            <Column field="year" header="Year" />
                            <Column field="brand" header="Brand" />
                            <Column field="color" header="Color" />
                        </DataTable>
                    </DeferredContent>
                </div>

                <DeferredContentDoc />
            </div>
        )
    }
}
