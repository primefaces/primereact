import React, { Component } from 'react';
import { Chip } from '../../components/lib/chip/Chip';
import { ChipDoc } from '../../components/doc/chip';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class ChipDemo extends Component {

    render() {
        const contextPath = getConfig().publicRuntimeConfig.contextPath;

        return (
            <div>
                <Head>
                    <title>React Chip Component</title>
                    <meta name="description" content="Chip represents entities using icons, labels and images." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Chip</h1>
                        <p>Chip represents entities using icons, labels and images.</p>
                    </div>

                    <DocActions github="chip/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <div className="p-d-flex p-ai-center p-flex-wrap">
                            <Chip label="Action" className="p-mr-2 p-mb-2" />
                            <Chip label="Comedy" className="p-mr-2 p-mb-2" />
                            <Chip label="Mystery" className="p-mr-2 p-mb-2" />
                            <Chip label="Thriller" className="p-mb-2" removable />
                        </div>

                        <h5>Icon</h5>
                        <div className="p-d-flex p-ai-center p-flex-wrap">
                            <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2" />
                            <Chip label="Facebook" icon="pi pi-facebook" className="p-mr-2 p-mb-2" />
                            <Chip label="Google" icon="pi pi-google" className="p-mr-2 p-mb-2" />
                            <Chip label="Microsoft" icon="pi pi-microsoft" className="p-mb-2" removable />
                        </div>

                        <h5>Image</h5>
                        <div className="p-d-flex p-ai-center p-flex-wrap">
                            <Chip label="Amy Elsner" image={`${contextPath}/images/avatar/amyelsner.png`} className="p-mr-2 p-mb-2" />
                            <Chip label="Asiya Javayant" image={`${contextPath}/images/avatar/asiyajavayant.png`} className="p-mr-2 p-mb-2" />
                            <Chip label="Onyama Limba" image={`${contextPath}/images/avatar/onyamalimba.png`} className="p-mr-2 p-mb-2" />
                            <Chip label="Xuxue Feng" image={`${contextPath}/images/avatar/xuxuefeng.png`} className="p-mb-2" removable />
                        </div>

                        <h5>Styling</h5>
                        <div className="p-d-flex p-ai-center p-flex-wrap">
                            <Chip label="Action" className="p-mr-2 p-mb-2 custom-chip" />
                            <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2 custom-chip" />
                            <Chip label="Onyama Limba" image={`${contextPath}/images/avatar/onyamalimba.png`} className="p-mr-2 p-mb-2 custom-chip" />
                            <Chip label="Xuxue Feng" image={`${contextPath}/images/avatar/xuxuefeng.png`} className="custom-chip p-mb-2" removable />
                        </div>
                    </div>
                </div>

                <ChipDoc />
            </div>
        );
    }
}
