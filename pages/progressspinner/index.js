import React from 'react';
import { ProgressSpinner } from '../../components/lib/progressspinner/ProgressSpinner';
import ProgressSpinnerDoc from '../../components/doc/progressspinner';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const ProgressSpinnerDemo = () => {

    return (
        <div>
            <Head>
                <title>React ProgressSpinner Component</title>
                <meta name="description" content="ProgressSpinner is a process status indicator." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ProgressSpinner</h1>
                    <p>ProgressSpinner is a process status indicator.</p>
                </div>

                <DocActions github="progressspinner/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <ProgressSpinner />

                    <h5>Custom</h5>
                    <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
                </div>
            </div>

            <ProgressSpinnerDoc />
        </div>
    );
}

export default ProgressSpinnerDemo;
