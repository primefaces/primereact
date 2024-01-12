import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { SearchIcon } from '../icons/search';
import { IconUtils, ObjectUtils, classNames } from '../utils/Utils';
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
            getElement: () => listElementRef.current
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
                return props.list.map((item, index) => {
                    const key = props.parentId + '_' + index;
                    const selected = isSelected(item);

                    return (
                        <PickListItem
                            hostName={props.hostName}
                            key={key}
                            id={key}
                            index={index}
                            focused={key === props.focusedOptionId}
                            value={item}
                            template={props.itemTemplate}
                            selected={selected}
                            onClick={props.onItemClick}
                            onKeyDown={props.onItemKeyDown}
                            onMouseDown={(event) => props.onOptionMouseDown({ ...event, index, type: props.type })}
                            ptm={ptm}
                            cx={cx}
                        />
                    );
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
                    ref: listElementRef,
                    className: classNames(props.listClassName, cx('list')),
                    role: 'listbox',
                    id: props.parentId + '_' + props.type + '_list',
                    'aria-multiselectable': true,
                    'aria-activedescendant': props.ariaActivedescendant,
                    tabIndex: props.list && props.list.length > 0 ? props.tabIndex : -1,
                    onKeyDown: props.onListKeyDown,
                    onFocus: (event) => {
                        props.onListFocus(event, props.type);
                    },
                    onBlur: props.onListBlur,
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
                className: classNames(props.className, cx('listWrapper'))
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
