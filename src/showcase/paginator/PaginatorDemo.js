import React, { Component } from 'react';
import { Paginator } from '../../components/paginator/Paginator';
import { Button } from '../../components/button/Button';
import { AppInlineHeader } from '../../AppInlineHeader';
import './PaginatorDemo.scss';
import { PaginatorDoc } from './PaginatorDoc';

export class PaginatorDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first: 0,
            rows: 10,
            first2: 0
        };

        this.onPageChange = this.onPageChange.bind(this);
        this.onPageChange2 = this.onPageChange2.bind(this);
    }

    onPageChange(event) {
        this.setState({
            first: event.first,
            rows: event.rows
        });
    }

    onPageChange2(event) {
        this.setState({
            first2: event.first,
            rows2: event.rows
        });
    }

    render() {
        const leftContent = <Button type="button" icon="pi pi-refresh" onClick={() => this.setState({ first2: 0 })} />;
        const rightContent = <Button type="button" icon="pi pi-search" />;

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="paginator">
                        <h1>Paginator</h1>
                        <p>Paginator is a generic widget to display content in paged format.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation paginator-demo">
                    <div className="card">
                        <h5>Basic</h5>
                        <Paginator first={this.state.first} rows={this.state.rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={this.onPageChange}></Paginator>

                        <h5>Custom Template</h5>
                        <Paginator first={this.state.first2} rows={1} totalRecords={12} onPageChange={this.onPageChange2}
                            leftContent={leftContent} rightContent={rightContent}
                            template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>

                        <div className="image-gallery">
                            <img alt={this.state.first2} src={`showcase/demo/images/nature/nature${this.state.first2 + 1}.jpg`} />
                        </div>
                    </div>
                </div>

                <PaginatorDoc></PaginatorDoc>
            </div>
        );
    }
}
