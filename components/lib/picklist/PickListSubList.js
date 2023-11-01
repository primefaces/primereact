import * as React from 'react';
import { SearchIcon } from '../icons/search';
import { DomHandler, IconUtils, ObjectUtils, classNames, useMergeProps } from '../utils/Utils';
import { PickListItem } from './PickListItem';

export const PickListSubList = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const listElementRef = React.useRef(null);
        const { ptm, cx } = props;

        const getPTOptions = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
        };

        const onItemClick = (event) => {
            let originalEvent = event.originalEvent;
            let item = event.value;
            let selection = [...props.selection];
            let index = ObjectUtils.findIndexInList(item, selection, props.dataKey);
            let selected = index !== -1;
            let metaSelection = props.metaKeySelection;

            if (metaSelection) {
                const metaKey = originalEvent.metaKey || originalEvent.ctrlKey;

                if (selected && metaKey) {
                    selection.splice(index, 1);
                } else {
                    if (!metaKey) {
                        selection.length = 0;
                    }

                    selection.push(item);
                }
            } else {
                if (selected) selection.splice(index, 1);
                else selection.push(item);
            }

            if (props.onSelectionChange) {
                props.onSelectionChange({
                    event: originalEvent,
                    value: selection
                });
            }
        };

        const onItemKeyDown = (event) => {
            const originalEvent = event.originalEvent;
            const listItem = originalEvent.currentTarget;

            switch (originalEvent.which) {
                //down
                case 40:
                    const nextItem = findNextItem(listItem);

                    nextItem && nextItem.focus();
                    originalEvent.preventDefault();
                    break;

                //up
                case 38:
                    const prevItem = findPrevItem(listItem);

                    prevItem && prevItem.focus();
                    originalEvent.preventDefault();
                    break;

                //enter
                case 13:
                    onItemClick(event);
                    originalEvent.preventDefault();
                    break;

                default:
                    break;
            }
        };

        const findNextItem = (item) => {
            const nextItem = item.nextElementSibling;

            return nextItem ? (!DomHandler.hasClass(nextItem, 'p-picklist-item') ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (!DomHandler.hasClass(prevItem, 'p-picklist-item') ? findPrevItem(prevItem) : prevItem) : null;
        };

        const isSelected = (item) => {
            return ObjectUtils.findIndexInList(item, props.selection, props.dataKey) !== -1;
        };

        const onFilter = (event) => {
            if (props.onFilter) {
                props.onFilter({
                    originalEvent: event,
                    value: event.target.value,
                    type: props.type
                });
            }
        };

        const onFilterInputKeyDown = (event) => {
            //enter
            if (event.which === 13) {
                event.preventDefault();
            }
        };

        React.useImperativeHandle(ref, () => ({
            listElementRef
        }));

        const createHeader = () => {
            const headerProps = mergeProps(
                {
                    className: cx('header')
                },
                getPTOptions('header')
            );

            if (props.header) {
                return <div {...headerProps}>{ObjectUtils.getJSXElement(props.header, props)}</div>;
            }

            return null;
        };

        const createItems = () => {
            if (props.list) {
                return props.list.map((item) => {
                    const key = JSON.stringify(item);
                    const selected = isSelected(item);

                    return <PickListItem hostName={props.hostName} key={key} value={item} template={props.itemTemplate} selected={selected} onClick={onItemClick} onKeyDown={onItemKeyDown} tabIndex={props.tabIndex} ptm={ptm} cx={cx} />;
                });
            }

            return null;
        };

        const createFilter = () => {
            const iconClassName = 'p-picklist-filter-icon';
            const filterIconProps = mergeProps(
                {
                    className: cx('filterIcon')
                },
                getPTOptions('filterIcon')
            );
            const icon = props.type === 'source' ? props.sourceFilterIcon || <SearchIcon {...filterIconProps} /> : props.targetFilterIcon || <SearchIcon {...filterIconProps} />;
            const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });

            if (props.showFilter) {
                const filterProps = mergeProps(
                    {
                        className: cx('filter')
                    },
                    getPTOptions('filter')
                );

                const filterInputProps = mergeProps(
                    {
                        type: 'text',
                        value: props.filterValue,
                        onChange: onFilter,
                        onKeyDown: onFilterInputKeyDown,
                        placeholder: props.placeholder,
                        className: cx('filterInput')
                    },
                    getPTOptions('filterInput')
                );

                let content = (
                    <div {...filterProps}>
                        <input {...filterInputProps} />
                        <span> {filterIcon} </span>
                    </div>
                );

                if (props.filterTemplate) {
                    const defaultContentOptions = {
                        className: 'p-picklist-filter',
                        inputProps: {
                            className: 'p-picklist-filter-input p-inputtext p-component',
                            onChange: onFilter,
                            onKeyDown: onFilterInputKeyDown
                        },
                        iconClassName,
                        element: content,
                        props
                    };

                    content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
                }

                const filterContainerProps = mergeProps(
                    {
                        className: cx('filterContainer')
                    },
                    getPTOptions('filterContainer')
                );

                return <div {...filterContainerProps}>{content}</div>;
            }

            return null;
        };

        const createList = () => {
            const items = createItems();

            const listProps = mergeProps(
                {
                    className: classNames(props.listClassName, cx('list')),
                    role: 'listbox',
                    'aria-multiselectable': true,
                    style: props.style
                },
                getPTOptions('list')
            );

            return <ul {...listProps}>{items}</ul>;
        };

        const header = createHeader();
        const filter = createFilter();
        const list = createList();

        const listWrapperProps = mergeProps(
            {
                className: classNames(props.className, cx('listWrapper')),
                ref: listElementRef
            },
            getPTOptions('listWrapper')
        );

        return (
            <div {...listWrapperProps}>
                {header}
                {filter}
                {list}
            </div>
        );
    })
);

PickListSubList.displayName = 'PickListSubList';
