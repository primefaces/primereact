import React, { Component } from 'react';
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb';
import { BreadCrumbDoc } from './BreadCrumbDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class BreadCrumbDemo extends Component {

    render() {
        const items = [
            {label: 'Computer'},
            {label: 'Notebook'},
            {label: 'Accessories'},
            {label: 'Backpacks'},
            {label: 'Item'}
        ];

        const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' }

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="breadcrumb">
                        <h1>Breadcrumb</h1>
                        <p>Breadcrumb provides contextual information about page hierarchy.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <BreadCrumb model={items} home={home} />
                    </div>
                </div>

                <BreadCrumbDoc />
            </div>
        );
    }
}
