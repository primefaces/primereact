import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Divider } from '@/components/lib/divider/Divider';
import { Dropdown } from '@/components/lib/dropdown/Dropdown';
import { InputText } from '@/components/lib/inputtext/InputText';
import { Paginator } from '@/components/lib/paginator/Paginator';
import { Ripple } from '@/components/lib/ripple/Ripple';
import { Slider } from '@/components/lib/slider/Slider';
import { Tooltip } from '@/components/lib/tooltip/Tooltip';
import { classNames } from '@/components/lib/utils/Utils';
import React, { useState } from 'react';

export function TemplateDoc(props) {
    const [first, setFirst] = useState([0, 0, 0]);
    const [rows, setRows] = useState([10, 10, 10]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState("Press 'Enter' key to go to this page.");

    const onPageChange = (e, index) => {
        setFirst(first.map((f, i) => (index === i ? e.first : f)));
        setRows(rows.map((r, i) => (index === i ? e.rows : r)));
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
                let _first = [...first];

                _first[0] = currentPage ? options.rows * (page - 1) : 0;

                setFirst(_first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

    const leftContent = <Button type="button" icon="pi pi-star" className="p-button-outlined" />;
    const rightContent = <Button type="button" icon="pi pi-search" />;

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
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
<Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={120} onPageChange={(e) => onPageChange(e, 0)} leftContent={leftContent} rightContent={rightContent} />
<Paginator template={template2} first={first[1]} rows={rows[1]} totalRecords={120} onPageChange={(e) => onPageChange(e, 1)} className="justify-content-end" />
<Paginator template={template3} first={first[2]} rows={rows[2]} totalRecords={120} onPageChange={(e) => onPageChange(e, 2)} className="justify-content-start" />
        `,
        javascript: `
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';

export default function TemplateDemo() {
    const [first, setFirst] = useState([0, 0, 0]);
    const [rows, setRows] = useState([10, 10, 10]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState("Press 'Enter' key to go to this page.");

    const onPageChange = (e, index) => {
        setFirst(first.map((f, i) => (index === i ? e.first : f)));
        setRows(rows.map((r, i) => (index === i ? e.rows : r)));
    };

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    };

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);

            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            } else {
                let _first = [...first];

                _first[0] = currentPage ? options.rows * (page - 1) : 0;

                setFirst(_first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

    const leftContent = <Button type="button" icon="pi pi-star" className="p-button-outlined" />;
    const rightContent = <Button type="button" icon="pi pi-search" />;

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
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
        <div className="card">
            <Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={120} onPageChange={(e) => onPageChange(e, 0)} leftContent={leftContent} rightContent={rightContent} />
            <Divider />
            <Paginator template={template2} first={first[1]} rows={rows[1]} totalRecords={120} onPageChange={(e) => onPageChange(e, 1)} className="justify-content-end" />
            <Divider />
            <Paginator template={template3} first={first[2]} rows={rows[2]} totalRecords={120} onPageChange={(e) => onPageChange(e, 2)} className="justify-content-start" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent, PaginatorJumpToPageInputOptions, PaginatorCurrentPageReportOptions, PaginatorRowsPerPageDropdownOptions,
    PaginatorLastPageLinkOptions, PaginatorNextPageLinkOptions, PaginatorPageLinksOptions, PaginatorPrevPageLinkOptions, PaginatorFirstPageLinkOptions } from 'primereact/paginator';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';

export default function TemplateDemo() {
    const [first, setFirst] = useState<number[]>([0, 0, 0]);
    const [rows, setRows] = useState([10, 10, 10]);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageInputTooltip, setPageInputTooltip] = useState<string>("Press 'Enter' key to go to this page.");

    const onPageChange = (e: PaginatorPageChangeEvent, index: number) => {
        setFirst(first.map((f, i) => (index === i ? e.first : f)));
        setRows(rows.map((r, i) => (index === i ? e.rows : r)));
    };

    const onPageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(event.target.value);
    };

    const onPageInputKeyDown = (event: React.KeydownEvent<HTMLInputElement>, options: PaginatorCurrentPageReportOptions) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);

            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            } else {
                let _first = [...first];

                _first[0] = currentPage ? options.rows * (page - 1) : 0;

                setFirst(_first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

    const leftContent = <Button type="button" icon="pi pi-star" className="p-button-outlined" />;
    const rightContent = <Button type="button" icon="pi pi-search" />;

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options: PaginatorPrevPageLinkOptions) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options: PaginatorNextPageLinkOptions) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            );
        },
        PageLinks: (options: PaginatorPageLinksOptions) => {
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
        RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip} onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
                </span>
            );
        }
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
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
        CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };
    const template3 = {
        layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',
        RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
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
        CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };

    return (
        <div className="card">
            <Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={120} onPageChange={(e) => onPageChange(e, 0)} leftContent={leftContent} rightContent={rightContent} />
            <Divider />
            <Paginator template={template2} first={first[1]} rows={rows[1]} totalRecords={120} onPageChange={(e) => onPageChange(e, 1)} className="justify-content-end" />
            <Divider />
            <Paginator template={template3} first={first[2]} rows={rows[2]} totalRecords={120} onPageChange={(e) => onPageChange(e, 2)} className="justify-content-start" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Templating allows overriding the default content of the UI elements by defining callbacks using the element name. The parameters passed to theese callbacks contain properties for binding to your custom elements like the event
                    handler to trigger pagination. Additional <i>leftContent</i> and <i>rightContent</i> properties are available to insert content at both sides of the paginator.
                </p>
            </DocSectionText>
            <div className="card">
                <Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={120} onPageChange={(e) => onPageChange(e, 0)} leftContent={leftContent} rightContent={rightContent} />
                <Divider />
                <Paginator template={template2} first={first[1]} rows={rows[1]} totalRecords={120} onPageChange={(e) => onPageChange(e, 1)} className="justify-content-end" />
                <Divider />
                <Paginator template={template3} first={first[2]} rows={rows[2]} totalRecords={120} onPageChange={(e) => onPageChange(e, 2)} className="justify-content-start" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
