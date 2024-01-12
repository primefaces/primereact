import * as React from 'react';
import { useMergeProps } from '../hooks/Hooks';
import { SearchIcon } from '../icons/search';
import { InputText } from '../inputtext/InputText';
import { IconUtils, ObjectUtils } from '../utils/Utils';

export const ListBoxHeader = React.memo((props) => {
    const mergeProps = useMergeProps();
    const {
        ptCallbacks: { ptm, cx }
    } = props;

    const getPTOptions = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

    const filterOptions = {
        filter: (e) => onFilter(e),
        reset: () => props.resetFilter()
    };

    const onFilter = (event) => {
        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                value: event.target.value
            });
        }
    };

    const createHeader = () => {
        const filterIconProps = mergeProps(
            {
                className: cx('filterIcon')
            },
            getPTOptions('filterIcon')
        );

        const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });

        const headerProps = mergeProps(
            {
                className: cx('header')
            },
            getPTOptions('header')
        );

        const filterContainerProps = mergeProps(
            {
                className: cx('filterContainer')
            },
            getPTOptions('filterContainer')
        );

        let content = (
            <div {...filterContainerProps}>
                <InputText
                    type="text"
                    value={props.filter}
                    onChange={onFilter}
                    className={cx('filterInput')}
                    disabled={props.disabled}
                    placeholder={props.filterPlaceholder}
                    {...props.filterInputProps}
                    pt={ptm('filterInput')}
                    unstyled={props.unstyled}
                    __parentMetadata={{ parent: props.metaData }}
                />
                {filterIcon}
            </div>
        );

        if (props.filterTemplate) {
            const defaultContentOptions = {
                className: 'p-listbox-filter-container',
                element: content,
                filterOptions: filterOptions,
                filterInputChange: onFilter,
                filterIconClassName: 'p-dropdown-filter-icon',
                props
            };

            content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
        }

        return <div {...headerProps}>{content}</div>;
    };

    const content = createHeader();

    return <>{content}</>;
});

ListBoxHeader.displayName = 'ListBoxHeader';
