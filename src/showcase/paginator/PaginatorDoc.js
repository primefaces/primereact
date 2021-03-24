import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class PaginatorDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Paginator } from 'primereact/paginator';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import classNames from 'classnames';
import './PaginatorDemo.css';

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
            pageInputTooltip: 'Press \\'Enter\\' key to go to this page.'
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
                this.setState({ pageInputTooltip: \`Value must be between 1 and \${options.totalPages}.\`})
            }
            else {
                const first = this.state.currentPage ? options.rows * (page - 1) : 0;

                this.setState({ customFirst1: first, pageInputTooltip: 'Press \\'Enter\\' key to go to this page.' });
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
                        <Tooltip target=".slider>.p-slider-handle" content={\`\${options.value} / page\`} position="top" event="focus" />

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
            <div className="paginator-demo">
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
                        <img alt={this.state.contentFirst} src={\`showcase/demo/images/nature/nature\${this.state.contentFirst + 1}.jpg\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
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
import React, { useState } from 'react';
import { Paginator } from 'primereact/paginator';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import classNames from 'classnames';
import './PaginatorDemo.css';

const PaginatorDemo = () => {
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);
    const [basicCustomFirst1, setBasicCustomFirst1] = useState(0);
    const [customRows1, setCustomRows1] = useState(10);
    const [customFirst2, setCustomFirst2] = useState(0);
    const [customRows2, setCustomRows2] = useState(10);
    const [customFirst3, setCustomFirst3] = useState(0);
    const [customRows3, setCustomRows3] = useState(10);
    const [contentFirst, setContentFirst] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip]: useState('Press \\'Enter\\' key to go to this page.');

    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setBasicRows(event.rows);
    }

    const onCustomPageChange1 = (event) => {
        setCustomFirst1(event.first);
        setCustomRows1(event.rows);
        setCurrentPage(event.page + 1);
    }

    const onCustomPageChange2 = (event) => {
        setCustomFirst2(event.first);
        setCustomRows2(event.rows);
    }

    const onCustomPageChange3 = (event) => {
        setCustomFirst3(event.first);
        setCustomRows3(event.rows);
    }

    const onContentPageChange = (event) => {
        setContentFirst(event.first);
        setContentRows(event.rows);
    }

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            }
            else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setCustomFirst1(first);
                setPageInputTooltip('Press \\'Enter\\' key to go to this page.');
            }
        }
    }

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    }

    const leftContent = <Button type="button" icon="pi pi-refresh" onClick={() => setContentFirst(0)} />;
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
                    Go to <InputText size="2" className="p-ml-1" value={currentPage} tooltip={pageInputTooltip}
                        onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange}/>
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
                    <Tooltip target=".slider>.p-slider-handle" content={\`\${options.value} / page\`} position="top" event="focus" />

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
        <div className="paginator-demo">
            <div className="card">
                <h5>Basic</h5>
                <Paginator first={basicFirst} rows={basicRows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onBasicPageChange}></Paginator>

                <h5>Custom Template</h5>
                <Paginator template={template1} first={customFirst1} rows={customRows1} totalRecords={120} onPageChange={onCustomPageChange1}></Paginator>
                <Paginator template={template2} first={customFirst2} rows={customRows2} totalRecords={120} onPageChange={onCustomPageChange2} className="p-jc-end p-my-3"></Paginator>
                <Paginator template={template3} first={customFirst3} rows={customRows3} totalRecords={120} onPageChange={onCustomPageChange3} className="p-jc-start p-my-3"></Paginator>

                <h5>Left and Right Content</h5>
                <Paginator first={contentFirst} rows={1} totalRecords={12} onPageChange={onContentPageChange}
                    leftContent={leftContent} rightContent={rightContent}
                    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>

                <div className="image-gallery">
                    <img alt={contentFirst} src={\`showcase/demo/images/nature/nature\${contentFirst + 1}.jpg\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
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
import React, { useState } from 'react';
import { Paginator } from 'primereact/paginator';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import classNames from 'classnames';
import './PaginatorDemo.css';

const PaginatorDemo = () => {
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);
    const [basicCustomFirst1, setBasicCustomFirst1] = useState(0);
    const [customRows1, setCustomRows1] = useState(10);
    const [customFirst2, setCustomFirst2] = useState(0);
    const [customRows2, setCustomRows2] = useState(10);
    const [customFirst3, setCustomFirst3] = useState(0);
    const [customRows3, setCustomRows3] = useState(10);
    const [contentFirst, setContentFirst] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip]: useState('Press \\'Enter\\' key to go to this page.');

    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setBasicRows(event.rows);
    }

    const onCustomPageChange1 = (event) => {
        setCustomFirst1(event.first);
        setCustomRows1(event.rows);
        setCurrentPage(event.page + 1);
    }

    const onCustomPageChange2 = (event) => {
        setCustomFirst2(event.first);
        setCustomRows2(event.rows);
    }

    const onCustomPageChange3 = (event) => {
        setCustomFirst3(event.first);
        setCustomRows3(event.rows);
    }

    const onContentPageChange = (event) => {
        setContentFirst(event.first);
        setContentRows(event.rows);
    }

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            }
            else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setCustomFirst1(first);
                setPageInputTooltip('Press \\'Enter\\' key to go to this page.');
            }
        }
    }

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    }

    const leftContent = <Button type="button" icon="pi pi-refresh" onClick={() => setContentFirst(0)} />;
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
                    Go to <InputText size="2" className="p-ml-1" value={currentPage} tooltip={pageInputTooltip}
                        onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange}/>
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
                    <Tooltip target=".slider>.p-slider-handle" content={\`\${options.value} / page\`} position="top" event="focus" />

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
        <div className="paginator-demo">
            <div className="card">
                <h5>Basic</h5>
                <Paginator first={basicFirst} rows={basicRows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onBasicPageChange}></Paginator>

                <h5>Custom Template</h5>
                <Paginator template={template1} first={customFirst1} rows={customRows1} totalRecords={120} onPageChange={onCustomPageChange1}></Paginator>
                <Paginator template={template2} first={customFirst2} rows={customRows2} totalRecords={120} onPageChange={onCustomPageChange2} className="p-jc-end p-my-3"></Paginator>
                <Paginator template={template3} first={customFirst3} rows={customRows3} totalRecords={120} onPageChange={onCustomPageChange3} className="p-jc-start p-my-3"></Paginator>

                <h5>Left and Right Content</h5>
                <Paginator first={contentFirst} rows={1} totalRecords={12} onPageChange={onContentPageChange}
                    leftContent={leftContent} rightContent={rightContent}
                    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>

                <div className="image-gallery">
                    <img alt={contentFirst} src={\`showcase/demo/images/nature/nature\${contentFirst + 1}.jpg\`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                </div>
            </div>
        </div>
    );
}
                `
            }
        };

        this.extFiles = {
            'src/demo/PaginatorDemo.css': {
                content: `
.paginator-demo .p-button.p-button-icon-only {
    border-radius: 0;
}

.paginator-demo .image-gallery {
    text-align: center;
    padding: 1rem;
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { Paginator } from 'primereact/paginator';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Paginator is used as a controlled component with <i>first</i>, <i>rows</i> (optional) and <i>onPageChange</i> properties.</p>

<CodeHighlight>
{`
<Paginator first={first} rows={rows} onPageChange={(e) => setFirst(e.first)}></Paginator>
`}
</CodeHighlight>

                        <h5>Rows and TotalRecords</h5>
                        <p>Rows and TotalRecords define how many pages the paginator should display. Paginator below will have 10 pages.</p>
<CodeHighlight>
{`
<Paginator rows={10} totalRecords={120} first={first} onPageChange={(e) => setFirst(e.first)}></Paginator>
`}
</CodeHighlight>

                        <h5>Rows Per Page</h5>
                        <p>Number of items per page can be changed by the user using a dropdown if you define rowsPerPageOptions as an array of possible values. In this case,
                        rows property should also be updated
            </p>
<CodeHighlight lang="js">
{`
const onPageChange = (e) => {
    setFirst(e.first);
    setRows(e.rows);
}
`}
</CodeHighlight>
<CodeHighlight>
{`
<Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10,20,30]} onPageChange={onPageChange}></Paginator>
`}
</CodeHighlight>

                        <h5>Template</h5>
                        <p>Paginator elements can be customized using the template property using the predefined keys, default value is
                        "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available elements that
            can be placed inside a paginator.</p>

                        <ul>
                            <li>FirstPageLink</li>
                            <li>PrevPageLink</li>
                            <li>PageLinks</li>
                            <li>NextPageLink</li>
                            <li>LastPageLink</li>
                            <li>RowsPerPageDropdown</li>
                            <li>CurrentPageReport</li>
                        </ul>

                        <p>The pagination element is fully customizable. To make special paginators, an object can be given to the <i>template</i> property as below.</p>
<CodeHighlight lang="js">
{`
const template = {
    layout: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport', // The above keys can be set in the desired order.
    'FirstPageLink': (options) => {
        // options.onClick: Click event for the default element.
        // options.className: Style class of the default element.
        // options.iconClassName: Style class of the default icon element.
        // options.disabled: Indicates whether the element is disabled.
        // options.element: Default element created by the component.
        // options.props: Component props.

        return CustomElement;
    },
    'PrevPageLink': (options) => {
        // options.onClick: Click event for the default element.
        // options.className: Style class of the default element.
        // options.iconClassName: Style class of the default icon element.
        // options.disabled: Indicates whether the element is disabled.
        // options.element: Default element created by the component.
        // options.props: Component props.

        return CustomElement;
    },
    'PageLinks': (options) => {
        // options.onClick: Click event for the default element.
        // options.className: Style class of the default element.
        // options.view: {
        //     startPage: // First page displayed in view
        //     endPage:   // Last page displayed in view
        // }
        // options.page: Current page in loop.
        // options.currentPage: Current selected page.
        // options.totalPages: Total pages in paginator
        // options.element: Default element created by the component.
        // options.props: Component props.

        return CustomElement;
    },
    'NextPageLink': (options) => {
        // options.onClick: Click event for the default element.
        // options.className: Style class of the default element.
        // options.iconClassName: Style class of the default icon element.
        // options.disabled: Indicates whether the element is disabled.
        // options.element: Default element created by the component.
        // options.props: Component props.

        return CustomElement;
    },
    'LastPageLink': (options) => {
        // options.onClick: Click event for the default element.
        // options.className: Style class of the default element.
        // options.iconClassName: Style class of the default icon element.
        // options.disabled: Indicates whether the element is disabled.
        // options.element: Default element created by the component.
        // options.props: Component props.

        return CustomElement;
    },
    'RowsPerPageDropdown': (options) => {
        // options.value: Current selected value in the default element.
        // options.onChange: Change event for default element.
        // options.currentPage: Current selected page.
        // options.totalPages: Total pages in paginator.
        // options.totalRecords: Total records in paginator.
        // options.element: Default element created by the component.
        // options.props: Component props.

        return CustomElement;
    },
    'CurrentPageReport': (options) => {
        // options.currentPage: Current selected page.
        // options.totalPages: Total pages in paginator.
        // options.first: Zero-relative number of the first row to be displayed.
        // options.rows: Row count in a page.
        // options.totalRecords: Total records in paginator.
        // options.className: Style class of the default element.
        // options.element: Default element created by the component.
        // options.props: Component props.

        return CustomElement;
    }
};
`}
</CodeHighlight>
<CodeHighlight>
{`
<Paginator template={template} first={this.state.customFirst} rows={this.state.customRows} totalRecords={120} onPageChange={this.onCustomPageChange}></Paginator>
`}
</CodeHighlight>

                        <h5>CurrentPageReport</h5>
                        <p>Current page report item in the itemplate displays information about the pagination state. Default value is (&#123;currentPage&#125; of &#123;totalPages&#125;)
                whereas available placeholders are the following;</p>
                        <ul>
                            <li>&#123;currentPage&#125;</li>
                            <li>&#123;totalPages&#125;</li>
                            <li>&#123;rows&#125;</li>
                            <li>&#123;first&#125;</li>
                            <li>&#123;last&#125;</li>
                            <li>&#123;totalRecords&#125;</li>
                        </ul>

                        <h5>Properties</h5>
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
                                        <td>totalRecords</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Number of total records.</td>
                                    </tr>
                                    <tr>
                                        <td>rows</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Data count to display per page.</td>
                                    </tr>
                                    <tr>
                                        <td>first</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Zero-relative number of the first row to be displayed.</td>
                                    </tr>
                                    <tr>
                                        <td>pageLinkSize</td>
                                        <td>number</td>
                                        <td>5</td>
                                        <td>Number of page links to display.</td>
                                    </tr>
                                    <tr>
                                        <td>rowsPerPageOptions</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>Array of integer values to display inside rows per page dropdown.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>template</td>
                                        <td>string|object</td>
                                        <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                                        <td>Template of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>leftContent</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content to inject into the left side of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>rightContent</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content to inject into the right side of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>currentPageReportTemplate</td>
                                        <td>string</td>
                                        <td>(&#123;currentPage&#125; of &#123;totalPages&#125;)</td>
                                        <td>Template of the current page report element. Available placeholders are
                                        &#123;currentPage&#125;,&#123;totalPages&#125;,&#123;rows&#125;,&#123;first&#125;,&#123;last&#125; and &#123;totalRecords&#125;</td>
                                    </tr>
                                    <tr>
                                        <td>dropdownAppendTo</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Target element to attach the paginator dropdown overlay.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

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
                                        <td>onPageChange</td>
                                        <td>event.page: New page number <br />
                                event.first: Index of first record <br />
                                event.rows: Number of rows to display in new page <br />
                                event.page: Index of the new page <br />
                                event.pageCount: Total number of pages
                            </td>
                                        <td>Callback to invoke when page changes, the event object contains information about the new state.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
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
                                        <td>p-paginator</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-first</td>
                                        <td>First page element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-prev</td>
                                        <td>Previous page element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-pages</td>
                                        <td>Container of page links.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-page</td>
                                        <td>A page link.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-next</td>
                                        <td>Next pge element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-last</td>
                                        <td>Last page element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-paginator-rpp-options</td>
                                        <td>Rows per page dropdown.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'PaginatorDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        );
    }
}
