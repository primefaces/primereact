import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useUpdateEffect } from '../hooks/Hooks';
import { ObjectUtils, classNames } from '../utils/Utils';
import { CurrentPageReport } from './CurrentPageReport';
import { FirstPageLink } from './FirstPageLink';
import { JumpToPageInput } from './JumpToPageInput';
import { LastPageLink } from './LastPageLink';
import { NextPageLink } from './NextPageLink';
import { PageLinks } from './PageLinks';
import { PaginatorBase } from './PaginatorBase';
import { PrevPageLink } from './PrevPageLink';
import { RowsPerPageDropdown } from './RowsPerPageDropdown';

export const Paginator = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = PaginatorBase.getProps(inProps, context);
        const metaData = {
            props,
            ...props.__parentMetadata
        };
        const { ptm, cx, isUnstyled } = PaginatorBase.setMetaData(metaData);

        useHandleStyle(PaginatorBase.css.styles, isUnstyled, { name: 'paginator' });
        const elementRef = React.useRef(null);
        const page = Math.floor(props.first / props.rows);
        const totalPages = Math.ceil(props.totalRecords / props.rows);
        const isFirstPage = page === 0;
        const isLastPage = page === totalPages - 1;
        const isEmpty = totalPages === 0;

        const calculatePageLinkBoundaries = () => {
            let numberOfPages = totalPages;
            let visiblePages = Math.min(props.pageLinkSize, numberOfPages);

            //calculate range, keep current in middle if necessary
            let start = Math.max(0, Math.ceil(page - visiblePages / 2));
            let end = Math.min(numberOfPages - 1, start + visiblePages - 1);

            //check when approaching to last page
            let delta = props.pageLinkSize - (end - start + 1);

            start = Math.max(0, start - delta);

            return [start, end];
        };

        const updatePageLinks = () => {
            let pageLinks = [];
            let boundaries = calculatePageLinkBoundaries();
            let start = boundaries[0];
            let end = boundaries[1];

            for (let i = start; i <= end; i++) {
                pageLinks.push(i + 1);
            }

            return pageLinks;
        };

        const changePage = (first, rows) => {
            let pc = totalPages;
            let p = Math.floor(first / rows);

            if (p >= 0 && p < pc) {
                let newPageState = {
                    first: first,
                    rows: rows,
                    page: p,
                    totalPages: pc
                };

                if (props.onPageChange) {
                    props.onPageChange(newPageState);
                }
            }
        };

        const changePageToFirst = (event) => {
            changePage(0, props.rows);
            event.preventDefault();
        };

        const changePageToPrev = (event) => {
            changePage(props.first - props.rows, props.rows);
            event.preventDefault();
        };

        const onPageLinkClick = (event) => {
            changePage((event.value - 1) * props.rows, props.rows);
        };

        const changePageToNext = (event) => {
            changePage(props.first + props.rows, props.rows);
            event.preventDefault();
        };

        const changePageToLast = (event) => {
            changePage((totalPages - 1) * props.rows, props.rows);
            event.preventDefault();
        };

        const onRowsChange = (event) => {
            const rows = event.value;

            changePage(0, rows);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useUpdateEffect(() => {
            if (page > 0 && props.first >= props.totalRecords) {
                changePage((totalPages - 1) * props.rows, props.rows);
            }
        }, [props.totalRecords]);

        const createElement = (key, template) => {
            let element;

            switch (key) {
                case 'FirstPageLink':
                    element = (
                        <FirstPageLink
                            hostName="Paginator"
                            key={key}
                            page={page}
                            totalPages={totalPages}
                            totalRecords={props.totalRecords}
                            rows={props.rows}
                            onClick={changePageToFirst}
                            disabled={isFirstPage || isEmpty}
                            template={template}
                            firstPageLinkIcon={props.firstPageLinkIcon}
                            ptm={ptm}
                            cx={cx}
                        />
                    );
                    break;

                case 'PrevPageLink':
                    element = (
                        <PrevPageLink
                            hostName="Paginator"
                            key={key}
                            page={page}
                            totalPages={totalPages}
                            totalRecords={props.totalRecords}
                            rows={props.rows}
                            onClick={changePageToPrev}
                            disabled={isFirstPage || isEmpty}
                            template={template}
                            prevPageLinkIcon={props.prevPageLinkIcon}
                            ptm={ptm}
                            cx={cx}
                        />
                    );
                    break;

                case 'NextPageLink':
                    element = (
                        <NextPageLink
                            hostName="Paginator"
                            key={key}
                            page={page}
                            totalPages={totalPages}
                            totalRecords={props.totalRecords}
                            rows={props.rows}
                            onClick={changePageToNext}
                            disabled={isLastPage || isEmpty}
                            template={template}
                            nextPageLinkIcon={props.nextPageLinkIcon}
                            ptm={ptm}
                            cx={cx}
                        />
                    );
                    break;

                case 'LastPageLink':
                    element = (
                        <LastPageLink
                            hostName="Paginator"
                            key={key}
                            page={page}
                            totalPages={totalPages}
                            totalRecords={props.totalRecords}
                            rows={props.rows}
                            onClick={changePageToLast}
                            disabled={isLastPage || isEmpty}
                            template={template}
                            lastPageLinkIcon={props.lastPageLinkIcon}
                            ptm={ptm}
                            cx={cx}
                        />
                    );
                    break;

                case 'PageLinks':
                    element = (
                        <PageLinks hostName="Paginator" key={key} page={page} totalPages={totalPages} totalRecords={props.totalRecords} rows={props.rows} value={updatePageLinks()} onClick={onPageLinkClick} template={template} ptm={ptm} cx={cx} />
                    );
                    break;

                case 'RowsPerPageDropdown':
                    element = (
                        <RowsPerPageDropdown
                            hostName="Paginator"
                            key={key}
                            value={props.rows}
                            page={page}
                            totalPages={totalPages}
                            totalRecords={props.totalRecords}
                            options={props.rowsPerPageOptions}
                            onChange={onRowsChange}
                            appendTo={props.dropdownAppendTo}
                            template={template}
                            disabled={isEmpty}
                            unstyled={props.unstyled}
                            ptm={ptm}
                            cx={cx}
                            metaData={metaData}
                        />
                    );
                    break;

                case 'CurrentPageReport':
                    element = (
                        <CurrentPageReport
                            hostName="Paginator"
                            reportTemplate={props.currentPageReportTemplate}
                            key={key}
                            page={page}
                            totalPages={totalPages}
                            totalRecords={props.totalRecords}
                            rows={props.rows}
                            first={props.first}
                            template={template}
                            ptm={ptm}
                        />
                    );
                    break;
                case 'JumpToPageInput':
                    element = (
                        <JumpToPageInput hostName="Paginator" key={key} rows={props.rows} page={page} totalPages={totalPages} onChange={changePage} disabled={isEmpty} template={template} ptm={ptm} unstyled={props.unstyled} metaData={metaData} />
                    );
                    break;

                default:
                    element = null;
                    break;
            }

            return element;
        };

        const createElements = () => {
            const template = props.template;

            if (template) {
                if (typeof template === 'object') {
                    return template.layout
                        ? template.layout.split(' ').map((value) => {
                              const key = value.trim();

                              return createElement(key, template[key]);
                          })
                        : Object.entries(template).map(([key, _template]) => {
                              return createElement(key, _template);
                          });
                }

                return template.split(' ').map((value) => {
                    return createElement(value.trim());
                });
            }

            return null;
        };

        if (!props.alwaysShow && totalPages <= 1) {
            return null;
        } else {
            const leftContent = ObjectUtils.getJSXElement(props.leftContent, props);
            const rightContent = ObjectUtils.getJSXElement(props.rightContent, props);

            const elements = createElements();
            const leftProps = mergeProps(
                {
                    className: cx('left')
                },
                ptm('left')
            );
            const leftElement = leftContent && <div {...leftProps}>{leftContent}</div>;
            const endProps = mergeProps(
                {
                    className: cx('end')
                },
                ptm('end')
            );
            const rightElement = rightContent && <div {...endProps}>{rightContent}</div>;
            const rootProps = mergeProps(
                {
                    ref: elementRef,
                    className: classNames(props.className, cx('root')),
                    style: props.style
                },
                PaginatorBase.getOtherProps(props),
                ptm('root')
            );

            return (
                <div {...rootProps}>
                    {leftElement}
                    {elements}
                    {rightElement}
                </div>
            );
        }
    })
);

Paginator.displayName = 'Paginator';
