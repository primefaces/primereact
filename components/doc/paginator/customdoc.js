import React, { useState } from 'react';
import { Paginator } from '../../lib/paginator/Paginator';
import { Ripple } from '../../lib/ripple/Ripple';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { InputText } from '../../lib/inputtext/InputText';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { Slider } from '../../lib/slider/Slider';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CustomDoc(props) {
    const [customFirst1, setCustomFirst1] = useState(0);
    const [customRows1, setCustomRows1] = useState(10);
    const [customFirst2, setCustomFirst2] = useState(0);
    const [customRows2, setCustomRows2] = useState(10);
    const [customFirst3, setCustomFirst3] = useState(0);
    const [customRows3, setCustomRows3] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState("Press 'Enter' key to go to this page.");

    const onCustomPageChange1 = (event) => {
        setCustomFirst1(event.first);
        setCustomRows1(event.rows);
        setCurrentPage(event.page + 1);
    };

    const onCustomPageChange2 = (event) => {
        setCustomFirst2(event.first);
        setCustomRows2(event.rows);
    };

    const onCustomPageChange3 = (event) => {
        setCustomFirst3(event.first);
        setCustomRows3(event.rows);
    };

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    };

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);

            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
            } else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setCustomFirst1(first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            );
        },
        PageLinks: (options) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return (
                    <span className={className} style={{ userSelect: 'none' }}>
                        ...
                    </span>
                );
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            );
        },
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        CurrentPageReport: (options) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip} onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
                </span>
            );
        }
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 120, value: 120 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };
    const template3 = {
        layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',
        RowsPerPageDropdown: (options) => {
            return (
                <div className="flex align-items-center">
                    <Tooltip target=".slider>.p-slider-handle" content={`${options.value} / page`} position="top" event="focus" />

                    <span className="mr-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Slider className="slider" value={options.value} onChange={options.onChange} min={10} max={120} step={30} style={{ width: '10rem' }} />
                </div>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };

    const code = {
        basic: `
<Paginator template={template1} first={customFirst1} rows={customRows1} totalRecords={120} onPageChange={onCustomPageChange1}></Paginator>
<Paginator template={template2} first={customFirst2} rows={customRows2} totalRecords={120} onPageChange={onCustomPageChange2} className="justify-content-end my-3"></Paginator>
<Paginator template={template3} first={customFirst3} rows={customRows3} totalRecords={120} onPageChange={onCustomPageChange3} className="justify-content-start my-3"></Paginator>
        `,
        javascript: `
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';

export default function CustomDoc() {
    const [customFirst1, setCustomFirst1] = useState(0);
    const [customRows1, setCustomRows1] = useState(10);
    const [customFirst2, setCustomFirst2] = useState(0);
    const [customRows2, setCustomRows2] = useState(10);
    const [customFirst3, setCustomFirst3] = useState(0);
    const [customRows3, setCustomRows3] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState("Press 'Enter' key to go to this page.");

    const onCustomPageChange1 = (event) => {
        setCustomFirst1(event.first);
        setCustomRows1(event.rows);
        setCurrentPage(event.page + 1);
    };

    const onCustomPageChange2 = (event) => {
        setCustomFirst2(event.first);
        setCustomRows2(event.rows);
    };

    const onCustomPageChange3 = (event) => {
        setCustomFirst3(event.first);
        setCustomRows3(event.rows);
    };

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    };

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            
            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            }
            else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setCustomFirst1(first);
                setPageInputTooltip('Press \'Enter\' key to go to this page.');
            }
        }
    }

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            );
        },
        PageLinks: (options) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return (
                    <span className={className} style={{ userSelect: 'none' }}>
                        ...
                    </span>
                );
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            );
        },
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        CurrentPageReport: (options) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip} onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
                </span>
            );
        }
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 120, value: 120 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };
    const template3 = {
        layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',
        RowsPerPageDropdown: (options) => {
            return (
                <div className="flex align-items-center">
                <Tooltip target=".slider>.p-slider-handle" content={\`\${options.value} / page\`} position="top" event="focus" />

                    <span className="mr-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Slider className="slider" value={options.value} onChange={options.onChange} min={10} max={120} step={30} style={{ width: '10rem' }} />
                </div>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };

    return (
        <div>
            <Paginator template={template1} first={customFirst1} rows={customRows1} totalRecords={120} onPageChange={onCustomPageChange1}></Paginator>
            <Paginator template={template2} first={customFirst2} rows={customRows2} totalRecords={120} onPageChange={onCustomPageChange2} className="justify-content-end my-3"></Paginator>
            <Paginator template={template3} first={customFirst3} rows={customRows3} totalRecords={120} onPageChange={onCustomPageChange3} className="justify-content-start my-3"></Paginator>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';

export default function CustomDoc() {
    const [customFirst1, setCustomFirst1] = useState(0);
    const [customRows1, setCustomRows1] = useState(10);
    const [customFirst2, setCustomFirst2] = useState(0);
    const [customRows2, setCustomRows2] = useState(10);
    const [customFirst3, setCustomFirst3] = useState(0);
    const [customRows3, setCustomRows3] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState("Press 'Enter' key to go to this page.");

    const onCustomPageChange1 = (event) => {
        setCustomFirst1(event.first);
        setCustomRows1(event.rows);
        setCurrentPage(event.page + 1);
    };

    const onCustomPageChange2 = (event) => {
        setCustomFirst2(event.first);
        setCustomRows2(event.rows);
    };

    const onCustomPageChange3 = (event) => {
        setCustomFirst3(event.first);
        setCustomRows3(event.rows);
    };

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    };

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            
            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            }
            else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setCustomFirst1(first);
                setPageInputTooltip('Press \'Enter\' key to go to this page.');
            }
        }
    }

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            );
        },
        PageLinks: (options) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return (
                    <span className={className} style={{ userSelect: 'none' }}>
                        ...
                    </span>
                );
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            );
        },
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        CurrentPageReport: (options) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip} onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
                </span>
            );
        }
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 120, value: 120 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };
    const template3 = {
        layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',
        RowsPerPageDropdown: (options) => {
            return (
                <div className="flex align-items-center">
                <Tooltip target=".slider>.p-slider-handle" content={\`\${options.value} / page\`} position="top" event="focus" />

                    <span className="mr-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Slider className="slider" value={options.value} onChange={options.onChange} min={10} max={120} step={30} style={{ width: '10rem' }} />
                </div>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };

    return (
        <div>
            <Paginator template={template1} first={customFirst1} rows={customRows1} totalRecords={120} onPageChange={onCustomPageChange1}></Paginator>
            <Paginator template={template2} first={customFirst2} rows={customRows2} totalRecords={120} onPageChange={onCustomPageChange2} className="justify-content-end my-3"></Paginator>
            <Paginator template={template3} first={customFirst3} rows={customRows3} totalRecords={120} onPageChange={onCustomPageChange3} className="justify-content-start my-3"></Paginator>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Custom</p>
            </DocSectionText>
            <div className="card">
                <Paginator template={template1} first={customFirst1} rows={customRows1} totalRecords={120} onPageChange={onCustomPageChange1}></Paginator>
                <Paginator template={template2} first={customFirst2} rows={customRows2} totalRecords={120} onPageChange={onCustomPageChange2} className="justify-content-end my-3"></Paginator>
                <Paginator template={template3} first={customFirst3} rows={customRows3} totalRecords={120} onPageChange={onCustomPageChange3} className="justify-content-start my-3"></Paginator>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
