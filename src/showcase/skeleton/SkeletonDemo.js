import React, { Component } from "react";
import { Skeleton } from '../../components/skeleton/Skeleton';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import { SkeletonDoc } from './SkeletonDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import './SkeletonDemo.scss';

export class SkeletonDemo extends Component {

    products = new Array(5);

    bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    render() {

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <AppInlineHeader changelogText="skeleton">
                            <h1>Skeleton</h1>
                            <p>Skeleton is a placeholder to display instead of the actual content.</p>
                        </AppInlineHeader>
                    </div>
                </div>

                <div className="content-section implementation">
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
                <SkeletonDoc />
            </div >
        );
    }
}