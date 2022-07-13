import * as React from 'react';
import { Checkbox } from '../checkbox/Checkbox';
import { InputText } from '../inputtext/InputText';
import { Ripple } from '../ripple/Ripple';
import { ObjectUtils } from '../utils/Utils';

export const MultiSelectHeader = React.memo((props) => {

    const onFilter = (event) => {
        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                query: event.target.value
            });
        }
    }

    const onSelectAll = (event) => {
        if (props.onSelectAll) {
            props.onSelectAll({
                originalEvent: event,
                checked: props.selectAll
            });
        }

        event.preventDefault();
    }

    const createFilterElement = () => {
        if (props.filter) {
            return (
                <div className="p-multiselect-filter-container">
                    <InputText type="text" role="textbox" value={props.filterValue} onChange={onFilter}
                        className="p-multiselect-filter" placeholder={props.filterPlaceholder} />
                    <span className="p-multiselect-filter-icon pi pi-search"></span>
                </div>
            )
        }

        return null;
    }

    const filterElement = createFilterElement();
    const checkboxElement = props.showSelectAll && <Checkbox checked={props.selectAll} onChange={onSelectAll} role="checkbox" aria-checked={props.selectAll} />;
    const closeElement = (
        <button type="button" className="p-multiselect-close p-link" onClick={props.onClose}>
            <span className="p-multiselect-close-icon pi pi-times"></span>
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
        }

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

MultiSelectHeader.displayName = 'MultiSelectHeader';
