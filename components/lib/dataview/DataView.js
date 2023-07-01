import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { PrimeReactContext } from '../api/Api';
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
    const { ptm } = DataViewLayoutOptionsBase.setMetaData({
        props
    });

    const changeLayout = (event, layoutMode) => {
        props.onChange({
            originalEvent: event,
            value: layoutMode
        });
        event.preventDefault();
    };

    const className = classNames('p-dataview-layout-options p-selectbutton p-buttonset', props.className);
    const buttonListClass = classNames('p-button p-button-icon-only', { 'p-highlight': props.layout === 'list' });
    const buttonGridClass = classNames('p-button p-button-icon-only', { 'p-highlight': props.layout === 'grid' });
    const listIconProps = mergeProps(ptm('list'));
    const gridIconProps = mergeProps(ptm('grid'));
    const listIcon = IconUtils.getJSXIcon(props.listIcon || <BarsIcon {...listIconProps} />, { ...listIconProps }, { props });
    const gridIcon = IconUtils.getJSXIcon(props.gridIcon || <ThLargeIcon {...gridIconProps} />, { ...gridIconProps }, { props });
    const rootProps = mergeProps(
        {
            id: props.id,
            style: props.style,
            className
        },
        DataViewLayoutOptionsBase.getOtherProps(props),
        ptm('root')
    );

    const listButtonProps = mergeProps(
        {
            type: 'button',
            className: buttonListClass,
            onClick: (event) => changeLayout(event, 'list')
        },
        ptm('listButton')
    );

    const gridButtonProps = mergeProps(
        {
            type: 'button',
            className: buttonGridClass,
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
        const { ptm } = DataViewBase.setMetaData({
            props,
            state: {
                first: firstState,
                rows: rowsState
            }
        });
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

        const sort = () => {
            if (props.value) {
                const value = [...props.value];

                value.sort((data1, data2) => {
                    let value1 = ObjectUtils.resolveFieldData(data1, props.sortField);
                    let value2 = ObjectUtils.resolveFieldData(data2, props.sortField);

                    return ObjectUtils.sort(value1, value2, props.sortOrder, (context && context.locale) || PrimeReact.locale, (context && context.nullSortOrder) || PrimeReact.nullSortOrder);
                });

                return value;
            }

            return null;
        };

        const createLoader = () => {
            if (props.loading) {
                const iconClassName = 'p-dataview-loading-icon';
                const loadingIconProps = mergeProps(
                    {
                        className: iconClassName
                    },
                    ptm('loadingIcon')
                );
                const icon = props.loadingIcon || <SpinnerIcon {...loadingIconProps} spin />;
                const loadingIcon = IconUtils.getJSXIcon(icon, { ...loadingIconProps }, { props });
                const loadingOverlayProps = mergeProps(
                    {
                        className: 'p-dataview-loading-overlay p-component-overlay'
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
                        className: 'p-col-12 col-12 p-dataview-emptymessage'
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
                        className: 'p-dataview-header'
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
                        className: 'p-dataview-footer'
                    },
                    ptm('footer')
                );

                return <div {...footerProps}>{props.footer}</div>;
            }

            return null;
        };

        const createItems = (value) => {
            if (ObjectUtils.isNotEmpty(value)) {
                if (props.paginator) {
                    const currentFirst = props.lazy ? 0 : first;
                    const totalRecords = getTotalRecords();
                    const last = Math.min(rows + currentFirst, totalRecords);
                    let items = [];

                    for (let i = currentFirst; i < last; i++) {
                        const val = value[i];

                        val && items.push(<DataViewItem key={getItemRenderKey(value) || i} template={props.itemTemplate} layout={props.layout} item={val} />);
                    }

                    return items;
                }

                return value.map((item, index) => {
                    return <DataViewItem key={getItemRenderKey(item) || index} template={props.itemTemplate} layout={props.layout} item={item} />;
                });
            }

            return createEmptyMessage();
        };

        const createContent = (value) => {
            const items = createItems(value);
            const gridClassName = classNames('p-grid grid', {
                'p-nogutter grid-nogutter': !props.gutter
            });

            const gridProps = mergeProps(
                {
                    className: gridClassName
                },
                ptm('grid')
            );

            const contentProps = mergeProps(
                {
                    className: 'p-dataview-content'
                },
                ptm('content')
            );

            return (
                <div {...contentProps}>
                    <div {...gridProps}>{items}</div>
                </div>
            );
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

        const className = classNames(
            'p-dataview p-component',
            {
                [`p-dataview-${props.layout}`]: !!props.layout,
                'p-dataview-loading': props.loading
            },
            props.className
        );
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
                className
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
