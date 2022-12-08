import * as React from 'react';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { PickListItem } from './PickListItem';

export const PickListSubList = React.memo(
    React.forwardRef((props, ref) => {
        const listElementRef = React.useRef(null);

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
            if (props.header) {
                return <div className="p-picklist-header">{ObjectUtils.getJSXElement(props.header, props)}</div>;
            }

            return null;
        };

        const createItems = () => {
            if (props.list) {
                return props.list.map((item) => {
                    const key = JSON.stringify(item);
                    const selected = isSelected(item);

                    return <PickListItem key={key} value={item} template={props.itemTemplate} selected={selected} onClick={onItemClick} onKeyDown={onItemKeyDown} tabIndex={props.tabIndex} />;
                });
            }

            return null;
        };

        const createFilter = () => {
            if (props.showFilter) {
                let content = (
                    <div className="p-picklist-filter">
                        <input type="text" value={props.filterValue} onChange={onFilter} onKeyDown={onFilterInputKeyDown} placeholder={props.placeholder} className="p-picklist-filter-input p-inputtext p-component" />
                        <span className="p-picklist-filter-icon pi pi-search"></span>
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
                        iconClassName: 'p-picklist-filter-icon pi pi-search',
                        element: content,
                        props
                    };

                    content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
                }

                return <div className="p-picklist-filter-container">{content}</div>;
            }

            return null;
        };

        const createList = () => {
            const items = createItems();
            const className = classNames('p-picklist-list', props.listClassName);

            return (
                <ul className={className} style={props.style} role="listbox" aria-multiselectable>
                    {items}
                </ul>
            );
        };

        const className = classNames('p-picklist-list-wrapper', props.className);
        const header = createHeader();
        const filter = createFilter();
        const list = createList();

        return (
            <div ref={listElementRef} className={className}>
                {header}
                {filter}
                {list}
            </div>
        );
    })
);

PickListSubList.displayName = 'PickListSubList';
