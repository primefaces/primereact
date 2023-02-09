import * as React from 'react';
import { localeOption } from '../api/Api';
import { Checkbox } from '../checkbox/Checkbox';
import { InputText } from '../inputtext/InputText';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';

export const MultiSelectHeader = React.memo((props) => {
    const filterOptions = {
        filter: (e) => onFilter(e),
        reset: () => props.resetFilter()
    };

    const onFilter = (event) => {
        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                query: event.target.value
            });
        }
    };

    const onSelectAll = (event) => {
        if (props.onSelectAll) {
            props.onSelectAll({
                originalEvent: event,
                checked: props.selectAll
            });
        }

        event.preventDefault();
    };

    const createFilterElement = () => {
        if (props.filter) {
            const containerClassName = classNames('p-multiselect-filter-container');
            let content = (
                <div className={containerClassName}>
                    <InputText ref={props.filterRef} type="text" role="textbox" value={props.filterValue} onChange={onFilter} className="p-multiselect-filter" placeholder={props.filterPlaceholder} />
                    <span className="p-multiselect-filter-icon pi pi-search"></span>
                </div>
            );

            if (props.filterTemplate) {
                const defaultContentOptions = {
                    className: containerClassName,
                    element: content,
                    filterOptions: filterOptions,
                    onFilter: onFilter,
                    filterIconClassName: 'p-multeselect-filter-icon pi pi-search',
                    props
                };

                content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
            }

            return <>{content}</>;
        }

        return null;
    };

    const filterElement = createFilterElement();
    const checkboxElement = props.showSelectAll && <Checkbox checked={props.selectAll} onChange={onSelectAll} role="checkbox" aria-checked={props.selectAll} />;
    const closeElement = (
        <button type="button" className="p-multiselect-close p-link" aria-label={localeOption('close')} onClick={props.onClose}>
            <span className="p-multiselect-close-icon pi pi-times" aria-hidden="true"></span>
            <Ripple />
        </button>
    );
    const element = (
        <div className="p-multiselect-header">
            {checkboxElement}
            {filterElement}
            {closeElement}
        </div>
    );

    if (props.template) {
        const defaultOptions = {
            className: 'p-multiselect-header',
            checkboxElement,
            checked: props.selectAll,
            onChange: onSelectAll,
            filterElement,
            closeElement,
            closeElementClassName: 'p-multiselect-close p-link',
            closeIconClassName: 'p-multiselect-close-icon pi pi-times',
            onCloseClick: props.onClose,
            element,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

MultiSelectHeader.displayName = 'MultiSelectHeader';
