import React, { Component } from 'react';
import { Avatar } from '../../components/avatar/Avatar';
import { AvatarGroup } from '../../components/avatargroup/AvatarGroup';
import { Badge } from '../../components/badge/Badge';
import { AvatarDoc } from './AvatarDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class AvatarDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <AppInlineHeader changelogText="avatar">
                            <h1>Avatar</h1>
                            <p>Avatar represents people using icons, labels and images.</p>
                        </AppInlineHeader>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <div className="card">
                                <h5>Label</h5>
                                <Avatar label="P" className="p-mr-2" size="xlarge" />
                                <Avatar label="V" className="p-mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                                <Avatar label="U" className="p-mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="card">
                                <h5>Label - Circle</h5>
                                <Avatar label="P" className="p-mr-2" size="xlarge" shape="circle" />
                                <Avatar label="V" className="p-mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                                <Avatar label="U" className="p-mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="card">
                                <h5>Label - Badge</h5>
                                <Avatar label="U" size="xlarge" className="p-overlay-badge" style={{ backgroundColor: '#4caf4f', color: '#ffffff' }}>
                                    <Badge value="4" />
                                </Avatar>
                            </div>
                        </div>
                    </div>

                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <div className="card">
                                <h5>Icon</h5>
                                <Avatar icon="pi pi-user" className="p-mr-2" size="xlarge" />
                                <Avatar icon="pi pi-user" className="p-mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                                <Avatar icon="pi pi-user" className="p-mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="card">
                                <h5>Icon - Circle</h5>
                                <Avatar icon="pi pi-user" className="p-mr-2" size="xlarge" shape="circle" />
                                <Avatar icon="pi pi-user" className="p-mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                                <Avatar icon="pi pi-user" className="p-mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="card">
                                <h5>Icon - Badge</h5>
                                <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
                                    <Badge value="4" />
                                </Avatar>
                            </div>
                        </div>
                    </div>

                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <div className="card">
                                <h5>Image</h5>
                                <Avatar image="showcase/demo/images/avatar/amyelsner.png" className="p-mr-2" size="xlarge" shape="circle" />
                                <Avatar image="showcase/demo/images/avatar/asiyajavayant.png" className="p-mr-2" size="large" shape="circle" />
                                <Avatar image="showcase/demo/images/avatar/onyamalimba.png" className="p-mr-2" shape="circle" />
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="card">
                                <h5>Avatar Group</h5>
                                <AvatarGroup className="p-mb-3">
                                    <Avatar image="showcase/demo/images/avatar/amyelsner.png" size="large" shape="circle" />
                                    <Avatar image="showcase/demo/images/avatar/asiyajavayant.png" size="large" shape="circle" />
                                    <Avatar image="showcase/demo/images/avatar/onyamalimba.png" size="large" shape="circle" />
                                    <Avatar image="showcase/demo/images/avatar/ionibowcher.png" size="large" shape="circle" />
                                    <Avatar image="showcase/demo/images/avatar/xuxuefeng.png" size="large" shape="circle" />
                                    <Avatar label="+2" shape="circle" size="large" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                                </AvatarGroup>
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="card">
                                <h5>Image - Badge</h5>
                                <Avatar className="p-overlay-badge" image="showcase/demo/images/organization/walter.jpg" size="xlarge">
                                    <Badge value="4" severity="danger" />
                                </Avatar>
                            </div>
                        </div>
                    </div>
                </div>

                <AvatarDoc />
            </div>
        );
    }
}
