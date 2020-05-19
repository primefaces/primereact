import React, { Component } from 'react';
import AppContentContext from '../../AppContentContext';
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb';
import { BreadCrumbDoc } from './BreadCrumbDoc';

export class BreadcrumbDemo extends Component {

    render() {
        const items = [
            { label: 'Categories' },
            { label: 'Sports' },
            { label: 'Football' },
            { label: 'Countries' },
            { label: 'Spain' },
            { label: 'F.C. Barcelona' },
            { label: 'Squad' },
            { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
        ];

        const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Breadcrumb</h1>
                        <p>Breadcrumb provides contextual information about page hierarchy.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("breadcrumb")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <BreadCrumb model={items} home={home} />
                </div>

                <BreadCrumbDoc></BreadCrumbDoc>

            </div>
        );
    }
}
