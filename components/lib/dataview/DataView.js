import * as React from 'react';
import PrimeReact, { localeOption, PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { BarsIcon } from '../icons/bars';
import { SpinnerIcon } from '../icons/spinner';
import { ThLargeIcon } from '../icons/thlarge';
import { Paginator } from '../paginator/Paginator';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { DataViewBase, DataViewLayoutOptionsBase } from './DataViewBase';

export const DataViewLayoutOptions = React.memo((inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = DataViewLayoutOptionsBase.getProps(inProps, context);
    const { ptm, cx } = DataViewLayoutOptionsBase.setMetaData({
        props
    });

    const changeLayout = (event, layoutMode) => {
        props.onChange({
            originalEvent: event,
            value: layoutMode
        });
        event.preventDefault();
    };

    const listIconProps = mergeProps(ptm('list'));
    const gridIconProps = mergeProps(ptm('grid'));
    const listIcon = IconUtils.getJSXIcon(props.listIcon || <BarsIcon {...listIconProps} />, { ...listIconProps }, { props });
    const gridIcon = IconUtils.getJSXIcon(props.gridIcon || <ThLargeIcon {...gridIconProps} />, { ...gridIconProps }, { props });
    const rootProps = mergeProps(
        {
            id: props.id,
            style: props.style,
            className: classNames(props.className, cx('root'))
        },
        DataViewLayoutOptionsBase.getOtherProps(props),
        ptm('root')
    );

    const listButtonProps = mergeProps(
        {
            type: 'button',
            className: cx('listButton'),
            onClick: (event) => changeLayout(event, 'list')
        },
        ptm('listButton')
    );

    const gridButtonProps = mergeProps(
        {
            type: 'button',
            className: cx('gridButton'),
            onClick: (event) => changeLayout(event, 'grid')
        },
        ptm('gridButton')
    );

    return (
        <div {...rootProps}>
            <button {...listButtonProps}>
                {listIcon}
                <Ripple />
            </button>
            <button {...gridButtonProps}>
                {gridIcon}
                <Ripple />
            </button>
        </div>
    );
});

export const DataViewItem = React.memo((props) => {
    return props.template(props.item, props.layout);
});

export const DataView = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = DataViewBase.getProps(inProps, context);
        const [firstState, setFirstState] = React.useState(props.first);
        const [rowsState, setRowsState] = React.useState(props.rows);
        const metaData = {
            props,
            state: {
                first: firstState,
                rows: rowsState
            }
        };
        const { ptm, cx, isUnstyled } = DataViewBase.setMetaData(metaData);

        useHandleStyle(DataViewBase.css.styles, isUnstyled, { name: 'dataview' });

        const elementRef = React.useRef(null);
        const first = props.onPage ? props.first : firstState;
        const rows = props.onPage ? props.rows : rowsState;

        const getItemRenderKey = (value) => {
            return props.dataKey ? ObjectUtils.resolveFieldData(value, props.dataKey) : null;
        };

        const getTotalRecords = () => {
            return props.totalRecords ? props.totalRecords : props.value ? props.value.length : 0;
        };

        const createPaginator = (position) => {
            const className = classNames('p-paginator-' + position, props.paginatorClassName);
            const totalRecords = getTotalRecords();

            return (
                <Paginator
                    first={first}
                    rows={rows}
                    pageLinkSize={props.pageLinkSize}
                    className={className}
                    onPageChange={onPageChange}
                    template={props.paginatorTemplate}
                    totalRecords={totalRecords}
                    rowsPerPageOptions={props.rowsPerPageOptions}
                    currentPageReportTemplate={props.currentPageReportTemplate}
                    leftContent={props.paginatorLeft}
                    rightContent={props.paginatorRight}
                    alwaysShow={props.alwaysShowPaginator}
                    dropdownAppendTo={props.paginatorDropdownAppendTo}
                    ptm={ptm('paginator')}
                    unstyled={props.unstyled}
                    __parentMetadata={{ parent: metaData }}
                />
            );
        };

        const onPageChange = (event) => {
            if (props.onPage) {
                props.onPage(event);
            } else {
                setFirstState(event.first);
                setRowsState(event.rows);
            }
        };

        const getItems = (value) => {
            if (props.paginator) {
                const currentFirst = props.lazy ? 0 : first;
                const totalRecords = getTotalRecords();
                const last = Math.min(rows + currentFirst, totalRecords);

                return value.slice(currentFirst, last) || [];
            }

            return value;
        };

        const sort = () => {
            if (props.value) {
                // performance optimization to prevent resolving field data in each loop
                const lookupMap = new Map();
                const comparator = ObjectUtils.localeComparator((context && context.locale) || PrimeReact.locale);
                const value = [...props.value];

                for (let item of value) {
                    lookupMap.set(item, ObjectUtils.resolveFieldData(item, props.sortField));
                }

                value.sort((data1, data2) => {
                    let value1 = lookupMap.get(data1);
                    let value2 = lookupMap.get(data2);

                    return ObjectUtils.sort(value1, value2, props.sortOrder, comparator, (context && context.nullSortOrder) || PrimeReact.nullSortOrder);
                });

                return value;
            }

            return null;
        };

        const createLoader = () => {
            if (props.loading) {
                const loadingIconProps = mergeProps(
                    {
                        className: cx('loadingIcon')
                    },
                    ptm('loadingIcon')
                );
                const icon = props.loadingIcon || <SpinnerIcon {...loadingIconProps} spin />;
                const loadingIcon = IconUtils.getJSXIcon(icon, { ...loadingIconProps }, { props });
                const loadingOverlayProps = mergeProps(
                    {
                        className: cx('loadingOverlay')
                    },
                    ptm('loadingOverlay')
                );

                return <div {...loadingOverlayProps}>{loadingIcon}</div>;
            }

            return null;
        };

        const createTopPaginator = () => {
            if (props.paginator && (props.paginatorPosition !== 'bottom' || props.paginatorPosition === 'both')) {
                return createPaginator('top');
            }

            return null;
        };

        const createBottomPaginator = () => {
            if (props.paginator && (props.paginatorPosition !== 'top' || props.paginatorPosition === 'both')) {
                return createPaginator('bottom');
            }

            return null;
        };

        const createEmptyMessage = () => {
            if (!props.loading) {
                const content = props.emptyMessage || localeOption('emptyMessage');
                const emptyMessageProps = mergeProps(
                    {
                        className: cx('emptyMessage')
                    },
                    ptm('emptyMessage')
                );

                return <div {...emptyMessageProps}>{content}</div>;
            }

            return null;
        };

        const createHeader = () => {
            if (props.header) {
                const headerProps = mergeProps(
                    {
                        className: cx('header')
                    },
                    ptm('header')
                );

                return <div {...headerProps}>{props.header}</div>;
            }

            return null;
        };

        const createFooter = () => {
            if (props.footer) {
                const footerProps = mergeProps(
                    {
                        className: cx('footer')
                    },
                    ptm('footer')
                );

                return <div {...footerProps}>{props.footer}</div>;
            }

            return null;
        };

        const createItems = (value) => {
            if (ObjectUtils.isNotEmpty(value)) {
                let items = getItems(value);

                return items.map((item, index) => {
                    return <DataViewItem key={getItemRenderKey(item) || index} template={props.itemTemplate} layout={props.layout} item={item} />;
                });
            }

            return createEmptyMessage();
        };

        const createContent = (value) => {
            const contentProps = mergeProps(
                {
                    className: cx('content')
                },
                ptm('content')
            );
            let content = null;

            if (props.listTemplate) {
                const items = getItems(value);

                content = ObjectUtils.getJSXElement(props.listTemplate, items, props.layout);
            } else {
                const items = createItems(value);
                const gridProps = mergeProps(
                    {
                        className: cx('grid')
                    },
                    ptm('grid')
                );

                content = <div {...gridProps}>{items}</div>;
            }

            return <div {...contentProps}>{content}</div>;
        };

        const processData = () => {
            let data = props.value;

            if (ObjectUtils.isNotEmpty(data) && props.sortField) {
                data = sort();
            }

            return data;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const data = processData();
        const loader = createLoader();
        const topPaginator = createTopPaginator();
        const bottomPaginator = createBottomPaginator();
        const header = createHeader();
        const footer = createFooter();
        const content = createContent(data);
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className: classNames(props.className, cx('root'))
            },
            DataViewBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                {loader}
                {header}
                {topPaginator}
                {content}
                {bottomPaginator}
                {footer}
            </div>
        );
    })
);

DataViewLayoutOptions.displayName = 'DataViewLayoutOptions';

DataViewItem.displayName = 'DataViewItem';

DataView.displayName = 'DataView';
