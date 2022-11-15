import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';
import AvatarDoc from '../../components/doc/avatar';
import { DocActions } from '../../components/doc/common/docactions';
import { Avatar } from '../../components/lib/avatar/Avatar';
import { AvatarGroup } from '../../components/lib/avatargroup/AvatarGroup';
import { Badge } from '../../components/lib/badge/Badge';

const AvatarDemo = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div>
            <Head>
                <title>React Avatar Component</title>
                <meta name="description" content="Avatar represents people using icons, labels and images." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Avatar</h1>
                    <p>Avatar represents people using icons, labels and images.</p>
                </div>
                <DocActions github="avatar/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="grid">
                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Label</h5>
                            <Avatar label="P" className="mr-2" size="xlarge" />
                            <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                            <Avatar label="U" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Label - Circle</h5>
                            <Avatar label="P" className="mr-2" size="xlarge" shape="circle" />
                            <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                            <Avatar label="U" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Label - Badge</h5>
                            <Avatar label="U" size="xlarge" className="p-overlay-badge" style={{ backgroundColor: '#4caf4f', color: '#ffffff' }}>
                                <Badge value="4" />
                            </Avatar>
                        </div>
                    </div>
                </div>

                <div className="grid">
                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Icon</h5>
                            <Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
                            <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                            <Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Icon - Circle</h5>
                            <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
                            <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                            <Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Icon - Badge</h5>
                            <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
                                <Badge value="4" />
                            </Avatar>
                        </div>
                    </div>
                </div>

                <div className="grid">
                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Image</h5>
                            <Avatar image={`${contextPath}/images/avatar/amyelsner.png`} className="mr-2" size="xlarge" shape="circle" />
                            <Avatar image={`${contextPath}/images/avatar/asiyajavayant.png`} className="mr-2" size="large" shape="circle" />
                            <Avatar image={`${contextPath}/images/avatar/onyamalimba.png`} className="mr-2" shape="circle" />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Avatar Group</h5>
                            <AvatarGroup className="mb-3">
                                <Avatar image={`${contextPath}/images/avatar/amyelsner.png`} size="large" shape="circle" />
                                <Avatar image={`${contextPath}/images/avatar/asiyajavayant.png`} size="large" shape="circle" />
                                <Avatar image={`${contextPath}/images/avatar/onyamalimba.png`} size="large" shape="circle" />
                                <Avatar image={`${contextPath}/images/avatar/ionibowcher.png`} size="large" shape="circle" />
                                <Avatar image={`${contextPath}/images/avatar/xuxuefeng.png`} size="large" shape="circle" />
                                <Avatar label="+2" shape="circle" size="large" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                            </AvatarGroup>
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="card">
                            <h5>Gravatar, Letter Avatar, Fallback</h5>
                            <div className="flex align-content-center">
                                <Avatar id="gravatar" image={`https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp`} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                                <Avatar id="letter-avatar" image={`https://ui-avatars.com/api/?name=Optimus+Prime&color=ffffff&background=ff9900`} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                                <Avatar id="fallback-label" image={`invalid1.jpg`} label="P" className="flex align-items-center justify-content-center mr-2" size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                                <Avatar id="fallback-url" image={`invalid2.jpg`} imageFallback={`https://ui-avatars.com/api/?name=Fall+Back`} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AvatarDoc />
        </div>
    );
};

export default AvatarDemo;
