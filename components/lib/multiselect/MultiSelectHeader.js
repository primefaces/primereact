import * as React from 'react';
import { localeOption } from '../api/Api';
import { Checkbox } from '../checkbox/Checkbox';
import { CheckIcon } from '../icons/check';
import { SearchIcon } from '../icons/search';
import { TimesIcon } from '../icons/times';
import { InputText } from '../inputtext/InputText';
import { Ripple } from '../ripple/Ripple';
import { PrimeReactContext } from '../api/Api';
import { IconUtils, ObjectUtils, UniqueComponentId, mergeProps } from '../utils/Utils';

export const MultiSelectHeader = React.memo((props) => {
    const { ptm, cx, isUnstyled } = props;
    const context = React.useContext(PrimeReactContext);
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

    const onSelectAll = (event) => {
        if (props.onSelectAll) {
            props.onSelectAll({
                originalEvent: event,
                checked: props.selectAll
            });
        }

        event.preventDefault();
        event.stopPropagation();
    };

    const createFilterElement = () => {
        const filterIconProps = mergeProps(
            [
                {
                    className: cx('filterIcon')
                },
                getPTOptions('filterIcon')
            ],
            { useTailwind: context.useTailwind }
        );

        const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });

        if (props.filter) {
            const filterContainerProps = mergeProps(
                [
                    {
                        className: cx('filterContainer')
                    },
                    getPTOptions('filterContainer')
                ],
                { useTailwind: context.useTailwind }
            );

            let content = (
                <div {...filterContainerProps}>
                    <InputText
                        ref={props.filterRef}
                        type="text"
                        role="textbox"
                        value={props.filterValue}
                        onChange={onFilter}
                        className="p-multiselect-filter"
                        placeholder={props.filterPlaceholder}
                        pt={ptm('filterInput')}
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
        [
            {
                htmlFor: selectAllId,
                className: cx('headerSelectAllLabel')
            },
            getPTOptions('headerSelectAllLabel')
        ],
        { useTailwind: context.useTailwind }
    );

    const headerCheckboxIconProps = mergeProps(
        [
            {
                className: cx('headerCheckboxIcon')
            },
            getPTOptions('headerCheckboxIcon')
        ],
        { useTailwind: context.useTailwind }
    );

    const checkedIcon = props.itemCheckboxIcon || <CheckIcon {...headerCheckboxIconProps} />;
    const itemCheckboxIcon = IconUtils.getJSXIcon(checkedIcon, { ...headerCheckboxIconProps }, { selected: props.selected });

    const checkboxElement = props.showSelectAll && (
        <div className="p-multiselect-select-all">
            <Checkbox id={selectAllId} checked={props.selectAll} onChange={onSelectAll} role="checkbox" aria-checked={props.selectAll} icon={itemCheckboxIcon} pt={ptm('headercheckbox')} unstyled={isUnstyled()} />
            {!props.filter && <label {...headerSelectAllLabelProps}>{props.selectAllLabel}</label>}
        </div>
    );

    const iconProps = mergeProps(
        [
            {
                className: cx('closeIcon'),
                'aria-hidden': true
            },
            getPTOptions('closeIcon')
        ],
        { useTailwind: context.useTailwind }
    );
    const icon = props.closeIcon || <TimesIcon {...iconProps} />;
    const closeIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

    const headerProps = mergeProps(
        [
            {
                className: cx('header')
            },
            getPTOptions('header')
        ],
        { useTailwind: context.useTailwind }
    );

    const closeButtonProps = mergeProps(
        [
            {
                type: 'button',
                className: cx('closeButton'),
                'aria-label': localeOption('close'),
                onClick: props.onClose
            },
            getPTOptions('closeButton')
        ],
        { useTailwind: context.useTailwind }
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
            onChange: onSelectAll,
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
