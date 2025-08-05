import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Checkbox } from '../checkbox/Checkbox';
import { useMergeProps } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { SearchIcon } from '../icons/search';
import { TimesIcon } from '../icons/times';
import { InputText } from '../inputtext/InputText';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, ObjectUtils, UniqueComponentId } from '../utils/Utils';

export const MultiSelectHeader = React.memo((props) => {
    const mergeProps = useMergeProps();
    const { ptm, cx, isUnstyled } = props;
    const filterOptions = {
        filter: (e) => onFilter(e),
        reset: () => props.resetFilter()
    };

    const getPTOptions = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

    const onFilter = (event) => {
        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                query: event.target.value
            });
        }
    };

    const onToggleAll = (event) => {
        if (props.onSelectAll) {
            props.onSelectAll({
                originalEvent: event,
                checked: props.selectAll
            });
        } else {
            const value = props.isAllSelected() ? [] : props.visibleOptions.filter((option) => props.isValidOption(option)).map((option) => props.getOptionValue(option));

            props.updateModel(event, value, value);
        }
    };

    const createFilterElement = () => {
        const filterIconProps = mergeProps(
            {
                className: cx('filterIcon')
            },
            getPTOptions('filterIcon')
        );

        const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });

        if (props.filter) {
            const filterContainerProps = mergeProps(
                {
                    className: cx('filterContainer')
                },
                getPTOptions('filterContainer')
            );

            let content = (
                <div {...filterContainerProps}>
                    <InputText
                        ref={props.filterRef}
                        type="text"
                        role="searchbox"
                        value={props.filterValue}
                        onChange={onFilter}
                        onKeyDown={props.onFilterKeyDown}
                        className="p-multiselect-filter"
                        placeholder={props.filterPlaceholder}
                        pt={ptm('filterInput')}
                        unstyled={props.unstyled}
                        __parentMetadata={{ parent: props.metaData }}
                    />
                    {filterIcon}
                </div>
            );

            if (props.filterTemplate) {
                const defaultContentOptions = {
                    className: filterContainerProps.className,
                    element: content,
                    filterOptions: filterOptions,
                    onFilter: onFilter,
                    filterInputKeyDown: props.onFilterKeyDown,
                    filterIconClassName: props.filterIconClassName,
                    props
                };

                content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
            }

            return <>{content}</>;
        }

        return null;
    };

    const filterElement = createFilterElement();
    const selectAllId = props.id ? props.id + '_selectall' : UniqueComponentId();

    const headerSelectAllLabelProps = mergeProps(
        {
            htmlFor: selectAllId,
            className: cx('headerSelectAllLabel')
        },
        getPTOptions('headerSelectAllLabel')
    );

    const headerCheckboxIconProps = mergeProps(
        {
            className: cx('headerCheckboxIcon')
        },
        getPTOptions('headerCheckbox.icon')
    );

    const headerCheckboxContainerProps = mergeProps(
        {
            className: cx('headerCheckboxContainer')
        },
        getPTOptions('headerCheckboxContainer')
    );

    const checkedIcon = props.itemCheckboxIcon || <CheckIcon {...headerCheckboxIconProps} />;
    const itemCheckboxIcon = IconUtils.getJSXIcon(checkedIcon, { ...headerCheckboxIconProps }, { selected: props.selected });

    const checkboxElement = props.showSelectAll && (
        <div {...headerCheckboxContainerProps}>
            <Checkbox id={selectAllId} checked={props.selectAll} onChange={onToggleAll} role="checkbox" aria-checked={props.selectAll} icon={itemCheckboxIcon} pt={ptm('headerCheckbox')} unstyled={isUnstyled()} />
            {!props.filter && <label {...headerSelectAllLabelProps}>{props.selectAllLabel}</label>}
        </div>
    );

    const iconProps = mergeProps(
        {
            className: cx('closeIcon'),
            'aria-hidden': true
        },
        getPTOptions('closeIcon')
    );
    const icon = props.closeIcon || <TimesIcon {...iconProps} />;
    const closeIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

    const headerProps = mergeProps(
        {
            className: cx('header')
        },
        getPTOptions('header')
    );

    const closeButtonProps = mergeProps(
        {
            type: 'button',
            className: cx('closeButton'),
            'aria-label': ariaLabel('close'),
            onClick: props.onClose
        },
        getPTOptions('closeButton')
    );

    const closeElement = (
        <button {...closeButtonProps}>
            {closeIcon}
            <Ripple />
        </button>
    );

    const element = (
        <div {...headerProps}>
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
            onChange: onToggleAll,
            filterElement,
            closeElement,
            closeElementClassName: 'p-multiselect-close p-link',
            closeIconClassName: 'p-multiselect-close-icon',
            onCloseClick: props.onClose,
            element,
            itemCheckboxIcon,
            props
        };

        return ObjectUtils.getJSXElement(props.template, defaultOptions);
    }

    return element;
});

MultiSelectHeader.displayName = 'MultiSelectHeader';
