import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class SkeletonDoc extends Component {

    constructor(props){
        super(props)

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from "react";
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './SkeletonDemo.css';

export class SkeletonDemo extends Component {

    products = new Array(5);

    bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    render() {

        return (
            <div>
                <div className="card">
                    <div className="p-grid p-formgrid">
                        <div className="p-field p-col-12 p-md-6">
                            <h5>Rectangle</h5>
                            <Skeleton className="p-mb-2"></Skeleton>
                            <Skeleton width="10rem" className="p-mb-2"></Skeleton>
                            <Skeleton width="5rem" className="p-mb-2"></Skeleton>
                            <Skeleton height="2rem" className="p-mb-2"></Skeleton>
                            <Skeleton width="10rem" height="4rem"></Skeleton>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <h5>Rounded</h5>
                            <Skeleton className="p-mb-2" borderRadius="16px"></Skeleton>
                            <Skeleton width="10rem" className="p-mb-2" borderRadius="16px"></Skeleton>
                            <Skeleton width="5rem" borderRadius="16px" className="p-mb-2"></Skeleton>
                            <Skeleton height="2rem" className="p-mb-2" borderRadius="16px"></Skeleton>
                            <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <h5 className="p-mt-3">Square</h5>
                            <div className="p-d-flex p-ai-end">
                                <Skeleton size="2rem" className="p-mr-2"></Skeleton>
                                <Skeleton size="3rem" className="p-mr-2"></Skeleton>
                                <Skeleton size="4rem" className="p-mr-2"></Skeleton>
                                <Skeleton size="5rem"></Skeleton>
                            </div>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <h5 className="p-mt-3">Circle</h5>
                            <div className="p-d-flex p-ai-end">
                                <Skeleton shape="circle" size="2rem" className="p-mr-2"></Skeleton>
                                <Skeleton shape="circle" size="3rem" className="p-mr-2"></Skeleton>
                                <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                <Skeleton shape="circle" size="5rem"></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="p-grid p-formgrid">
                        <div className="p-field p-col-12 p-md-6 p-pr-md-6 p-pr-0">
                            <h5>Card</h5>
                            <div className="custom-skeleton p-p-4">
                                <div className="p-d-flex p-mb-3">
                                    <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                    <div>
                                        <Skeleton width="10rem" className="p-mb-2"></Skeleton>
                                        <Skeleton width="5rem" className="p-mb-2"></Skeleton>
                                        <Skeleton height=".5rem"></Skeleton>
                                    </div>
                                </div>
                                <Skeleton width="100%" height="150px"></Skeleton>
                                <div className="p-d-flex p-jc-between p-mt-3">
                                    <Skeleton width="4rem" height="2rem"></Skeleton>
                                    <Skeleton width="4rem" height="2rem"></Skeleton>
                                </div>
                            </div>
                        </div>

                        <div className="p-field p-col-12 p-md-6">
                            <h5>List</h5>
                            <div className="custom-skeleton p-p-4">
                                <ul className="p-m-0 p-p-0">
                                    <li className="p-mb-3">
                                        <div className="p-d-flex">
                                            <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                            <div style={{ flex: '1' }}>
                                                <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                                <Skeleton width="75%"></Skeleton>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="p-mb-3">
                                        <div className="p-d-flex">
                                            <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                            <div style={{ flex: '1' }}>
                                                <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                                <Skeleton width="75%"></Skeleton>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="p-mb-3">
                                        <div className="p-d-flex">
                                            <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                            <div style={{ flex: '1' }}>
                                                <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                                <Skeleton width="75%"></Skeleton>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="p-d-flex">
                                            <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                            <div style={{ flex: '1' }}>
                                                <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                                <Skeleton width="75%"></Skeleton>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h5>DataTable</h5>
                    <DataTable value={this.products} className="p-datatable-striped">
                        <Column field="code" header="Code" body={this.bodyTemplate}></Column>
                        <Column field="name" header="Name" body={this.bodyTemplate}></Column>
                        <Column field="category" header="Category" body={this.bodyTemplate}></Column>
                        <Column field="quantity" header="Quantity" body={this.bodyTemplate}></Column>
                    </DataTable>
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
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './SkeletonDemo.css';

export const SkeletonDemo = () => {

    const products = new Array(5);

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    return (
        <div>
            <div className="card">
                <div className="p-grid p-formgrid">
                    <div className="p-field p-col-12 p-md-6">
                        <h5>Rectangle</h5>
                        <Skeleton className="p-mb-2"></Skeleton>
                        <Skeleton width="10rem" className="p-mb-2"></Skeleton>
                        <Skeleton width="5rem" className="p-mb-2"></Skeleton>
                        <Skeleton height="2rem" className="p-mb-2"></Skeleton>
                        <Skeleton width="10rem" height="4rem"></Skeleton>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <h5>Rounded</h5>
                        <Skeleton className="p-mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" className="p-mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="5rem" borderRadius="16px" className="p-mb-2"></Skeleton>
                        <Skeleton height="2rem" className="p-mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <h5 className="p-mt-3">Square</h5>
                        <div className="p-d-flex p-ai-end">
                            <Skeleton size="2rem" className="p-mr-2"></Skeleton>
                            <Skeleton size="3rem" className="p-mr-2"></Skeleton>
                            <Skeleton size="4rem" className="p-mr-2"></Skeleton>
                            <Skeleton size="5rem"></Skeleton>
                        </div>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <h5 className="p-mt-3">Circle</h5>
                        <div className="p-d-flex p-ai-end">
                            <Skeleton shape="circle" size="2rem" className="p-mr-2"></Skeleton>
                            <Skeleton shape="circle" size="3rem" className="p-mr-2"></Skeleton>
                            <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                            <Skeleton shape="circle" size="5rem"></Skeleton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="p-grid p-formgrid">
                    <div className="p-field p-col-12 p-md-6 p-pr-md-6 p-pr-0">
                        <h5>Card</h5>
                        <div className="custom-skeleton p-p-4">
                            <div className="p-d-flex p-mb-3">
                                <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                <div>
                                    <Skeleton width="10rem" className="p-mb-2"></Skeleton>
                                    <Skeleton width="5rem" className="p-mb-2"></Skeleton>
                                    <Skeleton height=".5rem"></Skeleton>
                                </div>
                            </div>
                            <Skeleton width="100%" height="150px"></Skeleton>
                            <div className="p-d-flex p-jc-between p-mt-3">
                                <Skeleton width="4rem" height="2rem"></Skeleton>
                                <Skeleton width="4rem" height="2rem"></Skeleton>
                            </div>
                        </div>
                    </div>

                    <div className="p-field p-col-12 p-md-6">
                        <h5>List</h5>
                        <div className="custom-skeleton p-p-4">
                            <ul className="p-m-0 p-p-0">
                                <li className="p-mb-3">
                                    <div className="p-d-flex">
                                        <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-mb-3">
                                    <div className="p-d-flex">
                                        <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-mb-3">
                                    <div className="p-d-flex">
                                        <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="p-d-flex">
                                        <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h5>DataTable</h5>
                <DataTable value={products} className="p-datatable-striped">
                    <Column field="code" header="Code" body={bodyTemplate}></Column>
                    <Column field="name" header="Name" body={bodyTemplate}></Column>
                    <Column field="category" header="Category" body={bodyTemplate}></Column>
                    <Column field="quantity" header="Quantity" body={bodyTemplate}></Column>
                </DataTable>
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
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './SkeletonDemo.css';

export const SkeletonDemo = () => {

    const products = new Array(5);

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    return (
        <div>
            <div className="card">
                <div className="p-grid p-formgrid">
                    <div className="p-field p-col-12 p-md-6">
                        <h5>Rectangle</h5>
                        <Skeleton className="p-mb-2"></Skeleton>
                        <Skeleton width="10rem" className="p-mb-2"></Skeleton>
                        <Skeleton width="5rem" className="p-mb-2"></Skeleton>
                        <Skeleton height="2rem" className="p-mb-2"></Skeleton>
                        <Skeleton width="10rem" height="4rem"></Skeleton>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <h5>Rounded</h5>
                        <Skeleton className="p-mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" className="p-mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="5rem" borderRadius="16px" className="p-mb-2"></Skeleton>
                        <Skeleton height="2rem" className="p-mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <h5 className="p-mt-3">Square</h5>
                        <div className="p-d-flex p-ai-end">
                            <Skeleton size="2rem" className="p-mr-2"></Skeleton>
                            <Skeleton size="3rem" className="p-mr-2"></Skeleton>
                            <Skeleton size="4rem" className="p-mr-2"></Skeleton>
                            <Skeleton size="5rem"></Skeleton>
                        </div>
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <h5 className="p-mt-3">Circle</h5>
                        <div className="p-d-flex p-ai-end">
                            <Skeleton shape="circle" size="2rem" className="p-mr-2"></Skeleton>
                            <Skeleton shape="circle" size="3rem" className="p-mr-2"></Skeleton>
                            <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                            <Skeleton shape="circle" size="5rem"></Skeleton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="p-grid p-formgrid">
                    <div className="p-field p-col-12 p-md-6 p-pr-md-6 p-pr-0">
                        <h5>Card</h5>
                        <div className="custom-skeleton p-p-4">
                            <div className="p-d-flex p-mb-3">
                                <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                <div>
                                    <Skeleton width="10rem" className="p-mb-2"></Skeleton>
                                    <Skeleton width="5rem" className="p-mb-2"></Skeleton>
                                    <Skeleton height=".5rem"></Skeleton>
                                </div>
                            </div>
                            <Skeleton width="100%" height="150px"></Skeleton>
                            <div className="p-d-flex p-jc-between p-mt-3">
                                <Skeleton width="4rem" height="2rem"></Skeleton>
                                <Skeleton width="4rem" height="2rem"></Skeleton>
                            </div>
                        </div>
                    </div>

                    <div className="p-field p-col-12 p-md-6">
                        <h5>List</h5>
                        <div className="custom-skeleton p-p-4">
                            <ul className="p-m-0 p-p-0">
                                <li className="p-mb-3">
                                    <div className="p-d-flex">
                                        <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-mb-3">
                                    <div className="p-d-flex">
                                        <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li className="p-mb-3">
                                    <div className="p-d-flex">
                                        <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="p-d-flex">
                                        <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
                                        <div style={{ flex: '1' }}>
                                            <Skeleton width="100%" className="p-mb-2"></Skeleton>
                                            <Skeleton width="75%"></Skeleton>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h5>DataTable</h5>
                <DataTable value={products} className="p-datatable-striped">
                    <Column field="code" header="Code" body={bodyTemplate}></Column>
                    <Column field="name" header="Name" body={bodyTemplate}></Column>
                    <Column field="category" header="Category" body={bodyTemplate}></Column>
                    <Column field="quantity" header="Quantity" body={bodyTemplate}></Column>
                </DataTable>
            </div>

        </div>
    );
}
`
            }
        };

        this.extFiles = {
            'src/demo/SkeletonDemo.css': {
                content: `
.custom-skeleton {
    border: 1px solid var(--surface-d);
    border-borderRadius: 4px;
}
.custom-skeleton ul {
    list-style: none;
}
                `
            }
        }
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                    <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Skeleton } from 'primereact/skeleton';
`}
</CodeHighlight>
                <h5>Getting Started</h5>
				<p>Skeleton displays a rectangle in its simplest form.</p>
<CodeHighlight>
{`
<Skeleton />
`}
</CodeHighlight>
                <h5>Circle</h5>
				<p>The other option is the circle by setting <i>shape</i> property as "circle".</p>
<CodeHighlight>
{`
<Skeleton shape="circle" />
`}
</CodeHighlight>
                <h5>Size</h5>
				<p>In order to customize the size, use <i>width</i> and <i>height</i> properties for rectangles and <i>size</i> for Circle and Square shapes.</p>
<CodeHighlight>
{`
<Skeleton width="100%" height="2rem" />
<Skeleton shape="circle" size="50px" />
`}
</CodeHighlight>
                <h5>Border Radius</h5>
				<p>The default border radius of a rectangle is specified by the theme and can be overriden using the <i>borderRadius</i> property.</p>
<CodeHighlight>
{`
<Skeleton borderRadius="16px" />
`}
</CodeHighlight>
                <h5>Animation</h5>
				<p>Animation can be turned of by setting <i>animation</i> to "none".</p>
<CodeHighlight>
{`
<Skeleton animation="none" />
`}
</CodeHighlight>
                <h5>Properties</h5>
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
                                <td>shape</td>
                                <td>string</td>
                                <td>rectangle</td>
                                <td>Shape of the element, options are "rectangle" and "circle".</td>
                            </tr>
							<tr>
                                <td>size</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Size of the Circle or Square.</td>
                            </tr>
							<tr>
                                <td>width</td>
                                <td>string</td>
                                <td>100%</td>
                                <td>Width of the element.</td>
                            </tr>
							<tr>
                                <td>height</td>
                                <td>string</td>
                                <td>1rem</td>
                                <td>Height of the element.</td>
                            </tr>
							<tr>
                                <td>borderRadius</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Border radius of the element, defaults to value from theme.</td>
                            </tr>
							<tr>
                                <td>animation</td>
                                <td>string</td>
                                <td>wave</td>
                                <td>Type of the animation, valid options are "wave" and "none".</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Styling</h5>
				<p>Following is the list of structural style classes, for theming classes visit <NavLink to="/theming">theming</NavLink> page.</p>
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
                                <td>p-skeleton</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-skeleton-circle</td>
                                <td>Container element of a determinate progressbar.</td>
                            </tr>
                            <tr>
                                <td>p-skeleton-animation-none</td>
                                <td>Container element of an indeterminate progressbar.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
                    </TabPanel>
                    {
                        useLiveEditorTabs({ name: 'SkeletonDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        );
    }
}
