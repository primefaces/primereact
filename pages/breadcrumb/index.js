import React from 'react';
import { BreadCrumb } from '../../components/lib/breadcrumb/BreadCrumb';
import BreadCrumbDoc from '../../components/doc/breadcrumb';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const BreadCrumbDemo = () => {

    const items = [
        { label: 'Computer' },
        { label: 'Notebook' },
        { label: 'Accessories' },
        { label: 'Backpacks' },
        { label: 'Item' }
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' }

    return (
        <div>
            <Head>
                <title>React BreadCrumb Component</title>
                <meta name="description" content="Breadcrumb provides contextual information about page hierarchy." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Breadcrumb</h1>
                    <p>Breadcrumb provides contextual information about page hierarchy.</p>
                </div>
                <DocActions github="breadcrumb/index.js" />
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

export default BreadCrumbDemo;
