import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class AvatarDoc extends Component {

    constructor(props){
        super(props)

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from "react";
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export class AvatarDemo extends Component {

    render() {
        return (
            <div>
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
                            <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge" ><Badge value="4" /> </Avatar>
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
        );
    }
}
`
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from "react";
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export const AvatarDemo = () => {

    return (
        <div>
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
                        <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge" ><Badge value="4" /> </Avatar>
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
    );
}
`
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from "react";
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export const AvatarDemo = () => {

    return (
        <div>
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
                        <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge" ><Badge value="4" /> </Avatar>
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
    );
}
`
            }
        };
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                    <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
`}
</CodeHighlight>
                <h5>Getting Started</h5>
				<p>Avatar has three built-in display modes; "label", "icon" and "image".</p>
<CodeHighlight>
{`
<Avatar label="P" />
<Avatar icon="pi pi-search" />
<Avatar image="user.png" />
`}
</CodeHighlight>
                <h5>Sizes</h5>
				<p><i>size</i> property defines the size of the Avatar with "large" and "xlarge" as possible values.</p>
<CodeHighlight>
{`
<Avatar label="P" size="large"/>
`}
</CodeHighlight>
                <h5>AvatarGroup</h5>
				<p>A set of Avatars can be displayed together using the <i>AvatarGroup</i> component.</p>
<CodeHighlight>
{`
<AvatarGroup>
    <Avatar label="P" />
    <Avatar icon="pi pi-search" />
    <Avatar image="user.png" />
    <Avatar label="+2" />
</AvatarGroup>
`}
</CodeHighlight>
                <h5>Shape</h5>
				<p>Avatar comes in two different styles specified with the <i>shape</i> property, "square" is the default and "circle" is the alternative.</p><CodeHighlight>
{`
<Avatar label="P" shape="circle"/>
`}
</CodeHighlight>
                <h5>Badge</h5>
				<p>A badge can be added to an Avatar with the <NavLink to="/badge">Badge</NavLink> component.</p>
<CodeHighlight>
{`
<Avatar image="user.png" size="xlarge">
    <Badge value="4" severity="danger" />
</Avatar>
`}
</CodeHighlight>
                <h5>Templating</h5>
                <p>Content can easily be customized with the default slot instead of using the built-in modes.</p>
<CodeHighlight>
{`
<Avatar>
   Content
</Avatar>
`}
</CodeHighlight>

                <h5>Properties of Avatar</h5>
				<p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
				<div className="doc-tablewrapper">
					<table className="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
						</thead>
						<tbody>
							<tr>
								<td>label</td>
								<td>string</td>
								<td>null</td>
								<td>Defines the text to display.</td>
							</tr>
							<tr>
								<td>icon</td>
								<td>string</td>
								<td>null</td>
								<td>Defines the icon to display.</td>
							</tr>
							<tr>
								<td>image</td>
								<td>string</td>
								<td>null</td>
								<td>Defines the image to display.</td>
							</tr>
							<tr>
								<td>size</td>
								<td>string</td>
								<td>null</td>
								<td>Size of the element, valid options are "large" and "xlarge".</td>
							</tr>
							<tr>
								<td>shape</td>
								<td>string</td>
								<td>square</td>
								<td>Shape of the element, valid options are "square" and "circle".</td>
							</tr>
                            <tr>
								<td>template</td>
								<td>any</td>
								<td>null</td>
								<td>Template of the content.</td>
							</tr>
                            <tr>
								<td>imageAlt</td>
								<td>any</td>
								<td>null</td>
								<td>It specifies an alternate text for an image, if the image cannot be displayed.</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h5>Properties of AvatarGroup</h5>
				<p>Any property as style and class are passed to the main container element. There are no additional properties.</p>

                <h5>Events</h5>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
								<td>onImageError</td>
								<td>event: Browser event</td>
								<td>This event is triggered if an error occurs while loading an image file.</td>
							</tr>
                            <tr>
								<td>onClick</td>
								<td>event: Browser event</td>
								<td>Callback to invoke on click.</td>
							</tr>
                        </tbody>
                    </table>
                </div>

				<h5>Styling of Avatar</h5>
				<p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
				<div className="doc-tablewrapper">
					<table className="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
								<td>p-avatar</td>
								<td>Container element.</td>
                            </tr>
							<tr>
								<td>p-avatar-image</td>
								<td>Container element in image mode.</td>
                            </tr>
							<tr>
								<td>p-avatar-circle</td>
								<td>Container element with a circle shape.</td>
                            </tr>
							<tr>
								<td>p-avatar-text</td>
								<td>Text of the Avatar.</td>
                            </tr>
							<tr>
								<td>p-avatar-icon</td>
								<td>Icon of the Avatar.</td>
                            </tr>
							<tr>
								<td>p-avatar-lg</td>
								<td>Container element with a large size.</td>
                            </tr>
							<tr>
								<td>p-avatar-xl</td>
								<td>Container element with an xlarge size.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Styling of AvatarGroup</h5>
				<div className="doc-tablewrapper">
					<table className="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
								<td>p-avatar-group</td>
								<td>Container element.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'AvatarDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        );
    }
}
