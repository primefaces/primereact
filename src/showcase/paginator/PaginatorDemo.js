import React, { Component } from 'react';
import { Paginator } from '../../components/paginator/Paginator';
import { Button } from '../../components/button/Button';
import { Ripple } from '../../components/ripple/Ripple';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { InputText } from '../../components/inputtext/InputText';
import { Slider } from '../../components/slider/Slider';
import { Tooltip } from '../../components/tooltip/Tooltip';
import { AppInlineHeader } from '../../AppInlineHeader';
import './PaginatorDemo.scss';
import { PaginatorDoc } from './PaginatorDoc';
import classNames from 'classnames';

export class PaginatorDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            basicFirst: 0,
            basicRows: 10,
            customFirst1: 0,
            customRows1: 10,
            customFirst2: 0,
            customRows2: 10,
            customFirst3: 0,
            customRows3: 10,
            contentFirst: 0,
            currentPage: 1,
            pageInputTooltip: 'Press \'Enter\' key to go to this page.'
        };

        this.onBasicPageChange = this.onBasicPageChange.bind(this);
        this.onCustomPageChange1 = this.onCustomPageChange1.bind(this);
        this.onCustomPageChange2 = this.onCustomPageChange2.bind(this);
        this.onCustomPageChange3 = this.onCustomPageChange3.bind(this);
        this.onContentPageChange = this.onContentPageChange.bind(this);
        this.onPageInputKeyDown = this.onPageInputKeyDown.bind(this);
        this.onPageInputChange = this.onPageInputChange.bind(this);
    }

    onBasicPageChange(event) {
        this.setState({
            basicFirst: event.first,
            basicRows: event.rows
        });
    }

    onCustomPageChange1(event) {
        this.setState({
            customFirst1: event.first,
            customRows1: event.rows,
            currentPage: event.page + 1
        });
    }

    onCustomPageChange2(event) {
        this.setState({
            customFirst2: event.first,
            customRows2: event.rows
        });
    }

    onCustomPageChange3(event) {
        this.setState({
            customFirst3: event.first,
            customRows3: event.rows
        });
    }

    onContentPageChange(event) {
        this.setState({
            contentFirst: event.first,
            contentRows: event.rows
        });
    }

    onPageInputKeyDown(event, options) {
        if (event.key === 'Enter') {
            const page = parseInt(this.state.currentPage);
            if (page < 0 || page > options.totalPages) {
                this.setState({ pageInputTooltip: `Value must be between 1 and ${options.totalPages}.`})
            }
            else {
                const first = this.state.currentPage ? options.rows * (page - 1) : 0;

                this.setState({ customFirst1: first, pageInputTooltip: 'Press \'Enter\' key to go to this page.' });
            }
        }
    }

    onPageInputChange(event) {
        this.setState({ currentPage: event.target.value });
    }

    render() {
        const leftContent = <Button type="button" icon="pi pi-refresh" onClick={() => this.setState({ contentFirst: 0 })} />;
        const rightContent = <Button type="button" icon="pi pi-search" />;
        const template1 = {
            layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
            'PrevPageLink': (options) => {
                return (
                    <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                        <span className="p-p-3">Previous</span>
                        <Ripple />
                    </button>
                )
            },
            'NextPageLink': (options) => {
                return (
                    <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                        <span className="p-p-3">Next</span>
                        <Ripple />
                    </button>
                )
            },
            'PageLinks': (options) => {
                if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                    const className = classNames(options.className, { 'p-disabled': true });

                    return <span className={className} style={{ userSelect: 'none' }}>...</span>;
                }

                return (
                    <button type="button" className={options.className} onClick={options.onClick}>
                        {options.page + 1}
                        <Ripple />
                    </button>
                )
            },
            'RowsPerPageDropdown': (options) => {
                const dropdownOptions = [
                    { label: 10, value: 10 },
                    { label: 20, value: 20 },
                    { label: 30, value: 30 },
                    { label: 'All', value: options.totalRecords }
                ];

                return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} appendTo={document.body} />;
            },
            'CurrentPageReport': (options) => {
                return (
                    <span className="p-mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Go to <InputText size="2" className="p-ml-1" value={this.state.currentPage} tooltip={this.state.pageInputTooltip}
                            onKeyDown={(e) => this.onPageInputKeyDown(e, options)} onChange={this.onPageInputChange}/>
                    </span>
                )
            }
        };
        const template2 = {
            layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
            'RowsPerPageDropdown': (options) => {
                const dropdownOptions = [
                    { label: 5, value: 5 },
                    { label: 10, value: 10 },
                    { label: 20, value: 20 },
                    { label: 120, value: 120 }
                ];

                return (
                    <>
                        <span className="p-mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                        <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} appendTo={document.body} />
                    </>
                );
            },
            'CurrentPageReport': (options) => {
                return (
                    <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                        {options.first} - {options.last} of {options.totalRecords}
                    </span>
                )
            }
        };
        const template3 = {
            layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',
            'RowsPerPageDropdown': (options) => {
                return (
                    <div className="p-d-flex p-ai-center">
                        <Tooltip target=".slider>.p-slider-handle" content={`${options.value} / page`} position="top" event="focus" />

                        <span className="p-mr-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                        <Slider className="slider" value={options.value} onChange={options.onChange} min={10} max={120} step={30} style={{ width: '10rem' }} />
                    </div>
                );
            },
            'CurrentPageReport': (options) => {
                return (
                    <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                        {options.first} - {options.last} of {options.totalRecords}
                    </span>
                )
            }
        }

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
                        <Paginator first={this.state.basicFirst} rows={this.state.basicRows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={this.onBasicPageChange}></Paginator>

                        <h5>Custom Template</h5>
                        <Paginator template={template1} first={this.state.customFirst1} rows={this.state.customRows1} totalRecords={120} onPageChange={this.onCustomPageChange1}></Paginator>
                        <Paginator template={template2} first={this.state.customFirst2} rows={this.state.customRows2} totalRecords={120} onPageChange={this.onCustomPageChange2} className="p-jc-end p-my-3"></Paginator>
                        <Paginator template={template3} first={this.state.customFirst3} rows={this.state.customRows3} totalRecords={120} onPageChange={this.onCustomPageChange3} className="p-jc-start p-my-3"></Paginator>

                        <h5>Left and Right Content</h5>
                        <Paginator first={this.state.contentFirst} rows={1} totalRecords={12} onPageChange={this.onContentPageChange}
                            leftContent={leftContent} rightContent={rightContent}
                            template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>

                        <div className="image-gallery">
                            <img alt={this.state.contentFirst} src={`showcase/demo/images/nature/nature${this.state.contentFirst + 1}.jpg`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                        </div>
                    </div>
                </div>

                <PaginatorDoc></PaginatorDoc>
            </div>
        );
    }
}
