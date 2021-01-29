import React, { Component } from 'react';
import { Tag } from '../../components/tag/Tag';
import { TagDoc } from './TagDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TagDemo extends Component {
    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <AppInlineHeader changelogText="tag">
                            <h1>Tag</h1>
                            <p>Tag component is used to categorize content.</p>
                        </AppInlineHeader>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Tags</h5>
                        <Tag className="p-mr-2" value="Primary"></Tag>
                        <Tag className="p-mr-2" severity="success" value="Success"></Tag>
                        <Tag className="p-mr-2" severity="info" value="Info"></Tag>
                        <Tag className="p-mr-2" severity="warning" value="Warning"></Tag>
                        <Tag severity="danger" value="Danger"></Tag>

                        <h5>Pills</h5>
                        <Tag className="p-mr-2" value="Primary" rounded></Tag>
                        <Tag className="p-mr-2" severity="success" value="Success" rounded></Tag>
                        <Tag className="p-mr-2" severity="info" value="Info" rounded></Tag>
                        <Tag className="p-mr-2" severity="warning" value="Warning" rounded></Tag>
                        <Tag severity="danger" value="Danger" rounded></Tag>

                        <h5>Icons</h5>
                        <Tag className="p-mr-2" icon="pi pi-user" value="Primary"></Tag>
                        <Tag className="p-mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
                        <Tag className="p-mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                        <Tag className="p-mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
                        <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
                    </div>
                </div>

                <TagDoc />
            </div>
        );
    }
}
