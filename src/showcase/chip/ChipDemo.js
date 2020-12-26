import React, { Component } from 'react';
import { Chip } from '../../components/chip/Chip';
import { ChipDoc } from './ChipDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import './ChipDemo.scss';

export class ChipDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="chip">
                        <h1>Chip</h1>
                        <p>Chip represents entities using icons, labels and images.</p>
                    </AppInlineHeader>
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
                            <Chip label="Amy Elsner" image="showcase/demo/images/avatar/amyelsner.png" className="p-mr-2 p-mb-2" />
                            <Chip label="Asiya Javayant" image="showcase/demo/images/avatar/asiyajavayant.png" className="p-mr-2 p-mb-2" />
                            <Chip label="Onyama Limba" image="showcase/demo/images/avatar/onyamalimba.png" className="p-mr-2 p-mb-2" />
                            <Chip label="Xuxue Feng" image="showcase/demo/images/avatar/xuxuefeng.png" className="p-mb-2" removable />
                        </div>

                        <h5>Styling</h5>
                        <div className="p-d-flex p-ai-center p-flex-wrap">
                            <Chip label="Action" className="p-mr-2 p-mb-2 custom-chip" />
                            <Chip label="Apple" icon="pi pi-apple" className="p-mr-2 p-mb-2 custom-chip" />
                            <Chip label="Onyama Limba" image="showcase/demo/images/avatar/onyamalimba.png" className="p-mr-2 p-mb-2 custom-chip" />
                            <Chip label="Xuxue Feng" image="showcase/demo/images/avatar/xuxuefeng.png" className="custom-chip p-mb-2" removable />
                        </div>
                    </div>
                </div>

                <ChipDoc />
            </div>
        );
    }
}
