import React from 'react';
import RippleDoc from '../../components/doc/ripple';
import { Ripple } from '../../components/lib/ripple/Ripple';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const RippleDemo = () => {

    return (
        <div>
            <Head>
                <title>React Ripple Component</title>
                <meta name="description" content="Ripple component adds ripple effect to the host element." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Ripple</h1>
                    <p>Ripple component adds ripple effect to the host element.</p>
                </div>

                <DocActions github="ripple/index.js" />
            </div>

            <div className="content-section implementation ripple-demo">
                <div className="card-container flex">
                    <div className="card primary-box p-ripple">
                        Default
                        <Ripple />
                    </div>
                    <div className="card styled-box-green p-ripple">
                        Green
                        <Ripple />
                    </div>
                    <div className="card styled-box-orange p-ripple">
                        Orange
                        <Ripple />
                    </div>
                    <div className="card styled-box-purple p-ripple">
                        Purple
                        <Ripple />
                    </div>
                </div>
            </div>

            <RippleDoc />
        </div>
    );
}

export default RippleDemo;
